/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from './components/Hero';
import Strategy from './components/Strategy';
import Rules from './components/Rules';
import RegionRules from './components/RegionRules';
import FAQ from './components/FAQ';
import Articles from './components/Articles';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FFF8F0] text-slate-900 selection:bg-orange-200 font-sans">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FFF8F0]/90 backdrop-blur-md border-b-2 border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center shadow-md transform rotate-3">
              <span className="text-white font-black text-xl">TW</span>
            </div>
            <div>
              <h1 className="text-xl font-black tracking-tight text-slate-800 leading-tight">TW會考落點分析</h1>
              <p className="text-[10px] font-bold text-orange-600 tracking-widest uppercase">CAP Entrance Strategy</p>
            </div>
          </div>
          <a 
            href="https://tyctw.github.io/spare/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-indigo-600 text-white px-5 py-2 md:px-6 md:py-2.5 rounded-full font-bold shadow-lg hover:bg-indigo-500 transition-all hover:-translate-y-0.5 text-sm md:text-base"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            進入系統
          </a>
        </div>
      </nav>

      <div className="pt-20">
        <Hero />
        <Strategy />
        <Articles />
        <Rules />
        <RegionRules />
        <FAQ />
      </div>
      
      <footer className="py-12 mt-10 text-center text-slate-500 font-medium border-t-2 border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 flex flex-col items-center gap-4">
          <p className="text-lg text-slate-600 font-bold mb-2">祝各位會考生：考上的都是理想，分發的都是所愛！🎓</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 text-sm">
            <p>© {new Date().getFullYear()} TW會考落點分析. All rights reserved.</p>
            <div className="hidden md:block w-1.5 h-1.5 bg-slate-300 rounded-full"></div>
            <p className="flex items-center gap-1">
              聯絡資訊：
              <a href="mailto:tyctw.analyze@gmail.com" className="text-orange-500 hover:text-orange-600 hover:underline font-semibold transition-colors">
                tyctw.analyze@gmail.com
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
