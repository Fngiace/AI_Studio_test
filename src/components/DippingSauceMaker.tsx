/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { SauceIngredient, DippingProfile } from "../types";
import { FlaskConical, Smile, AlertTriangle, CheckCircle, Info } from "lucide-react";

export default function DippingSauceMaker() {
  // Sauce proportions: values represent parts or relative units
  const [vinegar, setVinegar] = useState<number>(3);
  const [ginger, setGinger] = useState<number>(2);
  const [soySauce, setSoySauce] = useState<number>(1);
  const [chili, setChili] = useState<number>(0);

  const [profile, setProfile] = useState<DippingProfile>({
    name: "老饕黃金比例",
    description: "完美的酸甜香辣平衡，香醋勾勒肉香，薑絲完美化解油脂，堪稱絕配！",
    matchScore: 100,
    flavorNote: "酸度適中 · 辛辣微甜 · 極致清爽"
  });

  const ingredients: SauceIngredient[] = [
    { id: "vinegar", name: "鎮江香醋 (黑醋)", unit: "匙", min: 0, max: 5, step: 0.5, color: "bg-[#2A1D15]", icon: "🧉" },
    { id: "ginger", name: "細切薑絲", unit: "克", min: 0, max: 5, step: 0.5, color: "bg-[#E3C9A8]", icon: "🥢" },
    { id: "soySauce", name: "生抽醬油", unit: "匙", min: 0, max: 3, step: 0.5, color: "bg-[#432314]", icon: "🫙" },
    { id: "chili", name: "秘製紅辣椒油", unit: "滴", min: 0, max: 5, step: 1, color: "bg-[#B12A1F]", icon: "🌶️" }
  ];

  // Recalculate profile whenever values change
  useEffect(() => {
    // Determine profiles based on combinations
    let name = "客製調醬";
    let description = "你獨一無二的小籠包配方。快點配對看看這款醬汁能激發出何種味道！";
    let matchScore = 70;
    let flavorNote = "風味探索中";

    const total = vinegar + ginger + soySauce + chili;

    if (total === 0) {
      name = "純白原味盤";
      description = "你居然一口醬也不沾！這是對小籠包肉餡新鮮度的極致信任。";
      matchScore = 60;
      flavorNote = "純粹鮮肉 · 無外物干擾";
    } else if (vinegar >= 3 && ginger >= 1.5 && soySauce <= 1 && chili === 0) {
      name = "老饕黃金比例 (Connoisseur Gold)";
      description = "經典的『三醋一薑』。香醋微酸襯托鮮肉甜度，薑絲微辛解膩，是品嚐熱湯小籠包的至高法則！";
      matchScore = 100;
      flavorNote = "微酸回甘 · 辛香清爽 · 經典推崇";
    } else if (vinegar >= 3 && ginger >= 2 && soySauce === 0 && chili === 0) {
      name = "老杭州傳統清爽配方";
      description = "純粹的香醋與爆量薑絲。不添加醬油搶味，用醋的酸度與薑的辛烈，完全烘托出高湯的肉香與甘甜。";
      matchScore = 95;
      flavorNote = "勁酸辛辣 · 純潔原香";
    } else if (chili >= 3 && soySauce >= 1.5) {
      name = "川蜀火辣變奏曲";
      description = "爆量的秘製辣椒油與醬油。重咸重辣！高湯的鮮甜與辣椒的酥麻在高熱下撞擊，適合喜愛重口味的食客。";
      matchScore = 80;
      flavorNote = "香辣鹹鮮 · 舌尖躍動";
    } else if (soySauce > vinegar && soySauce > 0) {
      name = "醬香喧賓奪主配方";
      description = "醬油的比例多於香醋。醬油發酵香氣重，雖然增加了鹹度，但容易蓋過小籠包本身精緻的琥珀湯汁鮮美。";
      matchScore = 75;
      flavorNote = "鹹香濃重 · 略失清雅";
    } else if (vinegar > 4 && ginger === 0) {
      name = "極致老陳醋缸";
      description = "滿滿的香醋卻沒有薑絲的熱辣化解。酸度較重，若無薑絲作為暖胃平衡，大量湯汁下口可能會顯得微膩。";
      matchScore = 85;
      flavorNote = "厚重酸爽 · 缺乏層次";
    } else {
      // General balanced values
      name = "江南均衡秘製醬";
      description = "醋、油、醬油、薑絲各司其職。酸中有咸、微辣伴著薑香，能極好地輔佐湯汁，是一碗包容性極強的萬能沾醬。";
      matchScore = 90;
      flavorNote = "酸咸互襯 · 溫和微辛";
    }

    setProfile({ name, description, matchScore, flavorNote });
  }, [vinegar, ginger, soySauce, chili]);

  const applyPreset = (v: number, g: number, s: number, c: number) => {
    setVinegar(v);
    setGinger(g);
    setSoySauce(s);
    setChili(c);
  };

  return (
    <section id="sauce-maker" className="py-20 bg-[#1A1816] text-[#E8DCC4] px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="flex justify-center items-center gap-1.5 text-[#DAB88B]">
            <FlaskConical className="w-5 h-5 animate-pulse" />
            <span className="text-sm font-semibold tracking-widest uppercase font-mono">沾醬美學 · 黄金調配</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-white">
            打造你的「黃金沾醬黃金比」
          </h2>
          <p className="text-[#A5957E] text-base">
            杭州人常說：「醋是小籠的魂。」撥動滑桿調整醬醋油薑的配比，即時調配並解密你的专属沾醬風味。
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Sliders Control Panel */}
          <div className="lg:col-span-7 bg-[#23201D] border border-[#3E3326] rounded-2xl p-6 sm:p-8 space-y-8 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-serif font-semibold text-white mb-6 flex items-center gap-2">
                <span>🧪 醬料實驗台</span>
                <span className="text-xs text-[#8E806A] font-sans font-normal">拖動以調配比例</span>
              </h3>

              {/* Sliders */}
              <div className="space-y-6">
                
                {/* Vinegar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="flex items-center gap-1.5 font-medium text-[#FAF3E5]">
                      <span>{ingredients[0].icon}</span>
                      <span>{ingredients[0].name}</span>
                    </span>
                    <span className="font-mono text-[#DAB88B] font-bold">{vinegar} {ingredients[0].unit}</span>
                  </div>
                  <input
                    type="range"
                    min={ingredients[0].min}
                    max={ingredients[0].max}
                    step={ingredients[0].step}
                    value={vinegar}
                    onChange={(e) => setVinegar(parseFloat(e.target.value))}
                    className="w-full h-1.5 bg-[#121110] rounded-lg appearance-none cursor-pointer accent-[#DAB88B]"
                  />
                </div>

                {/* Ginger */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="flex items-center gap-1.5 font-medium text-[#FAF3E5]">
                      <span>{ingredients[1].icon}</span>
                      <span>{ingredients[1].name}</span>
                    </span>
                    <span className="font-mono text-[#DAB88B] font-bold">{ginger} {ingredients[1].unit}</span>
                  </div>
                  <input
                    type="range"
                    min={ingredients[1].min}
                    max={ingredients[1].max}
                    step={ingredients[1].step}
                    value={ginger}
                    onChange={(e) => setGinger(parseFloat(e.target.value))}
                    className="w-full h-1.5 bg-[#121110] rounded-lg appearance-none cursor-pointer accent-[#DAB88B]"
                  />
                </div>

                {/* Soy Sauce */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="flex items-center gap-1.5 font-medium text-[#FAF3E5]">
                      <span>{ingredients[2].icon}</span>
                      <span>{ingredients[2].name}</span>
                    </span>
                    <span className="font-mono text-[#DAB88B] font-bold">{soySauce} {ingredients[2].unit}</span>
                  </div>
                  <input
                    type="range"
                    min={ingredients[2].min}
                    max={ingredients[2].max}
                    step={ingredients[2].step}
                    value={soySauce}
                    onChange={(e) => setSoySauce(parseFloat(e.target.value))}
                    className="w-full h-1.5 bg-[#121110] rounded-lg appearance-none cursor-pointer accent-[#DAB88B]"
                  />
                </div>

                {/* Chili Oil */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="flex items-center gap-1.5 font-medium text-[#FAF3E5]">
                      <span>{ingredients[3].icon}</span>
                      <span>{ingredients[3].name}</span>
                    </span>
                    <span className="font-mono text-[#DAB88B] font-bold">{chili} {ingredients[3].unit}</span>
                  </div>
                  <input
                    type="range"
                    min={ingredients[3].min}
                    max={ingredients[3].max}
                    step={ingredients[3].step}
                    value={chili}
                    onChange={(e) => setChili(parseFloat(e.target.value))}
                    className="w-full h-1.5 bg-[#121110] rounded-lg appearance-none cursor-pointer accent-[#DAB88B]"
                  />
                </div>

              </div>
            </div>

            {/* Quick Presets */}
            <div className="border-t border-[#3D3020] pt-6 mt-8">
              <span className="text-xs text-[#8E806A] uppercase font-mono tracking-wider block mb-3">
                大師推薦預設比例
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <button
                  onClick={() => applyPreset(3, 2, 0.5, 0)}
                  className="px-2 py-2 text-xs bg-[#1A1816] hover:bg-[#32271C] border border-[#3E3326] rounded text-[#DAB88B] transition cursor-pointer text-center"
                >
                  🥇 經典黃金比
                </button>
                <button
                  onClick={() => applyPreset(4, 3, 0, 0)}
                  className="px-2 py-2 text-xs bg-[#1A1816] hover:bg-[#32271C] border border-[#3E3326] rounded text-[#DAB88B] transition cursor-pointer text-center"
                >
                  🍃 杭州傳統清爽
                </button>
                <button
                  onClick={() => applyPreset(2, 2, 1.5, 3)}
                  className="px-2 py-2 text-xs bg-[#1A1816] hover:bg-[#32271C] border border-[#3E3326] rounded text-[#DAB88B] transition cursor-pointer text-center"
                >
                  🔥 川蜀麻辣
                </button>
                <button
                  onClick={() => applyPreset(1, 1, 1, 0)}
                  className="px-2 py-2 text-xs bg-[#1A1816] hover:bg-[#32271C] border border-[#3E3326] rounded text-[#DAB88B] transition cursor-pointer text-center"
                >
                  🪵 萬能均衡醬
                </button>
              </div>
            </div>

          </div>

          {/* Liquid Preview Bowl & Flavor Output Panel */}
          <div className="lg:col-span-5 bg-[#25221F] border border-[#3E3326] rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            
            {/* Liquid Plate Render */}
            <div className="flex flex-col items-center py-4">
              <div className="relative w-40 h-40 bg-stone-900 rounded-full border-8 border-stone-800 shadow-2xl flex items-center justify-center p-2 overflow-hidden">
                {/* Vinegar puddle (grows with vinegar value) */}
                <div 
                  className="absolute rounded-full transition-all duration-300 bg-gradient-to-tr from-[#1E120A] to-[#2B1B11] shadow-inner"
                  style={{
                    width: `${Math.min(100, 20 + vinegar * 15)}%`,
                    height: `${Math.min(100, 20 + vinegar * 15)}%`,
                    opacity: vinegar > 0 ? 0.9 : 0
                  }}
                ></div>

                {/* Soy Sauce depth tint (grows inside vinegar puddle) */}
                <div 
                  className="absolute rounded-full transition-all duration-300 bg-black opacity-40"
                  style={{
                    width: `${Math.min(100, soySauce * 25)}%`,
                    height: `${Math.min(100, soySauce * 25)}%`,
                    opacity: soySauce > 0 ? 0.5 : 0
                  }}
                ></div>

                {/* Chili oil floating droplets */}
                {chili > 0 && [...Array(chili)].map((_, i) => (
                  <div 
                    key={i}
                    className="absolute w-3.5 h-3 bg-[#B12A1F] rounded-full filter blur-[1px] shadow-sm animate-pulse"
                    style={{
                      left: `${25 + (i * 14) + Math.sin(i) * 5}%`,
                      top: `${30 + (i * 12) + Math.cos(i) * 5}%`,
                    }}
                  ></div>
                ))}

                {/* Ginger slivers floating */}
                {ginger > 0 && [...Array(Math.ceil(ginger * 1.5))].map((_, i) => (
                  <div 
                    key={i}
                    className="absolute w-12 h-1 bg-[#E3C9A8] rounded-full origin-center shadow-md"
                    style={{
                      left: `${20 + (i * 12)}%`,
                      top: `${35 + (i * 10)}%`,
                      transform: `rotate(${i * 40}deg)`,
                      opacity: 0.9
                    }}
                  ></div>
                ))}

                {/* Center cross/sauce bowl decoration */}
                <div className="absolute inset-0 border border-white/5 rounded-full pointer-events-none"></div>
              </div>
              <span className="text-xs text-[#8E806A] font-sans mt-3">醬汁調配效果圖</span>
            </div>

            {/* Profile output panel */}
            <div className="space-y-4 pt-4 border-t border-[#3D3020]">
              
              {/* Score bar */}
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-mono tracking-wider text-[#8E806A] block">調配相性得分</span>
                  <span className="text-xl font-serif font-bold text-white">{profile.name}</span>
                </div>
                <div className="text-right">
                  <span className={`text-2xl font-mono font-black ${
                    profile.matchScore >= 95 ? "text-emerald-400" : profile.matchScore >= 85 ? "text-amber-400" : "text-amber-500"
                  }`}>
                    {profile.matchScore}
                  </span>
                  <span className="text-xs text-[#8E806A] block">/ 100 分</span>
                </div>
              </div>

              {/* Flavor Tag */}
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#1A1816] text-[#DAB88B] text-xs font-mono border border-[#3E3326]">
                <Info className="w-3.5 h-3.5" />
                <span>{profile.flavorNote}</span>
              </div>

              {/* Detailed flavor description */}
              <p className="text-sm text-[#C5B9A5] leading-relaxed">
                {profile.description}
              </p>

              {/* Small recommendation */}
              <div className="pt-3 border-t border-[#3E3326]/40 flex items-center gap-2">
                {profile.matchScore === 100 ? (
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                ) : (
                  <Smile className="w-4 h-4 text-amber-400 shrink-0" />
                )}
                <span className="text-xs text-[#8E806A]">
                  {profile.matchScore === 100 
                    ? "完美比例！快去準備一籠熱呼呼的小籠包吧。" 
                    : "試著朝大師黃金比『鎮江醋 3、薑絲 2、生抽 0.5、無辣』調配，看看相性評分！"
                  }
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
