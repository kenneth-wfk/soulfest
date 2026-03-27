"use client";
import React from 'react';

export interface NavTab {
  id: string;
  label: string;
  icon: React.ReactNode;
  activeColor?: string;
}

export interface BottomNavigationProps {
  tabs: NavTab[];
  activeTabId: string;
  onTabChange: (tabId: string) => void;
  /** Max width of the container (should match the app shell). Defaults to 768px. */
  maxWidth?: string;
  className?: string;
}

export function BottomNavigation({
  tabs,
  activeTabId,
  onTabChange,
  maxWidth = '768px',
  className = '',
}: BottomNavigationProps) {
  return (
    <nav
      className={`fixed bottom-0 left-1/2 -translate-x-1/2 w-full bg-white border-t border-slate-200 px-8 pt-3 pb-6 md:pb-3 flex justify-between items-center z-50 ${className}`}
      style={{ maxWidth }}
    >
      {tabs.map((tab) => {
        const isActive = activeTabId === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex flex-col items-center gap-1.5 transition-all ${
              isActive
                ? `${tab.activeColor ?? 'text-slate-900'} scale-105`
                : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            <span className="text-xl leading-none">{tab.icon}</span>
            <span className="text-[9px] font-black uppercase tracking-widest">
              {tab.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
