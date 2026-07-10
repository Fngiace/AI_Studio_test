/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight, Eye, RefreshCw, FlameKindling } from "lucide-react";

interface GuideStep {
  step: number;
  title: string;
  pinyin: string;
  shortDesc: string;
  longDesc: string;
  illustration: ReactNode;
  warning: string;
}

export default function EatingGuide() {
  const [activeStep, setActiveStep] = useState<number>(1);

  const steps: GuideStep[] = [
    {
      step: 1,
      title: "輕輕提",
      pinyin: "Qīng Qīng Tí",
      shortDesc: "夾取頂結，穩重提起",
      longDesc: "用筷子輕巧地夾住小籠包頂端最厚的收口結子（捏結處）。切忌夾取薄嫩的側面或底部，以免拉扯弄破外皮，使湯汁在籠中漏光。",
      warning: "切忌用力過猛！小籠包剛出爐時外皮最為嬌嫩，提起時要像提燈籠一樣平穩。",
      illustration: (
        <div className="relative w-48 h-48 bg-[#F5EFEB] rounded-full border border-[#D9C4B0] flex items-center justify-center overflow-hidden">
          {/* Chopsticks holding top knot */}
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-32 flex flex-col items-center justify-center"
          >
            {/* Chopstick lines */}
            <div className="absolute top-0 left-6 w-2 h-24 bg-[#4A321E] origin-bottom -rotate-12 rounded"></div>
            <div className="absolute top-0 right-6 w-2 h-24 bg-[#4A321E] origin-bottom rotate-12 rounded"></div>
            
            {/* Dumpling Hanging */}
            <div className="absolute bottom-0 w-20 h-16 rounded-b-full bg-[#FCF8F5] border-t-4 border-[#E5D2BA] flex items-center justify-center shadow-md">
              <div className="absolute top-1 w-4 h-4 bg-[#DFCDBC] rounded-full"></div>
              {/* Drooping/Hanging Stretch effect */}
              <div className="absolute bottom-1 w-12 h-4 bg-[#EFDECA] filter blur-sm opacity-60"></div>
            </div>
          </motion.div>
        </div>
      )
    },
    {
      step: 2,
      title: "慢慢移",
      pinyin: "Màn Màn Yí",
      shortDesc: "勺子托底，徐徐入勺",
      longDesc: "將提起的小籠包慢慢移向自己的勺子（湯匙）。用另一隻手拿著湯匙在下方穩穩托住小籠包的底部，然後緩緩放入勺中，確保底座安全無虞。",
      warning: "不要直接拉到嘴邊！遠距離懸空夾取極易造成小籠包中途破裂，墜落在桌上。",
      illustration: (
        <div className="relative w-48 h-48 bg-[#F5EFEB] rounded-full border border-[#D9C4B0] flex items-center justify-center overflow-hidden">
          {/* Spoon and Dumpling inside */}
          <motion.div 
            animate={{ x: [-5, 5, -5] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="relative w-36 h-36 flex items-center justify-center"
          >
            {/* Spoon Handle & Bowl */}
            <div className="absolute bottom-6 left-0 w-16 h-4 bg-[#FAF6F2] border border-[#D9C8B5] rounded-l-full origin-right rotate-12 shadow-sm"></div>
            <div className="absolute bottom-2 right-4 w-24 h-16 bg-[#FAF6F2] border border-[#D9C8B5] rounded-full shadow-inner flex items-center justify-center">
              {/* Sitting Dumpling */}
              <div className="w-18 h-14 rounded-b-3xl bg-gradient-to-b from-[#FFFDF9] to-[#FAF3E5] border border-[#DFCDBC] flex items-center justify-center shadow-md">
                <div className="w-3 h-3 bg-[#DFCDBC] rounded-full absolute top-2"></div>
              </div>
            </div>
          </motion.div>
        </div>
      )
    },
    {
      step: 3,
      title: "先開窗",
      pinyin: "Xiān Kāi Chuāng",
      shortDesc: "輕咬側皮，散熱通氣",
      longDesc: "將勺子送到嘴邊，在小籠包的外皮側面或偏上處輕輕咬開一個豆粒般大小的「小窗孔」，或者用筷子輕輕戳開一個小口。讓滾燙的蒸汽裊裊散出。",
      warning: "防燙預警！內部的湯汁高達80℃以上，若直接一口咬下，高溫熱湯在口中爆開極易燙傷舌頭與食道。",
      illustration: (
        <div className="relative w-48 h-48 bg-[#F5EFEB] rounded-full border border-[#D9C4B0] flex items-center justify-center overflow-hidden">
          {/* Steam rising from poked hole */}
          <div className="relative w-32 h-32 flex flex-col items-center justify-center">
            {/* Spoon */}
            <div className="absolute bottom-2 w-24 h-14 bg-[#FAF6F2] border border-[#D9C8B5] rounded-full"></div>
            {/* Dumpling with window hole */}
            <div className="absolute bottom-4 w-18 h-14 rounded-b-3xl bg-gradient-to-b from-[#FFFDF9] to-[#FAF3E5] border border-[#DFCDBC] flex items-center justify-center">
              <div className="w-3.5 h-3.5 bg-[#B58A54] rounded-full absolute top-1 left-4 border border-[#FAF3E5] shadow-inner flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-[#4A321E] rounded-full"></div>
              </div>
            </div>
            {/* Steam rising from hole */}
            <motion.div 
              animate={{ y: [0, -20], opacity: [0, 0.8, 0], scale: [0.8, 1.2, 0.9] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeOut" }}
              className="absolute top-4 left-6"
            >
              <svg className="w-6 h-12 text-[#B58A54]/40" viewBox="0 0 20 60">
                <path d="M10,50 Q5,35 15,20 T10,5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </motion.div>
          </div>
        </div>
      )
    },
    {
      step: 4,
      title: "後喝湯",
      pinyin: "Hòu Hē Tāng",
      shortDesc: "沿孔吮吸，品嚐濃湯",
      longDesc: "從小窗孔邊緣輕輕吹氣，使內部稍微降溫。隨後，將嘴湊在咬開的窗孔處，徐徐吮吸包子內部的琥珀色鮮美熱高湯。感受膠原高湯在舌尖綻放。",
      warning: "注意細細品味！這是小籠包的精華所在，不可狼吞虎嚥，應先感受第一口純粹的清甜肉汁。",
      illustration: (
        <div className="relative w-48 h-48 bg-[#F5EFEB] rounded-full border border-[#D9C4B0] flex items-center justify-center overflow-hidden">
          {/* Sipping illustration (Spoon tilting) */}
          <motion.div 
            animate={{ rotate: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="relative w-36 h-36 flex items-center justify-center"
          >
            {/* Spoon tilted */}
            <div className="absolute bottom-4 w-24 h-14 bg-[#FAF6F2] border border-[#D9C8B5] rounded-full origin-left"></div>
            {/* Golden broth dripping slightly */}
            <motion.div 
              animate={{ scaleY: [0.3, 1, 0.3], opacity: [0.2, 0.9, 0.2] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="absolute bottom-6 left-1/3 w-1.5 h-6 bg-[#E0AC43] rounded-full origin-top"
            ></motion.div>
            <div className="absolute bottom-6 w-18 h-12 rounded-b-3xl bg-gradient-to-b from-[#FFFDF9] to-[#FAF3E5] border border-[#DFCDBC] origin-left"></div>
          </motion.div>
        </div>
      )
    },
    {
      step: 5,
      title: "一口吃",
      pinyin: "Yī Kǒu Chī",
      shortDesc: "佐以薑醋，一併入喉",
      longDesc: "將剩下的包子夾起，沾上少許香醋，再夾上幾縷細嫩的薑絲送入孔中。最後，將整個小籠包和薑絲香醋一口吞下，麵皮、飽滿肉餡與醋香在口中完美融合。",
      warning: "完美的句點！薑絲能去除肉餡微弱的膩感，黑醋則勾勒出鮮甜，一口含下，人間至味，莫過於此。",
      illustration: (
        <div className="relative w-48 h-48 bg-[#F5EFEB] rounded-full border border-[#D9C4B0] flex items-center justify-center overflow-hidden">
          {/* Vinegar bowl and dumpling entering mouth */}
          <div className="relative w-36 h-36 flex flex-col items-center justify-center gap-2">
            {/* Ginger slivers and black vinegar bowl */}
            <div className="w-16 h-6 bg-[#32271C] rounded-full border border-[#524131] flex items-center justify-center shadow-inner">
              <div className="w-10 h-1 bg-[#E8DCC4] rounded opacity-30"></div>
            </div>
            {/* Dumpling with ginger on top */}
            <motion.div 
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="w-16 h-12 rounded-full bg-gradient-to-b from-[#FFFDF9] to-[#FAF3E5] border border-[#DFCDBC] relative flex items-center justify-center shadow-md"
            >
              {/* Ginger line */}
              <div className="absolute -top-1 w-8 h-0.5 bg-[#E2C799] rotate-12"></div>
              <div className="absolute -top-1 w-6 h-0.5 bg-[#E2C799] -rotate-12"></div>
            </motion.div>
          </div>
        </div>
      )
    }
  ];

  const currentStepData = steps.find((s) => s.step === activeStep) || steps[0];

  const handlePrev = () => {
    setActiveStep((prev) => (prev > 1 ? prev - 1 : steps.length));
  };

  const handleNext = () => {
    setActiveStep((prev) => (prev < steps.length ? prev + 1 : 1));
  };

  return (
    <section id="eating-guide" className="py-20 bg-[#FAF7F2] text-[#2C2318] px-4 sm:px-6 lg:px-8 border-b border-[#EBE4D8]">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="flex justify-center items-center gap-1.5 text-[#C4A478]">
            <FlameKindling className="w-5 h-5" />
            <span className="text-sm font-semibold tracking-widest uppercase">優雅享用 · 口授祕訣</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-[#1C150E]">
            正宗杭州小籠包「五步享用訣」
          </h2>
          <p className="text-[#6B5E4C] text-base">
            俗話說「心急吃不了熱豆腐」，品嚐小籠包更是如此。跟著傳承秘訣慢品，方能體會湯汁與肉餡的最佳風味。
          </p>
        </div>

        {/* Step-by-step Interactive Component */}
        <div className="bg-white rounded-3xl border border-[#EBE4D8] overflow-hidden shadow-xl p-6 sm:p-10 lg:p-12 relative">
          
          {/* Step numbers selector rail */}
          <div className="flex items-center justify-between border-b border-[#FAF0DE] pb-8 mb-8">
            {steps.map((s) => {
              const isPassed = s.step <= activeStep;
              const isActive = s.step === activeStep;
              return (
                <button
                  key={s.step}
                  onClick={() => setActiveStep(s.step)}
                  className="flex flex-col items-center gap-2 group flex-1 cursor-pointer"
                >
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-serif text-sm border-2 transition duration-300 ${
                    isActive
                      ? "bg-[#C4A478] text-white border-[#C4A478] shadow-md shadow-[#c4a47833]"
                      : isPassed
                      ? "bg-[#FAF3E5] text-[#C4A478] border-[#E9D7BC]"
                      : "bg-[#FDFCF9] text-[#A5957E] border-[#ECE5D9] group-hover:border-[#C4A478]/50"
                  }`}>
                    {s.step}
                  </div>
                  <span className={`text-[11px] sm:text-xs font-semibold tracking-wide transition duration-300 ${
                    isActive ? "text-[#1C150E]" : "text-[#A5957E] group-hover:text-[#1C150E]"
                  }`}>
                    {s.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Core Content Box with Motion Animation */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            
            {/* Visual Column */}
            <div className="md:col-span-5 flex justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.95, rotate: 2 }}
                  transition={{ duration: 0.3 }}
                >
                  {currentStepData.illustration}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Explanatory Text Column */}
            <div className="md:col-span-7 space-y-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <div className="space-y-1">
                    <span className="text-xs font-mono tracking-widest text-[#B58A54] uppercase font-bold">
                      步驟 0{currentStepData.step} · {currentStepData.pinyin}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C150E]">
                      {currentStepData.title}
                    </h3>
                    <p className="text-[#C4A478] text-sm font-semibold italic">
                      「{currentStepData.shortDesc}」
                    </p>
                  </div>

                  <p className="text-[#5C4F3E] text-sm sm:text-base leading-relaxed">
                    {currentStepData.longDesc}
                  </p>

                  <div className="p-4 bg-[#FFF4F0] border-l-4 border-[#EF6E4D] rounded-r-lg">
                    <p className="text-[11px] font-mono tracking-widest text-[#EF6E4D] uppercase font-bold">享用避坑要訣</p>
                    <p className="text-xs sm:text-sm text-[#7D3F2D] mt-1 font-sans">
                      {currentStepData.warning}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Arrow navigation buttons */}
              <div className="flex items-center gap-4 pt-4 border-t border-[#FAF0DE]">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full border border-[#ECE5D9] bg-white flex items-center justify-center text-[#5C4F3E] hover:bg-[#FAF7F2] hover:text-[#C4A478] transition duration-200 cursor-pointer"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <span className="text-xs font-mono font-bold text-[#A5957E]">
                  {currentStepData.step} / {steps.length}
                </span>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full border border-[#ECE5D9] bg-[#C4A478] text-white flex items-center justify-center hover:bg-[#AA8555] transition duration-200 cursor-pointer"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
