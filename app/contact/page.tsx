import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">Get in Touch</h1>
        <p className="text-slate-600 dark:text-slate-400">Have questions regarding lectures, notes, or research collaborations? Reach out below.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <div className="p-3 rounded-xl bg-teal-50 dark:bg-teal-950 text-teal-600 dark:text-teal-400 w-fit">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="font-bold">Email</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">rupa.anusha@university.edu</p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <div className="p-3 rounded-xl bg-teal-50 dark:bg-teal-950 text-teal-600 dark:text-teal-400 w-fit">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="font-bold">Phone</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">+91 (0) 98765 43210</p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <div className="p-3 rounded-xl bg-teal-50 dark:bg-teal-950 text-teal-600 dark:text-teal-400 w-fit">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="font-bold">Office Location</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Department of Polymer Engineering, Block B, Room 304, University Campus.
            </p>
          </div>
        </div>

        <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase text-slate-500 mb-2">Your Name</label>
              <input type="text" placeholder="John Doe" className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700" />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase text-slate-500 mb-2">Email Address</label>
              <input type="email" placeholder="john@student.edu" className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700" />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase text-slate-500 mb-2">Message</label>
              <textarea rows={4} placeholder="Type your query or message here..." className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700" />
            </div>
            <button type="submit" className="w-full py-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-semibold flex items-center justify-center gap-2 shadow-lg shadow-teal-600/30 transition-all">
              <Send className="w-4 h-4" /> Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}