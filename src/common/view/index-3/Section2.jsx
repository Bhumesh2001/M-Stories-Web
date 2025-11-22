import { Link } from "gatsby"
import React, { useEffect, useState } from "react"
import { callApi } from "../../../services/apiHandler"
import { NewsSkeleton } from '../../Loader';

const Section2 = () => {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await callApi("/news")
        if (res.success && res.data.newsList.length > 0) {
          setNews(res.data.newsList.slice(0, 6))
        }
      } catch (error) {
        console.error("Error fetching news:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchNews()
  }, [])

  return (
    <React.Fragment>
      <section className="mt-10" data-aos="fade-up">
        <div className="container px-4 mx-auto">
          {loading ? (
            <NewsSkeleton />
          ) : (
            <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 lg:grid-cols-3 lg:gap-4">
              {news.map((item) => (
                <div
                  key={item._id}
                  className="col-span-3 sm:col-span-2 lg:col-span-1 bg-[#f5f5f5] p-2 sm:p-4 rounded-2xl dark:bg-gray-800/70"
                >
                  <div className="flex items-center">
                    {/* Left Content */}
                    <div className="flex-1 min-w-0 ms-4">
                      {/* Category Tag */}
                      <span className="text-gray-700 text-xs uppercase border dark:border-gray-700 pt-[6px] px-2.5 py-1 rounded-full dark:bg-gray-800 dark:text-gray-300">
                        {item.category?.name || "General"}
                      </span>

                      {/* Title */}
                      <h6 className="mt-2 text-sm font-medium text-gray-900 dark:text-white hover:text-[#5719DB] dark:hover:text-[#7b51ff]">
                        <Link to={`/single-post?id=${item._id}&model=news`}>{item.title}</Link>
                      </h6>

                      {/* Reporter + Date */}
                      <div className="block gap-4 text-[11px] text-gray-500 dark:text-gray-400 uppercase">
                        <span className="me-2 lg:me-1">{item.reporter}</span>
                        <span>{new Date(item.createdAt).toDateString()}</span>
                      </div>
                    </div>

                    {/* Right Thumbnail */}
                    <div className="flex-shrink-0">
                      <img
                        className="w-32 h-28 rounded-2xl object-cover"
                        src={item.images?.[0]?.url || "/default-news.jpg"}
                        alt={item.title}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </React.Fragment>
  )
}

export default Section2
