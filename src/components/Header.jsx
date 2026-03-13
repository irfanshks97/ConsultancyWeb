import { useEffect, useState } from "react";

import { companyInfo, navLinks } from "../data/siteContent";

function Header({ onOpenAuth = () => {} }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const handleAuthOpen = (mode) => {
    closeMenu();
    onOpenAuth(mode);
  };

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 border-b transition-all duration-300 ${scrolled
          ? "border-slate-200 bg-white py-3 shadow-md"
          : "border-transparent bg-white/95 py-4 backdrop-blur"
        }`}
    >
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center space-x-3">
            <div className="flex items-center justify-center rounded-lg">
              <img
                src="/assests/images/Gaawlogo.png"
                alt="logo"
                className="h-14 w-14 object-contain"
              />
            </div>
            <div>
              <p className="text-xl font-bold text-slate-900">{companyInfo.name}</p>
              <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                {companyInfo.tagline}
              </p>
            </div>
          </a>

          <nav className="hidden items-center space-x-4 md:flex lg:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-700 transition-colors hover:text-teal-600"
              >
                {link.name}
              </a>
            ))}
            <button
              type="button"
              onClick={() => handleAuthOpen("login")}
              className="inline-flex items-center justify-center rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:border-teal-600 hover:text-teal-600"
            >
              Login
            </button>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-teal-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-teal-700"
            >
              Contact Us
            </a>
          </nav>

          <button
            type="button"
            className="rounded-md border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 md:hidden"
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>

        {menuOpen && (
          <div className="mt-4 border-t border-slate-200 pb-4 pt-4 md:hidden">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-slate-700 transition-colors hover:text-teal-600"
                  onClick={closeMenu}
                >
                  {link.name}
                </a>
              ))}
              <button
                type="button"
                onClick={() => handleAuthOpen("login")}
                className="inline-flex w-full items-center justify-center rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:border-teal-600 hover:text-teal-600"
              >
                Login
              </button>
              <a
                href="#contact"
                className="inline-flex w-full items-center justify-center rounded-md bg-teal-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-teal-700"
                onClick={closeMenu}
              >
                Contact Us
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
