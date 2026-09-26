import React from 'react';
import { Sparkles, Palette, PenTool, Layers, ArrowRight } from 'lucide-react';

interface WelcomeModalProps {
  onStartDrawing: () => void;
}

export const WelcomeModal: React.FC<WelcomeModalProps> = ({ onStartDrawing }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
      <div className="relative w-full max-w-sm bg-white rounded-3xl p-6 text-center border-2 border-sky-200 shadow-2xl">
        {/* Glow */}
        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-tr from-sky-400 via-blue-500 to-sky-600 flex items-center justify-center text-white shadow-lg shadow-sky-200">
          <Sparkles className="w-8 h-8" />
        </div>

        <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-1">
          Welcome to Sketch<span className="text-sky-600">Bloom</span>
        </h2>
        <p className="text-xs font-semibold text-sky-600 tracking-wider uppercase mb-3">
          Learn. Draw. Create.
        </p>

        <p className="text-xs text-slate-600 leading-relaxed mb-6">
          Simple, step-by-step guided lessons and an interactive canvas designed to help you master drawing with rewards and voice guidance!
        </p>

        {/* Feature Highlights - 100% Free guarantee */}
        <div className="bg-[#F0F7FF] rounded-2xl p-3.5 mb-6 text-left space-y-2.5 border border-sky-100">
          <div className="flex items-center gap-2.5 text-xs text-slate-700">
            <div className="w-6 h-6 rounded-lg bg-sky-100 flex items-center justify-center text-sky-600 shrink-0">
              <Layers className="w-3.5 h-3.5" />
            </div>
            <span>Step-by-step breakdown from basic shapes to finish</span>
          </div>

          <div className="flex items-center gap-2.5 text-xs text-slate-700">
            <div className="w-6 h-6 rounded-lg bg-sky-100 flex items-center justify-center text-sky-600 shrink-0">
              <PenTool className="w-3.5 h-3.5" />
            </div>
            <span>Interactive canvas with guided trace overlay mode</span>
          </div>

          <div className="flex items-center gap-2.5 text-xs text-slate-700">
            <div className="w-6 h-6 rounded-lg bg-sky-100 flex items-center justify-center text-sky-600 shrink-0">
              <Palette className="w-3.5 h-3.5" />
            </div>
            <span>Earn fun rewards chosen by Mom, Dad, or Siblings!</span>
          </div>
        </div>

        {/* Start Drawing Primary Action */}
        <button
          onClick={onStartDrawing}
          className="w-full py-3.5 px-6 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-bold text-sm shadow-md shadow-sky-200 transition-all active:scale-98 cursor-pointer flex items-center justify-center gap-2 min-h-[48px]"
        >
          <span>Start Drawing</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
