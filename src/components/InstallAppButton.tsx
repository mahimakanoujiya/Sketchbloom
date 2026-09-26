import React, { useState } from 'react';
import { Download, CheckCircle2, Smartphone, Sparkles } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { InstallModal } from './InstallModal';

interface InstallAppButtonProps {
  variant?: 'header' | 'card' | 'banner';
}

export const InstallAppButton: React.FC<InstallAppButtonProps> = ({ variant = 'header' }) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleClick = async () => {
    if (isInstallable) {
      const installed = await install();
      if (!installed) {
        setShowModal(true);
      }
    } else {
      setShowModal(true);
    }
  };

  // If already running in standalone mode:
  if (isInstalled) {
    if (variant === 'header') {
      return (
        <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
          <span>App Installed</span>
        </div>
      );
    }
    return null;
  }

  // Header compact button
  if (variant === 'header') {
    return (
      <>
        <button
          onClick={handleClick}
          aria-label="Install SketchBloom app to your device"
          title="Install App"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-sky-500 hover:bg-sky-600 text-white shadow-xs shadow-sky-200 text-xs font-bold transition-all active:scale-95 cursor-pointer min-h-[36px]"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Install</span>
        </button>

        <InstallModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          onInstall={install}
          isInstallable={isInstallable}
          isIOS={isIOS}
        />
      </>
    );
  }

  // Home feed banner card
  return (
    <>
      <div className="bg-gradient-to-r from-sky-500/10 via-blue-500/10 to-sky-500/10 rounded-3xl p-4 border border-sky-200/80 shadow-2xs flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-10 h-10 rounded-2xl bg-sky-500 text-white flex items-center justify-center shrink-0 shadow-xs shadow-sky-200">
            <Smartphone className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1 text-[11px] font-bold text-sky-600 uppercase tracking-wide">
              <Sparkles className="w-3 h-3" />
              <span>Free PWA App</span>
            </div>
            <h4 className="text-xs font-bold text-slate-900 truncate">
              Install SketchBloom to Your Device
            </h4>
            <p className="text-[11px] text-slate-500 line-clamp-1">
              Draw offline anytime with full-screen canvas and fast launch.
            </p>
          </div>
        </div>

        <button
          onClick={handleClick}
          className="shrink-0 flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-sky-500 hover:bg-sky-600 text-white text-xs font-bold shadow-xs shadow-sky-200 transition-all active:scale-95 cursor-pointer min-h-[44px]"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Install</span>
        </button>
      </div>

      <InstallModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onInstall={install}
        isInstallable={isInstallable}
        isIOS={isIOS}
      />
    </>
  );
};
