import { motion } from 'motion/react';
import { Calculator, Swords, TrendingDown } from 'lucide-react';
import { RULES_DATA } from '../data';

const iconMap: Record<string, React.ReactNode> = {
  Calculator: <Calculator className="w-8 h-8" />,
  Swords: <Swords className="w-8 h-8" />,
  TrendingDown: <TrendingDown className="w-8 h-8" />
};

export default function Rules() {
  return (
    <section className="py-24 px-4 relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-slate-900 border-b-8 border-indigo-200 inline-block pb-2">⚔️ 遊戲規則解析</h2>
          <p className="text-slate-600 font-medium text-lg max-w-2xl mx-auto">
            會考分發就像一場大型生存遊戲，不懂規則就容易吃大虧。
          </p>
        </motion.div>

        <div className="space-y-6">
          {RULES_DATA.map((rule, index) => {
            const borderColors = ['border-indigo-500', 'border-orange-500', 'border-cyan-500'];
            const borderColor = borderColors[index % borderColors.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className={`flex flex-col md:flex-row items-start md:items-center gap-6 p-6 md:p-8 bg-white rounded-3xl shadow-md border-b-8 ${borderColor} hover:translate-y-[-4px] transition-transform`}
              >
                <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center text-indigo-600 shrink-0">
                  {iconMap[rule.icon]}
                </div>
                <div>
                  <h3 className="text-2xl font-black mb-2 text-slate-800">{rule.title}</h3>
                  <p className="text-slate-600 font-medium leading-relaxed">
                    {rule.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
