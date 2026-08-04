'use client';
import { useState } from 'react';
import { FileText, Download, Calendar, HardDrive } from 'lucide-react';

export default function NotesPage() {
  const [selectedYear, setSelectedYear] = useState('2nd Year');
  const [selectedSemester, setSelectedSemester] = useState('Semester 1');
  const [selectedSubject, setSelectedSubject] = useState('Polymer Engineering');

  const notesList = [
    { id: 1, title: 'Technical Writing & Communication - Unit 1 Notes', size: '2.4 MB', date: '1 Aug 2026', downloads: 251, type: 'PDF' },
    { id: 2, title: 'Polymer Synthesis and Reactions - Unit 2 PPT', size: '4.1 MB', date: '28 Jul 2026', downloads: 189, type: 'PPT' },
    { id: 3, title: 'Soft Skills & Professional Ethics - Assignment 1', size: '1.2 MB', date: '25 Jul 2026', downloads: 310, type: 'PDF' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
      <div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">Student Notes & Learning Hub</h1>
        <p className="text-slate-600 dark:text-slate-400">Browse and download verified lecture notes, presentations, and assignments by year and semester.</p>
      </div>

      <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-semibold uppercase text-slate-500 mb-2">Academic Year</label>
          <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)} className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 font-medium">
            {['1st Year', '2nd Year', '3rd Year', '4th Year'].map(yr => <option key={yr}>{yr}</option>)}
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase text-slate-500 mb-2">Semester</label>
          <select value={selectedSemester} onChange={(e) => setSelectedSemester(e.target.value)} className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 font-medium">
            {['Semester 1', 'Semester 2'].map(sem => <option key={sem}>{sem}</option>)}
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase text-slate-500 mb-2">Subject</label>
          <select value={selectedSubject} onChange={(e) => setSelectedSubject(e.target.value)} className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 font-medium">
            {['Polymer Engineering', 'English Communication', 'Soft Skills', 'Professional Ethics', 'Technical Writing'].map(sub => <option key={sub}>{sub}</option>)}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {notesList.map((file) => (
          <div key={file.id} className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="p-3 rounded-xl bg-teal-50 dark:bg-teal-950 text-teal-600 dark:text-teal-400">
                  <FileText className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-600 dark:text-slate-300">
                  {file.type}
                </span>
              </div>
              <h3 className="font-bold text-lg leading-snug">{file.title}</h3>
              <div className="flex items-center gap-4 text-xs text-slate-500">
                <span className="flex items-center gap-1"><HardDrive className="w-3.5 h-3.5" /> {file.size}</span>
                <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {file.date}</span>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-medium">{file.downloads} Downloads</span>
              <button className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-semibold text-sm shadow-md shadow-teal-600/20 transition-all">
                <Download className="w-4 h-4" /> Download
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}