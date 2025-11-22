import { Link } from "gatsby"
import React, { useEffect, useState } from "react"
import { callApi } from '../../../services/apiHandler';
import { HandPickedSkeleton, LatestNewsSkeleton } from '../../Loader';

const Section3 = () => {
  const [stories, setStories] = useState([])
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)

  // Helper function
  const isHTML = (str) => /<\/?[a-z][\s\S]*>/i.test(str);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch News & Stories
        const storyData = await callApi("/story")
        const newsData = await callApi("/news")

        setStories(storyData.data.stories || [])
        setNews(newsData.data.newsList || [])

        setLoading(false)
      } catch (err) {
        console.error("Error fetching data:", err)
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
          <div className="col-span-12 lg:col-span-8 rounded-xl" data-aos="fade-up">
            <h3 className="mb-4 text-2xl font-bold tracking-normal capitalize dark:text-white">
              Hand-picked Stories
            </h3>

            {loading ? (
              <div className="grid grid-cols-4 gap-6">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="col-span-4 sm:col-span-2">
                    <HandPickedSkeleton />
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-4 gap-6">
                {stories.slice(0, 4).map((story) => (
                  <div
                    key={story._id}
                    className="col-span-4 sm:col-span-2" // har ek 2 column lega (2 side-by-side)
                  >
                    <div>
                      <Link to={`/single-post?id=${story._id}&model=story`} className="relative block">
                        <img
                          className="w-full h-56 rounded-2xl object-cover" // sabka ek hi height
                          src={story.images?.[0]?.url || "https://via.placeholder.com/400x250"}
                          alt={story.title}
                        />
                        <div className="absolute px-4 text-md bottom-5">
                          <span className="text-white text-xs uppercase bg-[#FF0000] px-2.5 py-1 rounded-full">
                            {story.category?.name || "General"}
                          </span>
                        </div>
                      </Link>

                      <div className="pt-3">
                        <Link to={`/single-post?id=${story._id}&model=story`}>
                          <h5 className="mb-1 text-md leading-normal capitalize font-medium text-gray-900 dark:text-white hover:text-[#E32C26]">
                            {story.title}
                          </h5>
                        </Link>

                        <div className="block text-[11px] text-gray-500 dark:text-gray-400 uppercase">
                          <span className="me-2">{story.author || "Unknown"}</span>
                          <span>{new Date(story.createdAt).toDateString()}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Latest News & Stories */}
          <div className="col-span-12 lg:col-span-4" data-aos="fade-up">
            <h3 className="mb-4 text-2xl font-bold tracking-normal capitalize dark:text-white">
              Latest News & Stories
            </h3>

            <div className="w-full bg-[#f5f5f5] dark:bg-gray-800/70 p-5 rounded-xl">
              <div className="flow-root">
                {loading ? (
                  <ul>
                    {[1, 2, 3, 4, 5].map(i => (
                      <li key={i} className="py-2">
                        <LatestNewsSkeleton />
                      </li>
                    ))}
                  </ul>
                ) : (
                  <ul>
                    {news.map((item) => (
                      <li key={item._id} className="py-2">
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <img
                              className="rounded-full w-14 h-14 object-cover"
                              src={item.images?.[0]?.url || "https://via.placeholder.com/100"}
                              alt={item.title}
                            />
                          </div>
                          <div className="flex-1 min-w-0 ms-4">
                            <h6 className="text-sm font-medium text-gray-900 dark:text-white hover:text-[#E32C26]">
                              <Link to={`/single-post?id=${item._id}&model=news`}>{item.title}</Link>
                            </h6>
                            <div className="block text-[11px] text-gray-500 dark:text-gray-400 uppercase">
                              <span className="me-2">{item.reporter || "Unknown"}</span>
                              <span>{new Date(item.createdAt).toDateString()}</span>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Section3
