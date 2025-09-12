import { Link } from "gatsby"
import React, { useEffect, useRef, useState } from "react"
import flogo from "../../assets/images/company_logo.png"
import logo from "../../assets/images/company_logo.png"
import HelmetStructure from "../HelmetStructure"
import ThemeCustomizer from "../ThemeCustomizer"
// import Announcement from "../announcements/Announcement"

const Header = () => {
  // const [searchOpen, setSearchOpen] = useState(false)

  const [menuOpen, setMenuOpen] = React.useState(false)
  const [menuStates, setMenuStates] = useState({
    homeMenuOpen: false,
    blogMenuOpen: false,
    postFormatMenuOpen: false,
    pagesMenuOpen: false,
    allPagesMenuOpen: false,
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

  // console.log(menuStates,'===');

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
        bodyClass={"dark:bg-gray-900 text-base font-body bg-[#F5F5F5] header-2"}
      />
      <ThemeCustomizer />
      {/* <Announcement /> */}

      {/* Header */}
      <header className="sticky top-0 z-50 mt-0 bg-white shadow md:mt-8 md:shadow-none md:bg-transparent dark:bg-slate-800 dark:md:bg-transparent">
        <div className="container px-4 mx-auto">
          <nav className="flex items-center shadow-none md:shadow rounded-2xl justify-between px-0 md:px-6 py-3 md:py-2 bg-white dark:bg-slate-800">
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

            {/* Menu start */}
            {/* <nav className="order-1 md:order-2">
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
                className={`${menuOpen ? "block" : "hidden"
                  } w-full md:flex lg:items-center absolute md:relative bg-white left-0 right-0 p-3 z-50 shadow md:shadow-none md:p-0 md:bg-transparent dark:bg-slate-800 dark:border-slate-700`}
                id="menu"
              >
                <ul className="pt-4 text-base text-gray-700 md:flex md:justify-between md:pt-0 dark:text-slate-200 flex-wrap">
                  <li>
                    <Link
                      className={`px-0 md:px-2 lg:p-4 py-2 block hover:text-[#062DB9] dark:hover:text-[#478cff]`}
                      to="/"
                      onClick={() => toggleMenu("homeMenuOpen")}
                    >
                      Home
                      <i className="ri-arrow-down-s-line float-right rtl:float-left md:float-none"></i>
                    </Link>
                    <ul
                      className={`rounded-lg dropdown p-2 md:p-4 min-w-44 md:absolute z-50 bg-white dark:bg-slate-800 dark:border-slate-700 border-0 md:border border-gray-200 ${menuStates.homeMenuOpen ? "block" : "hidden"
                        }`}
                    >
                      <li className="py-1">
                        <Link
                          className={`hover:text-[#062DB9] text-sm dark:hover:text-[#478cff]`}
                          to="/"
                        >
                          Home Style 1
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          className={`hover:text-[#062DB9] text-sm dark:hover:text-[#478cff]`}
                          to="/index-2"
                        >
                          Home Style 2
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          className={`hover:text-[#062DB9] text-sm dark:hover:text-[#478cff]`}
                          to="/index-3"
                        >
                          Home Style 3
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          className={`hover:text-[#062DB9] text-sm dark:hover:text-[#478cff]`}
                          to="/index-4"
                        >
                          Home Style 4
                        </Link>
                      </li>


                    </ul>
                  </li>

                  <li>
                    <Link
                      className={`px-0 md:px-2 lg:p-4 py-2 block hover:text-[#062DB9] dark:hover:text-[#478cff]`}
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
                          className={`hover:text-[#062DB9] text-sm dark:hover:text-[#478cff]`}
                          to="/blog-tag"
                        >
                          Blog Tag
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          className={`hover:text-[#062DB9] text-sm dark:hover:text-[#478cff]`}
                          to="/left-sidebar"
                        >
                          Left Sidebar
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          className={`hover:text-[#062DB9] text-sm dark:hover:text-[#478cff]`}
                          to="/right-sidebar"
                        >
                          Right Sidebar
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          className={`hover:text-[#062DB9] text-sm dark:hover:text-[#478cff]`}
                          to="/no-sidebar"
                        >
                          No Sidebar
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          className={`hover:text-[#062DB9] text-sm dark:hover:text-[#478cff]`}
                          to="/single-post"
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

                  <li>
                    <Link
                      className={`px-0 md:px-2 lg:p-4 py-2 block hover:text-[#062DB9] dark:hover:text-[#478cff]`}
                      to="#"
                      onClick={() => toggleMenu("postFormatMenuOpen")}
                    >
                      Post Format{" "}
                      <i className="ri-arrow-down-s-line float-right rtl:float-left md:float-none"></i>
                    </Link>
                    <ul
                      className={`rounded-lg dropdown p-4 min-w-44 absolute z-50 bg-white dark:bg-slate-800 dark:border-slate-700 border border-gray-200 ${menuStates.postFormatMenuOpen ? "block" : "hidden"
                        }`}
                    >
                      <li className="py-1">
                        <Link
                          className={`hover:text-[#062DB9] text-sm dark:hover:text-[#478cff]`}
                          to="/post-format-audio"
                        >
                          Post Format Audio
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          className={`hover:text-[#062DB9] text-sm dark:hover:text-[#478cff]`}
                          to="/post-format-gallery"
                        >
                          Post Format Gallery
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          className={`hover:text-[#062DB9] text-sm dark:hover:text-[#478cff]`}
                          to="/post-format-standard"
                        >
                          Post Format Standard
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          className={`hover:text-[#062DB9] text-sm dark:hover:text-[#478cff]`}
                          to="/post-format-text"
                        >
                          Post Format Text
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          className={`hover:text-[#062DB9] text-sm dark:hover:text-[#478cff]`}
                          to="/post-format-videos"
                        >
                          Post Format Video
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <Link
                      className={`md:p-[10px] lg:p-4 py-2 block hover:text-[#062DB9] dark:hover:text-[#478cff]`}
                      to="#"
                      onClick={() => toggleMenu("pagesMenuOpen")}
                    >
                      Pages{" "}
                      <i className="ri-arrow-down-s-line float-right rtl:float-left md:float-none"></i>
                    </Link>
                    <div
                      className={`${menuStates.pagesMenuOpen ? "block" : "hidden"} absolute left-0 right-0 z-50`}
                    >
                      <div
                        id="mega-menu-full-dropdown"
                        className="mt-1 bg-white border-gray-200 rounded-lg shadow-sm border-y dark:bg-slate-800 dark:border-slate-700"
                      >
                        <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:grid-cols-4 md:px-6">
                          <ul>
                            <li className="py-1">
                              <Link
                                className={`hover:text-[#062DB9] text-sm dark:hover:text-[#478cff]`}
                                to="/about"
                              >
                                About Us Page
                              </Link>
                            </li>
                            <li className="py-1">
                              <Link
                                className={`hover:text-[#062DB9] text-sm dark:hover:text-[#478cff]`}
                                to="/404"
                              >
                                404 Page
                              </Link>
                            </li>
                            <li className="py-1">
                              <Link
                                className={`hover:text-[#062DB9] text-sm dark:hover:text-[#478cff]`}
                                to="/grid-gallery"
                              >
                                Gallery Page
                              </Link>
                            </li>
                            <li className="py-1">
                              <Link
                                className={`hover:text-[#062DB9] text-sm dark:hover:text-[#478cff]`}
                                to="/masonry-gallery"
                              >
                                Masonry Gallery Page
                              </Link>
                            </li>
                            <li className="py-1">
                              <Link
                                className={`hover:text-[#062DB9] text-sm dark:hover:text-[#478cff]`}
                                to="/services"
                              >
                                Service Page
                              </Link>
                            </li>
                            <li className="py-1">
                              <Link
                                className={`hover:text-[#062DB9] text-sm dark:hover:text-[#478cff]`}
                                to="/search"
                              >
                                Search Page
                              </Link>
                            </li>
                          </ul>
                          <ul>
                            <li className="py-1">
                              <Link
                                className={`hover:text-[#062DB9] text-sm dark:hover:text-[#478cff]`}
                                to="/post-format-audio"
                              >
                                Post Format Audio
                              </Link>
                            </li>
                            <li className="py-1">
                              <Link
                                className={`hover:text-[#062DB9] text-sm dark:hover:text-[#478cff]`}
                                to="/post-format-gallery"
                              >
                                Post Format Gallery
                              </Link>
                            </li>
                            <li className="py-1">
                              <Link
                                className={`hover:text-[#062DB9] text-sm dark:hover:text-[#478cff]`}
                                to="/post-format-standard"
                              >
                                Post Format Standard
                              </Link>
                            </li>
                            <li className="py-1">
                              <Link
                                className={`hover:text-[#062DB9] text-sm dark:hover:text-[#478cff]`}
                                to="/post-format-text"
                              >
                                Post Format Text
                              </Link>
                            </li>
                            <li className="py-1">
                              <Link
                                className={`hover:text-[#062DB9] text-sm dark:hover:text-[#478cff]`}
                                to="/post-format-videos"
                              >
                                Post Format Video
                              </Link>
                            </li>
                          </ul>
                          <ul>
                            <li className="py-1">
                              <Link
                                className={`hover:text-[#062DB9] text-sm dark:hover:text-[#478cff]`}
                                to="/blog-tag"
                              >
                                Blog Tag
                              </Link>
                            </li>
                            <li className="py-1">
                              <Link
                                className={`hover:text-[#062DB9] text-sm dark:hover:text-[#478cff]`}
                                to="/left-sidebar"
                              >
                                Left Sidebar
                              </Link>
                            </li>
                            <li className="py-1">
                              <Link
                                className={`hover:text-[#062DB9] text-sm dark:hover:text-[#478cff]`}
                                to="/right-sidebar"
                              >
                                Right Sidebar
                              </Link>
                            </li>
                            <li className="py-1">
                              <Link
                                className={`hover:text-[#062DB9] text-sm dark:hover:text-[#478cff]`}
                                to="/no-sidebar"
                              >
                                No Sidebar
                              </Link>
                            </li>
                            <li className="py-1">
                              <Link
                                className={`hover:text-[#062DB9] text-sm dark:hover:text-[#478cff]`}
                                to="/single-post"
                              >
                                Single Post
                              </Link>
                            </li>
                          </ul>
                          <div>
                            <img
                              className="w-full h-auto max-w-full rounded-lg"
                              src="https://placehold.co/280x192.jpg"
                              alt="menu "
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <Link
                      className={`md:p-[10px] lg:p-4 py-2 block hover:text-[#062DB9] dark:hover:text-[#478cff]`}
                      to="/contact"
                    >
                      Contact
                    </Link>
                  </li>

                  <li>
                    <Link
                      className={`md:p-[10px] lg:p-4 py-2 block hover:text-[#062DB9] dark:hover:text-[#478cff]`}
                      to="#"
                      onClick={() => toggleMenu("allPagesMenuOpen")}
                    >
                      All Pages{" "}
                      <i className="ri-arrow-down-s-line float-right rtl:float-left md:float-none"></i>
                    </Link>
                    <div
                      className={`absolute left-0 right-0 z-50 ${menuStates.allPagesMenuOpen ? "block" : "hidden"
                        }`}
                    >
                      <div
                        id="mega-menu-full-dropdown"
                        className="mt-1 bg-white border-gray-200 rounded-lg shadow-sm border-y dark:bg-slate-800 dark:border-slate-700"
                      >
                        <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:grid-cols-3 md:px-6">
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
                className={`${menuOpen ? "block" : "hidden"
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

            {/* Search */}
            {/* <div className="order-3">
              <ul className="flex space-x-4 md:space-x-4 rtl:space-x-reverse">
                <li
                  x-data="{ open: false, get isOpen() { return this.open }, toggle() { this.open = ! this.open }, }"
                  className="text-md"
                >
                  <Link
                    onClick={() => setSearchOpen(!searchOpen)}
                    to="#"
                    className="hover:text-[#062DB9] text-base dark:text-slate-200 dark:hover:text-[#478cff] flex items-center"
                  >
                    <i className="ri-search-line"></i>{" "}
                    <span className="hidden lg:block ms-1">Search</span>
                  </Link>
                  <div
                    x-show="isOpen"
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
                          <div className="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3">
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
                            className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg ps-10 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                            placeholder="Search all kinds of latest news"
                            required
                          />
                          <button
                            type="submit"
                            className="text-white absolute end-2.5 bottom-2.5  focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 bg-black hover:bg-[#062DB9] dark:bg-[#062DB9] dark:hover:bg-gray-700"
                          >
                            Search
                          </button>
                        </div>
                        <button
                          className="cursor-pointer text-black font-bold dark:text-gray-300 hover:text-[#062DB9] text-xl absolute top-4 right-4"
                          onClick={() => setSearchOpen(false)}
                        >
                          ✕
                        </button>
                      </form>
                    </div>
                  </div>
                </li>

                <li className="text-md">
                  <Link
                    to="/login"
                    className="capitalize transition-all hover:text-[#062DB9] text-base dark:text-slate-200 dark:hover:text-[#478cff] flex items-center"
                  >
                    <i className="ri-user-line"></i>{" "}
                    <span className="hidden lg:block ms-1">login</span>
                  </Link>{" "}
                </li>
              </ul>
            </div> */}
          </nav>
        </div>
      </header>
    </React.Fragment>
  )
}

export default Header
