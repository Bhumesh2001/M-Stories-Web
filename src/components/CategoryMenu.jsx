import React, { useEffect, useState, useRef } from "react"
import { Link } from "gatsby"
import { callApi } from "../services/apiHandler"

const CategoryMenu = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const scrollRef = useRef(null)

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await callApi("/categories")
        setCategories(data.data.categories || [])
      } catch (error) {
        console.error("Error fetching categories:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchCategories()
  }, [])

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' })
    }
  }

  if (loading) {
    return (
      <div className="sticky top-0 z-40 bg-white dark:bg-gray-900 py-3 border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className="relative flex items-center">
            <button className="absolute left-0 z-10 bg-white dark:bg-gray-700 shadow-md rounded-full p-2 opacity-50 cursor-not-allowed">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="flex overflow-x-auto scrollbar-hide gap-6 py-1 mx-12">
              {[...Array(12)].map((_, index) => (
                <div
                  key={index}
                  className="h-8 w-20 bg-gray-200 dark:bg-gray-600 rounded-full animate-pulse whitespace-nowrap"
                ></div>
              ))}
            </div>
            <button className="absolute right-0 z-10 bg-white dark:bg-gray-700 shadow-md rounded-full p-2 opacity-50 cursor-not-allowed">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="sticky top-0 z-40 bg-[#f5f5f5] dark:bg-gray-900 py-3 border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4">
        <div className="relative flex items-center">
          <button
            onClick={scrollLeft}
            className="absolute left-0 z-10 bg-white dark:bg-gray-700 shadow-md rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-600 transition"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 py-1 mx-12"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            {categories.map((category) => (
              <Link
                key={category._id}
                to={`/blog-tag?id=${category._id}&model=category`}
                className="text-gray-800 dark:text-gray-200 hover:text-[#E40666] dark:hover:text-[#E40666] font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-105 px-3 py-1 rounded-full bg-white dark:bg-gray-700 shadow-sm hover:shadow-md whitespace-nowrap"
              >
                {category.name}
              </Link>
            ))}
          </div>

          <button
            onClick={scrollRight}
            className="absolute right-0 z-10 bg-white dark:bg-gray-700 shadow-md rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-600 transition"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default CategoryMenu