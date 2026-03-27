"use client";
import React, { useState } from 'react';
import { BottomNavigation, NavTab } from '@soulfest/ui-core';

// MOCK DATA
const UPCOMING_TICKET = {
  id: "TKT-99281",
  tier: "VIP Experience",
  date: "Dec 11, 2026",
  location: "Kampar Heritage Park",
  qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=TKT-99281"
};

const ORDER_HISTORY = [
  { id: "ORD-1045", date: "Oct 20, 2026", items: "1x VIP Experience", amount: "RM 250.00", status: "Paid" },
  { id: "ORD-0921", date: "Nov 02, 2025", items: "2x General Admission", amount: "RM 160.00", status: "Attended" }
];

type TabId = 'tickets' | 'history' | 'profile';

const TABS: NavTab[] = [
  { id: 'tickets', label: 'Tickets', icon: '🎟️', activeColor: 'text-[#FF1493]' },
  { id: 'history', label: 'History', icon: '🧾', activeColor: 'text-[#008080]' },
  { id: 'profile', label: 'Profile', icon: '👤', activeColor: 'text-slate-900' },
];


export default function TicketingMobileHub() {
  const [activeTab, setActiveTab] = useState<TabId>('tickets');

  return (
    <>
      {/* Dynamic Header */}
      <header className="bg-white px-6 pt-10 pb-5 shadow-sm z-10 flex justify-between items-end flex-shrink-0">
        <div>
          <h1 className="text-2xl font-black text-[#FF1493]">
            {activeTab === 'tickets' ? 'My Tickets' : activeTab === 'history' ? 'Order History' : 'Profile'}
          </h1>
          <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-1">Kampar Heritage Festival</p>
        </div>
        <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden flex items-center justify-center text-slate-600 font-bold shadow-inner">
          JD
        </div>
      </header>

      {/* Scrollable Content Area */}
      <main className="flex-1 overflow-y-auto w-full bg-slate-50">
        <div className="p-5 pb-24 space-y-6">
          
          {/* TAB: TICKETS */}
          {activeTab === 'tickets' && (
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
              <h2 className="text-sm font-bold text-slate-400 mb-3 px-2 uppercase tracking-wide">Ready for Scan</h2>
              <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100 flex flex-col items-center text-center">
                <span className="bg-[#FFD700] text-slate-900 text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest mb-4">
                  {UPCOMING_TICKET.tier}
                </span>
                <h3 className="text-2xl font-black text-slate-900 mb-1">Soulfest 2026</h3>
                <p className="text-xs font-semibold text-slate-400 mb-6">{UPCOMING_TICKET.date} &bull; {UPCOMING_TICKET.location}</p>
                
                <div className="bg-slate-50 p-4 rounded-3xl mb-6 shadow-iner border border-slate-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={UPCOMING_TICKET.qrCode} alt="Ticket QR" className="w-48 h-48 mix-blend-multiply opacity-90" />
                </div>

                <p className="text-xs font-mono font-bold tracking-widest text-slate-400">{UPCOMING_TICKET.id}</p>
              </div>
              
              <button className="w-full mt-6 bg-[#008080] hover:bg-teal-700 text-white font-bold py-4 rounded-2xl transition-transform active:scale-95 shadow-md text-sm uppercase tracking-wide">
                Purchase More Passes
              </button>
            </div>
          )}

          {/* TAB: HISTORY */}
          {activeTab === 'history' && (
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300 space-y-4">
              {ORDER_HISTORY.map(order => (
                <div key={order.id} className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 flex flex-col gap-3 relative overflow-hidden">
                  <div className={`absolute top-0 left-0 w-1 h-full ${order.status === 'Paid' ? 'bg-emerald-400' : 'bg-slate-300'}`}></div>
                  <div className="flex justify-between items-start pl-2">
                    <span className="font-black text-slate-900 tracking-tight">{order.id}</span>
                    <span className={`text-[10px] px-2.5 py-1 rounded-full font-black uppercase tracking-wider ${order.status === 'Paid' ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' : 'bg-slate-100 text-slate-500'}`}>
                      {order.status}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm pl-2">
                    <span className="text-slate-600 font-medium">{order.items}</span>
                    <span className="font-black text-slate-900">{order.amount}</span>
                  </div>
                  <p className="text-xs font-semibold text-slate-400 mt-2 pl-2">{order.date}</p>
                </div>
              ))}
            </div>
          )}

          {/* TAB: PROFILE */}
          {activeTab === 'profile' && (
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300 space-y-6">
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
                <h3 className="font-black text-slate-900 mb-6">Personal Details</h3>
                <div className="space-y-5">
                  <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Full Name</label>
                    <input type="text" defaultValue="John Doe" className="w-full border-b-2 border-slate-100 bg-transparent py-2 px-1 font-semibold text-slate-900 focus:outline-none focus:border-[#FF1493] transition-colors" />
                  </div>
                  <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Email</label>
                    <input type="email" defaultValue="hello@johndoe.com" className="w-full border-b-2 border-slate-100 bg-transparent py-2 px-1 font-semibold text-slate-900 focus:outline-none focus:border-[#FF1493] transition-colors" />
                  </div>
                  <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Phone Number</label>
                    <input type="tel" defaultValue="+60 12-345 6789" className="w-full border-b-2 border-slate-100 bg-transparent py-2 px-1 font-semibold text-slate-900 focus:outline-none focus:border-[#FF1493] transition-colors" />
                  </div>
                </div>
                <button className="mt-8 font-bold text-xs text-[#FF1493] uppercase tracking-wide hover:opacity-80 transition-opacity">
                  Update Password &rarr;
                </button>
              </div>
              
              <button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-2xl transition-transform active:scale-95 shadow-md text-sm uppercase tracking-wide">
                Save Changes
              </button>
              <button className="w-full bg-transparent text-slate-400 font-bold py-4 hover:text-red-500 transition-colors text-xs uppercase tracking-widest">
                Sign Out
              </button>
            </div>
          )}

        </div>
      </main>

      {/* Shared App Shell Bottom Navigation from @soulfest/ui-core */}
      <BottomNavigation
        tabs={TABS}
        activeTabId={activeTab}
        onTabChange={(id) => setActiveTab(id as TabId)}
      />
    </>
  );
}
