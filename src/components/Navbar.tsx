import { Github, Menu, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-cat-base/80 backdrop-blur-md border-b border-cat-surface'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex-shrink-0 flex items-center gap-2 cursor-pointer group">
            <img
              src="/logo.svg"
              alt="Faster Chat Logo"
              className="h-8 w-8 group-hover:rotate-3 transition-transform"
            />
            <span className="font-bold text-xl tracking-tight text-white group-hover:text-cat-mauve transition-colors">
              Faster Chat
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#features" className="text-cat-subtext hover:text-white transition-colors px-3 py-2 rounded-md text-sm font-medium">Features</a>
              <a href="#demo" className="text-cat-subtext hover:text-white transition-colors px-3 py-2 rounded-md text-sm font-medium">Demo</a>
              <a href="/docs/introduction/" className="text-cat-subtext hover:text-white transition-colors px-3 py-2 rounded-md text-sm font-medium">Docs</a>
              <a
                href="https://github.com/1337hero/faster-chat"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cat-surface hover:bg-cat-overlay text-white px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 border border-cat-overlay/50"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-cat-subtext hover:text-white hover:bg-cat-surface focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-cat-base border-b border-cat-surface">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#features" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Features</a>
            <a href="#demo" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Demo</a>
            <a href="/docs/introduction/" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Docs</a>
            <a href="https://github.com/1337hero/faster-chat" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">GitHub</a>
          </div>
        </div>
      )}
    </nav>
  );
};
