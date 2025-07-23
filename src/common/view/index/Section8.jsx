// import { Link } from "gatsby"
// import React from "react"
// import layout25 from "../../../assets/images/layout-2/25.jpg"
// import { latestpost, listdata } from "../../data"

// const Section8 = () => {
//   return (
//     <React.Fragment>
//       <section className="mt-8">
//         <div className="container px-4 mx-auto">
//           <div className="grid grid-cols-3 gap-8">
//             <div className="col-span-3 md:col-span-2" data-aos="fade-up">
//               <div className="p-5 bg-white rounded-lg dark:bg-gray-800/70">
//                 <div className="mb-4">
//                   <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
//                     Latest Post
//                   </h5>
//                 </div>

//                 {latestpost &&
//                   latestpost.map(item => (
//                     <div
//                       className="flex flex-col mb-5 lg:flex-row sm:mb-3 md:mb-6"
//                       key={item.id}
//                     >
//                       <Link to="/single-post">
//                         <img
//                           className="h-auto sm:max-w-xs lg:w-64 rounded-2xl"
//                           src={item.pic}
//                           alt="post "
//                         />
//                       </Link>
//                       <div className="pt-2 lg:ms-4">
//                         <div className="capitalize text-sm text-[#062db9] font-medium dark:text-[#478cff]">
//                           {item.category}
//                         </div>
//                         <Link to="/single-post">
//                           <h5 className="mb-1 text-xl leading-normal capitalize font-medium text-gray-900 dark:text-white hover:text-[#062db9] dark:hover:text-[#478cff]">
//                             {item.desc}
//                           </h5>
//                         </Link>
//                         <p className="mb-2 text-sm text-gray-500 sm:text-base dark:text-gray-300">
//                           Venus has a runaway greenhouse effect. I kind of want
//                           to know The what happened there because Technology And
//                           Runway.
//                         </p>
//                         <div className="block gap-4 text-[12px] text-gray-500 dark:text-gray-400 uppercase">
//                           <span className="me-2 lg:me-1"> John Doe</span>
//                           <span>7 Months Ago</span>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//               </div>
//             </div>

//             {/* <div
//               className="col-span-3 sm:col-span-2 md:col-span-1"
//               data-aos="fade-left"
//             >
//               <figure className="relative cursor-pointer">
//                 <Link to="/single-post">
//                   <img
//                     className="w-full h-auto max-w-full transition duration-300 ease-in-out rounded-2xl hover:brightness-50"
//                     src={layout25}
//                     alt="blog"
//                   />
//                 </Link>
//                 <figcaption className="absolute px-4 text-center text-md bottom-6">
//                   <div className="max-w-sm text-lg font-medium leading-normal text-white capitalize">
//                     National Geographic Reveals ‘Best Of The World 2022’ Travel
//                     List{" "}
//                   </div>
//                   <div className="block gap-4 text-[14px] text-gray-200 uppercase">
//                     <span className="me-2 lg:me-1"> John Doe</span>
//                     <span>7 Months Ago</span>
//                   </div>
//                 </figcaption>
//               </figure>

//               <ul className="mt-8 md:mt-8">
//                 {listdata &&
//                   listdata.map(item => (
//                     <li
//                       className={
//                         item.top === true
//                           ? "py-1 sm:pb-2 sm:pt-0"
//                           : "py-1 sm:py-2"
//                       }
//                       key={item.id}
//                     >
//                       <div className="flex items-center md:block lg:flex">
//                         <div className="flex-shrink-0">
//                           <img
//                             className="rounded-2xl"
//                             src={item.pic}
//                             alt="Neil"
//                           />
//                         </div>
//                         <div className="flex-1 min-w-0 mt-2 ms-4 md:ms-0 lg:ms-4 lg:mt-0">
//                           <Link
//                             to="/single-post"
//                             className="text-sm font-medium text-gray-900 dark:text-white hover:text-[#062db9] dark:hover:text-[#478cff]"
//                           >
//                             {item.desc}
//                           </Link>
//                           <div className="block gap-4 text-[11px] text-gray-500 dark:text-gray-400 uppercase">
//                             <span className="me-2 lg:me-1"> John Doe</span>
//                             <span>7 Months Ago</span>
//                           </div>
//                         </div>
//                       </div>
//                     </li>
//                   ))}
//               </ul>
//             </div> */}

//             <div className="col-span-3 md:col-span-2" data-aos="flip-right">
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 {/* Social Media Join Section */}
//                 <div className="col-span-1 sm:col-span-2" data-aos="fade-left">
//                   <div className="p-4 bg-white dark:bg-gray-800/70 rounded-xl">
//                     <div className="mb-3">
//                       <h5 className="text-lg font-semibold text-gray-900 dark:text-white">
//                         Join With Us
//                       </h5>
//                     </div>
//                     <ul>
//                       {[
//                         { name: "Facebook", icon: "ri-facebook-circle-fill", color: "bg-[#062DB9]", count: "42.2k" },
//                         { name: "Twitter", icon: "ri-twitter-x-line", color: "bg-[#20A1EB]", count: "10.1m" },
//                         { name: "Twitch", icon: "ri-twitch-line", color: "bg-[#830899]", count: "22.9k" },
//                         {
//                           name: "Instagram",
//                           icon: "ri-instagram-line",
//                           color:
//                             "bg-gradient-to-r from-[#863FA6] via-[#E12C61] to-[#F46F46] hover:from-[#683181] hover:via-[#c91d50] hover:to-[#f25626]",
//                           count: "50.2k",
//                         },
//                       ].map(({ name, icon, color, count }) => (
//                         <li key={name}>
//                           <Link to="#" target="_blank">
//                             <div className={`${color} text-white rounded-full py-2 px-5 mb-2 hover:opacity-90 text-sm`}>
//                               <div className="flex items-center justify-between">
//                                 <div className="flex items-center gap-2">
//                                   <i className={`text-base ${icon}`}></i>
//                                   <span>{name}</span>
//                                 </div>
//                                 <div className="text-xs">{count}</div>
//                               </div>
//                             </div>
//                           </Link>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>

//                 {/* Newsletter Section */}
//                 <div className="col-span-1 sm:col-span-2">
//                   <div className="border-b dark:border-gray-700">
//                     <h3 className="uppercase font-semibold tracking-wide border-b-2 inline-block border-[#ff3750] pb-2 text-sm dark:text-white">
//                       Newsletter
//                     </h3>
//                   </div>
//                   <div className="mt-3">
//                     <input
//                       type="email"
//                       className="form-input px-3 py-2 rounded-md w-full border text-sm dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
//                       placeholder="Enter email"
//                     />
//                     <button className="uppercase tracking-wide rounded-md px-4 py-2 bg-[#ff3750] hover:bg-gray-700 mt-4 w-full text-sm text-white">
//                       Subscribe
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </React.Fragment>
//   )
// }

// export default Section8

import React from "react";
import { Link } from "gatsby";
import { latestpost } from "../../data";

const Section8 = () => {
  return (
    <section className="mt-8">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Latest Post Section */}
          <div className="md:col-span-2" data-aos="fade-up">
            <div className="p-5 bg-white rounded-lg dark:bg-gray-800/70">
              <div className="mb-4">
                <h5 className="text-xl font-bold text-gray-900 dark:text-white">
                  Latest Post
                </h5>
              </div>
              {latestpost?.map(item => (
                <div
                  className="flex flex-col sm:flex-row gap-4 mb-6"
                  key={item.id}
                >
                  <Link to="/single-post" className="flex-shrink-0">
                    <img
                      className="w-full sm:w-48 md:w-56 lg:w-64 h-40 sm:h-32 md:h-36 lg:h-40 object-cover rounded-2xl"
                      src={item.pic}
                      alt="post"
                    />
                  </Link>
                  <div className="flex-1">
                    <div className="text-sm capitalize text-[#062db9] font-medium dark:text-[#478cff]">
                      {item.category}
                    </div>
                    <Link to="/single-post">
                      <h5 className="mb-1 text-base sm:text-lg leading-snug font-medium text-gray-900 dark:text-white hover:text-[#062db9] dark:hover:text-[#478cff]">
                        {item.desc}
                      </h5>
                    </Link>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-300 line-clamp-3">
                      Venus has a runaway greenhouse effect. I kind of want to
                      know what happened there because Technology and Runway.
                    </p>
                    <div className="text-xs text-gray-500 dark:text-gray-400 uppercase">
                      <span className="me-2">John Doe</span>
                      <span>7 Months Ago</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar Section */}
          <div className="md:col-span-1 h-full space-y-8" data-aos="flip-right">
            {/* Join With Us */}
            <div className="p-6 bg-white dark:bg-gray-800/70 rounded-xl shadow">
              <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Join With Us
              </h5>
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
                        className={`${color} text-white rounded-full py-3 px-6 mb-3 hover:opacity-90 text-base transition-all duration-200`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <i className={`text-lg ${icon}`}></i>
                            <span className="font-medium">{name}</span>
                          </div>
                          <div className="text-sm">{count}</div>
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="p-5 text-center bg-white shadow dark:bg-gray-800/70 hover:shadow-lg rounded-xl">
              <div className="relative inline-block -top-5 mt-5">
                <div className="bg-[#E40666] dark:bg-gray-700 w-20 h-20 rounded-full flex items-center justify-center text-4xl text-white">
                  <i className="ri-mail-line"></i>
                </div>
              </div>
              <div className="mb-4">
                <h5 className="text-lg font-bold leading-none capitalize dark:text-white">
                  Subscribe To Newsletter
                </h5>
                <p className="my-4 text-sm text-gray-500">
                  Get the latest news and updates from blogpoint
                </p>
              </div>
              <form className="max-w-sm mx-auto">
                <input
                  type="email"
                  id="email"
                  className="block w-full px-4 py-2 mb-4 text-sm text-gray-900 border border-gray-300 rounded bg-gray-50 dark:bg-gray-900 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white"
                  placeholder="info@example.com"
                  required
                />
                <button
                  type="submit"
                  className="text-white bg-[#E40666] hover:bg-[#003d3c] font-medium rounded w-full px-0 py-2 text-center dark:bg-[#E40666] dark:hover:bg-gray-700"
                >
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section8;
