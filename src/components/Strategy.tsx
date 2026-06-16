import { motion } from 'motion/react';
import { STRATEGY_DATA } from '../data';

export default function Strategy() {
  return (
    <section id="strategy" className="py-24 px-4 relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-slate-900 border-b-8 border-yellow-300 inline-block pb-2">🏆 黃金志願選填比例</h2>
          <p className="text-slate-600 font-medium text-lg max-w-2xl mx-auto">
            把志願拆分成三個戰區，是最穩妥且能最大化自己成績價值的做法。
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {STRATEGY_DATA.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`p-8 rounded-3xl shadow-md border-b-8 ${item.border} ${item.bg} flex flex-col h-full hover:translate-y-[-4px] transition-transform`}
            >
              <h3 className={`text-2xl font-black mb-4 ${item.text}`}>{item.title}</h3>
              <p className="text-slate-500 font-medium mb-8 flex-grow leading-relaxed">
                {item.description}
              </p>
              <div className={`mt-auto pt-4 border-t-2 border-dashed border-slate-200 font-bold ${item.text}`}>
                {item.slots}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
