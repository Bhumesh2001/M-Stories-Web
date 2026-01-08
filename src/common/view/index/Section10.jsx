import React from "react"
import { Link } from "gatsby"

import bg1 from "../../../assets/images/post-bg/bg-1.png"
import bg2 from "../../../assets/images/post-bg/bg-2.png"
import bg3 from "../../../assets/images/post-bg/bg-3.png"
import bg4 from "../../../assets/images/post-bg/bg-4.png"
import bg5 from "../../../assets/images/post-bg/bg-5.png"
import bg6 from "../../../assets/images/post-bg/bg-6.png"

const categories = [
  { name: "Fashion", count: 20, bg: bg2, link: "/left-sidebar" },
  { name: "Food", count: 5, bg: bg4, link: "/right-sidebar" },
  { name: "Latest", count: 8, bg: bg6, link: "/post-format-text" },
  { name: "Popular", count: 4, bg: bg1, link: "/post-format-audio" },
  { name: "Spote", count: 9, bg: bg3, link: "/post-format-gallery" },
  { name: "Spote", count: 11, bg: bg5, link: "/left-sidebar" },
  { name: "Top Story", count: 7, bg: bg4, link: "/post-format-standard" },
  { name: "Travel", count: 10, bg: bg3, link: "/right-sidebar" },
  { name: "Video", count: 15, bg: bg1, link: "/post-format-video" },
]

const Section10 = () => {
  return (
    <React.Fragment>
      <section className="mt-8" data-aos="zoom-in">
        <div className="container px-4 mx-auto">
          <div className="">
            <figure className="relative cursor-pointer">
              <div>
                <div className="mb-4">
                  <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">
                    Explore Categories
                  </h5>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categories.map(({ name, count, bg, link }, index) => (
                    <div
                      key={index}
                      className="rounded-xl overflow-hidden relative h-24 group shadow-lg dark:bg-gray-500"
                    >
                      <Link to={link}>
                        <div
                          className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                          style={{ backgroundImage: `url(${bg})` }}
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-20 transition duration-300" />
                        <div className="relative z-10 flex items-center justify-between h-full px-4 text-white font-semibold">
                          <span className="text-lg">{name}</span>
                          <span className="text-sm text-white/80">
                            ({count})
                          </span>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </figure>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Section10
