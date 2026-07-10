/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Utensils, Heart, History, Check } from "lucide-react";

interface CraftPillar {
  id: string;
  title: string;
  subtitle: string;
  icon: ReactNode;
  summary: string;
  details: string[];
  tips: string;
  imgUrl: string;
}

export default function CraftSection() {
  const [activeTab, setActiveTab] = useState<string>("flour");

  const pillars: CraftPillar[] = [
    {
      id: "flour",
      title: "擀皮 · 吹彈可破",
      subtitle: "中間厚而邊緣薄的藝術",
      icon: <Sparkles className="w-5 h-5" />,
      summary: "精選高筋小麥粉，溫水和麵，經過數次揉捏揉透，使麵團充滿韌性。手工擀製成圓形皮，確保「中厚邊薄」，完美承重不破皮。",
      details: [
        "精確水溫：根據季節調整水溫，控制麵團熟化度",
        "手工擀皮：手掌與擀麵棍協同，外薄內厚",
        "直徑標準：每張皮直徑控制在 6.5 至 7.0 公分",
        "極致輕薄：邊緣厚度僅約 1 毫米，入口即化"
      ],
      tips: "匠人祕訣：擀麵時要「轉皮不轉棍」，才能達到中心飽滿、邊緣透光的完美比例。",
      imgUrl: "https://images.unsplash.com/photo-1523905330026-b8bd1f5f3ccd?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: "soup",
      title: "熬凍 · 汁豐若泉",
      subtitle: "膠原蛋白的凝結與融化",
      icon: <Utensils className="w-5 h-5" />,
      summary: "小籠包湯汁的秘密，在於將富含膠原蛋白的豬皮、土雞骨慢火熬煮數小時，冷卻凝結成晶瑩剔透的「皮凍」，切碎拌入肉餡中。",
      details: [
        "食材精選：只用當天新鮮優質豬後腿皮，去油去毛",
        "慢火細燉：加入薑蔥、紹興花雕酒，慢燉 4 小時以上",
        "自然冷卻：過濾雜質後置於冷處，自然凝結成凍",
        "熱力轉化：遇熱蒸汽瞬間化為濃郁甘甜的琥珀色高湯"
      ],
      tips: "匠人祕訣：皮凍與肉餡的比例約為 1:1，過多則膩，過少則乾，此為黃金平衡點。",
      imgUrl: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: "folding",
      title: "捏褶 · 巧奪天工",
      subtitle: "精準細緻的指尖交響樂",
      icon: <Heart className="w-5 h-5" />,
      summary: "將拌好皮凍的肉餡置於麵皮中央，用大拇指與食指迅速配合，均勻提褶。標準杭州小籠包講究褶子數量與均勻度，形成優美的「寶塔頂」。",
      details: [
        "黃金褶數：每顆小籠包均勻提捏 18 至 22 個褶子",
        "力度均勻：摺痕深淺一致，確保蒸煮時受熱均勻",
        "收口圓潤：最後頂端收口要留有微小「鯽魚嘴」或完美閉合",
        "形如菊花：蒸好後立在籠中如盛開的白菊，提起如燈籠"
      ],
      tips: "匠人祕訣：提褶時手指不能沾上肉餡的油脂，否則收口處麵皮無法緊密結合，湯汁容易溢出。",
      imgUrl: "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?q=80&w=600&auto=format&fit=crop"
    }
  ];

  const currentPillar = pillars.find((p) => p.id === activeTab) || pillars[0];

  return (
    <section id="craft-heritage" className="py-20 bg-[#FAF7F2] text-[#2C2318] px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="flex justify-center items-center gap-1 text-[#C4A478]">
            <History className="w-5 h-5" />
            <span className="text-sm font-semibold tracking-widest uppercase">百年傳承 · 匠心工藝</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-[#1C150E]">
            一顆小籠包的「四大修行」
          </h2>
          <p className="text-[#6B5E4C] text-base sm:text-lg">
            從精選麵粉到大火瞬蒸，杭州小籠包的美味並非偶然，而是無數次手作溫度與精準比例的完美結晶。
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-[#ECE5D9] rounded-lg gap-1">
            {pillars.map((pillar) => (
              <button
                key={pillar.id}
                onClick={() => setActiveTab(pillar.id)}
                className={`px-4 sm:px-6 py-2.5 rounded-md text-xs sm:text-sm font-medium transition duration-200 cursor-pointer ${
                  activeTab === pillar.id
                    ? "bg-[#C4A478] text-white shadow-md"
                    : "text-[#5C4F3E] hover:text-[#1C150E]"
                }`}
              >
                {pillar.title.split(" · ")[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="bg-white rounded-2xl border border-[#EBE4D8] overflow-hidden shadow-xl shadow-[#c4a47805] p-6 sm:p-10 lg:p-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
            >
              {/* Image Column */}
              <div className="lg:col-span-5 relative group">
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C2318]/40 to-transparent z-10 rounded-xl"></div>
                <img
                  src={currentPillar.imgUrl}
                  alt={currentPillar.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-64 sm:h-80 object-cover rounded-xl shadow-lg transition duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute bottom-4 left-4 z-20 text-white">
                  <p className="text-xs font-mono tracking-widest text-[#E8DCC4] uppercase">手藝現場</p>
                  <p className="text-lg font-serif font-bold">{currentPillar.title}</p>
                </div>
              </div>

              {/* Text Info Column */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-1.5 text-[#C4A478] bg-[#FDFBF7] border border-[#ECE5D9] px-3 py-1 rounded-full text-xs font-medium">
                    {currentPillar.icon}
                    <span>{currentPillar.subtitle}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C150E] pt-2">
                    {currentPillar.title}
                  </h3>
                </div>

                <p className="text-[#5C4F3E] leading-relaxed text-base sm:text-lg">
                  {currentPillar.summary}
                </p>

                {/* Craft Details Bullet Points */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-b border-[#FAF7F2] py-6 my-2">
                  {currentPillar.details.map((detail, index) => (
                    <div key={index} className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-[#FAF0DE] border border-[#E9D7BC] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-[#B58A54]" />
                      </div>
                      <span className="text-sm text-[#4A3E31] leading-normal">{detail}</span>
                    </div>
                  ))}
                </div>

                {/* Secret Tip Card */}
                <div className="p-4 bg-[#FDF9F2] border-l-4 border-[#C4A478] rounded-r-lg">
                  <p className="text-xs font-mono tracking-widest text-[#B58A54] uppercase font-bold">匠人秘訣</p>
                  <p className="text-sm text-[#5C4F3E] mt-1 italic font-serif">
                    {currentPillar.tips}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
