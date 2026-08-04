'use client';
import Link from 'next/link';
import { BookOpen, User, Home, Mail, ShieldCheck, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo / Brand */}
          <Link href="/" className="font-extrabold text-lg sm:text-xl text-slate-900 dark:text-white flex items-center gap-2">
            <span className="p-2 rounded-xl bg-teal-600 text-white"><BookOpen className="w-5 h-5" /></span>
            <span>Dr. Rupa Anusha Hub</span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6 font-medium text-sm text-slate-600 dark:text-slate-300">
            <Link href="/" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">Home</Link>
            <Link href="/about" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">About</Link>
            <Link href="/notes" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">Notes Hub</Link>
            <Link href="/contact" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">Contact</Link>
            <Link href="/admin/dashboard" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-semibold transition-all shadow-sm">
              <ShieldCheck className="w-4 h-4" /> Admin Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-700 dark:text-slate-200 p-2">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 pt-2 pb-4 space-y-2">
          <Link href="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-lg font-medium hover:bg-slate-100 dark:hover:bg-slate-800">Home</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-lg font-medium hover:bg-slate-100 dark:hover:bg-slate-800">About</Link>
          <Link href="/notes" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-lg font-medium hover:bg-slate-100 dark:hover:bg-slate-800">Notes Hub</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-lg font-medium hover:bg-slate-100 dark:hover:bg-slate-800">Contact</Link>
          <Link href="/admin/dashboard" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-lg font-semibold bg-teal-600 text-white text-center">Admin Login</Link>
        </div>
      )}
    </nav>
  );
}