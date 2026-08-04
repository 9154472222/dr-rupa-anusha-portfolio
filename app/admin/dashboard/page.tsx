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
    // ... keep the rest of your JSX exactly as it is below ...