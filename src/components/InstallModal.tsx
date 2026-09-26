import React from 'react';
import { X, Smartphone, Download, Share, PlusSquare, Monitor, CheckCircle2 } from 'lucide-react';

interface InstallModalProps {
  isOpen: boolean;
  onClose: () => void;
  onInstall?: () => void;
  isInstallable: boolean;
  isIOS: boolean;
}

export const InstallModal: React.FC<InstallModalProps> = ({
  isOpen,
  onClose,
  onInstall,
  isInstallable,
  isIOS,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-sm bg-white rounded-3xl p-6 border-2 border-sky-200 shadow-2xl">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-slate-700 min-h-[36px] min-w-[36px] flex items-center justify-center cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Icon & Title */}
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-sky-400 to-blue-500 flex items-center justify-center text-white shadow-md shadow-sky-200 mx-auto mb-3">
          <Smartphone className="w-7 h-7" />
        </div>

        <h3 className="text-lg font-black text-slate-900 text-center mb-1">
          Install SketchBloom App
        </h3>
        <p className="text-xs text-slate-600 text-center mb-5 leading-relaxed">
          Install SketchBloom on your phone, tablet, or computer for instant offline drawing, full-screen canvas, and fast access!
        </p>

        {/* Native 1-Tap Install Button if browser supports it */}
        {isInstallable && (
          <div className="mb-5">
            <button
              onClick={() => {
                onInstall?.();
                onClose();
              }}
              className="w-full py-3 px-4 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-bold text-xs shadow-md shadow-sky-200 transition-all flex items-center justify-center gap-2 cursor-pointer min-h-[48px]"
            >
              <Download className="w-4 h-4" />
              <span>Install to My Apps Now</span>
            </button>
          </div>
        )}

        {/* Guided Steps per Device */}
        <div className="space-y-3 bg-[#F0F7FF] rounded-2xl p-4 border border-sky-100 text-left">
          {isIOS ? (
            <div>
              <p className="text-xs font-bold text-slate-900 flex items-center gap-1.5 mb-2">
                <span>🍎 On iPhone & iPad:</span>
              </p>
              <ol className="text-xs text-slate-600 space-y-1.5 list-decimal pl-4">
                <li>
                  Tap the <strong className="text-slate-800">Share</strong> icon <Share className="w-3.5 h-3.5 inline text-sky-600" /> at the bottom of Safari.
                </li>
                <li>
                  Scroll down and select <strong className="text-slate-800">Add to Home Screen</strong> <PlusSquare className="w-3.5 h-3.5 inline text-sky-600" />.
                </li>
                <li>Tap <strong className="text-slate-800">Add</strong> in the top right.</li>
              </ol>
            </div>
          ) : (
            <div>
              <p className="text-xs font-bold text-slate-900 flex items-center gap-1.5 mb-2">
                <span>🤖 On Android / Chrome:</span>
              </p>
              <ol className="text-xs text-slate-600 space-y-1.5 list-decimal pl-4">
                <li>
                  Tap the <strong className="text-slate-800">three dots (⋮)</strong> menu in the browser bar.
                </li>
                <li>
                  Select <strong className="text-slate-800">“Install app”</strong> or <strong className="text-slate-800">“Add to Home screen”</strong>.
                </li>
                <li>Confirm by clicking <strong className="text-slate-800">Install</strong>.</li>
              </ol>
            </div>
          )}

          <div className="pt-2 border-t border-sky-200/60">
            <p className="text-[11px] text-slate-600 flex items-center gap-1">
              <Monitor className="w-3.5 h-3.5 text-sky-500 shrink-0" />
              <span>On Desktop: Click the install icon in the browser address bar.</span>
            </p>
          </div>
        </div>

        {/* Dismiss Button */}
        <button
          onClick={onClose}
          className="w-full mt-4 py-2.5 rounded-xl border border-slate-200 text-slate-600 text-xs font-semibold hover:bg-slate-50 transition-colors cursor-pointer min-h-[42px]"
        >
          Got It
        </button>
      </div>
    </div>
  );
};
