import { motion } from "motion/react";
import { Bot, Film, Code, Gamepad2, Printer, Brain } from "lucide-react";
import { GlassCard } from "../components/GlassCard";
import { useState } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { X } from "lucide-react";

const modules = [
  {
    icon: Bot,
    title: "Robotics & Prototyping",
    description: "Build and program robots from basic mechanics to advanced autonomous systems",
    gradient: "from-[#00F5FF] to-[#0099CC]",
    image: "https://images.unsplash.com/photo-1666558889375-798fa96b559a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdGljcyUyMGxhYiUyMHN0dWRlbnRzfGVufDF8fHx8MTc3MTA5NTYzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    equipment: ["Arduino Kits", "Raspberry Pi", "Sensors & Actuators", "3D Printer"],
    careers: ["Robotics Engineer", "Automation Specialist", "IoT Developer"],
    skills: ["Circuit Design", "Programming", "Mechanical Assembly", "Problem Solving"],
    outcomes: "Students build competition-ready robots and develop critical STEM skills"
  },
  {
    icon: Film,
    title: "Animation & Graphics",
    description: "Master VFX, 3D modeling with industry-standard tools",
    gradient: "from-[#6A5BFF] to-[#9B7FFF]",
    image: "https://images.unsplash.com/photo-1731834453355-df041245e7d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjbGFzc3Jvb20lMjB0ZWNobm9sb2d5JTIwbGFifGVufDF8fHx8MTc3MTA5NTYzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    equipment: ["High-end Workstations", "Graphics Tablets", "Animation Software", "Rendering Farm"],
    careers: ["3D Artist", "VFX Specialist", "Motion Designer"],
    skills: ["3D Modeling", "Texturing", "Animation", "Compositing"],
    outcomes: "Create portfolio-ready work for film and gaming industries"
  },
  {
    icon: Code,
    title: "Coding & AI/ML",
    description: "From programming fundamentals to artificial intelligence",
    gradient: "from-[#00F5FF] to-[#6A5BFF]",
    image: "https://images.unsplash.com/photo-1566915896913-549d796d2166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBwcm9ncmFtbWluZyUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzEwMDQzNzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    equipment: ["Developer Laptops", "Cloud Access", "AI/ML Platforms", "IDEs"],
    careers: ["Software Developer", "Data Scientist", "AI Engineer"],
    skills: ["Python", "JavaScript", "Machine Learning", "Web Development"],
    outcomes: "Build real applications and AI models solving real problems"
  },
  {
    icon: Gamepad2,
    title: "Game Development",
    description: "Design and build games using professional engines",
    gradient: "from-[#FF6B6B] to-[#FF8E53]",
    image: "https://images.unsplash.com/photo-1563520239648-a24e51d4b570?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzRCUyMHByaW50aW5nJTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc3MTA5NjAwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    equipment: ["Gaming PCs", "Unity/Unreal", "VR Headsets", "Game Controllers"],
    careers: ["Game Designer", "Game Programmer", "Level Designer"],
    skills: ["Game Engines", "C#/C++", "Game Physics", "UI/UX Design"],
    outcomes: "Publish games on app stores and gaming platforms"
  },
  {
    icon: Printer,
    title: "3D Printing",
    description: "Transform digital designs into physical prototypes",
    gradient: "from-[#4ECDC4] to-[#44A08D]",
    image: "https://images.unsplash.com/photo-1563520239648-a24e51d4b570?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzRCUyMHByaW50aW5nJTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc3MTA5NjAwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    equipment: ["FDM Printers", "Resin Printers", "CAD Software", "Post-processing Tools"],
    careers: ["Product Designer", "Prototyping Specialist", "Manufacturing Engineer"],
    skills: ["CAD Design", "3D Modeling", "Material Science", "Manufacturing"],
    outcomes: "Create functional prototypes and innovative products"
  },
  {
    icon: Brain,
    title: "STEM Integration",
    description: "Interdisciplinary projects combining all technologies",
    gradient: "from-[#A770EF] to-[#CF8BF3]",
    image: "https://images.unsplash.com/photo-1563394867331-e687a36112fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwdGVjaG5vbG9neSUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3NzA5ODM0OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    equipment: ["All Lab Equipment", "Project Kits", "Research Tools", "Competition Gear"],
    careers: ["Innovation Specialist", "Research Scientist", "Technology Consultant"],
    skills: ["System Thinking", "Project Management", "Research", "Innovation"],
    outcomes: "Compete in national and international STEM competitions"
  },
];

export function ModulesPage() {
  const [selectedModule, setSelectedModule] = useState<typeof modules[0] | null>(null);

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-white">Future-Ready </span>
            <span className="bg-gradient-to-r from-[#00F5FF] to-[#6A5BFF] bg-clip-text text-transparent">
              Skill Modules
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive programs designed to prepare students for tomorrow's challenges
          </p>
        </motion.div>

        {/* Modules Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, index) => {
            const Icon = module.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedModule(module)}
              >
                <GlassCard glow className="h-full cursor-pointer group">
                  <div className="relative h-48 -m-6 mb-6 rounded-t-2xl overflow-hidden">
                    <ImageWithFallback
                      src={module.image}
                      alt={module.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#000000] to-transparent"></div>
                    <div className={`absolute top-4 left-4 w-14 h-14 rounded-xl bg-gradient-to-br ${module.gradient} flex items-center justify-center shadow-lg`}>
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#00F5FF] transition-colors">
                    {module.title}
                  </h3>
                  <p className="text-gray-300">{module.description}</p>

                  <div className="mt-6 text-sm text-[#00F5FF] flex items-center gap-2 group-hover:gap-3 transition-all">
                    <span>Learn More</span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {selectedModule && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedModule(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8"
          >
            <button
              onClick={() => setSelectedModule(null)}
              className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
                  <ImageWithFallback
                    src={selectedModule.image}
                    alt={selectedModule.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-white mb-4">{selectedModule.title}</h2>
                <p className="text-gray-300 mb-6">{selectedModule.description}</p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-[#00F5FF] mb-3">Equipment</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedModule.equipment.map((item, i) => (
                        <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-[#6A5BFF] mb-3">Career Pathways</h3>
                    <div className="space-y-2">
                      {selectedModule.careers.map((career, i) => (
                        <div key={i} className="text-gray-300">• {career}</div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-[#00F5FF] mb-3">Skills Covered</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedModule.skills.map((skill, i) => (
                        <span key={i} className="px-3 py-1 bg-gradient-to-r from-[#00F5FF]/20 to-[#6A5BFF]/20 border border-[#00F5FF]/30 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                    <h3 className="text-sm font-bold text-white mb-2">Student Outcomes</h3>
                    <p className="text-sm text-gray-300">{selectedModule.outcomes}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
