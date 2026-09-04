import { useState, useRef, useEffect } from 'react';
import { Sparkles, Send, MessageSquare, User } from 'lucide-react';
import AppLayout from '@/layouts/AppLayout';
import { useStudent } from '@/context/StudentContext';
import { generateMentorResponse, getSuggestedQuestions, createChatMessage } from '@/utils/mentor';
import { Card } from '@/components/ui';
import type { ChatMessage } from '@/types';

export default function MentorPage() {
  const { profile } = useStudent();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const suggestions = profile ? getSuggestedQuestions(profile) : [];

  useEffect(() => {
    if (profile && messages.length === 0) {
      setMessages([
        createChatMessage('mentor', `Hi ${profile.name}! I'm your Skillora AI Mentor. I know your profile, skills, and progress — ask me anything about your career journey. What would you like to know?`),
      ]);
    }
  }, [profile, messages.length]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  if (!profile) return null;

  const handleSend = (text?: string) => {
    const question = text || input;
    if (!question.trim()) return;

    const userMsg = createChatMessage('user', question);
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const response = generateMentorResponse(question, profile);
      const mentorMsg = createChatMessage('mentor', response);
      setMessages((prev) => [...prev, mentorMsg]);
      setIsTyping(false);
    }, 800 + Math.random() * 600);
  };

  return (
    <AppLayout>
      <div className="mx-auto max-w-4xl">
        <div className="mb-4">
          <div className="flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-ink-950">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <h1 className="font-display text-xl font-bold text-ink-900">Skillora AI Mentor</h1>
              <p className="text-sm text-ink-500">Your personal AI career mentor — knows your profile and progress</p>
            </div>
          </div>
        </div>

        <Card className="flex h-[calc(100vh-220px)] flex-col overflow-hidden">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 scrollbar-thin">
            <div className="space-y-4">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${msg.role === 'mentor' ? 'bg-gradient-to-br from-brand-500 to-brand-700 text-ink-950' : 'bg-ink-200 text-ink-600'}`}>
                    {msg.role === 'mentor' ? <Sparkles className="h-4 w-4" /> : <User className="h-4 w-4" />}
                  </div>
                  <div className={`max-w-[75%] rounded-2xl px-4 py-2.5 text-sm ${msg.role === 'mentor' ? 'bg-ink-200/50 text-ink-800' : 'bg-gradient-to-br from-brand-600 to-accent-600 text-ink-950'}`}>
                    {msg.content}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-ink-950">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <div className="flex items-center gap-1 rounded-2xl bg-ink-200/50 px-4 py-3">
                    {[0, 1, 2].map((i) => (
                      <div key={i} className="h-2 w-2 animate-bounce rounded-full bg-ink-400" style={{ animationDelay: `${i * 150}ms` }} />
                    ))}
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Suggested Questions */}
          {messages.length <= 1 && suggestions.length > 0 && (
            <div className="border-t border-ink-300/50 p-3">
              <p className="mb-2 text-xs font-semibold text-ink-500">Suggested questions:</p>
              <div className="flex flex-wrap gap-2">
                {suggestions.map((q) => (
                  <button key={q} onClick={() => handleSend(q)} className="rounded-xl border border-ink-300/60 bg-ink-100 px-3 py-1.5 text-xs font-medium text-ink-700 transition hover:border-brand-500/30 hover:bg-brand-500/10">
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="border-t border-ink-300/50 p-4">
            <div className="flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') handleSend(); }}
                placeholder="Ask your AI mentor anything..."
                className="input flex-1"
              />
              <button onClick={() => handleSend()} disabled={!input.trim() || isTyping} className="btn-primary">
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </Card>
      </div>
    </AppLayout>
  );
}
