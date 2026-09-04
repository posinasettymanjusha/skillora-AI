import type { StudentProfile, ChatMessage } from '@/types';
import { getCareerRole } from '@/data/careers';
import { getRoadmap } from '@/data/roadmaps';
import { CERTIFICATIONS, RESOURCES } from '@/data/resources';
import {
  getSkillLevel,
  analyzeSkillGap,
  getSkillGapSummary,
  getRoadmapProgress,
  getRecommendedResources,
  getRecommendedCertifications,
} from './personalization';

interface Intent {
  match: (q: string) => boolean;
  respond: (profile: StudentProfile) => string;
}

const normalize = (q: string) => q.toLowerCase().trim();

const intents: Intent[] = [
  {
    match: (q) => /what should i learn next|what.*learn next|next step|what's next|what now/.test(q),
    respond: (profile) => {
      const { currentPhase, nextPhase } = getRoadmapProgress(profile);
      const role = getCareerRole(profile.targetRoleId);
      if (!role) return 'Please select a target career role first, and I can guide you on what to learn next.';
      if (currentPhase) {
        const summary = getSkillGapSummary(profile);
        const skillLevel = getSkillLevel(profile, currentPhase.skill);
        return `Based on your ${role.title} roadmap, you are currently on "${currentPhase.title}" (Phase ${currentPhase.phase}). Your ${currentPhase.skill} level is ${skillLevel}. ${summary.nextSkill ? `Your next priority should be ${summary.nextSkill.skill}. ` : ''}Focus on completing the resources for this phase — I've curated ${currentPhase.resourceIds.length} resources that match your current level. Once you complete this phase, you'll unlock "${nextPhase?.title || 'the next phase'}".`;
      }
      return `Great progress! You've completed all the phases in your ${role.title} roadmap. Consider building a capstone project or earning an advanced certification to strengthen your portfolio.`;
    },
  },
  {
    match: (q) => /completed.*python|finished.*python|done.*python|completed.*javascript|finished.*javascript/i.test(q),
    respond: (profile) => {
      const role = getCareerRole(profile.targetRoleId);
      const { currentPhase, nextPhase } = getRoadmapProgress(profile);
      if (!role) return 'Congratulations on completing that! Select a target role and I can tell you exactly what to tackle next.';
      const completedSkill = profile.skills.find((s) => s.level === 'Advanced' || s.level === 'Intermediate');
      return `Excellent work completing ${completedSkill?.name || 'that skill'}! That's a big milestone on your ${role.title} path. ${nextPhase ? `Your next step is "${nextPhase.title}" (Phase ${nextPhase.phase}), which focuses on ${nextPhase.skill}. ${nextPhase.description} You should be able to complete this in about ${nextPhase.estimatedHours} hours.` : 'You are near the end of your roadmap — focus on projects and portfolio building now.'} ${currentPhase ? `You're currently on "${currentPhase.title}".` : ''}`;
    },
  },
  {
    match: (q) => /why.*learn.*dsa|why.*dsa|why.*data structures|importance.*dsa|why.*algorithms/.test(q),
    respond: (profile) => {
      const role = getCareerRole(profile.targetRoleId);
      const gaps = analyzeSkillGap(profile);
      const dsaGap = gaps.find((g) => g.skill === 'Data Structures' || g.skill === 'Algorithms');
      if (!role) return 'DSA (Data Structures and Algorithms) is the backbone of software engineering. It teaches you how to think about problems efficiently — a skill that every tech company tests in interviews.';
      if (dsaGap) {
        return `DSA is ${dsaGap.priority.toLowerCase()} priority for your target role of ${role.title}. ${dsaGap.importance}. Your current DSA level is ${dsaGap.currentLevel} and you need ${dsaGap.requiredLevel}. ${dsaGap.status === 'Missing' ? 'You haven\'t started yet, so I recommend beginning with basic arrays and linked lists.' : `You're at ${dsaGap.currentLevel} — focus on reaching ${dsaGap.requiredLevel} by practicing on platforms like NeetCode and LeetCode.`} DSA also sharpens your problem-solving speed, which directly helps in technical interviews.`;
      }
      return `For your target role of ${role.title}, DSA helps you write efficient code and clear technical interviews. You already have strong DSA skills, so focus on applying them to ${role.title}-specific problems.`;
    },
  },
  {
    match: (q) => /ready.*machine learning|start.*machine learning|begin.*ml|can i start ml|am i ready.*ml/.test(q),
    respond: (profile) => {
      const role = getCareerRole(profile.targetRoleId);
      const pythonLevel = getSkillLevel(profile, 'Python');
      const statLevel = getSkillLevel(profile, 'Statistics');
      const mlLevel = getSkillLevel(profile, 'Machine Learning');
      const dsaLevel = getSkillLevel(profile, 'Data Structures');

      let ready = true;
      const blockers: string[] = [];
      if (LEVEL_ORDER[pythonLevel] < 2) {
        ready = false;
        blockers.push(`Python (currently ${pythonLevel}, needs Intermediate)`);
      }
      if (LEVEL_ORDER[statLevel] < 1) {
        ready = false;
        blockers.push(`Statistics (currently ${statLevel}, needs Beginner)`);
      }

      if (ready) {
        return `Yes, you're ready to start Machine Learning! Your Python is at ${pythonLevel} and your Statistics is at ${statLevel}, which gives you the foundation you need. ${role ? `Since your target role is ${role.title}, ML is a core skill.` : ''} I recommend starting with Andrew Ng's Machine Learning Specialization on Coursera — it's free and perfect for your level. Your current ML level is ${mlLevel}, so this will build on what you already know.`;
      }
      return `Not quite yet. Before starting Machine Learning, you should strengthen: ${blockers.join(' and ')}. ${dsaLevel !== 'Not Started' ? `Your DSA is at ${dsaLevel}, which is good.` : ''} I recommend completing the Python and Statistics phases of your roadmap first — this will make ML much easier to understand. Once those are done, you'll be fully ready to dive into ML.`;
    },
  },
  {
    match: (q) => /free.*certification|certification.*free|suggest.*certif|recommend.*certif|which cert/.test(q),
    respond: (profile) => {
      const certs = getRecommendedCertifications(profile, 3);
      const role = getCareerRole(profile.targetRoleId);
      if (certs.length === 0) return 'Once you select a target role, I can recommend free certifications tailored to your path.';
      const freeCerts = certs.filter((c) => c.free);
      if (freeCerts.length === 0) return `For your ${role?.title || 'target'} path, I recommend: ${certs.map((c) => c.name).join(', ')}. Note that these may have a fee — check the provider for current pricing.`;
      return `Based on your ${role?.title || 'target'} roadmap and current progress, here are ${freeCerts.length} free certifications I recommend: ${freeCerts.map((c, i) => `${i + 1}. ${c.name} by ${c.provider} (${c.duration})`).join(' ')}. ${freeCerts[0] ? `I'd start with "${freeCerts[0].name}" — it aligns with your current roadmap phase and will strengthen your profile.` : ''}`;
    },
  },
  {
    match: (q) => /complete.*roadmap.*6 months|finish.*roadmap|how long.*roadmap|timeline|6 months|can i.*6 months|complete.*months/.test(q),
    respond: (profile) => {
      const { phases, overallProgress } = getRoadmapProgress(profile);
      const role = getCareerRole(profile.targetRoleId);
      if (!role || phases.length === 0) return 'Select a target role and I can estimate your timeline.';
      const remainingPhases = phases.filter((p) => p.status !== 'Completed');
      const totalHours = remainingPhases.reduce((sum, p) => sum + p.estimatedHours, 0);
      const hoursPerWeek = profile.hoursPerWeek || 10;
      const weeksNeeded = Math.ceil(totalHours / hoursPerWeek);
      const monthsNeeded = Math.ceil(weeksNeeded / 4);
      const feasible = monthsNeeded <= 6;
      return `Your ${role.title} roadmap has ${remainingPhases.length} phases remaining, totaling about ${totalHours} hours of learning. At your current pace of ${hoursPerWeek} hours/week, you'd need approximately ${weeksNeeded} weeks (${monthsNeeded} months) to complete it. ${feasible ? `Yes, you can finish in 6 months! Stay consistent and mark phases as you complete them.` : `To finish in 6 months, you'd need to increase to about ${Math.ceil(totalHours / 24)} hours/week. Alternatively, you could extend your timeline to ${monthsNeeded} months for a more sustainable pace.`} You're currently ${overallProgress}% through the roadmap.`;
    },
  },
  {
    match: (q) => /which project|what project|project.*build|build.*project|suggest.*project/.test(q),
    respond: (profile) => {
      const role = getCareerRole(profile.targetRoleId);
      const { currentPhase } = getRoadmapProgress(profile);
      const projectResources = RESOURCES.filter((r) => r.type === 'Project');
      const relevantProjects = currentPhase
        ? projectResources.filter((r) => currentPhase.resourceIds.includes(r.id))
        : projectResources.slice(0, 3);

      if (relevantProjects.length === 0) {
        return `For your ${role?.title || 'target'} path, I recommend building a project that combines your current skills. ${currentPhase ? `Since you're on the "${currentPhase.title}" phase, try building something with ${currentPhase.skill}.` : ''} A good project should demonstrate your understanding and be something you can showcase in interviews.`;
      }
      return `Based on your ${role?.title || 'target'} roadmap and current phase ("${currentPhase?.title || 'current'}"), I recommend building: ${relevantProjects.map((p, i) => `${i + 1}. ${p.title} (${p.duration})`).join(' ')}. ${relevantProjects[0] ? `Start with "${relevantProjects[0].title}" — it's estimated at ${relevantProjects[0].duration} and will reinforce what you're learning right now.` : ''} Projects are the best way to prove your skills to employers.`;
    },
  },
  {
    match: (q) => /skill gap|my gaps|what.*missing|what.*lack|where.*stand/.test(q),
    respond: (profile) => {
      const summary = getSkillGapSummary(profile);
      const role = getCareerRole(profile.targetRoleId);
      if (!role) return 'Select a target role and I can analyze your skill gaps in detail.';
      return `Here's your skill gap analysis for ${role.title}: You have ${summary.strong.length} strong skill${summary.strong.length === 1 ? '' : 's'} (${summary.strong.map((s) => s.skill).join(', ') || 'none yet'}), ${summary.developing.length} developing, ${summary.needsImprovement.length} needing improvement, and ${summary.missing.length} missing. Your skill coverage is ${summary.coverage}%. ${summary.nextSkill ? `Your most important next skill to learn is ${summary.nextSkill.skill} (${summary.nextSkill.priority} priority).` : ''} ${summary.summary}`;
    },
  },
  {
    match: (q) => /my progress|how am i doing|progress/.test(q),
    respond: (profile) => {
      const { overallProgress, completedCount, totalCount } = getRoadmapProgress(profile);
      const readiness = getSkillGapSummary(profile).coverage;
      const role = getCareerRole(profile.targetRoleId);
      return `Here's your progress snapshot: You're ${overallProgress}% through your ${role?.title || 'target'} roadmap (${completedCount} of ${totalCount} phases completed). Your career readiness (skill coverage) is ${readiness}%. You have a ${profile.streak}-day learning streak. ${overallProgress < 50 ? 'You\'re in the early stages — keep building momentum!' : overallProgress < 80 ? 'You\'re making great progress — the finish line is in sight!' : 'You\'re nearly there — focus on advanced topics and portfolio projects!'}`;
    },
  },
  {
    match: (q) => /resource|recommend.*resource|learning material|study material/.test(q),
    respond: (profile) => {
      const recs = getRecommendedResources(profile, 3);
      const role = getCareerRole(profile.targetRoleId);
      if (recs.length === 0) return 'Select a target role and I can recommend learning resources tailored to your current phase.';
      return `For your ${role?.title || 'target'} path, here are ${recs.length} resources I recommend right now: ${recs.map((r, i) => `${i + 1}. ${r.title} by ${r.provider} (${r.difficulty}, ${r.duration})`).join(' ')}. ${recs[0] ? `Start with "${recs[0].title}" — it matches your current level and roadmap phase.` : ''}`;
    },
  },
  {
    match: (q) => /hello|hi|hey|greet/.test(q),
    respond: (profile) => {
      const role = getCareerRole(profile.targetRoleId);
      const { overallProgress } = getRoadmapProgress(profile);
      return `Hi ${profile.name}! I'm your Skillora AI Mentor. ${role ? `You're on the ${role.title} path and ${overallProgress}% through your roadmap.` : 'You haven\'t selected a target role yet — I recommend doing that so I can give you personalized guidance.'} I can help with what to learn next, skill gaps, free certifications, project ideas, and timeline questions. What would you like to know?`;
    },
  },
];

const LEVEL_ORDER: Record<string, number> = {
  'Not Started': 0,
  Beginner: 1,
  Intermediate: 2,
  Advanced: 3,
};

export function generateMentorResponse(question: string, profile: StudentProfile): string {
  const normalized = normalize(question);
  for (const intent of intents) {
    if (intent.match(normalized)) {
      return intent.respond(profile);
    }
  }

  // Fallback — contextual based on profile
  const role = getCareerRole(profile.targetRoleId);
  const { currentPhase, nextPhase, overallProgress } = getRoadmapProgress(profile);
  const summary = getSkillGapSummary(profile);

  if (role) {
    return `That's a great question, ${profile.name}. Based on your ${role.title} roadmap, you're ${overallProgress}% through. ${currentPhase ? `You're currently on "${currentPhase.title}". ` : ''}${nextPhase ? `Your next phase is "${nextPhase.title}" which covers ${nextPhase.skill}. ` : ''}${summary.nextSkill ? `Your most important skill to develop next is ${summary.nextSkill.skill}. ` : ''} Could you ask more specifically — for example, "What should I learn next?", "Am I ready for Machine Learning?", or "Suggest a free certification"? I'll give you a detailed personalized answer.`;
  }
  return `I'd love to help, ${profile.name}! To give you the best guidance, please select a target career role first. Once you do, I can analyze your skill gaps, recommend what to learn next, suggest resources and certifications, and help you plan your timeline. Try asking "What should I learn next?" or "Suggest a free certification for me."`;
}

export function getSuggestedQuestions(profile: StudentProfile): string[] {
  const { currentPhase, overallProgress } = getRoadmapProgress(profile);
  const role = getCareerRole(profile.targetRoleId);
  const questions: string[] = [];

  if (!role) {
    return [
      'What career path suits me?',
      'How do I get started?',
      'What should I learn first?',
    ];
  }

  if (currentPhase) {
    questions.push(`What should I learn next?`);
    questions.push(`Am I ready to start Machine Learning?`);
    questions.push(`Suggest a free certification for me.`);
  }

  if (overallProgress > 0) {
    questions.push(`How am I doing so far?`);
    questions.push(`What are my skill gaps?`);
  }

  if (overallProgress > 40) {
    questions.push(`Which project should I build next?`);
  }

  questions.push(`Can I complete my roadmap in 6 months?`);
  questions.push(`Why should I learn DSA for my career?`);

  return questions.slice(0, 5);
}

export function createChatMessage(role: 'user' | 'mentor', content: string): ChatMessage {
  return {
    id: Math.random().toString(36).substring(7),
    role,
    content,
    timestamp: new Date().toISOString(),
  };
}
