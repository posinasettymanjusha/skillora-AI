import { useState, useMemo } from 'react';
import {
  CheckCircle2, XCircle, AlertCircle, RotateCcw, Trophy, ArrowRight,
  Clock, Award, TrendingUp, TrendingDown, Lightbulb,
} from 'lucide-react';
import { useStudent } from '@/context/StudentContext';
import { getQuizQuestions } from '@/data/quizQuestions';
import { calculateMastery, PASSING_SCORE, MASTERY_THRESHOLDS } from '@/utils/progress';
import { Badge, ProgressBar } from '@/components/ui';
import type { QuizQuestion, RoadmapTopic, QuizAttempt, ConfidenceRating } from '@/types';

interface QuizComponentProps {
  topic: RoadmapTopic;
  onComplete: () => void;
  onClose: () => void;
}

type QuizState = 'intro' | 'in-progress' | 'results';

export default function QuizComponent({ topic, onComplete, onClose }: QuizComponentProps) {
  const { profile, recordQuizAttempt } = useStudent();
  const [state, setState] = useState<QuizState>('intro');
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [showExplanation, setShowExplanation] = useState(false);

  // Get previous attempts for this topic
  const previousAttempts = useMemo(() => {
    if (!profile) return [];
    return profile.topicProgress[topic.id]?.quizAttempts || [];
  }, [profile, topic.id]);

  const startQuiz = () => {
    // Exclude questions from the most recent attempt to provide variety
    const excludeIds = previousAttempts.length > 0
      ? previousAttempts[previousAttempts.length - 1].answers.map((a) => a.questionId)
      : [];
    const qs = getQuizQuestions(topic.id, excludeIds, 5);
    setQuestions(qs);
    setAnswers({});
    setCurrentIdx(0);
    setShowExplanation(false);
    setState('in-progress');
  };

  const handleAnswer = (questionId: string, answer: string | string[]) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
    setShowExplanation(true);
  };

  const nextQuestion = () => {
    setShowExplanation(false);
    if (currentIdx < questions.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      finishQuiz();
    }
  };

  const finishQuiz = () => {
    if (!profile) return;
    let correctCount = 0;
    const answerRecords: { questionId: string; selectedAnswer: string | string[]; isCorrect: boolean }[] = [];
    const weakSubtopicIds: string[] = [];
    const strongSubtopicIds: string[] = [];
    const subtopicStats: Record<string, { correct: number; total: number }> = {};

    for (const q of questions) {
      const userAnswer = answers[q.id];
      const isCorrect = checkAnswer(q, userAnswer);
      if (isCorrect) correctCount++;

      answerRecords.push({ questionId: q.id, selectedAnswer: userAnswer || '', isCorrect });

      if (!subtopicStats[q.subtopicId]) subtopicStats[q.subtopicId] = { correct: 0, total: 0 };
      subtopicStats[q.subtopicId].total++;
      if (isCorrect) subtopicStats[q.subtopicId].correct++;
    }

    for (const [subtopicId, stats] of Object.entries(subtopicStats)) {
      const ratio = stats.correct / stats.total;
      if (ratio < 0.6) weakSubtopicIds.push(subtopicId);
      else strongSubtopicIds.push(subtopicId);
    }

    const score = Math.round((correctCount / questions.length) * 100);

    recordQuizAttempt(topic.id, {
      score,
      totalQuestions: questions.length,
      correctAnswers: correctCount,
      answers: answerRecords,
      weakSubtopicIds,
      strongSubtopicIds,
    });

    setState('results');
  };

  // ── INTRO SCREEN ──
  if (state === 'intro') {
    return (
      <div className="space-y-4">
        <div className="rounded-xl bg-brand-500/10 p-4">
          <div className="flex items-center gap-2 text-brand-700">
            <Award className="h-5 w-5" />
            <span className="font-semibold">Knowledge Quiz: {topic.name}</span>
          </div>
          <p className="mt-2 text-sm text-ink-600">
            Test your understanding of {topic.name}. The quiz contains {Math.min(5, getQuizQuestions(topic.id).length)} questions
            covering the key subtopics. You need {PASSING_SCORE}% to pass.
          </p>
        </div>

        {previousAttempts.length > 0 && (
          <div className="rounded-xl border border-ink-300/60 p-4">
            <h4 className="text-sm font-semibold text-ink-700">Previous Attempts</h4>
            <div className="mt-2 space-y-2">
              {previousAttempts.slice(-3).reverse().map((attempt, i) => (
                <div key={attempt.id} className="flex items-center justify-between text-sm">
                  <span className="text-ink-600">
                    Attempt {previousAttempts.length - i}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className={`font-semibold ${attempt.score >= PASSING_SCORE ? 'text-accent-700' : 'text-rose-400'}`}>
                      {attempt.score}%
                    </span>
                    <Badge variant={attempt.score >= MASTERY_THRESHOLDS.STRONG ? 'success' : attempt.score >= PASSING_SCORE ? 'info' : 'danger'}>
                      {calculateMastery(attempt.score)}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex gap-2">
          <button onClick={startQuiz} className="btn-primary flex-1">
            {previousAttempts.length > 0 ? 'Retake Quiz' : 'Start Quiz'}
            <ArrowRight className="h-4 w-4" />
          </button>
          <button onClick={onClose} className="btn-secondary">Cancel</button>
        </div>
      </div>
    );
  }

  // ── QUIZ IN PROGRESS ──
  if (state === 'in-progress' && questions.length > 0) {
    const q = questions[currentIdx];
    const userAnswer = answers[q.id];
    const hasAnswered = userAnswer !== undefined;
    const isCorrect = hasAnswered && checkAnswer(q, userAnswer);

    return (
      <div className="space-y-4">
        {/* Progress indicator */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-ink-500">
            Question {currentIdx + 1} of {questions.length}
          </span>
          <Badge variant="info">{topic.name}</Badge>
        </div>
        <ProgressBar value={((currentIdx + (hasAnswered ? 1 : 0)) / questions.length) * 100} size="sm" />

        {/* Question */}
        <div className="rounded-xl border border-ink-300/60 p-4">
          <div className="mb-3 flex items-start gap-2">
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/15 text-xs font-bold text-brand-700">
              {currentIdx + 1}
            </span>
            <p className="font-medium text-ink-900">{q.question}</p>
          </div>

          {/* Answer options */}
          <div className="space-y-2">
            {q.type === 'multiple-choice' && q.options && (
              q.options.map((option, i) => {
                const isSelected = userAnswer === option;
                const showCorrect = hasAnswered && option === q.correctAnswer;
                const showWrong = hasAnswered && isSelected && !isCorrect;
                return (
                  <button
                    key={i}
                    onClick={() => !hasAnswered && handleAnswer(q.id, option)}
                    disabled={hasAnswered}
                    className={`flex w-full items-center gap-2 rounded-lg border p-3 text-left text-sm transition ${
                      showCorrect ? 'border-accent-300 bg-accent-500/10 text-accent-800' :
                      showWrong ? 'border-rose-300 bg-rose-500/10 text-rose-800' :
                      isSelected ? 'border-brand-500/30 bg-brand-500/10' :
                      'border-ink-300/60 hover:border-brand-500/20 hover:bg-brand-500/30'
                    } ${hasAnswered ? 'cursor-default' : 'cursor-pointer'}`}
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-xs font-semibold">
                      {String.fromCharCode(65 + i)}
                    </span>
                    <span className="flex-1">{option}</span>
                    {showCorrect && <CheckCircle2 className="h-4 w-4 text-accent-700" />}
                    {showWrong && <XCircle className="h-4 w-4 text-rose-400" />}
                  </button>
                );
              })
            )}

            {q.type === 'true-false' && (
              <>
                {['True', 'False'].map((option) => {
                  const isSelected = userAnswer === option;
                  const showCorrect = hasAnswered && option === q.correctAnswer;
                  const showWrong = hasAnswered && isSelected && !isCorrect;
                  return (
                    <button
                      key={option}
                      onClick={() => !hasAnswered && handleAnswer(q.id, option)}
                      disabled={hasAnswered}
                      className={`flex w-full items-center gap-2 rounded-lg border p-3 text-left text-sm transition ${
                        showCorrect ? 'border-accent-300 bg-accent-500/10 text-accent-800' :
                        showWrong ? 'border-rose-300 bg-rose-500/10 text-rose-800' :
                        isSelected ? 'border-brand-500/30 bg-brand-500/10' :
                        'border-ink-300/60 hover:border-brand-500/20 hover:bg-brand-500/30'
                      } ${hasAnswered ? 'cursor-default' : 'cursor-pointer'}`}
                    >
                      <span className="flex-1">{option}</span>
                      {showCorrect && <CheckCircle2 className="h-4 w-4 text-accent-700" />}
                      {showWrong && <XCircle className="h-4 w-4 text-rose-400" />}
                    </button>
                  );
                })}
              </>
            )}

            {q.type === 'short-answer' && (
              <input
                type="text"
                value={userAnswer as string || ''}
                onChange={(e) => setAnswers((prev) => ({ ...prev, [q.id]: e.target.value }))}
                onBlur={() => !hasAnswered && userAnswer && handleAnswer(q.id, userAnswer as string)}
                placeholder="Type your answer..."
                disabled={hasAnswered}
                className="input"
              />
            )}
          </div>

          {/* Explanation */}
          {showExplanation && hasAnswered && (
            <div className={`mt-4 rounded-lg p-3 text-sm ${isCorrect ? 'bg-accent-500/10 text-accent-800' : 'bg-rose-500/10 text-rose-800'}`}>
              <div className="flex items-start gap-2">
                {isCorrect ? <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" /> : <XCircle className="mt-0.5 h-4 w-4 shrink-0" />}
                <div>
                  <p className="font-semibold">{isCorrect ? 'Correct!' : 'Incorrect'}</p>
                  {!isCorrect && q.type !== 'short-answer' && (
                    <p className="mt-1 text-ink-600">The correct answer is: <strong>{q.correctAnswer}</strong></p>
                  )}
                  <p className="mt-1 text-ink-600">{q.explanation}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Next button */}
        {hasAnswered && (
          <button onClick={nextQuestion} className="btn-primary w-full">
            {currentIdx < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
            <ArrowRight className="h-4 w-4" />
          </button>
        )}
      </div>
    );
  }

  // ── RESULTS SCREEN ──
  if (state === 'results') {
    const correctCount = answers
      ? questions.filter((q) => checkAnswer(q, answers[q.id])).length
      : 0;
    const score = Math.round((correctCount / questions.length) * 100);
    const mastery = calculateMastery(score);
    const passed = score >= PASSING_SCORE;
    const firstAttempt = previousAttempts.length === 0;
    const improvement = previousAttempts.length > 0
      ? score - previousAttempts[previousAttempts.length - 1].score
      : null;

    // Identify weak subtopics
    const weakSubtopics = topic.subtopics.filter((s) => {
      const subtopicQs = questions.filter((q) => q.subtopicId === s.id);
      if (subtopicQs.length === 0) return false;
      const correct = subtopicQs.filter((q) => checkAnswer(q, answers[q.id])).length;
      return correct / subtopicQs.length < 0.6;
    });

    return (
      <div className="space-y-4">
        {/* Score display */}
        <div className={`rounded-xl p-6 text-center ${passed ? 'bg-accent-500/10' : 'bg-rose-500/10'}`}>
          <div className={`mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full ${passed ? 'bg-accent-500/15' : 'bg-rose-500/15'}`}>
            {passed ? <Trophy className="h-8 w-8 text-accent-700" /> : <AlertCircle className="h-8 w-8 text-rose-400" />}
          </div>
          <p className="font-display text-3xl font-bold text-ink-900">{score}%</p>
          <p className="mt-1 text-sm text-ink-600">
            {correctCount} out of {questions.length} correct
          </p>
          <div className="mt-3 flex items-center justify-center gap-2">
            <Badge variant={passed ? 'success' : 'danger'}>{mastery}</Badge>
            {passed ? <Badge variant="success">Passed</Badge> : <Badge variant="danger">Below passing ({PASSING_SCORE}%)</Badge>}
          </div>
          {improvement !== null && (
            <p className={`mt-2 flex items-center justify-center gap-1 text-sm ${improvement >= 0 ? 'text-accent-700' : 'text-rose-400'}`}>
              {improvement >= 0 ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
              {improvement >= 0 ? '+' : ''}{improvement}% from last attempt
            </p>
          )}
        </div>

        {/* Weak areas */}
        {weakSubtopics.length > 0 && (
          <div className="rounded-xl border border-amber-500/20 bg-amber-500/50 p-4">
            <div className="flex items-center gap-2 text-amber-400">
              <Lightbulb className="h-4 w-4" />
              <span className="text-sm font-semibold">Areas to Improve</span>
            </div>
            <div className="mt-2 space-y-1">
              {weakSubtopics.map((s) => (
                <div key={s.id} className="flex items-center gap-2 text-sm text-ink-600">
                  <AlertCircle className="h-3.5 w-3.5 text-amber-400" />
                  {s.name}
                </div>
              ))}
            </div>
            <p className="mt-2 text-xs text-ink-500">
              Review these subtopics and try the practice exercises before retaking the quiz.
            </p>
          </div>
        )}

        {/* Strong areas */}
        {passed && weakSubtopics.length < topic.subtopics.length && (
          <div className="rounded-xl border border-accent-500/20 bg-accent-500/50 p-4">
            <div className="flex items-center gap-2 text-accent-700">
              <CheckCircle2 className="h-4 w-4" />
              <span className="text-sm font-semibold">Great work!</span>
            </div>
            <p className="mt-1 text-sm text-ink-600">
              You've demonstrated strong understanding of {topic.name}. {mastery === 'Mastered' ? 'You\'ve mastered this topic!' : 'Keep practicing to reach mastery.'}
            </p>
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-2">
          <button onClick={startQuiz} className="btn-secondary flex-1">
            <RotateCcw className="h-4 w-4" /> Retake Quiz
          </button>
          <button onClick={onComplete} className="btn-primary flex-1">
            Done <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    );
  }

  return null;
}

// ── Helper: check if an answer is correct ──
function checkAnswer(question: QuizQuestion, userAnswer: string | string[] | undefined): boolean {
  if (userAnswer === undefined || userAnswer === '') return false;
  if (question.type === 'short-answer') {
    return (userAnswer as string).toLowerCase().trim() === (question.correctAnswer as string).toLowerCase().trim();
  }
  if (question.type === 'multiple-select') {
    const correct = question.correctAnswer as string[];
    const user = userAnswer as string[];
    return correct.length === user.length && correct.every((a) => user.includes(a));
  }
  return userAnswer === question.correctAnswer;
}
