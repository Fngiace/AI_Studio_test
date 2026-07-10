/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { AnatomyHotspot } from "../types";
import { HelpCircle, ChevronRight, Eye, ShieldCheck } from "lucide-react";

export default function AnatomySection() {
  const [selectedId, setSelectedId] = useState<string>("pleats");

  const hotspots: AnatomyHotspot[] = [
    {
      id: "pleats",
      name: "18道摺痕",
      x: 50,
      y: 18,
      title: "手工提褶 · 頂部收口",
      subtitle: "完美的菊花頂與寶塔狀",
      description: "手工捏製十八道以上摺痕，形成緊密的頂部收攏結點。這不僅是視覺上的極致，更決定了蒸煮時包子內部的氣壓循環。",
      secretKey: "鎖汁秘訣",
      secretDetail: "收口必須完全鎖死，不留縫隙，否則大火蒸煮時膨脹的熱氣與湯汁會從頂部噴射流失。"
    },
    {
      id: "skin",
      name: "半發麵薄皮",
      x: 20,
      y: 42,
      title: "薄如蟬翼 · 韌性十足",
      subtitle: "承載20克湯汁不破的奇蹟",
      description: "麵皮由精選小麥粉加溫水揉成，不添加任何化學蓬鬆劑。擀皮手法外薄內厚，使底部能承載豐富湯汁，頂部捏合處又不會過於厚重。",
      secretKey: "配方秘訣",
      secretDetail: "和麵時加入微量食鹽能提高麵筋活性，經過充分「醒麵」使麵團延伸性與抗拉力達到極致。"
    },
    {
      id: "broth",
      name: "鮮美琥珀湯",
      x: 42,
      y: 65,
      title: "高溫融化 · 濃郁醇厚",
      subtitle: "皮凍化汁，入口即融的湯泉",
      description: "小籠包的靈魂湯汁並非注入，而是由特製皮凍與肉餡混合後，在蒸籠高熱下融化而成。湯頭金黃清澈，鮮而不膩，充滿膠原蛋白。",
      secretKey: "熬煮秘訣",
      secretDetail: "精選富含膠原的優質豬皮，加入老母雞、金華火腿、生薑與紹興酒燉煮4小時，過濾三次冷卻而成。"
    },
    {
      id: "filling",
      name: "溫體前腿肉",
      x: 65,
      y: 52,
      title: "肥三瘦七 · 鮮嫩緊實",
      subtitle: "打入生薑小蔥水的黃金內餡",
      description: "肉餡選用新鮮豬前腿夾心肉，肥瘦比例嚴格維持「三成肥、七成瘦」。攪拌時必須朝同一方向「打水」至肉質起膠上勁，肉質才會彈牙細緻。",
      secretKey: "去腥調味",
      secretDetail: "不放濃重香料，僅用生薑小蔥泡製的鮮水慢慢打入肉餡，保留豬肉最原始的甘甜與醇香。"
    },
    {
      id: "pine",
      name: "古法松針墊",
      x: 50,
      y: 88,
      title: "防黏隔離 · 天然松香",
      subtitle: "傳統大氣孔與防粘連底墊",
      description: "傳統杭州小籠包蒸煮時，籠底不墊紙或布，而是鋪滿洗淨的野外馬尾松針（松樹葉），能起隔離防黏、導熱均勻之效。",
      secretKey: "隱藏香氣",
      secretDetail: "松針在高熱蒸汽下會釋放出一股淡淡的木質清香，滲透進包底，讓小籠包帶有一絲清雅的自然風味。"
    }
  ];

  const currentHotspot = hotspots.find((h) => h.id === selectedId) || hotspots[0];

  return (
    <section id="anatomy-explorer" className="py-20 bg-[#1A1816] text-[#E8DCC4] px-4 sm:px-6 lg:px-8 border-t border-b border-[#302518]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="flex justify-center items-center gap-1.5 text-[#DAB88B]">
            <Eye className="w-5 h-5" />
            <span className="text-sm font-semibold tracking-widest uppercase font-mono">剖析美味 · 黃金結構</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-white">
            小籠包內部結構解密
          </h2>
          <p className="text-[#A5957E] text-base sm:text-lg">
            點擊下方剖面圖中的熱點，一窺這顆僅有二十克重的小籠包中，藏有哪些驚人的美味機密與手藝秘密。
          </p>
        </div>

        {/* Interactive Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block: Interactive SVG Diagram of Xiaolongbao */}
          <div className="lg:col-span-6 flex justify-center relative">
            <div className="relative w-full max-w-[420px] aspect-square rounded-full border border-[#3D3020]/40 bg-[#121110] flex items-center justify-center p-6 shadow-2xl">
              
              {/* Bamboo base outline */}
              <div className="absolute inset-0 rounded-full border-4 border-[#3D3020]/20 pointer-events-none"></div>

              {/* Styled Vector SVG representing cutaway / glowing transparency of Xiaolongbao */}
              <svg className="w-full h-full text-stone-700" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Steamer Pine Needles Base (Visual representations) */}
                <path d="M50 350 L350 350 M70 330 L330 330" stroke="#4C5435" strokeWidth="6" strokeLinecap="round" opacity="0.4" />
                <path d="M100 360 L300 360 M120 370 L280 370" stroke="#3D422A" strokeWidth="8" strokeLinecap="round" opacity="0.3" />

                {/* Outer Dumpling Translucent Skin Layer */}
                <path d="M100 280 Q70 180 200 80 Q330 180 300 280 Z" fill="url(#skinGradient)" stroke="#E5D2BA" strokeWidth="2.5" opacity="0.85" />
                
                {/* 18 folds visual representation lines */}
                <path d="M200 80 C180 120 160 170 100 280" stroke="#DFCDBC" strokeWidth="1.5" opacity="0.5" />
                <path d="M200 80 C190 130 180 190 150 280" stroke="#DFCDBC" strokeWidth="1.5" opacity="0.5" />
                <path d="M200 80 C200 140 200 200 200 280" stroke="#DFCDBC" strokeWidth="1.5" opacity="0.5" />
                <path d="M200 80 C210 130 220 190 250 280" stroke="#DFCDBC" strokeWidth="1.5" opacity="0.5" />
                <path d="M200 80 C220 120 240 170 300 280" stroke="#DFCDBC" strokeWidth="1.5" opacity="0.5" />

                {/* Hot savory broth pond (Golden Liquid) */}
                <path d="M110 280 Q105 190 200 190 Q295 190 290 280 Z" fill="url(#brothGradient)" opacity="0.75" />
                
                {/* Meat Filling Core (Tender Red-brown ball) */}
                <circle cx="200" cy="245" r="55" fill="url(#meatGradient)" stroke="#8C4233" strokeWidth="1" />
                
                {/* Steaming liquid highlights and bubbles */}
                <circle cx="170" cy="275" r="4" fill="#FFEBB3" opacity="0.6" />
                <circle cx="230" cy="265" r="3" fill="#FFEBB3" opacity="0.7" />
                <circle cx="210" cy="282" r="5" fill="#FFFFFF" opacity="0.5" />

                {/* Gradients Definitions */}
                <defs>
                  <radialGradient id="skinGradient" cx="50%" cy="30%" r="70%">
                    <stop offset="0%" stopColor="#FFFDF9" />
                    <stop offset="70%" stopColor="#FAF3E5" />
                    <stop offset="100%" stopColor="#D9C2A4" />
                  </radialGradient>
                  <radialGradient id="brothGradient" cx="50%" cy="70%" r="50%">
                    <stop offset="0%" stopColor="#FFE094" />
                    <stop offset="60%" stopColor="#E0AC43" />
                    <stop offset="100%" stopColor="#A8751B" />
                  </radialGradient>
                  <radialGradient id="meatGradient" cx="40%" cy="40%" r="60%">
                    <stop offset="0%" stopColor="#D6806E" />
                    <stop offset="70%" stopColor="#A85746" />
                    <stop offset="100%" stopColor="#703225" />
                  </radialGradient>
                </defs>
              </svg>

              {/* Interactive Hotspot Buttons mapped over the SVG container */}
              {hotspots.map((h) => {
                const isActive = h.id === selectedId;
                return (
                  <button
                    key={h.id}
                    onClick={() => setSelectedId(h.id)}
                    className="absolute group z-20 focus:outline-none cursor-pointer"
                    style={{ left: `${h.x}%`, top: `${h.y}%`, transform: "translate(-50%, -50%)" }}
                  >
                    {/* Ring aura */}
                    <span className={`absolute inset-0 rounded-full bg-[#DAB88B] transition-transform duration-700 ${
                      isActive ? "scale-220 opacity-30 animate-ping" : "scale-100 opacity-0 group-hover:scale-150 group-hover:opacity-20"
                    }`}></span>

                    {/* Glowing button dot */}
                    <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center border font-bold transition duration-300 text-xs ${
                      isActive
                        ? "bg-[#DAB88B] text-black border-white shadow-lg"
                        : "bg-[#1E1C1A] text-[#DAB88B] border-[#5E4C38] group-hover:bg-[#DAB88B] group-hover:text-black group-hover:border-white"
                    }`}>
                      <HelpCircle className="w-4 h-4 shrink-0" />
                    </div>

                    {/* Label tooltip (Desktop hover friendly) */}
                    <div className="absolute top-9 left-1/2 -translate-x-1/2 bg-[#25221F] text-white border border-[#44382A] text-[11px] px-2 py-0.5 rounded shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition duration-200 pointer-events-none">
                      {h.name}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Block: Content Details panel of selected Hotspot */}
          <div className="lg:col-span-6">
            <div className="bg-[#25221F] rounded-2xl border border-[#3E3326] p-6 sm:p-8 min-h-[380px] flex flex-col justify-between shadow-xl relative overflow-hidden">
              {/* Decorative Corner Asset */}
              <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-[#DAB88B]/10 rounded-tr-2xl pointer-events-none"></div>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedId}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {/* Category Header */}
                  <div className="space-y-2">
                    <span className="text-xs font-mono tracking-wider text-[#DAB88B] uppercase font-bold">
                      構造成分 · 局部解析
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                      {currentHotspot.title}
                    </h3>
                    <p className="text-sm text-[#A5957E] font-medium italic">
                      {currentHotspot.subtitle}
                    </p>
                  </div>

                  {/* Main description */}
                  <p className="text-[#C5B9A5] leading-relaxed text-sm sm:text-base">
                    {currentHotspot.description}
                  </p>

                  {/* Master secret block */}
                  <div className="p-4 bg-[#1E1C1A] border-l-4 border-[#A8751B] rounded-r-lg space-y-1.5">
                    <div className="flex items-center gap-1.5 text-[#DAB88B] text-xs font-bold uppercase tracking-wider">
                      <ShieldCheck className="w-4 h-4 text-[#DAB88B]" />
                      <span>{currentHotspot.secretKey}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#A5957E] italic">
                      {currentHotspot.secretDetail}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Bottom Quick Select Indicator List */}
              <div className="border-t border-[#3D3020] pt-6 mt-8">
                <p className="text-[11px] font-mono tracking-wider text-[#8E806A] uppercase mb-3">
                  快速切換視角
                </p>
                <div className="flex flex-wrap gap-2">
                  {hotspots.map((h) => (
                    <button
                      key={h.id}
                      onClick={() => setSelectedId(h.id)}
                      className={`px-3 py-1.5 rounded-md text-xs transition duration-200 cursor-pointer ${
                        h.id === selectedId
                          ? "bg-[#DAB88B] text-black font-semibold"
                          : "bg-[#1E1C1A] text-[#A5957E] hover:bg-[#32271C] hover:text-[#DAB88B] border border-[#3E3326]"
                      }`}
                    >
                      {h.name}
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
