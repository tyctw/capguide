import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden px-4">
      {/* Interactive Background Shape */}
      <div className="absolute inset-0 max-w-6xl mx-auto top-32 bottom-20 bg-indigo-100 rounded-[40px] transform rotate-3 -z-10 shadow-sm opacity-50 md:opacity-100" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="z-10 text-center max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-yellow-300 text-yellow-900 px-4 py-2 rounded-md font-black text-sm md:text-base mb-8 shadow-sm"
        >
          <Sparkles className="w-4 h-4" />
          <span>最新版 115 學年度</span>
        </motion.div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black tracking-tight mb-6 leading-tight text-slate-900">
          不再迷惘的<br />
          <span className="text-orange-500 underline decoration-8 decoration-indigo-200 underline-offset-8">
            志願選填攻略
          </span>
        </h1>

        <p className="text-lg md:text-2xl text-slate-600 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
          不要讓辛苦考來的分數，因為填錯志願而白費！
          三分鐘搞懂超額比序與黃金選填策略。
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <motion.a
            href="https://tyctw.github.io/spare/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-3 px-8 py-4 bg-orange-500 text-white font-black text-xl rounded-2xl overflow-hidden transition-all shadow-xl shadow-orange-200 hover:bg-orange-400"
          >
            <span className="relative z-10">前往落點分析</span>
            <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-1 transition-transform" />
          </motion.a>
          
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              document.getElementById('strategy')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex w-full sm:w-auto items-center justify-center gap-3 px-8 py-4 bg-white text-slate-800 font-black text-xl rounded-2xl border-4 border-slate-200 hover:border-slate-300 transition-all"
          >
            了解選填策略
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
