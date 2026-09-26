import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, PenTool, Lightbulb, ArrowLeft } from 'lucide-react';
import { Lesson } from '../types';
import { DrawingCanvas } from '../components/DrawingCanvas';

interface LessonViewProps {
  lesson: Lesson;
  onBack: () => void;
  onSaveArtwork: (dataUrl: string, title: string) => void;
  onCompleteLesson: () => void;
}

export const LessonView: React.FC<LessonViewProps> = ({
  lesson,
  onBack,
  onSaveArtwork,
  onCompleteLesson,
}) => {
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [isDrawingMode, setIsDrawingMode] = useState<boolean>(false);

  const currentStep = lesson.steps[currentStepIndex];
  const totalSteps = lesson.steps.length;

  const handleNextStep = () => {
    if (currentStepIndex < totalSteps - 1) {
      setCurrentStepIndex((prev) => prev + 1);
    } else {
      onCompleteLesson();
    }
  };

  const handlePrevStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1);
    }
  };

  // If in interactive canvas drawing mode:
  if (isDrawingMode) {
    return (
      <div className="pt-2">
        <DrawingCanvas
          lesson={lesson}
          currentStepIndex={currentStepIndex}
          onStepChange={setCurrentStepIndex}
          onCompleteLesson={onCompleteLesson}
          onSave={onSaveArtwork}
          onBack={() => setIsDrawingMode(false)}
        />
      </div>
    );
  }

  // Step-by-step Guided Lesson View
  return (
    <div className="pb-24 max-w-xl mx-auto px-4 pt-3">
      {/* Back button and Lesson Title Header */}
      <div className="flex items-center justify-between mb-3">
        <button
          onClick={onBack}
          aria-label="Back to lessons"
          className="flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-sky-600 py-1.5 px-2 rounded-xl hover:bg-sky-50 min-h-[44px] cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </button>

        <div className="flex items-center gap-2 text-xs text-slate-500">
          <span>{lesson.category}</span>
          <span aria-hidden="true">·</span>
          <span>{lesson.difficulty}</span>
          <span aria-hidden="true">·</span>
          <span>{lesson.estimatedTime}</span>
        </div>
      </div>

      {/* Main Guided Step Card */}
      <div className="bg-white rounded-3xl border border-sky-100 shadow-sm p-5 mb-4">
        {/* Step Progress Pill & Counter */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-bold text-sky-600 tracking-wide uppercase">
            Step {currentStep.stepNumber} of {totalSteps}
          </span>
          {/* Progress Bar */}
          <div className="w-24 h-2 bg-sky-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-sky-500 rounded-full transition-all duration-300"
              style={{ width: `${((currentStepIndex + 1) / totalSteps) * 100}%` }}
            />
          </div>
        </div>

        {/* Large Drawing Preview */}
        <div className="w-full aspect-square max-w-[340px] mx-auto bg-[#F0F7FF] rounded-2xl border-2 border-sky-100 flex items-center justify-center p-4 relative mb-4">
          <svg
            viewBox="0 0 300 300"
            className="w-full h-full"
            dangerouslySetInnerHTML={{ __html: currentStep.cumulativeSvg }}
          />
          <div className="absolute bottom-2 right-2 px-2 py-1 rounded-md bg-white/90 backdrop-blur-xs text-[10px] font-semibold text-sky-700 border border-sky-100">
            Highlighted lines = current step
          </div>
        </div>

        {/* Step Title & Instruction */}
        <div className="mb-4">
          <h2 className="text-lg font-bold text-slate-900 mb-1">{currentStep.title}</h2>
          <p className="text-sm text-slate-700 leading-relaxed">{currentStep.instruction}</p>
        </div>

        {/* Artist Tip Card */}
        {currentStep.tip && (
          <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-amber-50/70 border border-amber-200/60 mb-5 text-amber-900">
            <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <p className="text-xs leading-normal">{currentStep.tip}</p>
          </div>
        )}

        {/* Step Navigation Controls */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <button
            onClick={handlePrevStep}
            disabled={currentStepIndex === 0}
            className="flex items-center justify-center gap-1 py-2.5 px-4 rounded-xl border border-slate-200 text-slate-700 font-semibold text-xs disabled:opacity-30 hover:bg-slate-50 transition-colors cursor-pointer min-h-[44px]"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous Step</span>
          </button>

          <button
            onClick={handleNextStep}
            className="flex items-center justify-center gap-1 py-2.5 px-4 rounded-xl bg-sky-100 hover:bg-sky-200 text-sky-700 font-semibold text-xs transition-colors cursor-pointer min-h-[44px]"
          >
            <span>{currentStepIndex === totalSteps - 1 ? 'Finish Lesson' : 'Next Step'}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Primary CTA: Start Drawing on Canvas */}
        <button
          onClick={() => setIsDrawingMode(true)}
          className="w-full py-3.5 px-4 rounded-2xl bg-sky-500 hover:bg-sky-600 text-white font-bold text-sm shadow-md shadow-sky-200 transition-all active:scale-98 cursor-pointer flex items-center justify-center gap-2 min-h-[48px]"
        >
          <PenTool className="w-4 h-4" />
          <span>Draw This on Canvas</span>
        </button>
      </div>

      {/* Step Roadmap Thumbnails Scroller */}
      <div className="bg-white rounded-2xl p-4 border border-sky-100">
        <h3 className="text-xs font-bold text-slate-800 mb-3">All Lesson Steps</h3>
        <div className="flex gap-2.5 overflow-x-auto no-scrollbar pb-1">
          {lesson.steps.map((st, idx) => (
            <button
              key={st.stepNumber}
              onClick={() => setCurrentStepIndex(idx)}
              className={`shrink-0 w-16 text-center cursor-pointer transition-all ${
                idx === currentStepIndex
                  ? 'ring-2 ring-sky-500 rounded-xl p-1 bg-sky-50'
                  : 'opacity-70 hover:opacity-100 p-1'
              }`}
            >
              <div className="w-14 h-14 rounded-lg bg-[#F0F7FF] border border-sky-100 flex items-center justify-center mb-1 overflow-hidden">
                <svg
                  viewBox="0 0 300 300"
                  className="w-10 h-10"
                  dangerouslySetInnerHTML={{ __html: st.cumulativeSvg }}
                />
              </div>
              <span className="text-[10px] font-bold text-slate-700">Step {st.stepNumber}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
