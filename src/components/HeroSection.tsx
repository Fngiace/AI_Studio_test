/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Flame, Star, Compass, Award } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#121110] text-[#E8DCC4] py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#322A20]">
      {/* Absolute Decorative Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#C4A478] rounded-full blur-3xl filter -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#966E40] rounded-full blur-3xl filter translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left: Text Content */}
        <div className="lg:col-span-7 space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#2C2318] border border-[#503E2B] text-xs font-mono tracking-wider text-[#C4A478] uppercase"
          >
            <Award className="w-3.5 h-3.5" />
            <span>中華傳統麵點之冠</span>
          </motion.div>

          <div className="space-y-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white leading-[1.2]"
            >
              江南雅韻 <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DAB88B] via-[#C4A478] to-[#9E7D55]">
                杭州小籠包
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg text-[#C5B9A5] leading-relaxed max-w-2xl font-sans"
            >
              「皮薄如紙、吹彈可破；汁豐若泉、入口即融。」起源於江南的經典美味，在杭州繁華之地歷經百年洗禮。
              手藝人精雕細琢的十八道褶皺中，包裹著滾燙鮮濃的醇厚湯汁，承載著極致的匠心與溫度。
            </motion.p>
          </div>

          {/* Quick Features */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="grid grid-cols-3 gap-4 border-t border-[#2C2318] pt-8"
          >
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-[#DAB88B] font-serif text-lg font-bold">
                <span>18</span>
                <span className="text-xs text-[#A5957E] font-sans font-normal">褶以上</span>
              </div>
              <p className="text-xs text-[#8E806A] font-sans">黃金手工比例</p>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-[#DAB88B] font-serif text-lg font-bold">
                <span>1:1</span>
                <span className="text-xs text-[#A5957E] font-sans font-normal">皮肉比</span>
              </div>
              <p className="text-xs text-[#8E806A] font-sans">輕盈彈嫩口感</p>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-[#DAB88B] font-serif text-lg font-bold">
                <span>7</span>
                <span className="text-xs text-[#A5957E] font-sans font-normal">分鐘</span>
              </div>
              <p className="text-xs text-[#8E806A] font-sans">高溫大火瞬蒸</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <a 
              href="#anatomy-explorer" 
              className="px-6 py-3 rounded bg-gradient-to-r from-[#C4A478] to-[#AA8555] text-black font-medium hover:brightness-115 transition shadow-lg shadow-[#aa85551c] text-sm text-center"
            >
              探索小籠包構造
            </a>
            <a 
              href="#steam-simulator" 
              className="px-6 py-3 rounded bg-[#251E16] border border-[#503E2B] text-[#DAB88B] hover:bg-[#32271C] transition text-sm text-center"
            >
              開始虛擬蒸煮
            </a>
          </motion.div>
        </div>

        {/* Right: Immersive Steamer Illustration with Rising Steam */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:col-span-5 flex flex-col items-center justify-center relative"
        >
          {/* Decorative Halo behind steamer */}
          <div className="absolute w-72 h-72 sm:w-80 sm:h-80 bg-radial from-[#966E40]/30 to-transparent rounded-full blur-2xl"></div>

          {/* Steamer Basket Visual Render */}
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center">
            
            {/* Real SVG-based animated steam rising from behind/inside */}
            <div className="absolute -top-12 flex justify-around w-48 h-32 pointer-events-none z-20">
              <svg className="w-10 h-24 text-white/20 steam-animation-1" viewBox="0 0 40 100">
                <path d="M20,90 Q10,70 30,50 T10,10" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
              <svg className="w-12 h-24 text-white/15 steam-animation-2" viewBox="0 0 40 100">
                <path d="M15,90 Q30,75 10,45 T25,10" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
              <svg className="w-10 h-24 text-white/25 steam-animation-3" viewBox="0 0 40 100">
                <path d="M25,90 Q5,65 20,40 T15,10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>

            {/* Steamer Outer Ring (Isometric Style Vector) */}
            <div className="absolute inset-0 bg-[#3a2f22] rounded-full shadow-2xl border-8 border-[#524434] flex items-center justify-center p-3">
              {/* Bamboo weave interior */}
              <div className="w-full h-full rounded-full border-4 border-[#302518] bg-[#614F3C] bg-[radial-gradient(#5a4937_20%,_transparent_20%)] [background-size:8px_8px] overflow-hidden flex items-center justify-center relative">
                
                {/* Steamer Bamboo Slats overlay */}
                <div className="absolute inset-0 flex flex-col justify-between opacity-30 pointer-events-none">
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className="h-1 bg-black w-full"></div>
                  ))}
                </div>

                {/* Pine needles / bamboo leaves padding (traditionally used under dumplings) */}
                <div className="absolute inset-2 rounded-full bg-[#3d422a] border border-[#2b2e1e] opacity-85 flex items-center justify-center">
                  <div className="absolute inset-0 bg-[radial-gradient(#4d5436_15%,_transparent_15%)] [background-size:6px_6px]"></div>
                </div>

                {/* 3 Perfect Dumplings Rendered in Vector with beautiful shadows and glowing translucent soup feel */}
                <div className="absolute inset-0 flex items-center justify-center">
                  
                  {/* Dumpling 1 (Top Left) */}
                  <motion.div 
                    animate={{ y: [0, -2, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="absolute top-1/4 left-1/4 w-20 h-20 rounded-full bg-gradient-to-b from-[#FFFDF9] via-[#FAF3E5] to-[#E5D2BA] shadow-lg flex items-center justify-center"
                    style={{ filter: "drop-shadow(0px 8px 6px rgba(0,0,0,0.4))" }}
                  >
                    {/* Pleats overlay */}
                    <div className="absolute inset-0 rounded-full bg-[repeating-conic-gradient(from_0deg,_transparent_0deg_15deg,_rgba(138,110,80,0.15)_15deg_20deg)]"></div>
                    {/* Juicy broth center indicator */}
                    <div className="w-4 h-4 rounded-full bg-[#EFDECA] opacity-80 filter blur-sm"></div>
                    {/* Top knot (Pinch) */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#DFCDBC] rounded-full border border-[#FAF3E5] flex items-center justify-center shadow-inner">
                      <div className="w-1.5 h-1.5 bg-[#402914] rounded-full"></div>
                    </div>
                  </motion.div>

                  {/* Dumpling 2 (Top Right) */}
                  <motion.div 
                    animate={{ y: [0, -3, 0] }}
                    transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
                    className="absolute top-1/3 right-1/4 w-22 h-22 rounded-full bg-gradient-to-b from-[#FFFDF9] via-[#FAF3E5] to-[#E5D2BA] shadow-lg flex items-center justify-center"
                    style={{ filter: "drop-shadow(0px 10px 8px rgba(0,0,0,0.45))" }}
                  >
                    {/* Pleats */}
                    <div className="absolute inset-0 rounded-full bg-[repeating-conic-gradient(from_10deg,_transparent_0deg_15deg,_rgba(138,110,80,0.15)_15deg_20deg)]"></div>
                    <div className="w-5 h-5 bg-[#EFDECA] opacity-80 filter blur-sm rounded-full"></div>
                    {/* Top knot */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4.5 h-4.5 bg-[#DFCDBC] rounded-full border border-[#FAF3E5] flex items-center justify-center shadow-inner">
                      <div className="w-1.5 h-1.5 bg-[#402914] rounded-full"></div>
                    </div>
                  </motion.div>

                  {/* Dumpling 3 (Bottom Center) */}
                  <motion.div 
                    animate={{ y: [0, -2.5, 0] }}
                    transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-1/4 left-[30%] w-24 h-24 rounded-full bg-gradient-to-b from-[#FFFDF9] via-[#FAF3E5] to-[#E5D2BA] shadow-xl flex items-center justify-center"
                    style={{ filter: "drop-shadow(0px 12px 10px rgba(0,0,0,0.5))" }}
                  >
                    {/* Pleats */}
                    <div className="absolute inset-0 rounded-full bg-[repeating-conic-gradient(from_5deg,_transparent_0deg_15deg,_rgba(138,110,80,0.15)_15deg_20deg)]"></div>
                    <div className="w-6 h-6 bg-[#EFDECA] opacity-85 filter blur-sm rounded-full"></div>
                    {/* Top knot */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-[#DFCDBC] rounded-full border border-[#FAF3E5] flex items-center justify-center shadow-inner">
                      <div className="w-2 h-2 bg-[#402914] rounded-full"></div>
                    </div>
                  </motion.div>

                </div>
              </div>
            </div>

            {/* Lid Propped Behind (Background decorative) */}
            <div className="absolute -bottom-4 right-[-10%] w-36 h-36 border-4 border-[#3D3020] bg-[#4C3B29] rounded-full -rotate-12 flex items-center justify-center -z-10 shadow-lg opacity-40">
              <div className="w-[85%] h-[85%] border-2 border-[#332516] rounded-full bg-[#5C4834] bg-[repeating-linear-gradient(45deg,_#5C4834,_#5C4834_10px,_#523F2B_10px,_#523F2B_20px)]"></div>
            </div>

          </div>
          
          <div className="mt-6 text-center">
            <span className="text-xs text-[#8E806A] font-sans flex items-center gap-1.5 justify-center">
              <Flame className="w-3.5 h-3.5 text-[#C4A478] fill-[#C4A478]" />
              熱氣騰騰的傳承 · 杭州手作小籠
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
