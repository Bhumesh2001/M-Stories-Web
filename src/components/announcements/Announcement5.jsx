import { Link } from "gatsby"
import React from "react"

const Announcement5 = () => {
  return (
    <React.Fragment>
      <div className="bg-gradient-to-r from-blue-800 via-purple-800 to-red-500 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between gap-2">
            <div>
              <ul className="flex items-center">
                <li className="text-xs bg-opacity-20 bg-white px-4 py-1 rounded-full">
                  Wednesday, March 20, 2024
                </li>
                <li className="text-xs border-r rtl:border-l rtl:border-r-0 px-4 hidden sm:block">
                  <Link to="/right-sidebar" className="hover:text-[#ff3750]">
                    News
                  </Link>
                </li>
                <li className="text-xs border-r rtl:border-l rtl:border-r-0 px-4 hidden sm:block">
                  <Link to="/left-sidebar" className="hover:text-[#ff3750]">
                    Business
                  </Link>
                </li>
                <li className="text-xs px-4 hidden sm:block">
                  <Link to="/no-sidebar" className="hover:text-[#ff3750]">
                    Technology
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="flex space-x-2 md:space-x-8 rtl:md:space-x-reverse">
                {/* social */}
                <li className="text-md">
                  <Link to="#" target="_blank" className="hover:text-[#ff3750]">
                    <i className="ri-facebook-fill"></i>
                  </Link>
                </li>
                <li className="text-md">
                  <Link to="#" target="_blank" className="hover:text-[#ff3750]">
                    <i className="ri-twitter-x-fill"></i>
                  </Link>
                </li>
                <li className="text-md">
                  <Link to="#" target="_blank" className="hover:text-[#ff3750]">
                    <i className="ri-linkedin-fill"></i>
                  </Link>
                </li>
                <li className="text-md">
                  <Link to="#" target="_blank" className="hover:text-[#ff3750]">
                    <i className="ri-rss-fill"></i>
                  </Link>
                </li>
                <li className="text-md">
                  <Link to="#" target="_blank" className="hover:text-[#ff3750]">
                    <i className="ri-youtube-fill"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Announcement5
