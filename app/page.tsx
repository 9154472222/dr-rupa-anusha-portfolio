'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Download, BookOpen, Mail, Award, Users, BookMarked, Sparkles, CheckCircle2 } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-col gap-24 pb-32 overflow-hidden bg-slate-950 text-white">
      {/* Hero Section with Interactive Glowing Orbs & Staggered Motion */}
      <section className="relative overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-36 bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950">
        {/* Dynamic Glowing Background Elements */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-teal-500/20 rounded-full blur-[120px] pointer-events-none" 
        />
        <motion.div 
          animate={{ x: [-50, 50, -50], y: [-30, 30, -30] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" 
        />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#14B8A6_1.5px,transparent_1.5px)] [background-size:28px_28px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8">
              <motion.div 
                initial={{ opacity: 0, y: -20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-sm font-semibold backdrop-blur-xl shadow-lg shadow-teal-500/10"
              >
                <Sparkles className="w-4 h-4 text-teal-400 animate-spin" /> Digital Academic Hub & Learning Platform
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl sm:text-7xl font-black tracking-tight leading-none bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-teal-200"
              >
                Dr. Rupa Anusha
              </motion.h1>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-2"
              >
                <p className="text-2xl text-teal-400 font-bold tracking-wide">
                  Assistant Professor
                </p>
                <p className="text-lg text-slate-400 font-medium">
                  Department of Polymer Engineering
                </p>
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-slate-300 text-lg italic max-w-xl border-l-4 border-teal-500 pl-5 py-2 bg-gradient-to-r from-teal-500/10 to-transparent rounded-r-2xl backdrop-blur-md"
              >
                &ldquo;Inspiring Future Engineers Through Quality Education & Research Excellence&rdquo;
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-wrap gap-4 pt-2"
              >
                <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/resume.pdf" target="_blank" className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 text-white font-bold shadow-xl shadow-teal-600/30 transition-all">
                    <Download className="w-5 h-5" /> Download Resume
                  </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/notes" className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-slate-900/80 hover:bg-slate-800 border border-teal-500/30 text-white font-bold backdrop-blur-xl shadow-xl transition-all">
                    <BookOpen className="w-5 h-5 text-teal-400" /> View Notes Hub
                  </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/contact" className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-transparent hover:bg-white/5 text-slate-300 hover:text-white border border-slate-700 backdrop-blur-md transition-all">
                    <Mail className="w-5 h-5" /> Contact
                  </Link>
                </motion.div>
              </motion.div>
            </div>

            {/* Right Floating Glassmorphic Profile Badge Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: -3 }} 
              animate={{ opacity: 1, scale: 1, rotate: 0 }} 
              transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 100 }}
              className="lg:col-span-5 relative flex justify-center"
            >
              <div className="w-full max-w-md rounded-[36px] bg-gradient-to-tr from-teal-500/40 via-amber-500/25 to-indigo-500/40 p-1.5 shadow-2xl backdrop-blur-2xl">
                <div className="w-full h-[440px] rounded-[30px] bg-slate-900/95 flex flex-col items-center justify-center p-8 text-center relative overflow-hidden border border-white/10 group">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(20,184,166,0.15),transparent_50%)]" />
                  
                  {/* Floating Animated Icon Badge */}
                  <motion.div 
                    animate={{ y: [-8, 8, -8] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="w-24 h-24 rounded-3xl bg-gradient-to-br from-teal-500/20 to-teal-500/5 border border-teal-500/40 flex items-center justify-center text-teal-400 mb-6 shadow-inner"
                  >
                    <Award className="w-12 h-12" />
                  </motion.div>

                  <h3 className="text-3xl font-black tracking-tight text-white mb-2">Dr. Rupa Anusha</h3>
                  <p className="text-teal-400 font-semibold mb-6">Polymer Engineering & Education</p>
                  
                  <div className="w-full grid grid-cols-2 gap-3 pt-6 border-t border-slate-800">
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/5 text-center">
                      <div className="text-xl font-black text-teal-300">10+ Years</div>
                      <div className="text-xs text-slate-400">Academic Career</div>
                    </div>
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/5 text-center">
                      <div className="text-xl font-black text-amber-300">5,000+</div>
                      <div className="text-xs text-slate-400">Students Guided</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Statistics Strip */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24 pt-12 border-t border-slate-800/80"
          >
            {[
              { label: 'Students Taught', value: '5000+', icon: Users, color: 'text-teal-400 bg-teal-500/10 border-teal-500/20' },
              { label: 'Years Experience', value: '10+', icon: Award, color: 'text-amber-400 bg-amber-500/10 border-amber-500/20' },
              { label: 'Study Materials', value: '100+', icon: BookMarked, color: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20' },
              { label: 'Workshops', value: '25+', icon: Sparkles, color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' },
            ].map((stat, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -6, scale: 1.03 }}
                transition={{ duration: 0.2 }}
                className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 backdrop-blur-2xl shadow-2xl flex items-center gap-4 group cursor-pointer"
              >
                <div className={`p-4 rounded-2xl border ${stat.color} transition-transform group-hover:rotate-12 duration-300`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">{stat.value}</div>
                  <div className="text-xs sm:text-sm font-medium text-slate-400">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* Featured Quick Access Grid with Interactive Hover Physics */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-teal-400">Interactive Portals</span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight mt-1">Featured Hub Sections</h2>
          </div>
          <Link href="/notes" className="text-teal-400 font-bold inline-flex items-center gap-2 hover:translate-x-2 transition-transform">
            Explore All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Latest Notes & PDFs', desc: 'Access structured unit-wise lecture notes, PPTs, and reference materials instantly.', link: '/notes', badge: 'Updated Today', glow: 'from-teal-500/20 via-teal-500/5 to-transparent' },
            { title: 'Announcements', desc: 'Stay updated with urgent class schedules, assignment deadlines, and exam notifications.', link: '/notes', badge: 'Important', glow: 'from-amber-500/20 via-amber-500/5 to-transparent' },
            { title: 'Video Classes', desc: 'Catch up on recorded lectures, technical tutorials, and immersive lab walkthroughs.', link: '/notes', badge: 'HD Quality', glow: 'from-indigo-500/20 via-indigo-500/5 to-transparent' },
          ].map((item, idx) => (
            <motion.div 
              key={idx} 
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative p-8 rounded-[32px] bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden group cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
              
              <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-bold shadow-inner">
                {item.badge}
              </span>
              
              <h3 className="text-2xl font-black mb-3 text-white group-hover:text-teal-400 transition-colors">{item.title}</h3>
              <p className="text-slate-400 mb-8 text-sm leading-relaxed">{item.desc}</p>
              
              <Link href={item.link} className="inline-flex items-center gap-2 font-bold text-teal-400 group-hover:gap-3 transition-all">
                Access Hub <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}