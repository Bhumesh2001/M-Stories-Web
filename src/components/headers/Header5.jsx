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

  // const toggleMenu = menu => {
  //   setMenuStates(prevState => ({
  //     ...prevState,
  //     [menu]: !prevState[menu],
  //     // Close other menus
  //     homeMenuOpen: menu === "homeMenuOpen" ? !prevState[menu] : false,

  //     blogMenuOpen: menu === "blogMenuOpen" ? !prevState[menu] : false,
  //     postFormatMenuOpen:
  //       menu === "postFormatMenuOpen" ? !prevState[menu] : false,
  //     pagesMenuOpen: menu === "pagesMenuOpen" ? !prevState[menu] : false,
  //     allPagesMenuOpen: menu === "allPagesMenuOpen" ? !prevState[menu] : false,
  //   }))
  // }
  // console.log(menuStates, '===');

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
      {/* <Announcement5 /> */}

      <header className="sticky top-0 z-50 bg-white dark:bg-[#111827] border-b py-3 dark:border-b-slate-800">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between">
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
                {/* Text */}
                <span className="font-bold text-lg whitespace-nowrap dark:text-white">
                  MUSLIMSTORIESMEDIA.COM
                </span>
              </Link>
            </div>

            {/*  Menu start */}
            {/* <nav className="order-1 md:order-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="menu-button"
                className="h-6 w-6 cursor-pointer md:hidden block dark:text-white"
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
                className={` w-full md:flex md:items-center absolute md:relative bg-white left-0 right-0 p-3 z-50 shadow md:shadow-none md:p-0 md:bg-transparent dark:bg-slate-800 dark:border-slate-700 md:dark:bg-transparent md:dark:border-transparent ${menuOpen ? "block" : "hidden"
                  }`}
                id="menu"
                ref={menuRef}
              >
                <ul className="pt-4 text-base text-gray-700 md:flex lg:justify-between md:pt-0 dark:text-slate-200 flex-wrap">
                  <li>
                    <Link
                      className="px-0 py-2 md:px-2 lg:px-4 block hover:text-[#ff3750]"
                      to="/index-4"
                      onClick={() => toggleMenu("homeMenuOpen")}
                    >
                      Home{" "}
                      <i className="ri-arrow-down-s-line float-right rtl:float-left md:float-none"></i>
                    </Link>
                    <ul
                      className={`rounded-lg dropdown p-2 md:p-4 min-w-44 md:absolute z-50 bg-white dark:bg-slate-800 dark:border-slate-700 border-0 md:border border-gray-200 ${menuStates.homeMenuOpen ? "block" : "hidden"
                        }`}
                    >
                      <li className="py-1">
                        <Link to="/" className="hover:text-[#ff3750] text-sm">
                          Home Style 1
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          to="/index-2"
                          className="hover:text-[#ff3750] text-sm"
                        >
                          Home Style 2
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          to="/index-3"
                          className="hover:text-[#ff3750] text-sm"
                        >
                          Home Style 3
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          to="/index-4"
                          className="hover:text-[#ff3750] text-sm"
                        >
                          Home Style 4
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          to="/index-5"
                          className="hover:text-[#ff3750] text-sm"
                        >
                          Home Style 5
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="relative dropdown-button">
                    <Link
                      className="px-0 py-2 md:px-2 lg:px-4 block hover:text-[#ff3750]"
                      to="#"
                      onClick={() => toggleMenu("blogMenuOpen")}
                    >
                      Blog{" "}
                      <i className="ri-arrow-down-s-line float-right rtl:float-left md:float-none"></i>
                    </Link>
                    <ul
                      className={`rounded-lg dropdown p-2 md:p-4 min-w-44 md:absolute z-50 bg-white dark:bg-slate-800 dark:border-slate-700 border-0 md:border border-gray-200 ${menuStates.blogMenuOpen ? "block" : "hidden"
                        }`}
                    >
                      <li className="py-1">
                        <Link
                          to="/blog-tag"
                          className="hover:text-[#ff3750] text-sm"
                        >
                          Blog Tag
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          to="/left-sidebar"
                          className="hover:text-[#ff3750] text-sm"
                        >
                          Left Sidebar
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          to="/right-sidebar"
                          className="hover:text-[#ff3750] text-sm"
                        >
                          Right Sidebar
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          to="/no-sidebar"
                          className="hover:text-[#ff3750] text-sm"
                        >
                          No Sidebar
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          to="/single-post"
                          className="hover:text-[#ff3750] text-sm"
                        >
                          Single Post
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          to="/BlogPost"
                          className="hover:text-[#ff3750] text-sm"
                        >
                          Create Blog
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="relative dropdown-button">
                    <Link
                      className="px-0 py-2 md:px-2 lg:px-4 block hover:text-[#ff3750]"
                      to="#"
                      onClick={() => toggleMenu("postFormatMenuOpen")}
                    >
                      Post Format{" "}
                      <i className="ri-arrow-down-s-line float-right rtl:float-left md:float-none"></i>
                    </Link>
                    <ul
                      className={`rounded-lg dropdown p-2 md:p-4 min-w-44 md:absolute z-50 bg-white dark:bg-slate-800 dark:border-slate-700 border-0 md:border border-gray-200 ${menuStates.postFormatMenuOpen ? "block" : "hidden"
                        }`}
                    >
                      <li className="py-1">
                        <Link
                          to="/post-format-audio"
                          className="hover:text-[#ff3750] text-sm"
                        >
                          Post Format Audio
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          to="/post-format-gallery"
                          className="hover:text-[#ff3750] text-sm"
                        >
                          Post Format Gallery
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          to="/post-format-standard"
                          className="hover:text-[#ff3750] text-sm"
                        >
                          Post Format Standard
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          to="/post-format-text"
                          className="hover:text-[#ff3750] text-sm"
                        >
                          Post Format Text
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          to="/post-format-videos"
                          className="hover:text-[#ff3750] text-sm"
                        >
                          Post Format Video
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link
                      className="px-0 py-2 md:px-2 lg:px-4 block hover:text-[#ff3750]"
                      to="#"
                      onClick={() => toggleMenu("pagesMenuOpen")}
                    >
                      Pages{" "}
                      <i className="ri-arrow-down-s-line float-right rtl:float-left md:float-none"></i>
                    </Link>
                    <div
                      className={`md:absolute left-0 right-0 z-50 ${menuStates.pagesMenuOpen ? "block" : "hidden"}`}
                    >
                      <div
                        id="mega-menu-full-dropdown"
                        className="mt-1 bg-white border-gray-200 shadow-sm md:border-y dark:bg-slate-800 dark:border-gray-700 rounded-lg border-0 md:border"
                      >
                        <div className="grid max-w-screen-xl p-2 md:p-4 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:grid-cols-4 md:px-6">
                          <ul aria-labelledby="mega-menu-full-dropdown-button">
                            <li className="py-1">
                              <Link
                                to="/about"
                                className="hover:text-[#ff3750] text-sm"
                              >
                                About Us Page
                              </Link>
                            </li>
                            <li className="py-1">
                              <Link
                                to="/404"
                                className="hover:text-[#ff3750] text-sm"
                              >
                                404 Page
                              </Link>
                            </li>
                            <li className="py-1">
                              <Link
                                to="/grid-gallery"
                                className="hover:text-[#ff3750] text-sm"
                              >
                                Gallery Page
                              </Link>
                            </li>
                            <li className="py-1">
                              <Link
                                to="/masonry-gallery"
                                className="hover:text-[#ff3750] text-sm"
                              >
                                Masonry Gallery Page
                              </Link>
                            </li>
                            <li className="py-1">
                              <Link
                                to="/services"
                                className="hover:text-[#ff3750] text-sm"
                              >
                                Service Page
                              </Link>
                            </li>
                            <li className="py-1">
                              <Link
                                to="/search"
                                className="hover:text-[#ff3750] text-sm"
                              >
                                Search Page
                              </Link>
                            </li>
                          </ul>
                          <ul>
                            <li className="py-1">
                              <Link
                                to="/post-format-audio"
                                className="hover:text-[#ff3750] text-sm"
                              >
                                Post Format Audio Page
                              </Link>
                            </li>
                            <li className="py-1">
                              <Link
                                to="/post-format-gallery"
                                className="hover:text-[#ff3750] text-sm"
                              >
                                Post Format Gallery Page
                              </Link>
                            </li>
                            <li className="py-1">
                              <Link
                                to="/post-format-standard"
                                className="hover:text-[#ff3750] text-sm"
                              >
                                Post Format Standard Page
                              </Link>
                            </li>
                            <li className="py-1">
                              <Link
                                to="/post-format-text"
                                className="hover:text-[#ff3750] text-sm"
                              >
                                Post Format Text Page
                              </Link>
                            </li>
                            <li className="py-1">
                              <Link
                                to="/post-format-videos"
                                className="hover:text-[#ff3750] text-sm"
                              >
                                Post Format Video Page
                              </Link>
                            </li>
                          </ul>
                          <ul className="hidden md:block">
                            <li className="py-1">
                              <Link
                                to="/blog-tag"
                                className="hover:text-[#ff3750] text-sm"
                              >
                                Blog Tag Page
                              </Link>
                            </li>
                            <li className="py-1">
                              <Link
                                to="/left-sidebar"
                                className="hover:text-[#ff3750] text-sm"
                              >
                                Left Sidebar Page
                              </Link>
                            </li>
                            <li className="py-1">
                              <Link
                                to="/right-sidebar"
                                className="hover:text-[#ff3750] text-sm"
                              >
                                Right Sidebar Page
                              </Link>
                            </li>
                            <li className="py-1">
                              <Link
                                to="/no-sidebar"
                                className="hover:text-[#ff3750] text-sm"
                              >
                                No Sidebar Page
                              </Link>
                            </li>
                            <li className="py-1">
                              <Link
                                to="/single-post"
                                className="hover:text-[#ff3750] text-sm"
                              >
                                Single Post Page
                              </Link>
                            </li>
                          </ul>
                          <div>
                            <img
                              className="h-auto w-full max-w-full rounded-lg"
                              src={placeHoldImg}
                              alt="placeholder-img"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <Link
                      className="px-0 py-2 md:px-2 lg:px-4 block hover:text-[#ff3750]"
                      to="/contact"
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="px-0 py-2 md:px-2 lg:px-4 block hover:text-[#ff3750]"
                      to="#"
                      onClick={() => toggleMenu("allPagesMenuOpen")}
                    >
                      All Pages{" "}
                      <i className="ri-arrow-down-s-line float-right rtl:float-left md:float-none"></i>
                    </Link>
                    <div
                      className={`md:absolute md:left-0 md:right-0 z-50 ${menuStates.allPagesMenuOpen ? "block" : "hidden"
                        }`}
                    >
                      <div
                        id="mega-menu-full-dropdown"
                        className="mt-1 bg-white border-gray-200 shadow-sm md:border-y dark:bg-slate-800 dark:border-slate-700 rounded-lg border-0 md:border"
                      >
                        <div className="grid max-w-screen-xl p-0 md:p-4 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:grid-cols-3 md:px-6">
                          <ul aria-labelledby="mega-menu-full-dropdown-button">
                            <li>
                              <Link
                                to="#"
                                className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                              >
                                <div className="font-semibold">
                                  Online Stores
                                </div>
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                  Connect with third-party tools that you're
                                  already using.
                                </span>
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                              >
                                <div className="font-semibold">
                                  Segmentation
                                </div>
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                  Connect with third-party tools that you're
                                  already using.
                                </span>
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                              >
                                <div className="font-semibold">
                                  Marketing CRM
                                </div>
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                  Connect with third-party tools that you're
                                  already using.
                                </span>
                              </Link>
                            </li>
                          </ul>
                          <ul>
                            <li>
                              <Link
                                to="#"
                                className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                              >
                                <div className="font-semibold">
                                  Online Stores
                                </div>
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                  Connect with third-party tools that you're
                                  already using.
                                </span>
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                              >
                                <div className="font-semibold">
                                  Segmentation
                                </div>
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                  Connect with third-party tools that you're
                                  already using.
                                </span>
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                              >
                                <div className="font-semibold">
                                  Marketing CRM
                                </div>
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                  Connect with third-party tools that you're
                                  already using.
                                </span>
                              </Link>
                            </li>
                          </ul>
                          <ul className="hidden md:block">
                            <li>
                              <Link
                                to="#"
                                className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                              >
                                <div className="font-semibold">
                                  Audience Management
                                </div>
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                  Connect with third-party tools that you're
                                  already using.
                                </span>
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                              >
                                <div className="font-semibold">
                                  Creative Tools
                                </div>
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                  Connect with third-party tools that you're
                                  already using.
                                </span>
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                              >
                                <div className="font-semibold">
                                  Marketing Automation
                                </div>
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                  Connect with third-party tools that you're
                                  already using.
                                </span>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </nav> */}

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

            {/*  Menu end */}
            {/* <div className="order-3">
              <ul className="flex space-x-4 md:space-x-8 rtl:space-x-reverse">
                <li className="text-md">
                  <Link
                    onClick={() => setSearchOpen(!searchOpen)}
                    to="#"
                    className="hover:text-[#ff3750] text-xl dark:text-slate-200"
                  >
                    <i className="ri-search-line"></i>
                  </Link>
                  <div
                    className={`absolute left-0 right-0 z-50 top-0 bg-white p-10 shadow dark:bg-gray-700 ${searchOpen ? "block" : "hidden"}`}
                  >
                    <div className="container mx-auto">
                      <form>
                        <label
                          htmlFor="default-search"
                          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                        >
                          Search
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg
                              className="w-4 h-4 text-gray-500 dark:text-gray-400"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 20 20"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                              />
                            </svg>
                          </div>
                          <input
                            type="search"
                            id="default-search"
                            className="block w-full p-4 ps-10 pr-24 rtl:pe-24 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                            placeholder="Search here...."
                            required
                          />
                          <button
                            type="submit"
                            className="text-white absolute end-2.5 bottom-2.5 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 bg-black hover:bg-[#ff3750] dark:bg-[#ff3750] dark:hover:bg-gray-700"
                          >
                            Search
                          </button>
                        </div>
                        <span
                          className="cursor-pointer text-black font-bold dark:text-gray-300 hover:text-[#ff3750] text-xl absolute top-4 right-4"
                          onClick={() => setSearchOpen(false)}
                        >
                          ✕
                        </span>
                      </form>
                    </div>
                  </div>
                </li>
                
                <li className="text-md">
                  <Link
                    to="/login"
                    className="capitalize transition-all hover:bg-[#ff3750] btn leading-6 text-sm px-6 bg-black rounded-full text-white dark:bg-[#ff3750] dark:hover:bg-gray-700"
                  >
                    login
                  </Link>
                </li>
              </ul>
            </div> */}
          </nav>
        </div>
      </header>
    </React.Fragment>
  )
}

export default Header5
