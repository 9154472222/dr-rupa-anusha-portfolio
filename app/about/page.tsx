import { GraduationCap, Briefcase, BookOpen, CheckCircle2 } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        <div className="lg:col-span-1">
          <div className="sticky top-24 rounded-3xl bg-slate-200 dark:bg-slate-800 p-2 shadow-lg border border-slate-300 dark:border-slate-700">
            <div className="w-full h-80 rounded-2xl bg-slate-900 flex items-center justify-center text-slate-500 font-medium">
              Profile Photo Placeholder
            </div>
            <div className="p-4 text-center">
              <h3 className="font-bold text-lg">Dr. Rupa Anusha</h3>
              <p className="text-sm text-teal-600 dark:text-teal-400">Assistant Professor</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-4">About Dr. Rupa Anusha</h1>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
              Dedicated educator and researcher with over 10 years of experience in Polymer Engineering and Technical Communication. Passionate about bridging theoretical concepts with industrial applications and fostering an engaging digital learning environment for students.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center gap-3 mb-4 text-teal-600 dark:text-teal-400">
                <GraduationCap className="w-6 h-6" />
                <h3 className="text-xl font-bold">Education</h3>
              </div>
              <ul className="space-y-4 text-sm">
                <li>
                  <div className="font-semibold">Ph.D. in Polymer Engineering</div>
                  <div className="text-slate-500">Premier Academic Institution</div>
                </li>
                <li>
                  <div className="font-semibold">M.Tech / Master&apos;s Degree</div>
                  <div className="text-slate-500">Specialization in Polymer Tech</div>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center gap-3 mb-4 text-teal-600 dark:text-teal-400">
                <Briefcase className="w-6 h-6" />
                <h3 className="text-xl font-bold">Experience</h3>
              </div>
              <ul className="space-y-4 text-sm">
                <li>
                  <div className="font-semibold">Assistant Professor</div>
                  <div className="text-slate-500">Department of Polymer Engineering (Present)</div>
                </li>
                <li>
                  <div className="font-semibold">Guest Lecturer & Researcher</div>
                  <div className="text-slate-500">Academic & Industrial Collaborations</div>
                </li>
              </ul>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center gap-3 text-teal-600 dark:text-teal-400">
              <BookOpen className="w-6 h-6" />
              <h3 className="text-xl font-bold">Research & Expertise</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Polymer Synthesis', 'Advanced Materials', 'Technical Writing', 'Soft Skills & Communication', 'Polymer Characterization', 'Green Polymers'].map((skill, idx) => (
                <span key={idx} className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-500" /> {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}