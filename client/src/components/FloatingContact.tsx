import { motion } from "motion/react";
import { MessageCircle, Phone } from "lucide-react";

export function FloatingContact() {
  const whatsappNumber = "1234567890"; // Placeholder
  const phoneNumber = "1234567890"; // Placeholder

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <motion.a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 bg-[#25D366] rounded-full shadow-lg hover:bg-[#128C7E] transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </motion.a>

      {/* Phone Button */}
      <motion.a
        href={`tel:${phoneNumber}`}
        className="flex items-center justify-center w-12 h-12 bg-[#00F5FF] rounded-full shadow-lg hover:bg-[#00D4FF] transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        title="Call Us"
      >
        <Phone className="w-6 h-6 text-black" />
      </motion.a>
    </div>
  );
}
