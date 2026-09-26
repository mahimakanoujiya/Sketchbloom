import React from 'react';
import { Home, Compass, PenTool, Image as ImageIcon } from 'lucide-react';
import { ActiveTab } from '../types';

interface NavbarProps {
  activeTab: ActiveTab;
  onTabChange: (tab: ActiveTab) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'home' as ActiveTab, label: 'Home', icon: Home },
    { id: 'explore' as ActiveTab, label: 'Explore', icon: Compass },
    { id: 'practice' as ActiveTab, label: 'Practice', icon: PenTool },
    { id: 'myart' as ActiveTab, label: 'My Art', icon: ImageIcon },
  ];

  return (
    <nav
      aria-label="Bottom Navigation"
      className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-sky-100 shadow-[0_-4px_20px_rgba(2,132,199,0.08)]"
    >
      <div className="max-w-lg mx-auto grid grid-cols-4 items-center h-16 px-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center justify-center h-full min-h-[44px] min-w-[44px] py-1 transition-all duration-200 active:scale-95 ${
                isActive ? 'text-sky-600 font-semibold' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <div
                className={`relative p-1.5 rounded-xl transition-all duration-200 ${
                  isActive ? 'bg-sky-100 text-sky-600' : 'text-slate-500'
                }`}
              >
                <Icon className="w-5 h-5" strokeWidth={isActive ? 2.5 : 2} />
              </div>
              <span className={`text-[11px] mt-0.5 tracking-tight ${isActive ? 'font-bold text-sky-600' : 'font-medium'}`}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
