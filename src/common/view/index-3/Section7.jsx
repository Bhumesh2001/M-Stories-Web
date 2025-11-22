import React, { useState, useEffect } from "react"
import { callApi } from "../../../services/apiHandler"
import { Link } from "gatsby"
import AOS from "aos"
import "aos/dist/aos.css"
import { TopNewsSkeleton } from "../../Loader"

const Section7 = () => {
  const [newsItems, setNewsItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  const isHTML = (text) => /<\/?[a-z][\s\S]*>/i.test(text)

  useEffect(() => {
    let active = true

    const loadNews = async () => {
      try {
        const res = await callApi("/news")

        if (active && res.success) {
          const list = res.data.newsList || []
          setNewsItems(list.slice(0, 3))
        }
      } catch (err) {
        if (active) setError(err.message)
      } finally {
        if (active) setIsLoading(false)
      }
    }

    loadNews()
    return () => {
      active = false
    }
  }, [])

  useEffect(() => {
    AOS.init({ duration: 600 })
  }, [newsItems])

  if (isLoading) {
    return (
      <div className="mt-10 container px-4 mx-auto">
        <h3 className="mb-4 text-2xl font-bold capitalize dark:text-white">
          Top Of The Week News & Stories
        </h3>
        <TopNewsSkeleton />
      </div>
    )
  }

  if (error) {
    return (
      <section className="mt-10">
        <div className="container px-4 mx-auto">
          <p className="text-center text-red-500">Error: {error}</p>
        </div>
      </section>
    )
  }

  return (
    <section className="mt-10" data-aos="fade-up">
      <div className="container px-4 mx-auto">
        <h3 className="mb-4 text-2xl font-bold capitalize dark:text-white">
          Top Of The Week News & Stories
        </h3>

        <div className="grid grid-cols-12 gap-2 sm:gap-4 md:gap-6">
          {newsItems.length === 0 && (
            <p className="col-span-12 text-center text-gray-500 dark:text-gray-400">
              No news articles found.
            </p>
          )}

          {newsItems.map((item) => (
            <div key={item._id} className="col-span-12 sm:col-span-6 md:col-span-4">
              <img
                src={
                  item.images?.[0]?.url ||
                  "https://placehold.co/600x400?text=No+Image"
                }
                alt={item.title}
                className="w-full h-64 rounded-2xl object-cover cursor-pointer transition duration-300 hover:brightness-50"
              />

              <div className="mt-3 flex justify-between text-[11px] text-gray-500 dark:text-gray-400 uppercase">
                <span className="text-white bg-red-600 px-2.5 py-1 rounded-full text-xs">
                  {item.category?.name || "Uncategorized"}
                </span>

                <div>
                  <span className="mr-1">by {item.reporter || "Unknown"}</span>
                  <span>{new Date(item.createdAt).toLocaleDateString()}</span>
                </div>
              </div>

              <h4 className="my-2 text-md font-medium text-gray-900 dark:text-white hover:text-[#E32C26]">
                <Link
                  to={`/single-post?id=${item._id}&model=news`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.title}
                </Link>
              </h4>

              <p className="mb-1 text-sm text-gray-500 dark:text-gray-300">
                {item.content &&
                  (isHTML(item.content) ? (
                    <span dangerouslySetInnerHTML={{ __html: item.content }} />
                  ) : (
                    item.content
                  ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Section7
