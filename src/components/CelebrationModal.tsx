import React, { useState, useEffect, useRef } from 'react';
import {
  Trophy,
  Volume2,
  VolumeX,
  MessageSquare,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Heart,
  Gift,
  Smile,
} from 'lucide-react';
import { Lesson } from '../types';

interface CelebrationModalProps {
  lesson: Lesson;
  onClose: (rewardData?: { reward: string; chooser: string; comment: string }) => void;
  onExploreMore: () => void;
}

const CHOOSERS = [
  { id: 'Mom', label: 'Mom', icon: '👩' },
  { id: 'Dad', label: 'Dad', icon: '👨' },
  { id: 'Sibling', label: 'Sibling', icon: '👧' },
  { id: 'Myself', label: 'Myself', icon: '🌟' },
];

const REWARDS = [
  { id: 'Toffee', label: 'Sweet Toffee', icon: '🍬', desc: 'A yummy chewy candy' },
  { id: 'Trophy', label: 'Golden Trophy', icon: '🏆', desc: 'Master artist cup' },
  { id: 'Star', label: 'Super Star', icon: '⭐', desc: 'Shining gold badge' },
  { id: 'Cookie', label: 'Cookie Crunch', icon: '🍪', desc: 'Fresh baked snack' },
];

const AUTO_COMMENTS = [
  'Amazing colors and clean lines!',
  'So proud of this masterpiece!',
  'Drew this all by myself!',
  'Super cute, love the details!',
  'Best drawing ever!',
  'Getting better every single day!',
];

export const CelebrationModal: React.FC<CelebrationModalProps> = ({
  lesson,
  onClose,
  onExploreMore,
}) => {
  const [selectedChooser, setSelectedChooser] = useState<string>('Mom');
  const [selectedReward, setSelectedReward] = useState<string>('Toffee');
  const [selectedComment, setSelectedComment] = useState<string>(AUTO_COMMENTS[0]);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [step, setStep] = useState<'reward' | 'comment'>('reward');
  const speechRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Play voice when modal opens
  const speakText = (text: string) => {
    if (!('speechSynthesis' in window)) return;
    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.95;
      utterance.pitch = 1.1; // Friendly, warm pitch
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      speechRef.current = utterance;
      window.speechSynthesis.speak(utterance);
    } catch (e) {
      console.error('Speech synthesis error:', e);
    }
  };

  const handleInitialVoice = () => {
    const speechMessage = `Congratulations! Your drawing is done! Who is near you—your mom, dad, or sibling? Just tell them to choose your reward for you! The rewards are toffee, trophy, star, or cookie!`;
    speakText(speechMessage);
  };

  useEffect(() => {
    // Attempt automatic friendly announcement
    const timer = setTimeout(() => {
      handleInitialVoice();
    }, 400);

    return () => {
      clearTimeout(timer);
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const handleToggleVoice = () => {
    if (isSpeaking) {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      setIsSpeaking(false);
    } else {
      handleInitialVoice();
    }
  };

  const handleFinish = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    onClose({
      reward: selectedReward,
      chooser: selectedChooser,
      comment: selectedComment,
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-sm bg-white rounded-3xl p-5 text-center border-2 border-sky-200 shadow-2xl overflow-hidden max-h-[92vh] overflow-y-auto">
        {/* Decorative corner glows in light blue */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-sky-100/70 rounded-full blur-xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-100/60 rounded-full blur-xl pointer-events-none" />

        {/* Top Header & Voice Button */}
        <div className="flex items-center justify-between mb-3 relative z-10">
          <div className="flex items-center gap-1.5 text-sky-600 font-bold text-xs">
            <Sparkles className="w-4 h-4 text-sky-500" />
            <span>Drawing Complete!</span>
          </div>

          <button
            onClick={handleToggleVoice}
            aria-label={isSpeaking ? 'Mute voice' : 'Play voice message'}
            title="Listen to announcement"
            className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer min-h-[36px] ${
              isSpeaking
                ? 'bg-sky-500 text-white animate-pulse'
                : 'bg-sky-50 text-sky-700 hover:bg-sky-100 border border-sky-200'
            }`}
          >
            {isSpeaking ? (
              <>
                <VolumeX className="w-3.5 h-3.5" />
                <span>Speaking...</span>
              </>
            ) : (
              <>
                <Volume2 className="w-3.5 h-3.5 text-sky-600" />
                <span>Hear Voice</span>
              </>
            )}
          </button>
        </div>

        {/* Completed Lesson Thumbnail */}
        <div className="w-24 h-24 mx-auto rounded-2xl border-2 border-sky-100 bg-[#F0F7FF] p-2 flex items-center justify-center mb-3 shadow-xs">
          <svg
            viewBox="0 0 300 300"
            className="w-full h-full"
            dangerouslySetInnerHTML={{ __html: lesson.thumbnailSvg }}
          />
        </div>

        <h3 className="text-lg font-black text-slate-900 mb-1">
          Congratulations! You Drew {lesson.title}!
        </h3>

        {step === 'reward' ? (
          /* STEP 1: Ask Who is Near & Choose Reward */
          <div className="space-y-3.5 text-left mt-2">
            {/* Audio Banner prompt */}
            <div className="bg-sky-50/80 rounded-2xl p-3 border border-sky-200 text-xs text-slate-700 space-y-1">
              <p className="font-semibold text-sky-900 flex items-center gap-1">
                <Gift className="w-3.5 h-3.5 text-sky-600" />
                <span>Who is near you right now?</span>
              </p>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Tell your mom, dad, or sibling to choose your reward!
              </p>
            </div>

            {/* Chooser Selector Buttons */}
            <div>
              <label className="text-[11px] font-bold text-slate-600 block mb-1.5 uppercase tracking-wider">
                1. Who is choosing?
              </label>
              <div className="grid grid-cols-4 gap-1.5">
                {CHOOSERS.map((c) => {
                  const isSelected = selectedChooser === c.id;
                  return (
                    <button
                      key={c.id}
                      onClick={() => {
                        setSelectedChooser(c.id);
                        speakText(`${c.label} is choosing your reward!`);
                      }}
                      className={`flex flex-col items-center justify-center p-2 rounded-xl border text-xs font-semibold transition-all cursor-pointer min-h-[48px] ${
                        isSelected
                          ? 'bg-sky-500 text-white border-sky-500 shadow-sm shadow-sky-200'
                          : 'bg-white text-slate-700 border-sky-100 hover:bg-sky-50'
                      }`}
                    >
                      <span className="text-base">{c.icon}</span>
                      <span className="text-[11px] mt-0.5">{c.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Reward Picker (Toffee, Trophy, Star, Cookie) */}
            <div>
              <label className="text-[11px] font-bold text-slate-600 block mb-1.5 uppercase tracking-wider">
                2. Choose reward for this drawing
              </label>
              <div className="grid grid-cols-2 gap-2">
                {REWARDS.map((r) => {
                  const isSelected = selectedReward === r.id;
                  return (
                    <button
                      key={r.id}
                      onClick={() => {
                        setSelectedReward(r.id);
                        speakText(`Awesome! A ${r.label} has been chosen for you!`);
                      }}
                      className={`flex items-center gap-2 p-2.5 rounded-2xl border text-left transition-all cursor-pointer min-h-[50px] ${
                        isSelected
                          ? 'bg-sky-50 border-sky-500 ring-2 ring-sky-400 text-slate-900 shadow-xs'
                          : 'bg-white border-sky-100 hover:border-sky-300 text-slate-700'
                      }`}
                    >
                      <span className="text-2xl shrink-0">{r.icon}</span>
                      <div className="min-w-0">
                        <p className="text-xs font-bold leading-tight truncate">{r.label}</p>
                        <p className="text-[10px] text-slate-500 truncate">{r.desc}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Next Step Button */}
            <button
              onClick={() => {
                setStep('comment');
                speakText('Now pick a comment to add to your drawing!');
              }}
              className="w-full py-3 px-4 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-bold text-xs shadow-md shadow-sky-200 transition-all cursor-pointer flex items-center justify-center gap-2 min-h-[48px]"
            >
              <span>Next: Add a Proud Comment</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ) : (
          /* STEP 2: Auto-suggestion Comments */
          <div className="space-y-3 text-left mt-2">
            <div className="bg-sky-50 rounded-2xl p-2.5 border border-sky-200 text-xs text-slate-700 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="text-lg">
                  {REWARDS.find((r) => r.id === selectedReward)?.icon}
                </span>
                <span className="font-semibold text-sky-900">
                  {selectedChooser} awarded: {REWARDS.find((r) => r.id === selectedReward)?.label}
                </span>
              </div>
              <button
                onClick={() => setStep('reward')}
                className="text-[11px] text-sky-600 hover:underline font-semibold cursor-pointer"
              >
                Change
              </button>
            </div>

            <div>
              <label className="text-[11px] font-bold text-slate-600 block mb-1.5 uppercase tracking-wider flex items-center gap-1">
                <MessageSquare className="w-3.5 h-3.5 text-sky-500" />
                <span>Auto-suggested comments</span>
              </label>

              {/* Suggestions Chips */}
              <div className="space-y-1.5">
                {AUTO_COMMENTS.map((comm) => {
                  const isSelected = selectedComment === comm;
                  return (
                    <button
                      key={comm}
                      onClick={() => setSelectedComment(comm)}
                      className={`w-full text-left p-2.5 rounded-xl border text-xs transition-all cursor-pointer flex items-center justify-between min-h-[40px] ${
                        isSelected
                          ? 'bg-sky-50 border-sky-500 font-semibold text-sky-950 ring-1 ring-sky-400'
                          : 'bg-white border-sky-100 hover:border-sky-300 text-slate-700'
                      }`}
                    >
                      <span className="line-clamp-1">{comm}</span>
                      {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-sky-500 shrink-0 ml-1" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Custom Edit Box if user wants to tweak */}
            <div>
              <input
                type="text"
                value={selectedComment}
                onChange={(e) => setSelectedComment(e.target.value)}
                placeholder="Or type your own comment..."
                className="w-full text-xs p-2.5 rounded-xl border border-sky-200 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-400 bg-white"
              />
            </div>

            {/* Action buttons */}
            <div className="space-y-2 pt-1">
              <button
                onClick={handleFinish}
                className="w-full py-3 px-4 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-bold text-xs shadow-md shadow-sky-200 transition-all cursor-pointer flex items-center justify-center gap-2 min-h-[48px]"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Save Artwork & Keep Trophy</span>
              </button>

              <button
                onClick={onExploreMore}
                className="w-full py-2.5 px-4 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-700 font-semibold text-xs transition-colors cursor-pointer flex items-center justify-center gap-1 min-h-[42px]"
              >
                <span>Explore More Lessons</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
