import React, { useEffect, useRef, useState } from "react";
import HelmetStructure from "../HelmetStructure";
import ThemeCustomizer from "../ThemeCustomizer";
import flogo from "../../assets/images/company_logo.png";
import logo from "../../assets/images/company_logo.png";
import { Link } from "gatsby";

const Header5 = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <>
      <HelmetStructure bodyClass="dark:bg-gray-900 text-base font-body header-1" />
      <ThemeCustomizer />

      <header className="sticky top-0 z-50 bg-white dark:bg-[#111827] border-b py-3 dark:border-b-slate-800">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between min-h-[80px]">

            {/* LEFT: LOGO */}
            <Link to="/" className="flex items-center gap-3">
              <img
                src={logo}
                alt="logo"
                className="h-10 dark:hidden"
              />
              <img
                src={flogo}
                alt="logo"
                className="hidden h-10 rounded-lg dark:block"
              />

              <div className="flex flex-col leading-tight">
                <span className="font-bold text-lg dark:text-white">
                  MUSLIMSTORIESMEDIA.COM
                </span>
                <span className="text-xs text-gray-600 dark:text-gray-300">
                  Empowering Hearts , Inspiring Souls
                </span>
              </div>
            </Link>

            {/* RIGHT SIDE: MENU + MOBILE BUTTON */}
            <div className="flex items-center gap-4">

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMenuOpen((p) => !p)}
                className="md:hidden dark:text-white"
                aria-label="Toggle menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>

              {/* Menu */}
              <div
                ref={menuRef}
                className={`absolute md:relative top-full md:top-auto left-0 right-0 p-4 md:p-0 bg-white dark:bg-slate-800 rounded-lg shadow md:shadow-none 
            ${menuOpen ? "block" : "hidden"} md:block`}
              >
                <ul className="flex flex-col md:flex-row gap-2 md:gap-1 text-gray-700 dark:text-slate-200">
                  {[
                    { name: "Home", link: "/" },
                    { name: "Blog", link: "/blog-tag" },
                    { name: "Category", link: "/post-format-standard" },
                    { name: "About", link: "/about" },
                    { name: "Contact", link: "/contact" },
                  ].map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.link}
                        className="block px-2 lg:px-4 py-2 hover:text-[#062DB9] dark:hover:text-[#478cff]"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </nav>
        </div>
      </header>

    </>
  );
};

export default Header5;
