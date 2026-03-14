import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">

          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <span className="bg-white flex px-6 items-center rounded-full hover:bg-teal-400">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                  <img
                    src="/assests/images/Gaawlogo.png"
                    alt="logo"
                    className="h-14 w-14 object-contain"
                  />
                </div>
                <span className="text-2xl font-bold text-black">GaawIT</span>
              </span>
            </div>

            <p className="text-slate-400 mb-6 leading-relaxed max-w-md">
              Transforming businesses through strategic consulting and proven
              methodologies. Your trusted partner for sustainable growth and
              excellence.
            </p>

            {/* Contact */}
            <div className="space-y-3 mb-6">

              <div className="flex items-center space-x-3">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round"
                  className="text-teal-400" viewBox="0 0 24 24">
                  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                </svg>
                <a href="mailto:info@gaawit.com"
                  className="text-slate-400 hover:text-teal-400 transition-colors">
                  info@gaawit.com
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <svg width="18" height="18" fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className="text-teal-400" viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2
                    19.79 19.79 0 0 1-8.63-3.07
                    19.5 19.5 0 0 1-6-6
                    19.79 19.79 0 0 1-3.07-8.67
                    A2 2 0 0 1 4.11 2h3
                    a2 2 0 0 1 2 1.72
                    12.84 12.84 0 0 0 .7 2.81
                    2 2 0 0 1-.45 2.11L8.09 9.91
                    a16 16 0 0 0 6 6l1.27-1.27
                    a2 2 0 0 1 2.11-.45
                    12.84 12.84 0 0 0 2.81.7
                    A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <a href="tel:+918855817680"
                  className="text-slate-400 hover:text-teal-400 transition-colors">
                  +91 8855817680
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <svg width="18" height="18" fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className="text-teal-400" viewBox="0 0 24 24">
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799
                    a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993
                    4 10a8 8 0 0 1 16 0"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span className="text-slate-400">
                  Above Pentagon Tower, Shop no.3, youthville Hostel, Lane No. 1, near Cummins College Road, Sahu Colony, Karvenagar, Pune, Maharashtra 411052
                </span>
              </div>

            </div>

            <div className="flex items-center space-x-4">
              <a href="#" aria-label="LinkedIn" className="text-black hover:text-teal-400 transition-colors rounded-full bg-white h-10 w-10 flex justify-center items-center">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="text-black hover:text-teal-400 transition-colors rounded-full bg-white h-10 w-10 flex justify-center items-center">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" aria-label="Facebook" className="text-black hover:text-teal-400 transition-colors rounded-full bg-white h-10 w-10 flex justify-center items-center">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="text-black hover:text-teal-400 transition-colors rounded-full bg-white h-10 w-10 flex justify-center items-center">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-slate-400 hover:text-teal-400">About Us</a></li>
              <li><a href="#why-us" className="text-slate-400 hover:text-teal-400">Why Choose Us</a></li>
              <li><a href="#career" className="text-slate-400 hover:text-teal-400">Career Support</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-teal-400">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Services</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-slate-400 hover:text-teal-400">AI & Data Services</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-teal-400">Software Development</a></li>
              <li><a href="#training" className="text-slate-400 hover:text-teal-400">Training Programs</a></li>
              <li><a href="#career" className="text-slate-400 hover:text-teal-400">Job Consultancy</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#training" className="text-slate-400 hover:text-teal-400">Training Programs</a></li>
              <li><a href="#career" className="text-slate-400 hover:text-teal-400">Career Support</a></li>
              <li><a href="#technologies" className="text-slate-400 hover:text-teal-400">Technologies</a></li>
              <li><a href="#industries" className="text-slate-400 hover:text-teal-400">Industries</a></li>
              <li><a href="#faq" className="text-slate-400 hover:text-teal-400">FAQ</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">
              © {currentYear} Gaaw IT. All rights reserved.
            </p>

            <div className="flex space-x-6">
              <a href="#" className="text-slate-400 hover:text-teal-400 text-sm">Privacy Policy</a>
              <a href="#" className="text-slate-400 hover:text-teal-400 text-sm">Terms of Service</a>
              <a href="#" className="text-slate-400 hover:text-teal-400 text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

