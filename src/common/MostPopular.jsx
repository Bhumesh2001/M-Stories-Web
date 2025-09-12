// import React from "react"
// import { Swiper, SwiperSlide } from "swiper/react"
// import { Grid, Navigation } from "swiper/modules"
// import { Link } from "gatsby"

// const MostPopular = ({ swiperData }) => {
//   return (
//     <React.Fragment>
//       {/* Swiper */}
//       <div className="relative top-[-2.25rem] ">
//         <div className="swiper-button-next swiper-button-nexto  text-sm  rtl:!left-8 rtl:!right-auto"></div>
//         <div className="swiper-button-prev swiper-button-prevo left-auto right-8"></div>
//       </div>
//       <Swiper
//         slidesPerView={1}
//         grid={{
//           rows: 3,
//           fill: "row",
//         }}
//         spaceBetween={10}
//         navigation={{
//           nextEl: ".swiper-button-nexto",
//           prevEl: ".swiper-button-prevo",
//         }}
//         modules={[Grid, Navigation]}
//         className="swiperpopular popular relative swiper-initialized swiper-horizontal swiper-grid swiper-grid-row swiper-backface-hidden"
//       >
//         {swiperData &&
//           swiperData.map(item => (
//             <SwiperSlide
//               style={{
//                 height: "calc(33.3333% + 0px)",
//                 width: "369px",
//                 marginTop: item.margin === true ? "0px" : "",
//               }}
//               key={item.id}
//             >
//               <div className="flex flex-co md:flex-row md:max-w-xl mb-5 sm:mb-3 md:mb-5">
//                 <Link to="/single-post">
//                   <img
//                     className="h-auto max-w-40 sm:w-20 lg:w-40 rounded-lg"
//                     src={item.image}
//                     alt="post "
//                   />
//                 </Link>
//                 <div className="flex flex-col p-4 sm:py-0 ">
//                   <div className="bg-green-400 text-white max-w-fit py-[2px] px-2 font-semibold text-xs capitalize sm:uppercase rounded leading-5 mb-2">
//                     neursto
//                   </div>
//                   <h3 className="mb-2 text-sm ">
//                     <Link
//                       to="/single-post"
//                       className="hover:text-[#ff3750] dark:text-white dark:hover:text-[#ff3750]"
//                     >
//                       Venenatis Sit Amet Malesuada Ut Malesuad
//                     </Link>
//                   </h3>
//                   <div className="block gap-4 text-xs lg:text-sm text-gray-500 dark:text-gray-400">
//                     <span className="me-2 lg:me-1">
//                       <i className="ri-user-fill"></i> Admin
//                     </span>{" "}
//                     <span>
//                       <i className="ri-calendar-fill"></i> Mar 18, 2024
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//       </Swiper>
//     </React.Fragment>
//   )
// }

// export default MostPopular

import React, { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Grid, Navigation } from "swiper/modules"
import { Link } from "gatsby"
import { callApi } from "../services/apiHandler";

const MostPopular = () => {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await callApi("/blogs") // <-- API endpoint
        setBlogs(data.data.blogs)
      } catch (error) {
        console.error("Error fetching blogs:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchBlogs()
  }, [])

  if (loading) {
    return <p className="text-gray-500">Loading blogs...</p>
  }

  return (
    <React.Fragment>
      {/* Navigation buttons */}
      <div className="relative top-[-2.25rem] ">
        <div className="swiper-button-next swiper-button-nexto text-sm rtl:!left-8 rtl:!right-auto"></div>
        <div className="swiper-button-prev swiper-button-prevo left-auto right-8"></div>
      </div>

      {/* Swiper */}
      <Swiper
        slidesPerView={1}
        grid={{
          rows: 3,
          fill: "row",
        }}
        spaceBetween={10}
        navigation={{
          nextEl: ".swiper-button-nexto",
          prevEl: ".swiper-button-prevo",
        }}
        modules={[Grid, Navigation]}
        className="swiperpopular popular relative"
      >
        {blogs.map((blog) => (
          <SwiperSlide
            style={{ height: "calc(33.3333% + 0px)", width: "369px" }}
            key={blog._id}
          >
            <div className="flex flex-col md:flex-row md:max-w-xl mb-5 sm:mb-3 md:mb-5">
              {/* Blog Image */}
              <Link to={`/single-post?id=${blog._id}&model=blog`}>
                <img
                  className="w-40 h-28 object-cover rounded-lg"
                  src={blog.images?.[0]?.url || "/default.jpg"}
                  alt={blog.title}
                />
              </Link>

              {/* Blog Content */}
              <div className="flex flex-col p-4 sm:py-0">
                {/* Category Badge */}
                <div className="bg-green-400 text-white max-w-fit py-[2px] px-2 font-semibold text-xs capitalize sm:uppercase rounded leading-5 mb-2">
                  {blog.category?.name || "Uncategorized"}
                </div>

                {/* Title */}
                <h3 className="mb-2 text-sm">
                  <Link
                    to={`/single-post?id=${blog._id}&model=blog`}
                    className="hover:text-[#ff3750] dark:text-white dark:hover:text-[#ff3750]"
                  >
                    {blog.title}
                  </Link>
                </h3>

                {/* Meta Info */}
                <div className="block gap-4 text-xs lg:text-sm text-gray-500 dark:text-gray-400">
                  <span className="me-2 lg:me-1">
                    <i className="ri-user-fill"></i> {blog.author}
                  </span>
                  <span>
                    <i className="ri-calendar-fill"></i>{" "}
                    {new Date(blog.createdAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </React.Fragment>
  )
}

export default MostPopular;
