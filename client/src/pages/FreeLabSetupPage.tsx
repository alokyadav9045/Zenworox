import { motion } from "motion/react";
import { CheckCircle2, X } from "lucide-react";
import { GlassCard } from "../components/GlassCard";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function FreeLabSetupPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#00F5FF] to-[#6A5BFF] bg-clip-text text-transparent">
              Zero Investment
            </span>
            <span className="text-white"> Lab Setup</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Complete infrastructure with no upfront costs
          </p>
        </motion.div>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-20"
        >
          <GlassCard className="overflow-hidden">
            <div className="relative h-96">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1563394867331-e687a36112fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwdGVjaG5vbG9neSUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3NzA5ODM0OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Lab Setup Process"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/50 to-transparent flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 mx-auto cursor-pointer hover:bg-white/30 transition-colors">
                    <div className="w-0 h-0 border-l-[20px] border-l-white border-y-[12px] border-y-transparent ml-1"></div>
                  </div>
                  <p className="text-white text-lg">Watch our 60-second explainer</p>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Comparison Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="text-white">Traditional vs </span>
            <span className="bg-gradient-to-r from-[#00F5FF] to-[#6A5BFF] bg-clip-text text-transparent">
              ZenworoX Model
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Traditional */}
            <GlassCard className="border-red-500/20">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                  <X className="h-6 w-6 text-red-500" />
                </div>
                Traditional Lab
              </h3>
              <div className="space-y-4">
                {[
                  "₹50L+ Initial Investment",
                  "Equipment Depreciation",
                  "Hiring & Training Costs",
                  "Maintenance Burden",
                  "Technology Obsolescence",
                  "Limited Curriculum Updates"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-400">
                    <X className="h-5 w-5 text-red-500 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </GlassCard>

            {/* ZenworoX */}
            <GlassCard className="border-[#00F5FF]/20 shadow-[0_0_30px_rgba(0,245,255,0.2)]">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00F5FF] to-[#6A5BFF] flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6 text-white" />
                </div>
                ZenworoX Model
              </h3>
              <div className="space-y-4">
                {[
                  "₹0 Initial Investment",
                  "Always Latest Equipment",
                  "Expert Trainers Included",
                  "Full Maintenance Support",
                  "Annual Tech Upgrades",
                  "Continuous Curriculum Updates"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-200">
                    <CheckCircle2 className="h-5 w-5 text-[#00F5FF] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>

        {/* Partnership Flow */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            How It Works
          </h2>
          <div className="space-y-6">
            {[
              { step: "1", title: "Initial Consultation", desc: "Understand your school's needs and customize the lab setup" },
              { step: "2", title: "Agreement & Planning", desc: "Sign partnership agreement and plan the installation timeline" },
              { step: "3", title: "Lab Installation", desc: "Complete setup in 2 weeks with all equipment and training" },
              { step: "4", title: "Launch & Training", desc: "Trainer deployment and student program commencement" },
              { step: "5", title: "Ongoing Support", desc: "Continuous maintenance, updates, and technical support" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <GlassCard className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00F5FF] to-[#6A5BFF] flex items-center justify-center text-2xl font-bold">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-300">{item.desc}</p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
