import { Link } from "gatsby"
import React, { useEffect, useState } from "react"
import { callApi } from "../../../services/apiHandler"
import { NewsSkeleton } from "../../Loader"

const Section2 = () => {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const res = await callApi("/news")
        const list = res?.data?.newsList || []

        setNews(list.slice(0, 6))
      } catch (err) {
        console.error("News fetch failed:", err)
      } finally {
        setLoading(false)
      }
    }

    load()
  }, [])

  if (loading) {
    return (
      <section className="mt-10">
        <div className="container px-4 mx-auto">
          <NewsSkeleton />
        </div>
      </section>
    )
  }

  return (
    <section className="mt-10" data-aos="fade-up">
      <div className="container px-4 mx-auto">

        <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 lg:grid-cols-3 lg:gap-4">
          {news.map((item) => {
            const cover = item.images?.[0]?.url || "/default-news.jpg"

            return (
              <div
                key={item._id}
                className="col-span-3 sm:col-span-2 lg:col-span-1 bg-[#f5f5f5] p-3 sm:p-4 rounded-2xl dark:bg-gray-800/70"
              >
                <div className="flex items-center gap-3">

                  {/* Left text block */}
                  <div className="flex-1 min-w-0">

                    <span className="text-gray-700 text-xs uppercase border dark:border-gray-700 px-2.5 py-1 rounded-full dark:bg-gray-800 dark:text-gray-300">
                      {item.category?.name || "General"}
                    </span>

                    <h6 className="mt-2 text-sm font-medium text-gray-900 dark:text-white hover:text-[#5719DB] dark:hover:text-[#7b51ff] leading-snug">
                      <Link to={`/single-post?id=${item._id}&model=news`}>{item.title}</Link>
                    </h6>

                    <div className="text-[11px] text-gray-500 dark:text-gray-400 uppercase mt-1">
                      <span className="me-2">{item.reporter || "Unknown"}</span>
                      <span>{new Date(item.createdAt).toDateString()}</span>
                    </div>

                  </div>

                  {/* Right image */}
                  <img
                    className="w-32 h-28 rounded-2xl object-cover"
                    src={cover}
                    alt={item.title}
                  />
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
};

export default Section2
