import React, { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation } from "swiper/modules"
import { callApi } from "../../../services/apiHandler"
import { BlogSkeleton } from "../../Loader"

const Section4 = () => {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let isMounted = true

    const loadBlogs = async () => {
      try {
        const res = await callApi("/blogs")
        if (isMounted && res.success) {
          setBlogs(res.data.blogs || [])
        }
      } catch (err) {
        console.error("Error fetching blogs:", err)
      } finally {
        if (isMounted) setLoading(false)
      }
    }

    loadBlogs()
    return () => {
      isMounted = false
    }
  }, [])

  if (loading) {
    return (
      <div className="mt-10 container px-4 mx-auto">
        <div className="p-5 overflow-hidden rounded-xl bg-[#fce9e8] dark:bg-gray-800/70">
          <h3 className="mb-4 text-xl font-bold uppercase dark:text-white">
            Trending Now
          </h3>
          <BlogSkeleton />
        </div>
      </div>
    )
  }

  return (
    <div className="mt-10">
      <div className="container px-4 mx-auto">
        <div className="p-5 overflow-hidden rounded-xl bg-[#fce9e8] dark:bg-gray-800/70">
          <h3 className="mb-4 text-xl font-bold uppercase dark:text-white">
            Trending Now
          </h3>

          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
              1240: { slidesPerView: 5 },
            }}
            loop
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            modules={[Autoplay, Navigation]}
            className="relative"
            dir="ltr"
          >
            {blogs.map((blog, index) => (
              <SwiperSlide key={blog._id}>
                <div className="flex items-center md:flex-row md:max-w-xl md:items-start">
                  <span className="text-[#E32C26] text-3xl font-semibold">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="flex flex-col p-4 sm:py-0">
                    <span className="text-[12px] text-[#E32C26] uppercase">
                      {blog.category?.name || "General"}
                    </span>

                    <h3 className="text-sm font-medium dark:text-white hover:text-[#E32C26] dark:hover:text-[#E32C26]">
                      {blog.title}
                    </h3>

                    <div className="text-[11px] text-gray-500 dark:text-gray-400 uppercase">
                      <span className="me-2">{blog.reporter || "Unknown"}</span>
                      <span>{new Date(blog.createdAt).toDateString()}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Section4
