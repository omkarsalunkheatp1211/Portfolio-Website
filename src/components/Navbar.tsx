'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/skills', label: 'Skills' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-[#122620] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-[#F4EBD0]">
              Portfolio
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex sm:items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`ml-8 text-sm font-medium transition-colors duration-200 relative ${
                  isActive(link.href)
                    ? 'text-[#D6AD60]'
                    : 'text-[#F4EBD0] hover:text-[#B68D40]'
                } ${
                  isActive(link.href) &&
                  'after:absolute after:bottom-[-1.2rem] after:left-0 after:w-full after:h-0.5 after:bg-[#D6AD60]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#F4EBD0] hover:text-[#D6AD60] focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Border Line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#B68D40] to-transparent"></div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="sm:hidden bg-[#122620] border-t border-[#B68D40] border-opacity-20">
          <div className="pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-3 py-2 text-base font-medium ${
                  isActive(link.href)
                    ? 'text-[#D6AD60] bg-[#B68D40] bg-opacity-20'
                    : 'text-[#F4EBD0] hover:text-[#D6AD60] hover:bg-[#B68D40] hover:bg-opacity-10'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 