import { motion } from "motion/react";
import { Bot, Film, Code, Sparkles } from "lucide-react";
import { GlassCard } from "../../components/GlassCard";

const offerings = [
  {
    icon: Bot,
    title: "Robotics & Prototyping",
    description: "Build, program, and compete with cutting-edge robotics kits. From basic mechanics to autonomous systems.",
    gradient: "from-[#00F5FF] to-[#0099CC]",
    features: ["Arduino & Raspberry Pi", "Sensor Integration", "Autonomous Navigation", "Competition Training"]
  },
  {
    icon: Film,
    title: "Animation & Graphics",
    description: "Master VFX, 3D modeling, and animation with industry-standard tools used in blockbuster films.",
    gradient: "from-[#6A5BFF] to-[#9B7FFF]",
    features: ["3D Modeling & Texturing", "Motion Graphics", "Video Compositing", "Character Animation"]
  },
  {
    icon: Code,
    title: "Coding & AI/ML",
    description: "Learn programming from scratch to AI. Build apps, games, and intelligent systems that solve real problems.",
    gradient: "from-[#00F5FF] to-[#6A5BFF]",
    features: ["Python & JavaScript", "Web Development", "Machine Learning", "Game Development"]
  },
];

export function WhatWeOffer() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#00F5FF]/20 to-[#6A5BFF]/20 border border-[#00F5FF]/30 backdrop-blur-sm mb-6">
            <Sparkles className="h-4 w-4 text-[#00F5FF]" />
            <span className="text-sm text-[#00F5FF]">What We Offer</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-white">Future-Ready </span>
            <span className="bg-gradient-to-r from-[#00F5FF] to-[#6A5BFF] bg-clip-text text-transparent">
              Skill Modules
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive programs designed to prepare students for tomorrow's challenges
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {offerings.map((offering, index) => {
            const Icon = offering.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
              >
                <GlassCard glow className="h-full group cursor-pointer">
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className={`absolute inset-0 bg-gradient-to-br ${offering.gradient} rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity`}></div>
                    <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${offering.gradient} flex items-center justify-center`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-[#00F5FF] transition-colors">
                    {offering.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {offering.description}
                  </p>

                  {/* Features list */}
                  <div className="space-y-2">
                    {offering.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-400">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${offering.gradient}`}></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Hover border effect */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${offering.gradient} opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none`}></div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
