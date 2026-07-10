/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SteamingOutcome } from "../types";
import { Flame, Play, Square, Award, AlertTriangle, RotateCcw, HelpCircle, Sparkles } from "lucide-react";

export default function SteamSimulator() {
  const [heat, setHeat] = useState<"low" | "medium" | "high">("high");
  const [isSteaming, setIsSteaming] = useState<boolean>(false);
  const [timer, setTimer] = useState<number>(0); // Simulated minutes (1s real-time = 1 simulated min)
  const [steamVisualRate, setSteamVisualRate] = useState<number>(0); // 0 to 100 for visual steam
  const [outcome, setOutcome] = useState<SteamingOutcome | null>(null);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Steam animation rates
  useEffect(() => {
    if (isSteaming) {
      const baseRate = heat === "high" ? 90 : heat === "medium" ? 50 : 25;
      setSteamVisualRate(baseRate);
    } else {
      setSteamVisualRate(0);
    }
  }, [isSteaming, heat]);

  // Timer loop
  useEffect(() => {
    if (isSteaming) {
      timerRef.current = setInterval(() => {
        setTimer((prev) => {
          const next = prev + 1;
          // Auto-ruin if left too long (12 simulated minutes maximum)
          if (next >= 12) {
            handleStop(next);
            return 12;
          }
          return next;
        });
      }, 1000); // 1 real second = 1 simulated minute
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isSteaming]);

  const handleStart = () => {
    setIsSteaming(true);
    setTimer(0);
    setOutcome(null);
  };

  const handleStop = (finalTime?: number) => {
    setIsSteaming(false);
    const cookTime = finalTime !== undefined ? finalTime : timer;
    evaluateOutcome(cookTime, heat);
  };

  const evaluateOutcome = (time: number, power: "low" | "medium" | "high") => {
    // Determine outcomes based on time & fire power
    if (power === "low") {
      setOutcome({
        status: "ruined",
        title: "低火慢蒸 · 糊爛慘敗 😭",
        description: "「低火慢蒸」是製作小籠包的大忌！低溫蒸汽使麵皮吸飽水分，徹底失去彈性、軟爛塌陷。湯汁因時間過長慢慢滲透流失，包子黏在底座上根本提不起來。",
        color: "bg-[#453632] border-[#EF6E4D] text-[#FFF4F0]",
        tips: "大廚建議：小籠包皮薄汁多，必須要用極高溫的大火瞬間包覆熟化，封鎖湯汁。請切換至「大火」重新挑戰！"
      });
    } else if (time < 5) {
      setOutcome({
        status: "raw",
        title: "起籠過早 · 夾生半熟 🫣",
        description: `你僅僅蒸了 ${time} 分鐘就起鍋。此時麵皮依然乾硬發粉，內部的豬肉餡還是生冷的，包裹的皮凍也只是微融，完全無法下口品嚐。`,
        color: "bg-[#25221F] border-[#A5957E] text-[#E8DCC4]",
        tips: "大廚建議：起碼要蒸到 6 分鐘以上。請讓蒸汽多飛一會，待湯汁完全融化飽滿再掀蓋起鍋！"
      });
    } else if (power === "high") {
      if (time >= 6 && time <= 7) {
        setOutcome({
          status: "perfect",
          title: "極致熟成 · 老饕 100 分! 🏆🌟",
          description: `在大火 ${time} 分鐘的洗禮下，皮凍瞬間在內部沸騰化為琥珀色濃郁高湯，薄皮被蒸氣鼓脹得圓潤晶瑩，吹彈可破。十八道摺痕如盛開白菊，提起如精緻小燈籠。不漏一滴鮮汁！`,
          color: "bg-[#1E1C1A] border-[#DAB88B] text-[#FFFDF9]",
          tips: "大廚讚嘆：這是真正的黃金熟度！皮薄韌、湯汁滾燙、肉餡緊實。配合薑絲與鎮江黑醋，簡直是人間絕味！"
        });
      } else if (time === 5) {
        setOutcome({
          status: "perfect",
          title: "剛剛熟成 · 清爽 90 分! 🥟",
          description: "大火 5 分鐘剛剛好熟。肉餡鮮嫩，麵皮彈牙，但內部的皮凍還有極少許未融化的顆粒，湯汁尚未達到最極致的豐滿度，但口感非常清爽不膩。",
          color: "bg-[#1E1C1A] border-[#C4A478] text-[#E8DCC4]",
          tips: "大廚建議：可以稍微再多蒸 1 分鐘，讓皮凍完全轉化為滾燙的濃高湯，湯汁量會更驚人！"
        });
      } else if (time === 8) {
        setOutcome({
          status: "overcooked",
          title: "稍有過熟 · 皮軟湯失 ⚠️",
          description: "大火蒸了 8 分鐘。麵皮在高溫水氣中開始膨脹、軟化，稍微失去了手擀麵的咬勁與筋道。幸運的是外皮還沒破裂，但湯汁已被麵皮吸附了一部分，不夠清澈。",
          color: "bg-[#2C241E] border-[#C48050] text-[#E8DCC4]",
          tips: "大廚建議：下次要在 6-7 分鐘時果斷掀蓋！小籠包熟透的瞬間極為短暫，猶豫一分鐘就會錯失黃金口感。"
        });
      } else {
        // time >= 9 under high heat
        setOutcome({
          status: "ruined",
          title: "大火過度 · 破皮流湯 💥",
          description: `高溫大火蒸煮了 ${time} 分鐘。內部的高湯過度沸騰產生極大蒸汽壓，徹底沖破了薄弱的外皮！高湯流失殆盡，精華全沉入籠底，只剩下癟塌的破皮與乾硬肉餡。`,
          color: "bg-[#322521] border-[#B12A1F] text-[#FFF4F0]",
          tips: "大廚惋惜：這就是「漏湯」！小籠包一旦漏湯就失去了靈魂。請將時間控制在 6-7 分鐘起鍋，鎖住湯汁！"
        });
      }
    } else {
      // power === "medium"
      if (time >= 8 && time <= 9) {
        setOutcome({
          status: "perfect",
          title: "中火熟成 · 溫和 85 分 🪵",
          description: `中火蒸煮 ${time} 分鐘。雖然完全熟透，且湯汁豐滿，但由於受熱速度較慢，麵皮表面吸水時間拉長，吃起來稍微缺乏手擀麵皮特有的勁道與延展彈性。`,
          color: "bg-[#25221F] border-[#A88554] text-[#E8DCC4]",
          tips: "大廚建議：中火可以成功，但大火能在更短時間內熟化肉餡，保持外皮緊實彈性。快切換到大火，感受 7 分鐘的美味奇蹟！"
        });
      } else if (time < 8) {
        setOutcome({
          status: "raw",
          title: "中火未透 · 湯未化開 ⏳",
          description: `中火蒸煮 ${time} 分鐘時間不夠。火力不夠強使內部熱量傳遞緩慢，肉餡核心可能剛熟，但大半皮凍還呈現半固體果凍狀，沒有完全化為滾燙湯汁。`,
          color: "bg-[#25221F] border-[#A5957E] text-[#E8DCC4]",
          tips: "大廚建議：中火至少需要蒸 8-9 分鐘。如果等不及，請使用大火蒸 7 分鐘！"
        });
      } else {
        // time >= 10 under medium heat
        setOutcome({
          status: "overcooked",
          title: "中火超時 · 塌陷漏汁 😵‍💫",
          description: "中火超時蒸煮。包子長時間處於溫熱水氣中，外皮嚴重塌軟。雖然沒有大火沸騰破裂得那麼慘烈，但湯汁也幾乎滲透殆盡，整籠呈現黏塌狀態。",
          color: "bg-[#25221F] border-[#EF6E4D] text-[#E8DCC4]",
          tips: "大廚建議：中火一定要在 8-9 分鐘內起鍋，絕對不能超時！"
        });
      }
    }
  };

  const handleReset = () => {
    setIsSteaming(false);
    setTimer(0);
    setOutcome(null);
  };

  return (
    <section id="steam-simulator" className="py-20 bg-[#FAF7F2] text-[#2C2318] px-4 sm:px-6 lg:px-8 border-b border-[#EBE4D8]">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="flex justify-center items-center gap-1.5 text-[#C4A478]">
            <Flame className="w-5 h-5" />
            <span className="text-sm font-semibold tracking-widest uppercase font-mono">廚房實境 · 蒸煮模擬</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-[#1C150E]">
            包子鋪掌櫃：小籠包瞬蒸挑戰
          </h2>
          <p className="text-[#6B5E4C] text-base">
            現在你是一位掌勺大廚，請親自調配火候與控時，蒸出一籠湯豐肉嫩、外皮不破的完美杭州小籠包！
          </p>
        </div>

        {/* Game Console Layout */}
        <div className="bg-white rounded-3xl border border-[#EBE4D8] overflow-hidden shadow-2xl p-6 sm:p-10 relative">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-stretch">
            
            {/* Left Column: Visual Steamer Vessel Simulator */}
            <div className="md:col-span-6 bg-[#1A1816] rounded-2xl p-6 flex flex-col justify-between items-center text-white relative overflow-hidden min-h-[380px]">
              
              {/* Steamer decorative ambient light based on fire */}
              {isSteaming && (
                <div className={`absolute bottom-0 inset-x-0 h-24 blur-3xl opacity-30 transition-all duration-500 pointer-events-none ${
                  heat === "high" ? "bg-red-600" : heat === "medium" ? "bg-amber-500" : "bg-orange-400"
                }`}></div>
              )}

              {/* Status Header */}
              <div className="w-full flex justify-between items-center border-b border-[#322A20] pb-3 relative z-10">
                <span className="text-xs font-mono tracking-wider text-[#A5957E] uppercase font-bold flex items-center gap-1.5">
                  <span className={`w-2.5 h-2.5 rounded-full ${isSteaming ? "bg-red-500 animate-pulse" : "bg-stone-500"}`}></span>
                  {isSteaming ? "正在蒸煮中..." : "蒸籠已就緒"}
                </span>
                <span className="text-xs font-mono text-[#DAB88B] bg-[#2E271F] px-2 py-0.5 rounded border border-[#524434]">
                  溫度：{heat === "high" ? "120°C 大火" : heat === "medium" ? "100°C 中火" : "85°C 低火"}
                </span>
              </div>

              {/* Interactive Visual Element (Bamboo Steamer + Rising Steam) */}
              <div className="my-8 relative w-48 h-48 flex items-center justify-center relative z-10">
                
                {/* Dynamic Rising Steam Clouds inside screen */}
                {isSteaming && (
                  <div className="absolute top-0 inset-x-0 flex justify-center gap-4 pointer-events-none -translate-y-8 z-20">
                    <motion.div 
                      animate={{ y: [0, -35], opacity: [0, 0.5, 0], scale: [0.9, 1.4, 0.9] }}
                      transition={{ repeat: Infinity, duration: heat === "high" ? 1.5 : 2.5, ease: "easeOut" }}
                      className="w-8 h-8 rounded-full bg-white/20 filter blur-sm"
                    ></motion.div>
                    <motion.div 
                      animate={{ y: [0, -45], opacity: [0, 0.6, 0], scale: [0.8, 1.5, 1] }}
                      transition={{ repeat: Infinity, duration: heat === "high" ? 1.2 : 2.0, ease: "easeOut", delay: 0.3 }}
                      className="w-10 h-10 rounded-full bg-white/15 filter blur-sm"
                    ></motion.div>
                    <motion.div 
                      animate={{ y: [0, -30], opacity: [0, 0.4, 0], scale: [1, 1.3, 0.8] }}
                      transition={{ repeat: Infinity, duration: heat === "high" ? 1.8 : 3.0, ease: "easeOut", delay: 0.6 }}
                      className="w-7 h-7 rounded-full bg-white/25 filter blur-sm"
                    ></motion.div>
                  </div>
                )}

                {/* Animated Steamer Lid Shaking under pressure */}
                <motion.div 
                  animate={isSteaming && heat === "high" 
                    ? { y: [0, -3, 0, -2, 0], rotate: [0, 1, 0, -1, 0] } 
                    : isSteaming && heat === "medium"
                    ? { y: [0, -1, 0, -0.5, 0] }
                    : {}
                  }
                  transition={{ repeat: Infinity, duration: 0.25 }}
                  className="w-40 h-40 bg-[#53412E] border-4 border-[#3D3020] rounded-full shadow-2xl flex flex-col items-center justify-center relative overflow-hidden"
                >
                  {/* Bamboo woven texture style cover */}
                  <div className="absolute inset-2 border-2 border-[#332516] rounded-full bg-[#5D4935] bg-[repeating-linear-gradient(45deg,_#5D4935,_#5D4935_8px,_#4C3B2A_8px,_#4C3B2A_16px)]"></div>
                  
                  {/* Lid handle */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-6 bg-[#32271C] rounded-md border border-[#524131] flex items-center justify-center shadow-md">
                    <div className="w-8 h-1 bg-[#1A1108] rounded"></div>
                  </div>
                </motion.div>

                {/* Bottom Steamer base pot with heat glow */}
                <div className={`absolute bottom-[-10px] w-44 h-8 rounded-b-xl border-t border-[#3D3020] transition-colors duration-500 ${
                  isSteaming && heat === "high" 
                    ? "bg-red-950/80 border-red-500/30" 
                    : isSteaming && heat === "medium"
                    ? "bg-amber-950/80 border-amber-500/30"
                    : "bg-[#25201D] border-stone-700/30"
                }`}></div>

              </div>

              {/* Dynamic Progress Timeline Indicators */}
              <div className="w-full space-y-2 relative z-10">
                <div className="flex justify-between text-xs text-[#A5957E] font-mono">
                  <span>累計蒸煮時間：</span>
                  <span className="text-[#DAB88B] font-bold">{timer} 分鐘</span>
                </div>
                <div className="h-2 bg-[#121110] rounded-full overflow-hidden border border-[#322A20]">
                  <motion.div 
                    className={`h-full rounded-full transition-all duration-300 ${
                      timer >= 10 ? "bg-red-500" : timer >= 8 ? "bg-amber-500" : timer >= 6 ? "bg-emerald-400" : "bg-[#C4A478]"
                    }`}
                    style={{ width: `${(timer / 12) * 100}%` }}
                  ></motion.div>
                </div>
                <div className="flex justify-between text-[10px] text-[#8E806A] font-mono pt-0.5">
                  <span>0m 生</span>
                  <span>5m 半熟</span>
                  <span className="text-emerald-400 font-bold">6-7m 完美</span>
                  <span>9m+ 破皮</span>
                </div>
              </div>

            </div>

            {/* Right Column: Game Controls & Outcome Display */}
            <div className="md:col-span-6 flex flex-col justify-between space-y-6">
              
              {!outcome ? (
                // Setup and Active play panel
                <div className="space-y-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <h3 className="text-xl font-serif font-bold text-[#1C150E] flex items-center gap-2">
                      <span>🍽️ 蒸煮控制台</span>
                    </h3>
                    <p className="text-xs text-[#6B5E4C] leading-relaxed">
                      傳統杭州大廚訣竅：「大火急蒸，鎖水化湯。」若使用中火則需延長時間，而低火則完全無法讓外皮收縮定型。請點選火力並控制掀蓋時機。
                    </p>

                    {/* Heat Selection Toggles */}
                    <div className="space-y-2 pt-2">
                      <label className="text-xs font-semibold text-[#8E806A] block uppercase font-mono">火力選擇：</label>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { id: "low", label: "🔥 低火", desc: "慢燉溫熱" },
                          { id: "medium", label: "🔥🔥 中火", desc: "常規蒸煮" },
                          { id: "high", label: "🔥🔥🔥 大火", desc: "瞬蒸鎖湯" }
                        ].map((h) => (
                          <button
                            key={h.id}
                            disabled={isSteaming}
                            onClick={() => setHeat(h.id as any)}
                            className={`p-2.5 rounded-lg border text-left transition flex flex-col justify-between cursor-pointer ${
                              heat === h.id
                                ? "bg-[#FAF0DE] border-[#C4A478] text-[#1C150E]"
                                : "bg-[#FDFCF9] border-[#ECE5D9] text-[#6B5E4C] hover:bg-[#FAF7F2] disabled:opacity-50"
                            }`}
                          >
                            <span className="text-xs font-bold">{h.label}</span>
                            <span className="text-[10px] text-[#A5957E] mt-1">{h.desc}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Operational Buttons */}
                  <div className="pt-6 border-t border-[#FAF0DE] space-y-3">
                    {!isSteaming ? (
                      <button
                        onClick={handleStart}
                        className="w-full py-4 rounded-xl bg-gradient-to-r from-[#C4A478] to-[#AA8555] text-black font-bold text-center hover:brightness-110 transition flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#c4a4782a]"
                      >
                        <Play className="w-5 h-5 fill-black" />
                        <span>開始蓋蓋蒸煮！</span>
                      </button>
                    ) : (
                      <button
                        onClick={() => handleStop()}
                        className="w-full py-4 rounded-xl bg-[#B12A1F] text-white font-bold text-center hover:bg-[#921E14] transition flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#b12a1f2a]"
                      >
                        <Square className="w-5 h-5 fill-white" />
                        <span>起鍋掀蓋 (檢查熟度)</span>
                      </button>
                    )}
                    <p className="text-[10px] text-center text-[#8E806A] font-mono">
                      * 點選「起鍋掀蓋」即可停止時間並驗收小籠包成果。
                    </p>
                  </div>

                </div>
              ) : (
                // Outcome display panel
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={`rounded-2xl p-6 border flex-1 flex flex-col justify-between ${outcome.color}`}
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-start border-b border-white/10 pb-3">
                      <div>
                        <span className="text-[10px] font-mono tracking-wider opacity-60 block uppercase">驗收成果</span>
                        <h4 className="text-lg font-serif font-bold mt-0.5">{outcome.title}</h4>
                      </div>
                      <div className="px-2.5 py-1 rounded bg-white/15 text-xs font-bold font-mono">
                        蒸煮：{timer} 分
                      </div>
                    </div>

                    <p className="text-sm leading-relaxed opacity-90 font-sans">
                      {outcome.description}
                    </p>

                    <div className="p-3 bg-black/20 rounded-lg text-xs border border-white/5 space-y-1">
                      <span className="font-bold block flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5" /> 大廚點評與秘笈：
                      </span>
                      <p className="opacity-80 leading-normal italic">{outcome.tips}</p>
                    </div>
                  </div>

                  {/* Reset/Restart trigger */}
                  <div className="pt-6 mt-4 border-t border-white/10">
                    <button
                      onClick={handleReset}
                      className="w-full py-3 rounded-xl bg-white text-black hover:bg-stone-100 font-bold text-sm transition flex items-center justify-center gap-2 cursor-pointer shadow"
                    >
                      <RotateCcw className="w-4 h-4" />
                      <span>再次挑戰蒸煮</span>
                    </button>
                  </div>
                </motion.div>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
