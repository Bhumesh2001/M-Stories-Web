import { Link } from "gatsby"
import React, { useEffect, useRef, useState } from "react"

const NavMenu = ({ color, darkcolor, navclass }) => {
  const [menuOpen, setMenuOpen] = React.useState(false)

  const [menuStates, setMenuStates] = useState({
    homeMenuOpen: false,
    blogMenuOpen: false,
    postFormatMenuOpen: false,
    pagesMenuOpen: false,
    allPagesMenuOpen: false,
  })

  const toggleMenu = menu => {
    setMenuStates(prevState => ({
      ...prevState,
      [menu]: !prevState[menu],
      // Close other menus
      homeMenuOpen: menu === "homeMenuOpen" ? !prevState[menu] : false,
      blogMenuOpen: menu === "blogMenuOpen" ? !prevState[menu] : false,
      postFormatMenuOpen:
        menu === "postFormatMenuOpen" ? !prevState[menu] : false,
      pagesMenuOpen: menu === "pagesMenuOpen" ? !prevState[menu] : false,
      allPagesMenuOpen: menu === "allPagesMenuOpen" ? !prevState[menu] : false,
    }))
  }

  const menuRef = useRef()

  useEffect(() => {
    const handleOutsideClick = event => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false)
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
      <nav className={navclass}>
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
          className={`${
            menuOpen ? "block" : "hidden"
          } w-full md:flex md:items-center md:w-auto absolute bg-white left-0 right-0 p-3 z-50 shadow md:shadow-none md:p-0 md:bg-transparent dark:bg-slate-800 dark:border-slate-700`}
          id="menu"
        >
          <ul className="pt-4 text-base text-gray-700 md:flex md:justify-between md:pt-0 dark:text-slate-200">
            <li>
              <Link
                className={`py-2 lg:px-2 xl:px-4 block hover:${color} dark:hover:${darkcolor}`}
                to="/index-4"
                onClick={() => toggleMenu("homeMenuOpen")}
              >
                Home{" "}
                <i className="ri-arrow-down-s-line float-right rtl:float-left md:float-none"></i>
              </Link>
              <ul
                className={`rounded-lg dropdown p-2 md:p-4 min-w-44 md:absolute z-50 bg-white dark:bg-slate-800 dark:border-slate-700 border-0 md:border border-gray-200 ${
                  menuStates.homeMenuOpen ? "block" : "hidden"
                }`}
              >
                <li className="py-1">
                  <Link
                    className={`hover:text-${color} text-sm dark:hover:text-${darkcolor}`}
                    to="/"
                  >
                    Home Style 1
                  </Link>
                </li>
                <li className="py-1">
                  <Link
                    className={`hover:text-${color} text-sm dark:hover:text-${darkcolor}`}
                    to="/index-2"
                  >
                    Home Style 2
                  </Link>
                </li>
                <li className="py-1">
                  <Link
                    className={`hover:text-${color} text-sm dark:hover:text-${darkcolor}`}
                    to="/index-3"
                  >
                    Home Style 3
                  </Link>
                </li>
                <li className="py-1">
                  <Link
                    className={`hover:text-${color} text-sm dark:hover:text-${darkcolor}`}
                    to="/index-4"
                  >
                    Home Style 4
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                className={`py-2 md:px-2 lg:px-4 block hover:${color} dark:hover:text-[${darkcolor}]`}
                to="#"
                onClick={() => toggleMenu("blogMenuOpen")}
              >
                Blog{" "}
                <i className="ri-arrow-down-s-line float-right rtl:float-left md:float-none"></i>
              </Link>
              <ul
                className={`rounded-lg dropdown p-2 md:p-4 min-w-44 md:absolute z-50 bg-white dark:bg-slate-800 dark:border-slate-700 border-0 md:border border-gray-200 ${
                  menuStates.blogMenuOpen ? "block" : "hidden"
                }`}
              >
                <li className="py-1">
                  <Link
                    className={`hover:text-${color} text-sm dark:hover:text-${darkcolor}`}
                    to="/blog-tag"
                  >
                    Blog Tag
                  </Link>
                </li>
                <li className="py-1">
                  <Link
                    className={`hover:text-${color} text-sm dark:hover:text-${darkcolor}`}
                    to="/left-sidebar"
                  >
                    Left Sidebar
                  </Link>
                </li>
                <li className="py-1">
                  <Link
                    className={`hover:text-${color} text-sm dark:hover:text-${darkcolor}`}
                    to="/right-sidebar"
                  >
                    Right Sidebar
                  </Link>
                </li>
                <li className="py-1">
                  <Link
                    className={`hover:text-${color} text-sm dark:hover:text-${darkcolor}`}
                    to="/no-sidebar"
                  >
                    No Sidebar
                  </Link>
                </li>
                <li className="py-1">
                  <Link
                    className={`hover:text-${color} text-sm dark:hover:text-${darkcolor}`}
                    to="/single-post"
                  >
                    Single Post
                  </Link>
                </li>
                <li className="py-1">
                  <Link to="/BlogPost" className="hover:text-[#ff3750] text-sm">
                    Create Blog
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                className={`py-2 lg:px-2 xl:px-4 block hover:${color} dark:hover:text-[${darkcolor}]`}
                to="#"
                onClick={() => toggleMenu("postFormatMenuOpen")}
              >
                Post Format{" "}
                <i className="ri-arrow-down-s-line float-right rtl:float-left md:float-none"></i>
              </Link>
              <ul
                className={`rounded-lg dropdown p-2 md:p-4 min-w-44 md:absolute z-50 bg-white dark:bg-slate-800 dark:border-slate-700 border-0 md:border border-gray-200 ${
                  menuStates.postFormatMenuOpen ? "block" : "hidden"
                }`}
              >
                <li className="py-1">
                  <Link
                    className={`hover:text-${color} text-sm dark:hover:text-${darkcolor}`}
                    to="/post-format-audio"
                  >
                    Post Format Audio
                  </Link>
                </li>
                <li className="py-1">
                  <Link
                    className={`hover:text-${color} text-sm dark:hover:text-${darkcolor}`}
                    to="/post-format-gallery"
                  >
                    Post Format Gallery
                  </Link>
                </li>
                <li className="py-1">
                  <Link
                    className={`hover:text-${color} text-sm dark:hover:text-${darkcolor}`}
                    to="/post-format-standard"
                  >
                    Post Format Standard
                  </Link>
                </li>
                <li className="py-1">
                  <Link
                    className={`hover:text-${color} text-sm dark:hover:text-${darkcolor}`}
                    to="/post-format-text"
                  >
                    Post Format Text
                  </Link>
                </li>
                <li className="py-1">
                  <Link
                    className={`hover:text-${color} text-sm dark:hover:text-${darkcolor}`}
                    to="/post-format-videos"
                  >
                    Post Format Video
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                className={`py-2 lg:px-2 xl:px-4 block hover:${color} dark:hover:text-[${darkcolor}]`}
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
                  className="mt-1 bg-white border-gray-200 shadow-sm md:border-y dark:bg-slate-800 dark:border-gray-700 rounded-lg border-0 md:border"
                >
                  <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:grid-cols-4 md:px-6">
                    <ul>
                      <li className="py-1">
                        <Link
                          className={`hover:text-${color} text-sm dark:hover:text-${darkcolor}`}
                          to="/about"
                        >
                          About Us Page
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          className={`hover:text-${color} text-sm dark:hover:text-${darkcolor}`}
                          to="/404"
                        >
                          404 Page
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          className={`hover:text-${color} text-sm dark:hover:text-${darkcolor}`}
                          to="/grid-gallery"
                        >
                          Gallery Page
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          className={`hover:text-${color} text-sm dark:hover:text-${darkcolor}`}
                          to="/masonry-gallery"
                        >
                          Masonry Gallery Page
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          className={`hover:text-${color} text-sm dark:hover:text-${darkcolor}`}
                          to="/services"
                        >
                          Service Page
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          className={`hover:text-${color} text-sm dark:hover:text-${darkcolor}`}
                          to="/search"
                        >
                          Search Page
                        </Link>
                      </li>
                    </ul>
                    <ul>
                      <li className="py-1">
                        <Link
                          className={`hover:text-${color} text-sm dark:hover:text-${darkcolor}`}
                          to="/post-format-audio"
                        >
                          Post Format Audio
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          className={`hover:text-${color} text-sm dark:hover:text-${darkcolor}`}
                          to="/post-format-gallery"
                        >
                          Post Format Gallery
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          className={`hover:text-${color} text-sm dark:hover:text-${darkcolor}`}
                          to="/post-format-standard"
                        >
                          Post Format Standard
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          className={`hover:text-${color} text-sm dark:hover:text-${darkcolor}`}
                          to="/post-format-text"
                        >
                          Post Format Text
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          className={`hover:text-${color} text-sm dark:hover:text-${darkcolor}`}
                          to="/post-format-videos"
                        >
                          Post Format Video
                        </Link>
                      </li>
                    </ul>
                    <ul>
                      <li className="py-1">
                        <Link
                          className={`hover:text-${color} text-sm dark:hover:text-${darkcolor}`}
                          to="/blog-tag"
                        >
                          Blog Tag
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          className={`hover:text-${color} text-sm dark:hover:text-${darkcolor}`}
                          to="/left-sidebar"
                        >
                          Left Sidebar
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          className={`hover:text-${color} text-sm dark:hover:text-${darkcolor}`}
                          to="/right-sidebar"
                        >
                          Right Sidebar
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          className={`hover:text-${color} text-sm dark:hover:text-${darkcolor}`}
                          to="/no-sidebar"
                        >
                          No Sidebar
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          className={`hover:text-${color} text-sm dark:hover:text-${darkcolor}`}
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
                className={`py-2 lg:px-2 xl:px-4 block hover:${color} dark:hover:text-[${darkcolor}]`}
                to="/contact"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                className={`py-2 lg:px-2 xl:px-4 block hover:${color} dark:hover:text-[${darkcolor}]`}
                to="#"
                onClick={() => toggleMenu("allPagesMenuOpen")}
              >
                All Pages{" "}
                <i className="ri-arrow-down-s-line float-right rtl:float-left md:float-none"></i>
              </Link>
              <div
                x-show="isOpen"
                className={`absolute left-0 right-0 z-50 ${
                  menuStates.allPagesMenuOpen ? "block" : "hidden"
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
                          <div className="font-semibold">Online Stores</div>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            Connect with third-party tools that you're already
                            using.
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                        >
                          <div className="font-semibold">Segmentation</div>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            Connect with third-party tools that you're already
                            using.
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                        >
                          <div className="font-semibold">Marketing CRM</div>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            Connect with third-party tools that you're already
                            using.
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
                          <div className="font-semibold">Online Stores</div>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            Connect with third-party tools that you're already
                            using.
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                        >
                          <div className="font-semibold">Segmentation</div>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            Connect with third-party tools that you're already
                            using.
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                        >
                          <div className="font-semibold">Marketing CRM</div>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            Connect with third-party tools that you're already
                            using.
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
                            Connect with third-party tools that you're already
                            using.
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                        >
                          <div className="font-semibold">Creative Tools</div>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            Connect with third-party tools that you're already
                            using.
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
                            Connect with third-party tools that you're already
                            using.
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
      </nav>
    </React.Fragment>
  )
}

export default NavMenu
