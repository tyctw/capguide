import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ARTICLES_DATA } from '../data';
import { ArrowRight, Megaphone, X } from 'lucide-react';

export default function Articles() {
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);

  useEffect(() => {
    if (selectedArticle !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedArticle]);

  return (
    <section className="py-24 px-4 relative z-10 bg-[#FFF8F0]">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": ARTICLES_DATA.map((article, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "Article",
                "headline": article.title,
                "abstract": article.excerpt,
                "author": {
                  "@type": "Organization",
                  "name": "TW會考落點分析"
                }
              }
            }))
          })
        }}
      />
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-yellow-300 text-yellow-900 px-3 py-1 rounded-md text-sm font-black mb-4">
            必讀專欄
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-slate-900 border-b-8 border-cyan-200 inline-block pb-2">
            🗞️ 115會考 情報與文章
          </h2>
          <p className="text-slate-600 font-medium text-lg max-w-2xl mx-auto">
            掌握最新會考趨勢與高分秘訣，為你的志願選填增添勝算。
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {ARTICLES_DATA.map((article, index) => (
            <React.Fragment key={index}>
              {/* Insert highly converting Ad Banner after the first 2 articles */}
              {index === 2 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="md:col-span-2 bg-gradient-to-r from-orange-500 to-indigo-600 rounded-3xl p-8 shadow-xl relative overflow-hidden group cursor-pointer"
                >
                  <div className="absolute top-0 right-0 bg-yellow-300 text-yellow-900 text-xs font-black px-3 py-1 rounded-bl-xl z-20">
                    贊助廣告 AD
                  </div>
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                  
                  <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-white flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <Megaphone className="w-5 h-5 text-yellow-300" />
                        <span className="font-bold text-yellow-300 tracking-wider text-sm">火熱報名中</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-black mb-3 leading-tight">
                        115會考專屬 <br className="hidden md:block"/> AI 智能落點分析系統
                      </h3>
                      <p className="text-indigo-100 font-medium text-lg max-w-lg">
                        輸入歷次模考成績，一鍵產出你的最佳「夢幻/務實/保底」黃金志願清單！不怕高分低就！
                      </p>
                    </div>
                    <a href="https://tyctw.github.io/spare/" target="_blank" rel="noopener noreferrer" className="whitespace-nowrap inline-block text-center w-full md:w-auto bg-white text-slate-900 font-black px-8 py-4 rounded-xl text-lg shadow-lg hover:bg-yellow-300 hover:scale-105 transition-all">
                      立即免費測試
                    </a>
                  </div>
                </motion.div>
              )}

              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedArticle(index)}
                className={`bg-white rounded-3xl shadow-sm border-2 border-slate-100 p-6 flex flex-col h-full hover:shadow-lg hover:border-slate-300 transition-all cursor-pointer group`}
              >
                <div className="flex justify-between items-center mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${article.color}`}>
                    {article.category}
                  </span>
                  <span className="text-sm font-bold text-slate-400">
                    {article.readTime}
                  </span>
                </div>
                
                <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-slate-500 font-medium leading-relaxed mb-6 flex-grow">
                  {article.excerpt}
                </p>
                
                <div className="mt-auto pt-4 border-t-2 border-dashed border-slate-100 flex items-center text-slate-400 font-bold group-hover:text-slate-900 transition-colors">
                  閱讀全文 <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.article>
            </React.Fragment>
          ))}
        </div>
      </div>

      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {selectedArticle !== null && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedArticle(null)}
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
              />
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="bg-white w-full max-w-3xl max-h-[90vh] rounded-[32px] shadow-2xl relative z-10 flex flex-col overflow-hidden border-4 border-slate-900"
              >
                <div className="p-6 md:p-8 border-b-2 border-slate-100 flex justify-between items-start sticky top-0 bg-white z-20">
                  <div>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 ${ARTICLES_DATA[selectedArticle].color}`}>
                      {ARTICLES_DATA[selectedArticle].category}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight pr-8">
                      {ARTICLES_DATA[selectedArticle].title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="bg-slate-100 hover:bg-slate-200 text-slate-500 p-2 rounded-full transition-colors shrink-0 absolute top-6 right-6"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                
                <div className="p-6 md:p-8 overflow-y-auto">
                  <div className="flex items-center gap-4 text-slate-400 font-bold text-sm mb-8">
                    <span>閱讀時間：{ARTICLES_DATA[selectedArticle].readTime}</span>
                    <span>發布日期：2026.06</span>
                  </div>
                  
                  <div className="text-lg text-slate-700 leading-relaxed space-y-6 font-medium">
                    {ARTICLES_DATA[selectedArticle].content?.split('\n\n').map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>
                  
                  <div className="mt-12 bg-orange-50 border-2 border-orange-200 rounded-2xl p-6 text-center">
                    <h4 className="text-xl font-black text-slate-900 mb-2">準備好找出你的落點了嗎？</h4>
                    <p className="text-slate-600 font-medium mb-5">點擊下方按鈕，了解最新的會考志願分析服務。</p>
                    <a href="https://tyctw.github.io/spare/" target="_blank" rel="noopener noreferrer" onClick={() => setSelectedArticle(null)} className="inline-block bg-orange-500 text-white font-black text-lg px-8 py-4 rounded-xl shadow-lg hover:bg-orange-600 hover:-translate-y-1 transition-all">
                      開始落點分析
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}
