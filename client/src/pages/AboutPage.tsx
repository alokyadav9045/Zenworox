import { motion } from "motion/react";
import { Target, Eye, Heart } from "lucide-react";
import { GlassCard } from "../components/GlassCard";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Brand Story Video */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <div className="relative h-[500px] rounded-3xl overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1563394867331-e687a36112fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwdGVjaG5vbG9neSUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3NzA5ODM0OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Our Story"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/70 to-transparent flex items-center justify-center">
              <div className="text-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6 mx-auto cursor-pointer hover:bg-white/30 transition-colors"
                >
                  <div className="w-0 h-0 border-l-[30px] border-l-white border-y-[18px] border-y-transparent ml-2"></div>
                </motion.div>
                <h2 className="text-3xl font-bold text-white mb-2">Our Vision for Indian Students</h2>
                <p className="text-gray-300">Watch our brand story</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            { icon: Target, title: "Our Mission", desc: "Democratize access to cutting-edge technology education for every school in India", gradient: "from-[#00F5FF] to-[#0099CC]" },
            { icon: Eye, title: "Our Vision", desc: "Create a generation of innovators who can compete globally and solve India's challenges", gradient: "from-[#6A5BFF] to-[#9B7FFF]" },
            { icon: Heart, title: "Our Values", desc: "Excellence, Innovation, Accessibility, Integrity, and Student-First Approach", gradient: "from-[#FF6B6B] to-[#FF8E53]" },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
              >
                <GlassCard glow className="h-full text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-300">{item.desc}</p>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="text-white">Our </span>
            <span className="bg-gradient-to-r from-[#00F5FF] to-[#6A5BFF] bg-clip-text text-transparent">
              Journey
            </span>
          </h2>

          <div className="space-y-8">
            {[
              { year: "2018", title: "Founded", desc: "Started with a vision to transform Indian education" },
              { year: "2019", title: "First 50 Schools", desc: "Reached our first milestone of 50 partner schools" },
              { year: "2020", title: "National Expansion", desc: "Expanded operations to 10 states across India" },
              { year: "2022", title: "10,000 Students", desc: "Trained over 10,000 students in future-ready skills" },
              { year: "2024", title: "Innovation Summit", desc: "Launched annual national innovation competition" },
              { year: "2026", title: "500+ Schools", desc: "Growing strong with 500+ partner schools nationwide" },
            ].map((milestone, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <GlassCard className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-[#00F5FF] to-[#6A5BFF] flex items-center justify-center">
                    <div className="text-xl font-bold">{milestone.year}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{milestone.title}</h3>
                    <p className="text-gray-300">{milestone.desc}</p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Founder Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <GlassCard className="overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative h-80 rounded-2xl overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1566915896913-549d796d2166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBwcm9ncmFtbWluZ3xlbnwxfHx8fDE3NzEwMDQzNzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Founder"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000] to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
                    <div className="w-0 h-0 border-l-[16px] border-l-white border-y-[10px] border-y-transparent ml-1"></div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <div className="text-sm text-[#00F5FF] mb-2">Message from Founder</div>
                <h3 className="text-2xl font-bold text-white mb-4">Empowering the Next Generation</h3>
                <p className="text-gray-300 mb-4">
                  "Our mission is simple yet profound: make world-class technology education accessible to every student in India, regardless of their school's budget or location."
                </p>
                <p className="text-gray-400 text-sm italic">
                  Watch the full 30-second message
                </p>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
}
