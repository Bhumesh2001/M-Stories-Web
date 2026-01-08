import { Link } from "gatsby"
import React from "react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import client from "../../../assets/images/avatar.png"
import banner1 from "../../../assets/images/layout-2/top-banner/01.jpg"
import banner2 from "../../../assets/images/layout-2/top-banner/02.jpg"
import banner3 from "../../../assets/images/layout-2/top-banner/03.jpg"
import { section2 } from "../../data"

const Section2 = () => {
  return (
    <React.Fragment>
      <section className="mt-8">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="col-span-5 md:col-span-3" data-aos="flip-left">
              <Swiper
                slidesPerView={1}
                pagination={{
                  el: ".swiper-pagination",
                }}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                loop={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="main-slider-2"
                dir="ltr"
              >
                {section2 &&
                  section2.map(item => (
                    <SwiperSlide key={item.id}>
                      <div className="relative">
                        <div className="relative">
                          <Link to="/single-post">
                            <img
                              className="w-full h-auto max-w-full rounded-2xl"
                              src={item.bgImage}
                              alt="slider"
                            />
                          </Link>
                        </div>
                        <div className="absolute w-full top-0 md:top-4 flex items-start left-6 right-6 xl:max-w-[500px] md:max-w-[500px] sm:max-w-[500px] max-w-[250px] rtl:right-6 rtl:left-auto">
                          <div className="py-4">
                            <div className="text-sm text-white uppercase">
                              Drinks & Desserts
                            </div>
                            <div className="font-bold leading-normal text-white capitalize break-words text-md sm:text-2xl xl:max-w-lg lg:max-w-lg md:max-w-lg sm:max-w-lg">
                              {item.desc}
                            </div>
                            <div className="items-center justify-start hidden gap-2 my-2 text-xs text-white xl:flex lg:flex md:flex sm:flex lg:my-8 sm:text-sm">
                              <img
                                src={client}
                                alt="avtar"
                                className="rounded-full max-w-10"
                              />
                              <span> Armin vans</span>
                              <span> August 7, 2024</span>
                            </div>
                            {item.seemore === true ? (
                              <Link
                                to="/single-post"
                                className="inline-block mt-2 py-2.5 px-5 text-sm font-medium  focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-[#062db9] focus:z-10 focus:ring-4 focus:ring-gray-100"
                              >
                                See More Info
                              </Link>
                            ) : (
                              <button
                                type="button"
                                className="py-2.5 px-5 text-sm font-medium  focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-[#062db9] focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                              >
                                See More Info
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                <div className="swiper-pagination"></div>
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
              </Swiper>
            </div>

            {/* <div className="col-span-5 md:col-span-2" data-aos="flip-right">
              <div className="grid grid-cols-2 gap-6">
                <div className="col-span-2">
                  <figure className="relative cursor-pointer">
                    <Link to="/single-post">
                      <img
                        className="w-full h-auto max-w-full transition duration-300 ease-in-out rounded-2xl hover:brightness-50"
                        src={banner1}
                        alt="blog"
                      />
                    </Link>
                    <figcaption className="absolute px-4 text-lg text-white bottom-6">
                      <div className="text-sm text-white lg:uppercase">
                        Technology
                      </div>
                      <div className="max-w-sm text-sm font-medium leading-normal text-white capitalize lg:text-xl">
                        Game Changing Virtual Reality Console Hits the Market
                      </div>
                    </figcaption>
                  </figure>
                </div>

                <div
                  className="col-span-2"
                  data-aos="fade-left"
                >
                  <div className="p-5 bg-white dark:bg-gray-800/70 rounded-xl">
                    <div className="mb-4">
                      <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                        Join With Us
                      </h5>
                    </div>
                    <ul>
                      <li>
                        <Link to="#" target="_blank">
                          <div className="bg-[#062DB9] hover:bg-[#052494] text-white text-left rounded-full py-3.5 px-7 mb-3">
                            <div className="flex items-center justify-between">
                              <div>
                                <i className="text-lg ri-facebook-circle-fill"></i>
                                <span className="">Facebook</span>
                              </div>
                              <div>42.2k</div>
                            </div>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" target="_blank">
                          <div className="bg-[#20A1EB] hover:bg-[#128cd3] text-white text-left rounded-full py-3.5 px-7 mb-3">
                            <div className="flex items-center justify-between">
                              <div>
                                <i className="ri-twitter-x-line"></i>
                                <span className="">Twitter</span>
                              </div>
                              <div>10.1m</div>
                            </div>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" target="_blank">
                          <div className="bg-[#830899] hover:bg-[#680679] text-white text-left rounded-full py-3.5 px-7 mb-3">
                            <div className="flex items-center justify-between">
                              <div>
                                <i className="ri-twitch-line"></i>
                                <span className="">Twitch</span>
                              </div>
                              <div>22.9k</div>
                            </div>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" target="_blank">
                          <div className="bg-gradient-to-r from-[#863FA6] from-10% via-[#E12C61] via-50% to-[#F46F46] to-90% hover:from-[#683181] hover:from-10% hover:via-[#c91d50] hover:via-50% hover:to-[#f25626] hover:to-90% text-white text-left rounded-full py-3.5 px-7 mb-0">
                            <div className="flex items-center justify-between">
                              <div>
                                <i className="ri-instagram-line"></i>
                                <span className="">Instagram</span>
                              </div>
                              <div>50.2k</div>
                            </div>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <figure className="relative cursor-pointer">
                    <Link to="/single-post">
                      <img
                        className="w-full h-auto max-w-full transition duration-300 ease-in-out rounded-2xl hover:brightness-50"
                        src={banner2}
                        alt="blog"
                      />
                    </Link>
                    <figcaption className="absolute px-4 text-white text-md bottom-5 md:bottom-1 lg:bottom-6">
                      <div className="text-sm text-white lg:uppercase">
                        Sports
                      </div>
                      <div className="max-w-sm text-sm font-medium text-white capitalize lg:text-md lg:leading-normal">
                        Computer Filters Noise to Make you batter.
                      </div>
                    </figcaption>
                  </figure>
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <figure className="relative cursor-pointer">
                    <Link to="/single-post">
                      <img
                        className="w-full h-auto max-w-full transition duration-300 ease-in-out rounded-2xl hover:brightness-50"
                        src={banner3}
                        alt="blog"
                      />
                    </Link>
                    <figcaption className="absolute px-4 text-white text-md bottom-5 md:bottom-1 lg:bottom-6">
                      <div className="text-sm text-white lg:uppercase">
                        Lifestyle
                      </div>
                      <div className="max-w-sm text-sm font-medium text-white capitalize lg:text-md lg:leading-normal">
                        Computer Filters Noise to Make you batter.
                      </div>
                    </figcaption>
                  </figure>
                </div>

                <div className="col-span-2">
                  <div className="border-b dark:border-gray-700">
                    <h3 className="uppercase font-bold tracking-wide border-b-2 inline-block border-[#ff3750] pb-4 dark:text-white">
                      Newsletter
                    </h3>
                  </div>
                  <div className="mt-4">
                    <input
                      type="email"
                      className="form-input px-4 py-3 rounded-lg w-full border dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="Enter email"
                    />
                    <button className="uppercase tracking-wide btn rounded-lg px-6 py-3 bg-[#ff3750] hover:bg-gray-700 mt-5 w-full pt-[14px]">
                      subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div> */}

            <div className="col-span-5 md:col-span-2" data-aos="flip-right">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Social Media Join Section */}
                <div className="col-span-1 sm:col-span-2" data-aos="fade-left">
                  <div className="p-4 bg-white dark:bg-gray-800/70 rounded-xl">
                    <div className="mb-3">
                      <h5 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Join With Us
                      </h5>
                    </div>
                    <ul>
                      {[
                        {
                          name: "Facebook",
                          icon: "ri-facebook-circle-fill",
                          color: "bg-[#062DB9]",
                          count: "42.2k",
                        },
                        {
                          name: "Twitter",
                          icon: "ri-twitter-x-line",
                          color: "bg-[#20A1EB]",
                          count: "10.1m",
                        },
                        {
                          name: "Twitch",
                          icon: "ri-twitch-line",
                          color: "bg-[#830899]",
                          count: "22.9k",
                        },
                        {
                          name: "Instagram",
                          icon: "ri-instagram-line",
                          color:
                            "bg-gradient-to-r from-[#863FA6] via-[#E12C61] to-[#F46F46] hover:from-[#683181] hover:via-[#c91d50] hover:to-[#f25626]",
                          count: "50.2k",
                        },
                      ].map(({ name, icon, color, count }) => (
                        <li key={name}>
                          <Link to="#" target="_blank">
                            <div
                              className={`${color} text-white rounded-full py-2 px-5 mb-2 hover:opacity-90 text-sm`}
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <i className={`text-base ${icon}`}></i>
                                  <span>{name}</span>
                                </div>
                                <div className="text-xs">{count}</div>
                              </div>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Newsletter Section */}
                <div className="col-span-1 sm:col-span-2">
                  <div className="border-b dark:border-gray-700">
                    <h3 className="uppercase font-semibold tracking-wide border-b-2 inline-block border-[#ff3750] pb-2 text-sm dark:text-white">
                      Newsletter
                    </h3>
                  </div>
                  <div className="mt-3">
                    <input
                      type="email"
                      className="form-input px-3 py-2 rounded-md w-full border text-sm dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="Enter email"
                    />
                    <button className="uppercase tracking-wide rounded-md px-4 py-2 bg-[#ff3750] hover:bg-gray-700 mt-4 w-full text-sm text-white">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Section2
