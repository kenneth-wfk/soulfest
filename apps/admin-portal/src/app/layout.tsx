import React from 'react';
import { Inter } from "next/font/google";
import './globals.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Soulfest Admin',
  description: 'Management portal for Soulfest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`flex min-h-screen bg-[#050505] ${inter.className}`}>
        {/* Sidebar */}
        <aside className="w-64 border-r border-white/10 bg-[#0a0a0a] flex flex-col hidden md:flex">
          <div className="h-16 flex items-center px-6 border-b border-white/10">
            <h1 className="text-xl font-bold tracking-tight text-white">Soulfest <span className="text-primary">Admin</span></h1>
          </div>
          <nav className="flex-1 p-4 flex flex-col gap-2">
            <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md bg-primary/10 text-primary font-medium">
              Dashboard
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5 text-white/70 hover:text-white transition-colors">
              News & Content
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5 text-white/70 hover:text-white transition-colors">
              Ticketing & Orders
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5 text-white/70 hover:text-white transition-colors">
              Bank Slips
            </a>
          </nav>
          <div className="p-4 border-t border-white/10">
            <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5 text-white/70 cursor-pointer">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">A</div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-white">Admin User</span>
                <span className="text-xs">Logout</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col">
          {/* Top Header */}
          <header className="h-16 border-b border-white/10 bg-[#050505]/80 backdrop-blur-md sticky top-0 flex items-center justify-between px-6 z-10 w-full">
            <div className="flex items-center gap-4">
              {/* Mobile menu stub */}
              <button className="md:hidden text-white/70">Menu</button>
              <h2 className="text-lg font-medium">Overview</h2>
            </div>
            <div className="flex items-center gap-4 text-sm text-white/50">
              Environment: Mock Mode
            </div>
          </header>

          {/* Page Content */}
          <main className="flex-1 p-6 md:p-8 overflow-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
