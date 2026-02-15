import { motion } from "motion/react";
import { Megaphone, Code as CodeIcon, BarChart, Archive } from "lucide-react";
import { GlassCard } from "../components/GlassCard";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function InternshipPage() {
  const domains = [
    { icon: Megaphone, title: "Media & Marketing", desc: "Content creation, social media, branding", gradient: "from-[#FF6B6B] to-[#FF8E53]" },
    { icon: CodeIcon, title: "Tech", desc: "Software development, AI/ML, web/app dev", gradient: "from-[#00F5FF] to-[#0099CC]" },
    { icon: BarChart, title: "Operations", desc: "Project management, logistics, partnerships", gradient: "from-[#6A5BFF] to-[#9B7FFF]" },
    { icon: Archive, title: "Data & Archive", desc: "Data analysis, documentation, research", gradient: "from-[#4ECDC4] to-[#44A08D]" },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#00F5FF] to-[#6A5BFF] bg-clip-text text-transparent">
              Internship Program
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Build With Us. Innovate With Schools.
          </p>
        </motion.div>

        {/* Culture Video */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-20 max-w-4xl mx-auto"
        >
          <GlassCard className="overflow-hidden">
            <div className="relative h-96">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1566915896913-549d796d2166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBwcm9ncmFtbWluZyUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzEwMDQzNzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Intern Culture"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/90 to-transparent flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 mx-auto cursor-pointer hover:bg-white/30 transition-colors">
                    <div className="w-0 h-0 border-l-[20px] border-l-white border-y-[12px] border-y-transparent ml-1"></div>
                  </div>
                  <p className="text-white text-lg">Watch our intern experience video</p>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Domains */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="text-white">Internship </span>
            <span className="bg-gradient-to-r from-[#00F5FF] to-[#6A5BFF] bg-clip-text text-transparent">
              Domains
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {domains.map((domain, i) => {
              const Icon = domain.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, rotateY: 90 }}
                  animate={{ opacity: 1, rotateY: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ rotateY: 10 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <GlassCard glow className="h-full text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${domain.gradient} flex items-center justify-center`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{domain.title}</h3>
                    <p className="text-gray-400 text-sm">{domain.desc}</p>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Application Flow */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Application Process
          </h2>

          <div className="relative">
            {/* Progress line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00F5FF] to-[#6A5BFF] opacity-30"></div>

            <div className="space-y-8">
              {[
                { step: 1, title: "Apply Online", desc: "Submit your application with resume and cover letter" },
                { step: 2, title: "Initial Screening", desc: "Review of applications and shortlisting" },
                { step: 3, title: "Interview Round", desc: "Video or in-person interview with our team" },
                { step: 4, title: "Offer & Onboarding", desc: "Selected candidates receive offer and orientation" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative flex items-start gap-6"
                >
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00F5FF] to-[#6A5BFF] flex items-center justify-center text-2xl font-bold z-10">
                    {item.step}
                  </div>
                  <GlassCard className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-300">{item.desc}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
