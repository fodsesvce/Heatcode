"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { michroma } from "@/app/fonts";
import { SpiderWebBackground } from "@/components/UI/SpiderWebBackground";



export function RewardsSection() {
  return (
    <section
      id="rewards"
      className="relative min-h-screen w-full bg-[#030305] py-24 sm:py-32 overflow-hidden flex items-center"
    >
      <SpiderWebBackground />

      {/* Floating Red Ambient Glow Orbs */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#E50914]/[0.04] rounded-full blur-[170px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 sm:px-10 lg:px-16">
        
        {/* ========================================================= */}
        {/* SECTION HEADER */}
        {/* ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 0.99, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          <div className="flex items-center space-x-3 mb-4">
            <span className="h-[2px] w-6 bg-[#E50914] shadow-[0_0_10px_#E50914]" />
            <span
              className={`${michroma.className} text-[11px] uppercase tracking-[0.45em] text-[#E50914] font-semibold`}
            >
              [ 04 // REWARDS & PRIZES ]
            </span>
            <span className="h-[2px] w-6 bg-[#E50914] shadow-[0_0_10px_#E50914]" />
          </div>

          <h2
            className={`${michroma.className} text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-tight`}
          >
            EXCELLENCE <br />
            <span className="bg-gradient-to-r from-white via-white/90 to-[#E50914] bg-clip-text text-transparent">
              REWARDED & RECOGNIZED
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-white/60 leading-relaxed">
            More than prizes—HEATCODE celebrates innovation, cybersecurity excellence, and the determination to solve real-world technical challenges.
          </p>
        </motion.div>

        {/* ========================================================= */}
        {/* CENTERPIECE: LARGE GLOWING PRIZE CARD */}
        {/* ========================================================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-4xl mx-auto mb-16"
        >
          {/* Animated Ambient Outer Pulse Glow */}
          <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-r from-[#E50914]/30 via-white/10 to-[#E50914]/30 blur-2xl opacity-75 animate-pulse" />

          <div className="relative rounded-[32px] border border-[#E50914]/40 bg-gradient-to-b from-[#081524]/95 via-[#05070B]/95 to-[#030305]/98 p-8 sm:p-12 text-center backdrop-blur-2xl shadow-[0_20px_70px_rgba(229,9,20,0.25)]">
            
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-[#E50914]/50 bg-[#E50914]/15 text-[#E50914] text-xs uppercase tracking-widest font-semibold mb-6">
              <Sparkles className="h-4 w-4 animate-spin" />
              <span>COMPETITION REWARDS</span>
            </div>

            <h3
  className={`${michroma.className} text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight drop-shadow-[0_0_35px_rgba(229,9,20,0.5)]`}
>
  Competition
  <br />
  Rewards
</h3>

            <p className="mt-6 mx-auto max-w-2xl text-[16px] leading-8 text-white/65">
  The battlefield is set, the challenges await, and only the most
  determined teams will rise to the top. Compete with confidence,
  innovate without limits, and earn recognition that extends beyond
  the competition.
</p>

          <div className="mt-16">

  <div className="mx-auto mt-16 grid max-w-4xl gap-8 md:grid-cols-2">

    {/* Winner */}

    <motion.div
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .7 }}
      className="relative overflow-hidden rounded-[32px] border border-[#E50914]/20 bg-gradient-to-br from-[#11131A] via-[#090B11] to-[#050608] px-8
py-7"
    >
      <div className="absolute -right-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#E50914]/10 blur-[120px]" />

      <p className="text-xs uppercase tracking-[0.45em] text-[#E50914]">
        Winner
      </p>

      <h2
        className={`${michroma.className} mt-6 text-6xl lg:text-7xl text-white`}
      >
        ₹600
      </h2>

      <div className="mt-8 h-px bg-white/10" />

<p className="mt-5 text-sm text-white/50">
Cash Prize
</p>

      
    </motion.div>

    

    {/* Runner Up */}

    <motion.div
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .7 }}
      className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#11131A] via-[#090B11] to-[#050608] px-8
py-7"
    >
      <div className="absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-white/5 blur-[120px]" />

      <p className="text-xs uppercase tracking-[0.45em] text-white/60">
        Runner-Up
      </p>

      <h2
        className={`${michroma.className} mt-6 text-6xl lg:text-7xl text-white`}
      >
        ₹400
      </h2>

      <div className="mt-8 h-px bg-white/10" />

<p className="mt-5 text-sm text-white/50">
Cash Prize
</p>

      
    </motion.div>

  </div>

  {/* Certificate */}

{/* Certificate */}

<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.2 }}
  className="mx-auto mt-16 max-w-5xl rounded-[32px] border border-[#E50914]/20 bg-gradient-to-r from-[#0B0B10] via-[#111114] to-[#0B0B10] px-10 py-8 text-center"
>
  <h3
    className={`${michroma.className} text-2xl text-white`}
  >
    Official Participation Certificate
  </h3>

  <p className="mx-auto mt-5 max-w-3xl text-white/60 leading-8">
    Every participant who successfully completes and submits HEATCODE
    2026 will receive an official participation certificate from FODSE.
  </p>
</motion.div>

    

</div> 
          </div>
        </motion.div>

        

      </div>
    </section>
  );
}
