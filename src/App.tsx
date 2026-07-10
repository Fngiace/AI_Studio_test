/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Compass, BookOpen, Clock, Heart, ChefHat, ExternalLink } from "lucide-react";
import HeroSection from "./components/HeroSection";
import CraftSection from "./components/CraftSection";
import AnatomySection from "./components/AnatomySection";
import EatingGuide from "./components/EatingGuide";
import DippingSauceMaker from "./components/DippingSauceMaker";
import SteamSimulator from "./components/SteamSimulator";

export default function App() {
  return (
    <div className="min-h-screen bg-[#121110] text-[#E8DCC4] font-sans antialiased selection:bg-[#C4A478] selection:text-black scroll-smooth">
      
      {/* Premium Header / Brand Bar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#121110]/95 border-b border-[#322A20] px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo Brand */}
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#C4A478] to-[#9E7D55] flex items-center justify-center border border-[#E8DCC4]/20 shadow-md">
              <span className="text-black font-serif font-black text-sm">籠</span>
            </div>
            <div>
              <h1 className="text-base sm:text-lg font-serif font-bold tracking-tight text-white">
                江南雅韻 · 杭州小籠包
              </h1>
              <p className="text-[10px] text-[#8E806A] tracking-wider uppercase font-mono">
                Centennial Hangzhou Dumpling Craft
              </p>
            </div>
          </div>

          {/* Anchor Nav Links */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-medium tracking-wide uppercase">
            <a href="#craft-heritage" className="text-[#A5957E] hover:text-[#DAB88B] transition">
              百年工藝
            </a>
            <a href="#anatomy-explorer" className="text-[#A5957E] hover:text-[#DAB88B] transition">
              結構剖析
            </a>
            <a href="#eating-guide" className="text-[#A5957E] hover:text-[#DAB88B] transition">
              品嚐指南
            </a>
            <a href="#sauce-maker" className="text-[#A5957E] hover:text-[#DAB88B] transition">
              調配醬汁
            </a>
            <a href="#steam-simulator" className="text-[#A5957E] hover:text-[#DAB88B] transition">
              大廚瞬蒸
            </a>
          </nav>

          {/* Quick CTA to game */}
          <div className="flex items-center gap-3">
            <a 
              href="#steam-simulator" 
              className="px-4 py-1.5 rounded bg-[#2C2318] border border-[#503E2B] text-xs font-semibold text-[#DAB88B] hover:bg-[#3C2E1E] transition flex items-center gap-1"
            >
              <ChefHat className="w-3.5 h-3.5" />
              <span>蒸煮挑戰</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Single-View Presentation Sections */}
      <main>
        {/* 1. Hero banner & story */}
        <HeroSection />

        {/* 2. Craft & Heritage tab explorer */}
        <CraftSection />

        {/* 3. Interactive Anatomy hotspot explorer */}
        <AnatomySection />

        {/* 4. Elegant Eating Formula instructions */}
        <EatingGuide />

        {/* 5. Custom Dipping sauce mixer simulation */}
        <DippingSauceMaker />

        {/* 6. Dynamic Steam chef simulator */}
        <SteamSimulator />
      </main>

      {/* Footer Block */}
      <footer className="bg-[#0C0B0A] text-[#8E806A] border-t border-[#322A20] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-b border-[#231D17] pb-8">
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[#32271C] border border-[#C4A478]/30 flex items-center justify-center">
                <span className="text-xs text-[#DAB88B] font-serif font-bold">杭</span>
              </div>
              <span className="text-sm font-serif font-bold text-white tracking-wide">
                杭州小籠包文化誌
              </span>
            </div>
            <p className="text-xs text-[#6B5E4C] max-w-md leading-relaxed">
              本網站為推廣傳統江南麵點美食文化而建。一籠熱氣騰騰的小籠包，不僅是味蕾的盛宴，更是大自然饋贈與手藝人百年智慧的和諧交響。
            </p>
          </div>

          <div className="md:col-span-6 flex flex-wrap justify-start md:justify-end gap-x-8 gap-y-4 text-xs font-mono">
            <div className="space-y-1">
              <span className="text-[#524434] block uppercase tracking-wider">工藝核心</span>
              <p className="text-[#A5957E]">極薄半發麵皮 / 琥珀皮凍高湯 / 18道緊密手摺</p>
            </div>
            <div className="space-y-1">
              <span className="text-[#524434] block uppercase tracking-wider">推荐餐館</span>
              <p className="text-[#A5957E]">杭州知味觀 / 南鄉老鋪 / 弄堂點心廚</p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono">
          <p>© 2026 杭州小籠包文化傳承誌. 傳承手工溫度，致敬匠人精神。</p>
          <div className="flex items-center gap-1.5 mt-4 sm:mt-0 text-[#C4A478]">
            <span>傳統點心與現代美學的融合</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
