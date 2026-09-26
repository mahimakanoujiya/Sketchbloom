import React, { useRef, useState, useEffect, useCallback } from 'react';
import {
  Pen,
  Brush,
  Eraser,
  Undo2,
  Redo2,
  Trash2,
  Download,
  Save,
  Eye,
  EyeOff,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
} from 'lucide-react';
import { Lesson, LessonStep } from '../types';

interface DrawingCanvasProps {
  lesson?: Lesson;
  currentStepIndex?: number;
  onStepChange?: (index: number) => void;
  onCompleteLesson?: () => void;
  onSave: (dataUrl: string, title: string) => void;
  initialTitle?: string;
  initialImageData?: string;
  onBack?: () => void;
}

const PALETTE = [
  '#0f172a', // Slate Dark
  '#0284c7', // Sky Blue
  '#0ea5e9', // Light Sky
  '#38bdf8', // Ice Blue
  '#06b6d4', // Cyan
  '#2563eb', // Royal Blue
  '#4f46e5', // Indigo
  '#7c3aed', // Purple
  '#ec4899', // Pink
  '#f43f5e', // Rose
  '#ea580c', // Orange
  '#f59e0b', // Amber
  '#eab308', // Yellow
  '#16a34a', // Emerald Green
  '#10b981', // Mint Green
  '#78350f', // Cocoa Brown
  '#ffffff', // White
];

export const DrawingCanvas: React.FC<DrawingCanvasProps> = ({
  lesson,
  currentStepIndex = 0,
  onStepChange,
  onCompleteLesson,
  onSave,
  initialTitle = 'My Artwork',
  initialImageData,
  onBack,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Drawing state
  const [tool, setTool] = useState<'pencil' | 'brush' | 'marker' | 'eraser'>('pencil');
  const [color, setColor] = useState<string>('#0f172a');
  const [brushSize, setBrushSize] = useState<number>(4);
  const [opacity, setOpacity] = useState<number>(1);
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  const [lastPoint, setLastPoint] = useState<{ x: number; y: number } | null>(null);

  // History for Undo / Redo
  const [history, setHistory] = useState<ImageData[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);

  // Guide Reference Overlay State
  const [showGuide, setShowGuide] = useState<boolean>(true);
  const [guideOpacity, setGuideOpacity] = useState<number>(0.4);
  const [activeStep, setActiveStep] = useState<number>(currentStepIndex);

  // Canvas UI controls
  const [title, setTitle] = useState<string>(
    lesson ? `${lesson.title} Practice` : initialTitle
  );
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  // Sync step with parent if provided
  useEffect(() => {
    setActiveStep(currentStepIndex);
  }, [currentStepIndex]);

  const currentStepData: LessonStep | undefined = lesson?.steps[activeStep];

  // Initialize canvas with high-DPI scaling
  const setupCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    // Use minimum 320, standard 560 box
    const size = Math.min(rect.width, 560);

    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = `${size}px`;
    canvas.style.height = `${size}px`;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.scale(dpr, dpr);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    // Fill clean white background
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, size, size);

    // If initial image exists, draw it
    if (initialImageData) {
      const img = new Image();
      img.onload = () => {
        ctx.drawImage(img, 0, 0, size, size);
        saveHistoryState();
      };
      img.src = initialImageData;
    } else {
      saveHistoryState();
    }
  }, [initialImageData]);

  useEffect(() => {
    setupCanvas();
  }, [setupCanvas]);

  // Save state for undo/redo
  const saveHistoryState = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(imgData);

    // Limit history stack to 20 for memory efficiency
    if (newHistory.length > 20) {
      newHistory.shift();
    }

    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  };

  const handleUndo = () => {
    if (historyIndex <= 0) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const newIndex = historyIndex - 1;
    ctx.putImageData(history[newIndex], 0, 0);
    setHistoryIndex(newIndex);
  };

  const handleRedo = () => {
    if (historyIndex >= history.length - 1) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const newIndex = historyIndex + 1;
    ctx.putImageData(history[newIndex], 0, 0);
    setHistoryIndex(newIndex);
  };

  const handleClear = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const size = parseFloat(canvas.style.width);
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, size, size);
    saveHistoryState();
    showToast('Canvas cleared');
  };

  // Coordinates helper
  const getCoordinates = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    return { x, y };
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    const { x, y } = getCoordinates(e);
    setIsDrawing(true);
    setLastPoint({ x, y });

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    applyToolSettings(ctx);
    ctx.beginPath();
    ctx.arc(x, y, (tool === 'eraser' ? brushSize * 2 : brushSize) / 2, 0, Math.PI * 2);
    ctx.fill();
  };

  const applyToolSettings = (ctx: CanvasRenderingContext2D) => {
    if (tool === 'eraser') {
      ctx.globalCompositeOperation = 'destination-out';
      ctx.fillStyle = 'rgba(0,0,0,1)';
      ctx.strokeStyle = 'rgba(0,0,0,1)';
      ctx.lineWidth = brushSize * 2.5;
    } else if (tool === 'marker') {
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = color;
      ctx.strokeStyle = color;
      ctx.globalAlpha = 0.35 * opacity;
      ctx.lineWidth = brushSize * 2;
    } else if (tool === 'brush') {
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = color;
      ctx.strokeStyle = color;
      ctx.globalAlpha = opacity;
      ctx.lineWidth = brushSize * 1.5;
    } else {
      // Pencil
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = color;
      ctx.strokeStyle = color;
      ctx.globalAlpha = opacity;
      ctx.lineWidth = brushSize;
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawing || !lastPoint) return;
    const { x, y } = getCoordinates(e);

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    applyToolSettings(ctx);

    ctx.beginPath();
    ctx.moveTo(lastPoint.x, lastPoint.y);
    ctx.lineTo(x, y);
    ctx.stroke();

    setLastPoint({ x, y });
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // Ignored
    }
    setIsDrawing(false);
    setLastPoint(null);
    saveHistoryState();
  };

  // Step changing inside canvas
  const handlePrevStep = () => {
    if (activeStep > 0) {
      const next = activeStep - 1;
      setActiveStep(next);
      onStepChange?.(next);
    }
  };

  const handleNextStep = () => {
    if (!lesson) return;
    if (activeStep < lesson.steps.length - 1) {
      const next = activeStep + 1;
      setActiveStep(next);
      onStepChange?.(next);
    } else if (activeStep === lesson.steps.length - 1) {
      onCompleteLesson?.();
    }
  };

  // Save artwork
  const handleSaveArtwork = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    setIsSaving(true);

    try {
      const dataUrl = canvas.toDataURL('image/png');
      onSave(dataUrl, title);
      showToast('Artwork saved to My Art!');
    } catch (err) {
      console.error(err);
      showToast('Failed to save artwork');
    } finally {
      setIsSaving(false);
    }
  };

  // Export PNG to downloads
  const handleDownloadPNG = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    try {
      const link = document.createElement('a');
      link.download = `${title.toLowerCase().replace(/\s+/g, '-')}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
      showToast('Downloaded drawing!');
    } catch {
      showToast('Download failed');
    }
  };

  return (
    <div className="flex flex-col pb-20 max-w-2xl mx-auto">
      {/* Toast alert */}
      {toastMessage && (
        <div className="fixed top-16 left-1/2 -translate-x-1/2 z-50 bg-slate-900 text-white text-xs font-medium px-4 py-2 rounded-full shadow-lg transition-all animate-bounce">
          {toastMessage}
        </div>
      )}

      {/* Top action header for canvas */}
      <div className="flex items-center justify-between px-3 py-2 bg-white/90 backdrop-blur-sm border-b border-sky-100 rounded-t-2xl mb-2">
        <div className="flex items-center gap-2">
          {onBack && (
            <button
              onClick={onBack}
              aria-label="Back"
              className="p-1.5 rounded-lg text-slate-600 hover:bg-sky-50 min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="text-sm font-semibold text-slate-800 bg-transparent border-b border-transparent hover:border-sky-300 focus:border-sky-500 focus:outline-none px-1 py-0.5 max-w-[170px] sm:max-w-[260px] truncate"
            title="Click to rename"
          />
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={handleDownloadPNG}
            aria-label="Download PNG image"
            title="Download PNG"
            className="p-2 rounded-lg text-slate-600 hover:bg-sky-50 hover:text-sky-600 min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer transition-colors"
          >
            <Download className="w-4 h-4" />
          </button>
          <button
            onClick={handleSaveArtwork}
            disabled={isSaving}
            aria-label="Save Artwork to Gallery"
            className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white text-xs font-semibold shadow-sm shadow-sky-200 transition-all active:scale-95 cursor-pointer min-h-[44px]"
          >
            <Save className="w-3.5 h-3.5" />
            <span>Save Art</span>
          </button>
        </div>
      </div>

      {/* Lesson Step Instruction Banner (if inside a lesson) */}
      {lesson && currentStepData && (
        <div className="bg-white border border-sky-100 rounded-2xl p-3 mb-2 shadow-2xs">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-bold text-sky-600">
              Step {currentStepData.stepNumber} of {lesson.steps.length}
            </span>
            <div className="flex items-center gap-1">
              <button
                onClick={handlePrevStep}
                disabled={activeStep === 0}
                aria-label="Previous step"
                className="p-1 rounded-md text-slate-500 hover:text-slate-800 disabled:opacity-30 cursor-pointer min-h-[36px] min-w-[36px] flex items-center justify-center"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNextStep}
                aria-label="Next step"
                className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium cursor-pointer min-h-[36px] ${
                  activeStep === lesson.steps.length - 1
                    ? 'bg-sky-500 text-white'
                    : 'bg-sky-100 text-sky-700 hover:bg-sky-200'
                }`}
              >
                {activeStep === lesson.steps.length - 1 ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5" /> Finish
                  </>
                ) : (
                  <>
                    Next <ChevronRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>
          </div>
          <h4 className="text-xs font-bold text-slate-900">{currentStepData.title}</h4>
          <p className="text-xs text-slate-600 mt-0.5">{currentStepData.instruction}</p>
        </div>
      )}

      {/* Main Canvas Container with Guided Reference Overlay */}
      <div
        ref={containerRef}
        className="relative mx-auto flex items-center justify-center bg-white rounded-2xl border-2 border-sky-200/80 shadow-sm overflow-hidden select-none"
        style={{ maxWidth: '560px', width: '100%', aspectRatio: '1 / 1' }}
      >
        {/* Guided Step SVG Reference Layer */}
        {lesson && currentStepData && showGuide && (
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-200 z-10 flex items-center justify-center p-3"
            style={{ opacity: guideOpacity }}
          >
            <svg
              viewBox="0 0 300 300"
              className="w-full h-full"
              dangerouslySetInnerHTML={{ __html: currentStepData.cumulativeSvg }}
            />
          </div>
        )}

        {/* Real User HTML5 Canvas */}
        <canvas
          ref={canvasRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          className="drawing-canvas relative z-20 cursor-crosshair block bg-transparent"
        />
      </div>

      {/* Guide & View Controls Bar */}
      {lesson && (
        <div className="flex items-center justify-between px-3 py-2 mt-2 bg-white/90 rounded-xl border border-sky-100 text-xs shadow-2xs">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowGuide(!showGuide)}
              aria-label={showGuide ? 'Hide guide reference' : 'Show guide reference'}
              className="flex items-center gap-1 text-slate-700 hover:text-sky-600 font-medium cursor-pointer min-h-[36px]"
            >
              {showGuide ? <Eye className="w-3.5 h-3.5 text-sky-500" /> : <EyeOff className="w-3.5 h-3.5" />}
              <span>Guide Overlay</span>
            </button>
            {showGuide && (
              <span className="text-[11px] text-slate-600 font-mono">
                {Math.round(guideOpacity * 100)}%
              </span>
            )}
          </div>

          {showGuide && (
            <div className="flex items-center gap-2 w-32">
              <input
                type="range"
                min="0.1"
                max="1.0"
                step="0.05"
                value={guideOpacity}
                onChange={(e) => setGuideOpacity(parseFloat(e.target.value))}
                aria-label="Adjust guide reference opacity"
                className="w-full accent-sky-500 h-1.5 cursor-pointer"
              />
            </div>
          )}
        </div>
      )}

      {/* Drawing Tools & Settings Panel */}
      <div className="bg-white rounded-2xl border border-sky-100 p-3 mt-2 shadow-2xs space-y-3">
        {/* Tool selector & Action buttons */}
        <div className="flex items-center justify-between gap-1 flex-wrap">
          {/* Tools */}
          <div className="flex items-center gap-1 bg-sky-50/70 p-1 rounded-xl">
            <button
              onClick={() => setTool('pencil')}
              aria-label="Pencil tool"
              className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium transition-all min-h-[40px] cursor-pointer ${
                tool === 'pencil' ? 'bg-white text-sky-600 shadow-2xs font-semibold' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Pen className="w-3.5 h-3.5" />
              <span>Pencil</span>
            </button>
            <button
              onClick={() => setTool('brush')}
              aria-label="Brush tool"
              className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium transition-all min-h-[40px] cursor-pointer ${
                tool === 'brush' ? 'bg-white text-sky-600 shadow-2xs font-semibold' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Brush className="w-3.5 h-3.5" />
              <span>Brush</span>
            </button>
            <button
              onClick={() => setTool('marker')}
              aria-label="Marker highlighter tool"
              className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium transition-all min-h-[40px] cursor-pointer ${
                tool === 'marker' ? 'bg-white text-sky-600 shadow-2xs font-semibold' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span className="w-3 h-3 rounded-full bg-sky-400 opacity-60 inline-block" />
              <span>Marker</span>
            </button>
            <button
              onClick={() => setTool('eraser')}
              aria-label="Eraser tool"
              className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium transition-all min-h-[40px] cursor-pointer ${
                tool === 'eraser' ? 'bg-white text-sky-600 shadow-2xs font-semibold' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Eraser className="w-3.5 h-3.5" />
              <span>Eraser</span>
            </button>
          </div>

          {/* Canvas Actions: Undo, Redo, Clear */}
          <div className="flex items-center gap-1">
            <button
              onClick={handleUndo}
              disabled={historyIndex <= 0}
              aria-label="Undo drawing stroke"
              title="Undo"
              className="p-2 rounded-xl border border-slate-200 text-slate-600 hover:bg-sky-50 disabled:opacity-30 min-h-[40px] min-w-[40px] flex items-center justify-center cursor-pointer transition-colors"
            >
              <Undo2 className="w-4 h-4" />
            </button>
            <button
              onClick={handleRedo}
              disabled={historyIndex >= history.length - 1}
              aria-label="Redo drawing stroke"
              title="Redo"
              className="p-2 rounded-xl border border-slate-200 text-slate-600 hover:bg-sky-50 disabled:opacity-30 min-h-[40px] min-w-[40px] flex items-center justify-center cursor-pointer transition-colors"
            >
              <Redo2 className="w-4 h-4" />
            </button>
            <button
              onClick={handleClear}
              aria-label="Clear canvas"
              title="Clear Canvas"
              className="p-2 rounded-xl border border-rose-200 text-rose-500 hover:bg-rose-50 min-h-[40px] min-w-[40px] flex items-center justify-center cursor-pointer transition-colors"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Sliders: Size & Opacity */}
        <div className="grid grid-cols-2 gap-3 pt-1 border-t border-sky-50">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-medium text-slate-500 w-8">Size</span>
            <input
              type="range"
              min="1"
              max="40"
              value={brushSize}
              onChange={(e) => setBrushSize(parseInt(e.target.value, 10))}
              aria-label="Brush size slider"
              className="w-full accent-sky-500 h-1.5 cursor-pointer"
            />
            <div
              className="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center shrink-0"
              style={{
                width: Math.min(brushSize, 20),
                height: Math.min(brushSize, 20),
                backgroundColor: tool === 'eraser' ? '#cbd5e1' : color,
              }}
            />
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] font-medium text-slate-500 w-12">Opacity</span>
            <input
              type="range"
              min="0.1"
              max="1.0"
              step="0.05"
              value={opacity}
              onChange={(e) => setOpacity(parseFloat(e.target.value))}
              aria-label="Brush opacity slider"
              className="w-full accent-sky-500 h-1.5 cursor-pointer"
            />
            <span className="text-[10px] font-mono text-slate-500 w-7">
              {Math.round(opacity * 100)}%
            </span>
          </div>
        </div>

        {/* Color Palette */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[11px] font-semibold text-slate-600">Colors</span>
            <div className="flex items-center gap-1">
              <span className="text-[10px] text-slate-500">Custom:</span>
              <input
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                aria-label="Custom color picker"
                className="w-5 h-5 rounded border-0 p-0 cursor-pointer"
              />
            </div>
          </div>
          <div className="flex items-center gap-1.5 overflow-x-auto py-1 no-scrollbar">
            {PALETTE.map((c) => {
              const isSelected = color.toLowerCase() === c.toLowerCase() && tool !== 'eraser';
              return (
                <button
                  key={c}
                  onClick={() => {
                    setColor(c);
                    if (tool === 'eraser') setTool('pencil');
                  }}
                  aria-label={`Select color ${c}`}
                  className={`w-7 h-7 rounded-full shrink-0 transition-transform cursor-pointer border ${
                    c === '#ffffff' ? 'border-slate-300' : 'border-black/10'
                  } ${isSelected ? 'scale-125 ring-2 ring-sky-500 ring-offset-2' : 'hover:scale-110 active:scale-95'}`}
                  style={{ backgroundColor: c }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
