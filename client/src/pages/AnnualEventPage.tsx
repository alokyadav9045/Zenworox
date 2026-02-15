import { motion } from "motion/react";
import { Trophy, Users, Presentation, Award } from "lucide-react";
import { GlassCard } from "../components/GlassCard";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function AnnualEventPage() {
  const events = [
    { icon: Trophy, title: "Robotics Championship", desc: "National-level robotics competition", gradient: "from-[#00F5FF] to-[#0099CC]" },
    { icon: Presentation, title: "Hackathons", desc: "24-hour coding challenges", gradient: "from-[#6A5BFF] to-[#9B7FFF]" },
    { icon: Users, title: "VFX Showcase", desc: "Student animation film festival", gradient: "from-[#FF6B6B] to-[#FF8E53]" },
    { icon: Award, title: "Innovation Awards", desc: "Recognizing best projects", gradient: "from-[#4ECDC4] to-[#44A08D]" },
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
          <div className="relative h-[400px] rounded-3xl overflow-hidden mb-12">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1563394867331-e687a36112fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwdGVjaG5vbG9neSUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3NzA5ODM0OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Annual Event"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F2A] via-[#0B0F2A]/50 to-transparent flex items-center justify-center">
              <div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                  <span className="block text-white">Annual</span>
                  <span className="block bg-gradient-to-r from-[#00F5FF] to-[#6A5BFF] bg-clip-text text-transparent">
                    Innovation Summit
                  </span>
                </h1>
                <p className="text-xl text-gray-300">Where Future Innovators Compete & Shine</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Event Highlights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {events.map((event, i) => {
            const Icon = event.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ rotateY: 5 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <GlassCard glow className="text-center h-full">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${event.gradient} flex items-center justify-center`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                  <p className="text-gray-400 text-sm">{event.desc}</p>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

        {/* Gallery */}
        <div>
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="text-white">Event </span>
            <span className="bg-gradient-to-r from-[#00F5FF] to-[#6A5BFF] bg-clip-text text-transparent">
              Gallery
            </span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative h-64 rounded-2xl overflow-hidden cursor-pointer group"
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1563394867331-e687a36112fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxmdXR1cmlzdGljJTIwdGVjaG5vbG9neSUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3NzA5ODM0OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt={`Event ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
