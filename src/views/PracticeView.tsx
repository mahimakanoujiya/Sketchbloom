import React, { useState } from 'react';
import { Sparkles, Shuffle, Palette } from 'lucide-react';
import { DrawingCanvas } from '../components/DrawingCanvas';

interface PracticeViewProps {
  onSaveArtwork: (dataUrl: string, title: string) => void;
  onPracticeRecorded: () => void;
}

const INSPIRATION_PROMPTS = [
  'Draw a cozy cup of warm cocoa with marshmallows.',
  'Sketch a smiling sun peeking through pastel clouds.',
  'Draw your dream treehouse with rope ladders.',
  'Sketch a tiny mouse holding a giant strawberry.',
  'Draw an enchanted mushroom door leading underground.',
  'Draw your favorite dessert topped with sprinkles.',
  'Sketch a friendly astronaut waving from the moon.',
];

export const PracticeView: React.FC<PracticeViewProps> = ({
  onSaveArtwork,
  onPracticeRecorded,
}) => {
  const [promptIndex, setPromptIndex] = useState<number>(0);

  const handleNextPrompt = () => {
    setPromptIndex((prev) => (prev + 1) % INSPIRATION_PROMPTS.length);
  };

  const handleSave = (dataUrl: string, title: string) => {
    onSaveArtwork(dataUrl, title);
    onPracticeRecorded();
  };

  return (
    <div className="pb-24 max-w-xl mx-auto px-4 pt-3 space-y-3">
      {/* Motivational Banner */}
      <div className="bg-gradient-to-r from-sky-500/10 via-blue-500/10 to-sky-500/10 border border-sky-200/80 rounded-2xl p-3.5 flex items-center justify-between shadow-2xs">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-sky-500 text-white flex items-center justify-center shrink-0 shadow-2xs shadow-sky-200">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-800">
              “Every artist starts with a single line.”
            </p>
            <p className="text-[11px] text-slate-500">Free Practice Studio • No rules, just create</p>
          </div>
        </div>
      </div>

      {/* Idea / Prompt Generator Strip */}
      <div className="bg-white rounded-2xl p-3 border border-sky-100 flex items-center justify-between gap-2 shadow-2xs">
        <div className="flex items-center gap-2 min-w-0">
          <Palette className="w-4 h-4 text-sky-500 shrink-0" />
          <p className="text-xs text-slate-700 truncate">
            <span className="font-semibold text-slate-900">Idea: </span>
            {INSPIRATION_PROMPTS[promptIndex]}
          </p>
        </div>
        <button
          onClick={handleNextPrompt}
          aria-label="Get another inspiration prompt"
          title="New prompt"
          className="p-1.5 rounded-lg text-sky-600 hover:bg-sky-50 cursor-pointer min-h-[36px] min-w-[36px] flex items-center justify-center shrink-0"
        >
          <Shuffle className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Free Drawing Canvas */}
      <DrawingCanvas
        initialTitle="Free Doodle"
        onSave={handleSave}
      />
    </div>
  );
};
