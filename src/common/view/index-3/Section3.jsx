import { Link } from "gatsby"
import React, { useEffect, useState } from "react"
import { callApi } from "../../../services/apiHandler"
import { HandPickedSkeleton, LatestNewsSkeleton } from "../../Loader"

const Section3 = () => {
  const [stories, setStories] = useState([])
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [storyData, newsData] = await Promise.all([
          callApi("/story"),
          callApi("/news")
        ])

        setStories(storyData?.data?.stories || [])
        setNews(newsData?.data?.newsList || [])
      } catch (err) {
        console.error("Error fetching Section3 data:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <section className="mt-10">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-12 gap-4 lg:gap-8">

          {/* Hand-picked Stories */}
          <div className="col-span-12 lg:col-span-8" data-aos="fade-up">
            <h3 className="mb-4 text-2xl font-bold capitalize dark:text-white">
              Hand-picked Stories
            </h3>

            <div className="grid grid-cols-4 gap-6">

              {loading
                ? [...Array(4)].map((_, i) => (
                  <div key={i} className="col-span-4 sm:col-span-2">
                    <HandPickedSkeleton />
                  </div>
                ))
                : stories.slice(0, 4).map((story) => (
                  <div key={story._id} className="col-span-4 sm:col-span-2">
                    <Link
                      to={`/single-post?id=${story._id}&model=story`}
                      className="relative block"
                    >
                      <img
                        className="w-full h-56 rounded-2xl object-cover"
                        src={
                          story.images?.[0]?.url ||
                          "https://via.placeholder.com/400x250"
                        }
                        alt={story.title}
                      />

                      <div className="absolute px-4 bottom-5">
                        <span className="text-white text-xs uppercase bg-red-500 px-2.5 py-1 rounded-full">
                          {story.category?.name || "General"}
                        </span>
                      </div>
                    </Link>

                    <div className="pt-3">
                      <Link to={`/single-post?id=${story._id}&model=story`}>
                        <h5 className="mb-1 text-md font-medium text-gray-900 dark:text-white hover:text-red-500">
                          {story.title}
                        </h5>
                      </Link>

                      <div className="text-[11px] text-gray-500 dark:text-gray-400 uppercase">
                        <span className="me-2">
                          {story.author || "Unknown"}
                        </span>
                        <span>
                          {new Date(story.createdAt).toDateString()}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}

            </div>
          </div>

          {/* Latest News & Stories */}
          <div className="col-span-12 lg:col-span-4" data-aos="fade-up">
            <h3 className="mb-4 text-2xl font-bold capitalize dark:text-white">
              Latest News & Stories
            </h3>

            <div className="w-full bg-[#f5f5f5] dark:bg-gray-800/70 p-5 rounded-xl">
              <ul>
                {loading
                  ? [...Array(5)].map((_, i) => (
                    <li key={i} className="py-2">
                      <LatestNewsSkeleton />
                    </li>
                  ))
                  : news.map((item) => (
                    <li key={item._id} className="py-2">
                      <div className="flex items-center">
                        <img
                          className="rounded-full w-14 h-14 object-cover"
                          src={
                            item.images?.[0]?.url ||
                            "https://via.placeholder.com/100"
                          }
                          alt={item.title}
                        />

                        <div className="ms-4 min-w-0 flex-1">
                          <Link to={`/single-post?id=${item._id}&model=news`}>
                            <h6 className="text-sm font-medium text-gray-900 dark:text-white hover:text-red-500">
                              {item.title}
                            </h6>
                          </Link>

                          <div className="text-[11px] text-gray-500 dark:text-gray-400 uppercase">
                            <span className="me-2">
                              {item.reporter || "Unknown"}
                            </span>
                            <span>
                              {new Date(item.createdAt).toDateString()}
                            </span>
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
    </section>
  )
}

export default Section3
