// import { Link } from "gatsby"
// import React, { useEffect, useRef, useState } from "react"
// import flogo from "../../assets/images/company_logo.png"
// import logo from "../../assets/images/company_logo.png"
// import HelmetStructure from "../HelmetStructure"
// import ThemeCustomizer from "../ThemeCustomizer"
// // import Announcement from "../announcements/Announcement"

// const Header = () => {
//   // const [searchOpen, setSearchOpen] = useState(false)

//   const [menuOpen, setMenuOpen] = React.useState(false)
//   const [menuStates, setMenuStates] = useState({
//     homeMenuOpen: false,
//     blogMenuOpen: false,
//     postFormatMenuOpen: false,
//     pagesMenuOpen: false,
//     allPagesMenuOpen: false,
//   })

//   const menuRef = useRef()
//   useEffect(() => {
//     const handleOutsideClick = event => {
//       if (menuRef.current && !menuRef.current.contains(event.target)) {
//         setMenuStates({
//           blogMenuOpen: false,
//           postFormatMenuOpen: false,
//           pagesMenuOpen: false,
//           allPagesMenuOpen: false,
//         })
//       }
//     }

//     document.addEventListener("mousedown", handleOutsideClick)

//     return () => {
//       document.removeEventListener("mousedown", handleOutsideClick)
//     }
//   }, [])

//   return (
//     <React.Fragment>
//       <HelmetStructure
//         bodyClass={"dark:bg-gray-900 text-base font-body bg-[#F5F5F5] header-2"}
//       />
//       <ThemeCustomizer />

//       {/* Header */}
//       <header className="sticky top-0 z-50 mt-0 bg-white shadow md:mt-8 md:shadow-none md:bg-transparent dark:bg-slate-800 dark:md:bg-transparent">
//         <div className="container px-4 mx-auto">
//           <nav className="flex items-center min-h-[100px] shadow-none md:shadow rounded-2xl justify-between px-0 md:px-6 py-3 md:py-2 bg-white dark:bg-slate-800">
//             {/* Logo */}
//             <div className="order-2 md:order-1 ms-2 me-2 md:ms-0 md:me-0">
//               <Link to="/" className="flex items-center gap-2">
//                 {/* Light Logo */}
//                 <img
//                   src={logo}
//                   alt="logo"
//                   className="max-w-full dark:hidden"
//                   style={{ height: "40px" }}
//                 />

//                 {/* Dark Logo */}
//                 <img
//                   src={flogo}
//                   alt="logo"
//                   className="hidden max-w-full rounded-lg dark:block"
//                   style={{ height: "40px" }}
//                 />

//                 {/* Text + Tagline */}
//                 <div className="flex flex-col leading-tight">
//                   <span className="font-bold text-lg whitespace-nowrap dark:text-white">
//                     MUSLIMSTORIESMEDIA.COM
//                   </span>
//                   <span className="text-xs text-gray-600 dark:text-gray-300 whitespace-nowrap">
//                     Impowering Hearts , Inspiring Souls
//                   </span>
//                 </div>
//               </Link>
//             </div>

//             <nav className="order-1 md:order-2">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 id="menu-button"
//                 className="block w-6 h-6 cursor-pointer md:hidden dark:text-white"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 onClick={() => setMenuOpen(!menuOpen)}
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               </svg>

//               <div
//                 ref={menuRef}
//                 className={`${menuOpen ? "block" : "hidden"
//                   } w-full md:flex lg:items-center absolute md:relative bg-white left-0 right-0 p-3 z-50 shadow md:shadow-none md:p-0 md:bg-transparent dark:bg-slate-800 dark:border-slate-700`}
//                 id="menu"
//               >
//                 <ul className="pt-4 text-base text-gray-700 md:flex md:justify-between md:pt-0 dark:text-slate-200 flex-wrap">
//                   <li>
//                     <Link
//                       className="px-0 md:px-2 lg:p-4 py-2 block hover:text-[#062DB9] dark:hover:text-[#478cff]"
//                       to="/"
//                     >
//                       Home
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       className="px-0 md:px-2 lg:p-4 py-2 block hover:text-[#062DB9] dark:hover:text-[#478cff]"
//                       to="/blog-tag"
//                     >
//                       Blog
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       className="px-0 md:px-2 lg:p-4 py-2 block hover:text-[#062DB9] dark:hover:text-[#478cff]"
//                       to="/post-format-standard"
//                     >
//                       Category
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       className="px-0 md:px-2 lg:p-4 py-2 block hover:text-[#062DB9] dark:hover:text-[#478cff]"
//                       to="/about"
//                     >
//                       About
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       className="px-0 md:px-2 lg:p-4 py-2 block hover:text-[#062DB9] dark:hover:text-[#478cff]"
//                       to="/contact"
//                     >
//                       Contact
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//             </nav>
//           </nav>
//         </div>
//       </header>
//     </React.Fragment>
//   )
// };

// export default Header


import { Link } from "gatsby";
import React, { useEffect, useRef, useState } from "react";
import flogo from "../../assets/images/company_logo.png";
import logo from "../../assets/images/company_logo.png";
import HelmetStructure from "../HelmetStructure";
import ThemeCustomizer from "../ThemeCustomizer";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const menuItems = [
    { label: "Home", link: "/" },
    { label: "Blog", link: "/blog-tag" },
    { label: "Category", link: "/post-format-standard" },
    { label: "About", link: "/about" },
    { label: "Contact", link: "/contact" },
  ];

  return (
    <>
      <HelmetStructure bodyClass="dark:bg-gray-900 text-base font-body bg-[#F5F5F5] header-2" />
      <ThemeCustomizer />

      <header className="sticky top-0 z-50 bg-white shadow md:mt-8 md:shadow-none md:bg-transparent dark:bg-slate-800 dark:md:bg-transparent">
        <div className="container px-4 mx-auto">
          <nav className="flex items-center justify-between min-h-[100px] bg-white rounded-2xl px-0 md:px-6 py-3 md:py-2 shadow-none md:shadow dark:bg-slate-800">

            {/* LEFT: LOGO (always left) */}
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="logo" className="h-10 dark:hidden" />
              <img src={flogo} alt="logo" className="hidden h-10 rounded-lg dark:block" />

              <div className="flex flex-col leading-tight">
                <span className="font-bold text-lg dark:text-white">
                  MUSLIMSTORIESMEDIA.COM
                </span>
                <span className="text-xs text-gray-600 dark:text-gray-300">
                  Impowering Hearts , Inspiring Souls
                </span>
              </div>
            </Link>

            {/* RIGHT: MENU + HAMBURGER */}
            <div className="flex items-center md:gap-6">

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMenuOpen((v) => !v)}
                className="md:hidden dark:text-white mr-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
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
                className={`${menuOpen ? "block" : "hidden"}
            absolute md:relative top-full md:top-auto left-0 right-0 
            p-3 md:p-0 bg-white dark:bg-slate-800 rounded-lg shadow md:shadow-none md:block`}
              >
                <ul className="flex flex-col md:flex-row md:items-center gap-3 md:gap-1 pt-4 md:pt-0 text-base text-gray-700 dark:text-slate-200">
                  {menuItems.map((item) => (
                    <li key={item.label}>
                      <Link
                        to={item.link}
                        className="px-0 md:px-2 lg:px-4 py-2 block hover:text-[#062DB9] dark:hover:text-[#478cff]"
                      >
                        {item.label}
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

export default Header;
