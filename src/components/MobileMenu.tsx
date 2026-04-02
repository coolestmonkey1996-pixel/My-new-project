import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const handleLinkClick = () => {
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden"
          />

          {/* Menu */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 bottom-0 w-[280px] bg-zinc-950 border-l border-white/10 z-50 md:hidden"
          >
            <div className="p-6">
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Logo */}
              <div className="text-2xl font-bold tracking-[0.3em] mb-12 mt-2">
                PAIN
              </div>

              {/* Navigation */}
              <nav className="flex flex-col gap-6">
                <a
                  href="#about"
                  onClick={handleLinkClick}
                  className="text-lg tracking-wider hover:text-red-500 transition-colors"
                >
                  ABOUT
                </a>
                <a
                  href="#services"
                  onClick={handleLinkClick}
                  className="text-lg tracking-wider hover:text-red-500 transition-colors"
                >
                  SERVICES
                </a>
                <a
                  href="#portfolio"
                  onClick={handleLinkClick}
                  className="text-lg tracking-wider hover:text-red-500 transition-colors"
                >
                  PORTFOLIO
                </a>
                <a
                  href="#contact"
                  onClick={handleLinkClick}
                  className="text-lg tracking-wider hover:text-red-500 transition-colors"
                >
                  CONTACT
                </a>
              </nav>

              {/* Book button */}
              <a
                href="#contact"
                onClick={handleLinkClick}
                className="block bg-red-600 hover:bg-red-700 px-6 py-3 text-center text-sm tracking-wider transition-colors mt-12"
              >
                BOOK SESSION
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
