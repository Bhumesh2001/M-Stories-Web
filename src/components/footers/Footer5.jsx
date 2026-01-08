import { Link } from "gatsby"
import React from "react"
import logo from "../../assets/images/f-logo_.jpeg"

const Footer5 = () => {
  return (
    <React.Fragment>
      <footer className="bg-black mt-16 dark:bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xs:gap-0 sm:gap-8 text-white py-10">
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-3 md:mb-6">
                Blog Posts
              </h2>
              <p className="text-white text-sm mb-3">
                <Link
                  to="#"
                  className="opacity-60 hover:text-[#ff3750] hover:opacity-100"
                >
                  Gravida sodales diam. Ut libero ipsum, rutrum et mauris non.
                </Link>
              </p>
              <p className="text-white text-sm mb-3">
                <Link
                  to="#"
                  className="opacity-60 hover:text-[#ff3750] hover:opacity-100"
                >
                  Vivamus tortor enim, semper et ornare sed, sagittis in lorem.
                </Link>
              </p>
              <p className="text-white text-sm mb-3">
                <Link
                  to="#"
                  className="opacity-60 hover:text-[#ff3750] hover:opacity-100"
                >
                  venenatis sit amet malesuada ut malesuada non ligula.
                </Link>
              </p>
              <p className="text-white text-sm mb-3">
                <Link
                  to="#"
                  className="opacity-60 hover:text-[#ff3750] hover:opacity-100"
                >
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text.
                </Link>
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 md:mb-6 mt-6 md:mt-0">
                Tags
              </h2>
              <div className="flex flex-wrap gap-3 capitalize">
                <div className="mb-3">
                  <Link
                    to="#"
                    className="border border-slate-700 rounded-lg hover:text-[#ff3750] text-xs px-3 py-2"
                  >
                    Dauore
                  </Link>
                </div>
                <div className="mb-3">
                  <Link
                    to="#"
                    className="border border-slate-700 rounded-lg hover:text-[#ff3750] text-xs px-3 py-2"
                  >
                    fugiate
                  </Link>
                </div>
                <div className="mb-3">
                  <Link
                    to="#"
                    className="border border-slate-700 rounded-lg hover:text-[#ff3750] text-xs px-3 py-2"
                  >
                    Gallery
                  </Link>
                </div>
                <div className="mb-3">
                  <Link
                    to="#"
                    className="border border-slate-700 rounded-lg hover:text-[#ff3750] text-xs px-3 py-2"
                  >
                    gautro
                  </Link>
                </div>
                <div className="mb-3">
                  <Link
                    to="#"
                    className="border border-slate-700 rounded-lg hover:text-[#ff3750] text-xs px-3 py-2"
                  >
                    neursto
                  </Link>
                </div>
                <div className="mb-3">
                  <Link
                    to="#"
                    className="border border-slate-700 rounded-lg hover:text-[#ff3750] text-xs px-3 py-2"
                  >
                    poresto
                  </Link>
                </div>
                <div className="mb-3">
                  <Link
                    to="#"
                    className="border border-slate-700 rounded-lg hover:text-[#ff3750] text-xs px-3 py-2"
                  >
                    porro
                  </Link>
                </div>
                <div className="mb-3">
                  <Link
                    to="#"
                    className="border border-slate-700 rounded-lg hover:text-[#ff3750] text-xs px-3 py-2"
                  >
                    Dauore
                  </Link>
                </div>
                <div className="mb-3">
                  <Link
                    to="#"
                    className="border border-slate-700 rounded-lg hover:text-[#ff3750] text-xs px-3 py-2"
                  >
                    refusare
                  </Link>
                </div>
                <div className="mb-3">
                  <Link
                    to="#"
                    className="border border-slate-700 rounded-lg hover:text-[#ff3750] text-xs px-3 py-2"
                  >
                    Dauore
                  </Link>
                </div>
                <div className="mb-3">
                  <Link
                    to="#"
                    className="border border-slate-700 rounded-lg hover:text-[#ff3750] text-xs px-3 py-2"
                  >
                    separat
                  </Link>
                </div>
                <div className="mb-3">
                  <Link
                    to="#"
                    className="border border-slate-700 rounded-lg hover:text-[#ff3750] text-xs px-3 py-2"
                  >
                    watch
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-2 md:mb-6 mt-6 md:mt-0">
                Post Format
              </h2>
              <ul>
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
            </div>

            {/* <div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-2 md:mb-6 mt-6 md:mt-0">
                Links
              </h2>
              <ul>
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
                    to="/masonry-gallery"
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
                    Masonry Gallery
                  </Link>
                </li>
                <li className="py-1">
                  <Link
                    to="/services"
                    className="hover:text-[#ff3750] text-sm"
                  >
                    Services Page
                  </Link>
                </li>
              </ul>
            </div> */}

            <div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-2 md:mb-6 mt-6 md:mt-0">
                Links
              </h2>
              <ul>
                <li className="py-1">
                  <Link to="/" className="hover:text-[#ff3750] text-sm">
                    Home
                  </Link>
                </li>
                <li className="py-1">
                  <Link to="/blog-tag" className="hover:text-[#ff3750] text-sm">
                    Blog
                  </Link>
                </li>
                <li className="py-1">
                  <Link
                    to="/post-format-standard"
                    className="hover:text-[#ff3750] text-sm"
                  >
                    Category
                  </Link>
                </li>
                <li className="py-1">
                  <Link to="/about" className="hover:text-[#ff3750] text-sm">
                    About
                  </Link>
                </li>
                <li className="py-1">
                  <Link to="/contact" className="hover:text-[#ff3750] text-sm">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <hr className="opacity-20" />

          <div className="text-white py-10 items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="col-span-1">
              <Link to="/index">
                <img
                  src={logo}
                  alt="logo"
                  className="h-auto max-w-full rounded"
                />
              </Link>
            </div>
            <form className="col-span-2 flex">
              <input
                type="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white pl-4 pr-8 rtl:pe-8 rtl:pr-4 capitalize"
                placeholder="Please Enter email"
                required
              />
              <button className="btn rounded-lg px-3 lg:px-6 py-3 relative -left-5 md:-left-5 rtl:-right-5 rtl:md:-left-5 bg-[#ff3750] hover:bg-gray-900 dark:hover:bg-gray-700 capitalize">
                subscribe
              </button>
            </form>
            <div className="col-span-1">
              <ul className="flex space-x-4 md:space-x-0 gap-2 rtl:space-x-reverse md:float-right flex-wrap">
                <li className="text-base text-black bg-white w-8 h-8 text-center rounded hover:bg-[#ff3750] hover:text-white leading-8">
                  <Link to="#">
                    <i className="ri-facebook-fill"></i>
                  </Link>
                </li>
                <li className="text-base text-black bg-white w-8 h-8 text-center rounded hover:bg-[#ff3750] hover:text-white leading-8">
                  <Link to="#">
                    <i className="ri-twitter-x-fill"></i>
                  </Link>
                </li>
                <li className="text-base text-black bg-white w-8 h-8 text-center rounded hover:bg-[#ff3750] hover:text-white leading-8">
                  <Link to="#">
                    <i className="ri-linkedin-fill"></i>
                  </Link>
                </li>
                <li className="text-base text-black bg-white w-8 h-8 text-center rounded hover:bg-[#ff3750] hover:text-white leading-8">
                  <Link to="#">
                    <i className="ri-rss-fill"></i>
                  </Link>
                </li>
                <li className="text-base text-black bg-white w-8 h-8 text-center rounded hover:bg-[#ff3750] hover:text-white leading-8">
                  <Link to="#">
                    <i className="ri-youtube-fill"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="opacity-20" />

        <div className="container mx-auto px-4">
          <div className="block sm:flex justify-between text-white items-center">
            <div>
              <p className="text-white opacity-70 text-sm py-4">
                Designed by Demo Theme All rights reserved.
              </p>
            </div>
            <div>
              <div className="sm:gap-3 capitalize pb-4 md:pb-0 sm:pt-4 md:pt-0">
                <ul className="flex gap-3 flex-wrap">
                  <li className="border border-slate-700 rounded-lg hover:text-[#ff3750] text-xs px-3 py-2 cursor-pointer">
                    <Link to="#">uore</Link>
                  </li>
                  <li className="border border-slate-700 rounded-lg hover:text-[#ff3750] text-xs px-3 py-2 cursor-pointer">
                    <Link to="#">fugiate</Link>
                  </li>
                  <li className="border border-slate-700 rounded-lg hover:text-[#ff3750] text-xs px-3 py-2 cursor-pointer">
                    <Link to="#">Gallery</Link>
                  </li>
                  <li className="border border-slate-700 rounded-lg hover:text-[#ff3750] text-xs px-3 py-2 cursor-pointer">
                    <Link to="#">gautro</Link>
                  </li>
                  <li className="border border-slate-700 rounded-lg hover:text-[#ff3750] text-xs px-3 py-2 cursor-pointer">
                    <Link to="#">neursto</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  )
}

export default Footer5
