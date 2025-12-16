export function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8 border-t-8 border-accent-500">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-primary-500 border-4 border-white flex items-center justify-center">
                <span className="text-white font-black text-2xl">A</span>
              </div>
              <span className="text-3xl font-black text-white uppercase tracking-tight">
                AutoMitra AI
              </span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md font-bold">
              AI Team That Grows Your Pipeline. Run outbound calls, inbound queries, and WhatsApp follow-ups on autopilot.
            </p>
          </div>

          <div>
            <h3 className="text-white font-black mb-4 uppercase tracking-wide text-lg">Product</h3>
            <ul className="space-y-2">
              <li><a href="#team" className="hover:text-accent-500 transition-colors font-bold uppercase text-sm tracking-wide">AI Team</a></li>
              <li><a href="#platform" className="hover:text-accent-500 transition-colors font-bold uppercase text-sm tracking-wide">Platform</a></li>
              <li><a href="#faq" className="hover:text-accent-500 transition-colors font-bold uppercase text-sm tracking-wide">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-black mb-4 uppercase tracking-wide text-lg">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-accent-500 transition-colors font-bold uppercase text-sm tracking-wide">About</a></li>
              <li><a href="#" className="hover:text-accent-500 transition-colors font-bold uppercase text-sm tracking-wide">Contact</a></li>
              <li><a href="#" className="hover:text-accent-500 transition-colors font-bold uppercase text-sm tracking-wide">Privacy</a></li>
              <li><a href="#" className="hover:text-accent-500 transition-colors font-bold uppercase text-sm tracking-wide">Terms</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t-4 border-gray-800 pt-8 text-center">
          <p className="text-gray-400 font-black uppercase tracking-wide">
            © {new Date().getFullYear()} AutoMitra AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

