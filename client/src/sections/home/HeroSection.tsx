import { motion } from "motion/react";
import { Button } from "../../components/ui/button";
import { ArrowRight, Play, ChevronDown, Rocket } from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#00F5FF] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#00F5FF]/20 to-[#6A5BFF]/20 border border-[#00F5FF]/30 backdrop-blur-sm"
            >
              <Rocket className="h-4 w-4 text-[#00F5FF]" />
              <span className="text-sm text-[#00F5FF]">Empowering Future Innovators</span>
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
              >
                <span className="block text-white">Unlock Tomorrow's</span>
                <span className="block bg-gradient-to-r from-[#00F5FF] via-[#6A5BFF] to-[#00F5FF] bg-clip-text text-transparent animate-gradient-x" style={{
                  backgroundSize: '200% auto',
                }}>
                  Innovators, Today
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-300 max-w-xl leading-relaxed"
              >
                Empowering Schools with <span className="text-[#00F5FF] font-semibold">AI</span>, <span className="text-[#6A5BFF] font-semibold">VFX/Animation</span> & <span className="text-[#00F5FF] font-semibold">Robotics Labs</span>
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/contact">
                <Button
                  size="lg"
                  className="relative overflow-hidden bg-gradient-to-r from-[#00F5FF] to-[#6A5BFF] text-white border-0 group hover:shadow-[0_0_40px_rgba(0,245,255,0.5)] transition-all duration-300 text-lg px-8 py-6"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Partner With Us
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                </Button>
              </Link>

              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#00F5FF] text-[#00F5FF] hover:bg-[#00F5FF]/10 text-lg px-8 py-6 group"
              >
                <Play className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                Request Virtual Tour
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-8 pt-8"
            >
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-[#00F5FF] to-[#6A5BFF] bg-clip-text text-transparent">500+</div>
                <div className="text-sm text-gray-400">Schools</div>
              </div>
              <div className="w-px h-12 bg-gradient-to-b from-transparent via-[#00F5FF] to-transparent"></div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-[#00F5FF] to-[#6A5BFF] bg-clip-text text-transparent">50K+</div>
                <div className="text-sm text-gray-400">Students</div>
              </div>
              <div className="w-px h-12 bg-gradient-to-b from-transparent via-[#00F5FF] to-transparent"></div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-[#00F5FF] to-[#6A5BFF] bg-clip-text text-transparent">₹0</div>
                <div className="text-sm text-gray-400">Investment</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - 3D Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="relative"
          >
            <div className="relative">
              {/* Floating glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#00F5FF] to-[#6A5BFF] rounded-3xl blur-3xl opacity-30 animate-pulse"></div>

              {/* Main image container */}
              <div className="relative rounded-3xl overflow-hidden border border-white/10 backdrop-blur-sm">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1563394867331-e687a36112fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwdGVjaG5vbG9neSUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3NzA5ODM0OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Futuristic Lab"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 z-0">
                  <div className="absolute inset-0 bg-gradient-to-b from-[#000000] via-[#000000] to-[#000000] opacity-80"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#000000] to-transparent z-10"></div>
                </div>
              </div>

              {/* Floating cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-4 shadow-[0_0_30px_rgba(0,245,255,0.3)]"
              >
                <div className="text-sm text-gray-300">Setup Time</div>
                <div className="text-2xl font-bold text-[#00F5FF]">2 Weeks</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -top-6 -right-6 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-4 shadow-[0_0_30px_rgba(106,91,255,0.3)]"
              >
                <div className="text-sm text-gray-300">Success Rate</div>
                <div className="text-2xl font-bold text-[#6A5BFF]">98%</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="h-8 w-8 text-[#00F5FF]" />
      </motion.div>

      <style>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </section>
  );
}
