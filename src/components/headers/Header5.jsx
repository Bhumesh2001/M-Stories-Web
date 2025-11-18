import React, { useEffect, useRef, useState } from "react"
import HelmetStructure from "../HelmetStructure"
import ThemeCustomizer from "../ThemeCustomizer"
// import Announcement5 from "../announcements/Announcement5"
import flogo from "../../assets/images/company_logo.png"
import logo from "../../assets/images/company_logo.png"
import { Link } from "gatsby"
// import placeHoldImg from "../../assets/images/place-hold.jpg"

const Header5 = () => {
  // const [searchOpen, setSearchOpen] = useState(false)
  const [menuOpen, setMenuOpen] = React.useState(false)

  const [menuStates, setMenuStates] = useState({
    blogMenuOpen: false,
    postFormatMenuOpen: false,
    pagesMenuOpen: false,
    allPagesMenuOpen: false,
    homeMenuOpen: false,
  })

  const menuRef = useRef()
  useEffect(() => {
    const handleOutsideClick = event => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuStates({
          blogMenuOpen: false,
          postFormatMenuOpen: false,
          pagesMenuOpen: false,
          allPagesMenuOpen: false,
        })
      }
    }

    document.addEventListener("mousedown", handleOutsideClick)

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick)
    }
  }, [])

  return (
    <React.Fragment>
      <HelmetStructure
        bodyClass={"dark:bg-gray-900 text-base font-body header-1"}
      />
      <ThemeCustomizer />

      <header className="sticky top-0 z-50 bg-white dark:bg-[#111827] border-b py-3 dark:border-b-slate-800">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between min-h-[80px]">
            {/* Logo */}
            <div className="order-2 md:order-1 ms-2 me-2 md:ms-0 md:me-0">
              <Link to="/" className="flex items-center gap-2">
                {/* Light Logo */}
                <img
                  src={logo}
                  alt="logo"
                  className="max-w-full dark:hidden"
                  style={{ height: "40px" }}
                />
                {/* Dark Logo */}
                <img
                  src={flogo}
                  alt="logo"
                  className="hidden max-w-full rounded-lg dark:block"
                  style={{ height: "40px" }}
                />
                {/* Text + Tagline */}
                <div className="flex flex-col leading-tight">
                  <span className="font-bold text-lg whitespace-nowrap dark:text-white">
                    MUSLIMSTORIESMEDIA.COM
                  </span>
                  <span className="text-xs text-gray-600 dark:text-gray-300 whitespace-nowrap">
                    Inspiring Hearts, Telling Stories
                  </span>
                </div>
              </Link>
            </div>

            <nav className="order-1 md:order-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="menu-button"
                className="block w-6 h-6 cursor-pointer md:hidden dark:text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>

              <div
                ref={menuRef}
                className={`rounded-lg ${menuOpen ? "block" : "hidden"
                  } w-full md:flex lg:items-center absolute md:relative bg-white left-0 right-0 p-3 z-50 shadow md:shadow-none md:p-0 md:bg-transparent dark:bg-slate-800 dark:border-slate-700`}
                id="menu"
              >
                <ul className="pt-4 text-base text-gray-700 md:flex md:justify-between md:pt-0 dark:text-slate-200 flex-wrap">
                  <li>
                    <Link
                      className="px-0 md:px-2 lg:p-4 py-2 block hover:text-[#062DB9] dark:hover:text-[#478cff]"
                      to="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="px-0 md:px-2 lg:p-4 py-2 block hover:text-[#062DB9] dark:hover:text-[#478cff]"
                      to="/blog-tag"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="px-0 md:px-2 lg:p-4 py-2 block hover:text-[#062DB9] dark:hover:text-[#478cff]"
                      to="/post-format-standard"
                    >
                      Category
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="px-0 md:px-2 lg:p-4 py-2 block hover:text-[#062DB9] dark:hover:text-[#478cff]"
                      to="/about"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="px-0 md:px-2 lg:p-4 py-2 block hover:text-[#062DB9] dark:hover:text-[#478cff]"
                      to="/contact"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </nav>
        </div>
      </header>
    </React.Fragment>
  )
}

export default Header5
