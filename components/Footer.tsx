export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-6 text-center sm:text-left">
        <div>
          <h3 className="text-white font-bold text-lg mb-1">Dr. Rupa Anusha | Academic Portfolio & Learning Hub</h3>
          <p className="text-sm text-slate-400">Department of Polymer Engineering • Quality Education & Study Materials</p>
        </div>
        <div className="text-xs text-slate-500">
          © {new Date().getFullYear()} All rights reserved. Built for academic excellence.
        </div>
      </div>
    </footer>
  );
}