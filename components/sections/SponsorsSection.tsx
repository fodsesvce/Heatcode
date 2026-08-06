"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const SPONSOR = {
  name: "Nalaemton Infotech Pvt. Ltd.",
  category: "Cybersecurity Partner",
  website: "https://www.nalaemton.com",
  linkedin: "https://www.linkedin.com/company/nalaemton/",
  instagram: "https://www.instagram.com/nalaemtoninfotech/",
  logo: "/sponsors/nalaemton-logo.png",
  description:
    "Empowering innovation through cutting-edge cybersecurity solutions, cloud security, VAPT, application security, and security consulting. Proudly supporting the next generation of developers and AI innovators at HEATCODE 2026.",
};

export function SponsorsSection() {
  return (
    <section
      id="sponsors"
      className="relative overflow-hidden bg-[#030305] py-24 sm:py-28 lg:py-36"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-16 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#E50914]/10 blur-[140px]" />

        <div className="absolute bottom-0 left-0 h-[250px] w-[250px] rounded-full bg-[#E50914]/5 blur-[120px]" />

        <div className="absolute right-0 top-0 h-[250px] w-[250px] rounded-full bg-[#E50914]/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.55em] text-[#E50914]">
            Proudly Sponsored By
          </p>

          <h2 className="mt-5 text-4xl font-black uppercase tracking-tight text-white sm:text-5xl lg:text-6xl">
            Our Sponsor
          </h2>

          <div className="mx-auto mt-6 h-[2px] w-24 rounded-full bg-gradient-to-r from-transparent via-[#E50914] to-transparent" />

          <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-white/70 sm:text-lg">
            HEATCODE 2026 is proudly supported by an industry leader committed
            to innovation, cybersecurity excellence, and empowering future
            technology professionals.
          </p>
        </motion.div>

        {/* Sponsor Card */}

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mx-auto mt-20 max-w-5xl"
        >
          <div
            className="
              group
              relative
              overflow-hidden
              rounded-3xl

              border
              border-[#E50914]/20

              bg-gradient-to-br
              from-[#0A0D12]
              via-[#050608]
              to-[#090A0D]

              shadow-[0_25px_80px_rgba(0,0,0,.55)]

              transition-all
              duration-500

              hover:border-[#E50914]/45
              hover:shadow-[0_0_70px_rgba(229,9,20,.18)]
            "
          >
            {/* Animated Glow */}

            <div
              className="
                absolute
                inset-0

                opacity-0

                transition-opacity
                duration-500

                group-hover:opacity-100
              "
            >
              <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E50914]/10 blur-[120px]" />
            </div>

            <div className="relative grid gap-12 px-8 py-12 lg:grid-cols-[330px_1fr] lg:px-14 lg:py-14">
              {/* Logo */}

              <motion.div
                whileHover={{
                  scale: 1.04,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="flex items-center justify-center"
              >
                <div
                  className="
                    flex
                    h-[240px]
                    w-full
                    items-center
                    justify-center

                    rounded-2xl

                    border
                    border-white/10

                    bg-black/35

                    p-8

                    backdrop-blur-xl
                  "
                >
                  <Image
                    src={SPONSOR.logo}
                    alt={SPONSOR.name}
                    width={260}
                    height={260}
                    className="h-auto max-h-[180px] w-auto object-contain transition duration-500 group-hover:scale-105"
                  />
                </div>
              </motion.div>

              {/* Content */}

              <div className="flex flex-col justify-center">
                <span
                  className="
                    w-fit

                    rounded-full

                    border
                    border-[#E50914]/30

                    bg-[#E50914]/10

                    px-4
                    py-2

                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-[0.3em]

                    text-[#ff5b65]
                  "
                >
                  {SPONSOR.category}
                </span>

                <h3 className="mt-6 text-3xl font-black uppercase leading-tight text-white sm:text-4xl">
                  {SPONSOR.name}
                </h3>

                <p className="mt-8 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                  {SPONSOR.description}
                </p>

                {/* Highlights */}

                <div className="mt-10 flex flex-wrap gap-3">
                  {[
                    "Cloud Security",
                    "Application Security",
                    "VAPT",
                    "Security Consulting",
                  ].map((item) => (
                    <div
                      key={item}
                      className="
                        rounded-full

                        border
                        border-white/10

                        bg-white/5

                        px-4
                        py-2

                        text-xs
                        font-medium
                        uppercase
                        tracking-[0.18em]

                        text-white/80
                      "
                    >
                      {item}
                    </div>
                  ))}
                </div>

                {/* Button */}

                {/* Buttons */}

<div className="mt-12 flex flex-wrap gap-4">
  {/* Website */}

  <motion.a
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.98 }}
    href={SPONSOR.website}
    target="_blank"
    rel="noopener noreferrer"
    className="
      inline-flex
      items-center
      justify-center

      rounded-md

      border
      border-[#E50914]/35

      bg-gradient-to-r
      from-[#E50914]
      to-[#c40812]

      px-8
      py-4

      text-sm
      font-semibold
      uppercase
      tracking-[0.15em]

      text-white

      shadow-[0_0_30px_rgba(229,9,20,.25)]

      transition-all
      duration-300

      hover:shadow-[0_0_40px_rgba(229,9,20,.45)]
    "
  >
    Visit Website
  </motion.a>

  {/* LinkedIn */}

  <motion.a
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.98 }}
    href={SPONSOR.linkedin}
    target="_blank"
    rel="noopener noreferrer"
    className="
      inline-flex
      items-center
      gap-2

      rounded-md

      border
      border-[#0A66C2]/40

      bg-[#0A66C2]/10

      px-6
      py-4

      text-sm
      font-semibold

      text-white

      transition-all
      duration-300

      hover:bg-[#0A66C2]
    "
  >
    <FaLinkedin size={18} />
    LinkedIn
  </motion.a>

  {/* Instagram */}

  <motion.a
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.98 }}
    href={SPONSOR.instagram}
    target="_blank"
    rel="noopener noreferrer"
    className="
      inline-flex
      items-center
      gap-2

      rounded-md

      border
      border-pink-500/40

      bg-pink-500/10

      px-6
      py-4

      text-sm
      font-semibold

      text-white

      transition-all
      duration-300

      hover:bg-gradient-to-r
      hover:from-pink-500
      hover:via-purple-500
      hover:to-orange-400
    "
  >
    <FaInstagram size={18} />
    Instagram
  </motion.a>
</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}