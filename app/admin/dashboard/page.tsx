'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Upload, FileText, CheckCircle, Users, HardDrive, MessageSquare, Loader2, Send, Database } from 'lucide-react';

export const dynamic = 'force-dynamic';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function AdminDashboard() {
  const [isMounted, setIsMounted] = useState(false);

  // Stats & States
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('2nd Year');
  const [semester, setSemester] = useState('Semester 1');
  const [subject, setSubject] = useState('Polymer Engineering');
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const [notesCount, setNotesCount] = useState(0);
  const [studentCount, setStudentCount] = useState(0);
  const [importingStudents, setImportingStudents] = useState(false);
  const [broadcastMessage, setBroadcastMessage] = useState('');
  const [broadcastTargetYear, setBroadcastTargetYear] = useState('2nd Year');
  const [sendingBroadcast, setSendingBroadcast] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    async function fetchStats() {
      const { count: nCount } = await supabase.from('notes').select('*', { count: 'exact', head: true });
      if (nCount !== null) setNotesCount(nCount);

      const { count: sCount } = await supabase.from('students').select('*', { count: 'exact', head: true });
      if (sCount !== null) setStudentCount(sCount);
    }
    fetchStats();
  }, []);

  if (!isMounted) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">
        <Loader2 className="w-8 h-8 animate-spin text-emerald-500" />
      </div>
    );
  }
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12 bg-slate-950 text-white min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-black tracking-tight">Admin Dashboard & Automation Hub</h1>
          <p className="text-slate-400">Manage course materials, import student registries, and trigger WhatsApp broadcasts.</p>
        </div>
        <span className="px-4 py-2 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-400 font-semibold text-sm">
          Active Admin Session
        </span>
      </div>

      {/* Analytics Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { label: 'Total Downloads', value: '1,420', icon: HardDrive, color: 'text-teal-400' },
          { label: 'Uploaded Notes', value: notesCount.toString(), icon: FileText, color: 'text-amber-400' },
          { label: 'Registered Students', value: studentCount.toString(), icon: Users, color: 'text-indigo-400' },
          { label: 'Student Queries', value: '12', icon: MessageSquare, color: 'text-emerald-400' },
        ].map((stat, idx) => (
          <div key={idx} className="p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl flex items-center gap-4">
            <div className={`p-3.5 rounded-2xl bg-white/5 border border-white/5 ${stat.color}`}>
              <stat.icon className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-black">{stat.value}</div>
              <div className="text-xs text-slate-400">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* SECTION 1: Upload Study Materials */}
        <div className="p-8 rounded-[32px] bg-slate-900 border border-slate-800 shadow-2xl space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-teal-500/10 border border-teal-500/30 text-teal-400">
              <Upload className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-black">Upload New Study Material</h2>
          </div>

          <form onSubmit={handleUpload} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase text-slate-400 mb-2">Material Title</label>
              <input 
                type="text" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g., Technical Writing - Unit 1 Notes"
                required
                className="w-full p-4 rounded-2xl bg-slate-950 border border-slate-800 text-white font-medium" 
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-400 mb-2">Year</label>
                <select value={year} onChange={(e) => setYear(e.target.value)} className="w-full p-4 rounded-2xl bg-slate-950 border border-slate-800 text-white font-medium">
                  {['1st Year', '2nd Year', '3rd Year', '4th Year'].map(yr => <option key={yr} value={yr}>{yr}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-slate-400 mb-2">Semester</label>
                <select value={semester} onChange={(e) => setSemester(e.target.value)} className="w-full p-4 rounded-2xl bg-slate-950 border border-slate-800 text-white font-medium">
                  {['Semester 1', 'Semester 2'].map(sem => <option key={sem} value={sem}>{sem}</option>)}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-slate-400 mb-2">Subject</label>
              <select value={subject} onChange={(e) => setSubject(e.target.value)} className="w-full p-4 rounded-2xl bg-slate-950 border border-slate-800 text-white font-medium">
                {['Polymer Engineering', 'English Communication', 'Soft Skills', 'Professional Ethics', 'Technical Writing'].map(sub => <option key={sub} value={sub}>{sub}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-slate-400 mb-2">Select File (PDF, PPT, ZIP)</label>
              <input 
                type="file" 
                onChange={(e) => e.target.files && setFile(e.target.files[0])}
                className="w-full p-3 rounded-2xl bg-slate-950 border border-slate-800 text-slate-400 text-sm file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:bg-teal-600 file:text-white file:font-bold" 
              />
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 text-white font-bold shadow-xl shadow-teal-600/30 flex items-center justify-center gap-2 transition-all disabled:opacity-50"
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <CheckCircle className="w-5 h-5" />}
              {loading ? 'Publishing...' : 'Publish Material'}
            </button>
          </form>
        </div>

        {/* SECTION 2: Student Registry & WhatsApp Broadcast */}
        <div className="space-y-8">
          {/* Import Registry */}
          <div className="p-8 rounded-[32px] bg-slate-900 border border-slate-800 shadow-2xl space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
                <Database className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-black">Import Student Registry (CSV)</h2>
            </div>
            <p className="text-xs text-slate-400">
              Upload yearly student list CSV with format: <code className="text-teal-400">Name, Phone, Branch, Year, Semester, College</code>
            </p>
            <input 
              type="file" 
              accept=".csv"
              onChange={handleStudentListUpload}
              className="w-full p-3 rounded-2xl bg-slate-950 border border-slate-800 text-slate-400 text-sm file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:bg-indigo-600 file:text-white file:font-bold" 
            />
            {importingStudents && <p className="text-xs text-indigo-400 animate-pulse">Importing students into database...</p>}
          </div>

          {/* WhatsApp Broadcast Tool */}
          <div className="p-8 rounded-[32px] bg-slate-900 border border-slate-800 shadow-2xl space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                <Send className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-black">WhatsApp Auto-Broadcast</h2>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-slate-400 mb-2">Target Academic Year</label>
              <select value={broadcastTargetYear} onChange={(e) => setBroadcastTargetYear(e.target.value)} className="w-full p-3 rounded-2xl bg-slate-950 border border-slate-800 text-white font-medium text-sm">
                {['1st Year', '2nd Year', '3rd Year', '4th Year'].map(yr => <option key={yr} value={yr}>{yr}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-slate-400 mb-2">Broadcast Message</label>
              <textarea 
                rows={3}
                value={broadcastMessage}
                onChange={(e) => setBroadcastMessage(e.target.value)}
                placeholder="New study notes uploaded for Polymer Engineering. Check the portal!"
                className="w-full p-3 rounded-2xl bg-slate-950 border border-slate-800 text-white font-medium text-sm focus:outline-none focus:border-emerald-500"
              />
            </div>

            <button 
              onClick={handleWhatsAppBroadcast}
              disabled={sendingBroadcast}
              className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold shadow-xl shadow-emerald-600/30 flex items-center justify-center gap-2 transition-all disabled:opacity-50 text-sm"
            >
              {sendingBroadcast ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
              {sendingBroadcast ? 'Broadcasting...' : 'Send WhatsApp Blast'}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}