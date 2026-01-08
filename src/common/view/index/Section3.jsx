import { Link } from "gatsby"
import React, { useState } from "react"
import layout8 from "../../../assets/images/08.jpg"
import layout9 from "../../../assets/images/09.jpg"
import layout6 from "../../../assets/images/layout-2/06.jpg"
import layout7 from "../../../assets/images/layout-2/07.jpg"
import editor from "../../../assets/images/layout-2/editors-click.jpg"
import { categories, lifestyle } from "../../../common/data"

const Section3 = () => {
  const [tab, setTab] = useState("foo")
  return (
    <React.Fragment>
      <section className="mt-8">
        <div className="container px-4 mx-auto">
          <div className="">
            <div className="grid grid-cols-3 gap-0 lg:gap-8">
              <div
                className="col-span-3 p-5 bg-white lg:col-span-2 dark:bg-gray-800/70 rounded-xl"
                data-aos="fade-right"
              >
                <div className="flex items-center justify-between mb-4">
                  <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                    Editor's Click
                  </h5>
                  <div className="text-right dark:text-white">
                    <button
                      className={`${
                        tab === "foo"
                          ? "text-[#478cff] sm:bg-[#062db9] sm:text-white sm:hover:bg-blue-800 sm:font-medium sm:rounded-lg sm:text-sm sm:px-5 sm:py-2.5 sm:me-2"
                          : ""
                      }`}
                      onClick={() => setTab("foo")}
                    >
                      Trending Post
                    </button>
                    <button
                      className={`${
                        tab === "bar"
                          ? "text-[#478cff] sm:bg-[#062db9] sm:text-white sm:hover:bg-blue-800 sm:font-medium sm:rounded-lg sm:text-sm sm:px-5 sm:py-2.5 sm:ms-2"
                          : ""
                      }`}
                      onClick={() => setTab("bar")}
                    >
                      Latest Post
                    </button>
                  </div>
                </div>

                {tab === "foo" && (
                  <div>
                    <div className="grid grid-cols-3 gap-6">
                      <div className="col-span-3 lg:col-span-2">
                        <div>
                          <Link to="/single-post">
                            <img
                              className="w-full h-auto max-w-full rounded-2xl"
                              src={editor}
                              alt="post"
                            />
                          </Link>
                          <div className="pt-4">
                            <div className="capitalize text-sm text-[#062db9] font-medium dark:text-[#478cff]">
                              Tours & Travellings
                            </div>
                            <Link to="/single-post">
                              <h5 className="mb-1 text-xl leading-normal capitalize font-medium text-gray-900 dark:text-white hover:text-[#062db9] dark:hover:text-[#478cff]">
                                Extraordinary Snoqualmie Falls Seattle Tour
                                Travelling selection of world-class
                                accommodations
                              </h5>
                            </Link>
                            <p className="mb-1 text-sm text-gray-500 sm:text-base dark:text-gray-300">
                              Indulge in luxury and comfort with our handpicked
                              Tours & Travelling selection of world-class
                              accommodations.
                            </p>
                            <div className="mt-2 block gap-4 text-[12px] text-gray-600 dark:text-gray-400 uppercase">
                              <span className="me-2 lg:me-1"> John Doe</span>
                              <span>7 Months Ago</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-span-3 lg:col-span-1">
                        <div>
                          <Link to="/single-post">
                            <img
                              className="w-full h-auto max-w-full rounded-2xl"
                              src={layout7}
                              alt="post"
                            />
                          </Link>
                          <div className="pt-3">
                            <div className="capitalize text-sm text-[#062db9] font-medium dark:text-[#478cff]">
                              Lifestyle & Fashion
                            </div>
                            <Link to="/single-post">
                              <h5 className="mb-1 text-md leading-normal capitalize font-medium text-gray-900 dark:text-white hover:text-[#062db9]">
                                the power of big data in the Fashion decision
                                making
                              </h5>
                            </Link>
                            <div className="block gap-4 text-[11px] text-gray-500 dark:text-gray-400 uppercase">
                              <span className="me-2 lg:me-1"> John Doe</span>
                              <span>7 Months Ago</span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-6">
                          <Link to="/single-post">
                            <img
                              className="w-full h-auto max-w-full rounded-2xl"
                              src={layout6}
                              alt="post"
                            />
                          </Link>
                          <div className="pt-3">
                            <div className="capitalize text-sm text-[#062db9] font-medium dark:text-[#478cff]">
                              Crispy Food
                            </div>
                            <Link to="/single-post">
                              <h5 className="mb-1 text-md leading-normal capitalize font-medium text-gray-900 dark:text-white hover:text-[#062db9]">
                                the crispy tomato panne in Fastfood chicken
                                pasta
                              </h5>
                            </Link>
                            <div className="block gap-4 text-[11px] text-gray-500 dark:text-gray-400 uppercase">
                              <span className="me-2 lg:me-1"> John Doe</span>
                              <span>7 Months Ago</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {tab === "bar" && (
                  <div>
                    <div className="grid grid-cols-3 gap-6">
                      <div className="col-span-3 lg:col-span-2">
                        <div>
                          <Link to="/single-post">
                            <img
                              className="w-full h-auto max-w-full rounded-2xl"
                              src={editor}
                              alt="post"
                            />
                          </Link>
                          <div className="pt-4">
                            <div className="capitalize text-sm text-[#062db9] font-medium dark:text-[#478cff]">
                              Tours & Travellings
                            </div>
                            <Link to="/single-post">
                              <h5 className="mb-1 text-xl leading-normal capitalize font-medium text-gray-900 dark:text-white hover:text-[#062db9] dark:hover:text-[#478cff]">
                                Extraordinary Snoqualmie Falls Seattle Tour
                                Travelling selection of world-class
                                accommodations
                              </h5>
                            </Link>
                            <p className="mb-1 text-sm text-gray-500 sm:text-base dark:text-gray-300">
                              Indulge in luxury and comfort with our handpicked
                              Tours & Travelling selection of world-class
                              accommodations.
                            </p>
                            <div className="mt-2 block gap-4 text-[12px] text-gray-600 dark:text-gray-400 uppercase">
                              <span className="me-2 lg:me-1"> John Doe</span>
                              <span>7 Months Ago</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-span-3 lg:col-span-1">
                        <div>
                          <Link to="/single-post">
                            <img
                              className="w-full h-auto max-w-full rounded-2xl"
                              src={layout9}
                              alt="post"
                            />
                          </Link>
                          <div className="pt-3">
                            <div className="capitalize text-sm text-[#062db9] font-medium dark:text-[#478cff]">
                              Lifestyle & Fashion
                            </div>
                            <Link to="/single-post">
                              <h5 className="mb-1 text-md leading-normal capitalize font-medium text-gray-900 dark:text-white hover:text-[#062db9]">
                                the power of big data in the Fashion decision
                                making
                              </h5>
                            </Link>
                            <div className="block gap-4 text-[11px] text-gray-500 dark:text-gray-400 uppercase">
                              <span className="me-2 lg:me-1"> John Doe</span>
                              <span>7 Months Ago</span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-6">
                          <Link to="/single-post">
                            <img
                              className="w-full h-auto max-w-full rounded-2xl"
                              src={layout8}
                              alt="post"
                            />
                          </Link>
                          <div className="pt-3">
                            <div className="capitalize text-sm text-[#062db9] font-medium dark:text-[#478cff]">
                              Crispy Food
                            </div>
                            <Link to="/single-post">
                              <h5 className="mb-1 text-md leading-normal capitalize font-medium text-gray-900 dark:text-white hover:text-[#062db9]">
                                the crispy tomato panne in Fastfood chicken
                                pasta
                              </h5>
                            </Link>
                            <div className="block gap-4 text-[11px] text-gray-500 dark:text-gray-400 uppercase">
                              <span className="me-2 lg:me-1"> John Doe</span>
                              <span>7 Months Ago</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="col-span-4 lg:col-span-1" data-aos="fade-left">
                <div className="grid grid-cols-2 gap-0 sm:gap-6 md:gap-8 lg:gap-0">
                  <div className="col-span-2 p-5 mt-8 bg-white md:col-span-1 lg:col-span-2 dark:bg-gray-800/70 rounded-xl lg:mt-0">
                    <div className="mb-4">
                      <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                        Our Categories
                      </h5>
                    </div>
                    {categories.map(item => (
                      <div
                        className="bg-cover bg-center text-white p-4 rounded-lg mb-2 hover:text-[#062db9] dark:bg-none dark:bg-gray-800 dark:text-slate-400 dark:font-semibold dark:hover:bg-[#478cff] dark:hover:text-white"
                        key={item.id}
                        style={{ backgroundImage: `url(${item.pic})` }}
                      >
                        <Link
                          to="/left-sidebar"
                          className="flex justify-between font-semibold text-gray-100 hover:text-[#062db9] dark:hover:text-gray-200"
                        >
                          <span>{item.name}</span>{" "}
                          <span>
                            <i className="ri-arrow-right-line"></i>
                          </span>
                        </Link>
                      </div>
                    ))}
                  </div>

                  <div className="col-span-2 p-5 mt-8 bg-white md:col-span-1 lg:col-span-2 dark:bg-gray-800/70 rounded-xl">
                    <div className="w-full max-w-md">
                      <div className="flex items-center justify-between mb-4">
                        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                          Lifestyle & Fashion
                        </h5>
                        <Link
                          to="#"
                          className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                        >
                          View all
                        </Link>
                      </div>
                      <div className="flow-root">
                        <ul className="">
                          {lifestyle.map(item => (
                            <li className="py-1 sm:py-2" key={item.id}>
                              <div className="flex items-center">
                                <div className="flex-shrink-0">
                                  <img
                                    className="rounded-full w-14 h-14"
                                    src={item.pic}
                                    alt="Neil "
                                  />
                                </div>
                                <div className="flex-1 min-w-0 ms-4">
                                  <h6 className="text-sm font-medium text-gray-900 dark:text-white hover:text-[#062db9] dark:hover:text-[#478cff]">
                                    <Link to="/single-post">{item.desc}</Link>
                                  </h6>
                                  <div className="block gap-4 text-[11px] text-gray-500 dark:text-gray-400 uppercase">
                                    <span className="me-2 lg:me-1">
                                      {" "}
                                      John Doe
                                    </span>
                                    <span>7 Months Ago</span>
                                  </div>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
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

export default Section3
