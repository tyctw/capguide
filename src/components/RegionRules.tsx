import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { REGION_RULES_DATA } from '../data';

export default function RegionRules() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-24 px-4 relative z-10 bg-[#FFF8F0]">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": REGION_RULES_DATA.map(region => ({
              "@type": "Question",
              "name": `${region.region}115學年度免試入學超額比序規則為何？滿分是多少？`,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": `滿分: ${region.maxScore}。包含以下項目: ${region.details.map(d => d.category).join(', ')}。`
              }
            }))
          })
        }}
      />
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-yellow-300 text-yellow-900 px-3 py-1 rounded-md text-sm font-black mb-4">
            必備知識
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-slate-900 border-b-8 border-indigo-200 inline-block pb-2">
            📍 各區超額比序規則 (115學年度)
          </h2>
          <p className="text-slate-600 font-medium text-lg max-w-2xl mx-auto">
            看懂你所在學區的計分方式，才能最大化你的會考積分優勢！
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {REGION_RULES_DATA.map((region, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-8 py-3 rounded-full font-black text-lg transition-all ${
                activeTab === index
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200 scale-105'
                  : 'bg-white text-slate-500 border-2 border-slate-200 hover:border-indigo-300 hover:text-indigo-500'
              }`}
            >
              {region.region}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-white rounded-[40px] border-4 border-slate-900 p-8 shadow-xl relative overflow-hidden">
          {/* Decorative Corner */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-bl-[100px] -z-10"></div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-between items-center mb-8 border-b-2 border-dashed border-slate-200 pb-4">
                <h3 className="text-3xl font-black text-slate-900">
                  {REGION_RULES_DATA[activeTab].region} <span className="text-xl text-slate-400 font-bold ml-2">積分對照表</span>
                </h3>
                <div className="bg-yellow-300 text-yellow-900 px-4 py-2 rounded-xl font-black shadow-sm">
                  {typeof REGION_RULES_DATA[activeTab].maxScore === 'number'
                    ? `滿分 ${REGION_RULES_DATA[activeTab].maxScore} 分`
                    : REGION_RULES_DATA[activeTab].maxScore}
                </div>
              </div>

              <div className="space-y-6">
                {REGION_RULES_DATA[activeTab].details.map((detail, dIndex) => (
                  <div key={dIndex} className="bg-slate-50 rounded-2xl p-6 border-2 border-slate-100">
                    <h4 className="text-xl font-black text-indigo-600 mb-4">{detail.category}</h4>
                    <ul className="space-y-3">
                      {detail.items.map((item, iIndex) => (
                        <li key={iIndex} className="flex items-start gap-3">
                          <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                            {iIndex + 1}
                          </span>
                          <span className="text-slate-700 font-medium leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
