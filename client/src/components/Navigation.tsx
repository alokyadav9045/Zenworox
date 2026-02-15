import { Link, useLocation } from "react-router";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "motion/react";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/modules", label: "Our Modules" },
    { path: "/free-lab-setup", label: "Free Lab Setup" },
    { path: "/annual-event", label: "Annual Tech Event" },
    { path: "/internship", label: "Internship" },
    { path: "/about", label: "About Us" },
  ];

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00F5FF] to-[#6A5BFF] z-[100] origin-left"
        style={{
          scaleX: scrolled ? 1 : 0,
        }}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-[#000000]/80 backdrop-blur-xl border-b border-white/10 shadow-lg'
          : 'bg-transparent'
          }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-28">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-28 h-28 flex items-center justify-center">
                <img src="/zen logo.png" alt="ZenworoX Logo" className="w-full h-full object-contain" />
              </div>

            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="relative px-4 py-2 text-sm font-medium transition-colors group"
                  >
                    <span className={isActive ? "text-[#00F5FF]" : "text-gray-300 hover:text-white"}>
                      {link.label}
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00F5FF] to-[#6A5BFF]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Link to="/contact">
                <Button
                  className="relative overflow-hidden bg-gradient-to-r from-[#00F5FF] to-[#6A5BFF] text-white border-0 hover:shadow-[0_0_30px_rgba(0,245,255,0.5)] transition-all duration-300"
                >
                  <span className="relative z-10">Partner With Us</span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-white/10 bg-[#000000]/95 backdrop-blur-xl"
            >
              <nav className="container mx-auto px-4 py-6 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-4 py-3 rounded-lg transition-colors ${location.pathname === link.path
                      ? "bg-gradient-to-r from-[#00F5FF]/20 to-[#6A5BFF]/20 text-[#00F5FF]"
                      : "hover:bg-white/5 text-gray-300"
                      }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link to="/contact" className="mt-4">
                  <Button className="w-full bg-gradient-to-r from-[#00F5FF] to-[#6A5BFF] text-white border-0">
                    Partner With Us
                  </Button>
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
