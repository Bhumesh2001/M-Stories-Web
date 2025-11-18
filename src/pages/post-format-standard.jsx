import React, { useEffect, useState } from "react"
import Layout5 from "../common/layout/Layout5"
import BreadCrumb from "../common/BreadCrumb"
import Seo from "../components/seo"
import { Link } from "gatsby"
import Social2 from "../common/Social2"
import PostList from "../common/PostList"
import MostPopular from "../common/MostPopular"
import img1 from "../assets/images/1.jpg"
import img2 from "../assets/images/3.jpg"
import img3 from "../assets/images/52.jpg"
import img4 from "../assets/images/22.jpg"
import img5 from "../assets/images/4.jpg"
import img6 from "../assets/images/6.jpg"
import { callApi } from "../services/apiHandler";

const PostFormatStandard = () => {
  const swiperData = [
    { id: 1, margin: false, image: img1 },
    { id: 2, margin: true, image: img2 },
    { id: 3, margin: true, image: img3 },
    { id: 4, margin: false, image: img4 },
    { id: 5, margin: true, image: img5 },
    { id: 6, margin: true, image: img6 },
  ]

  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)

  // pagination state
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  const fetchCategories = async (pageNumber = 1) => {
    setLoading(true)
    try {
      const data = await callApi(`/categories?page=${pageNumber}&limit=10`) // 10 per page
      setCategories(data.data.categories || [])
      setTotalPages(data.data.pagination?.totalPages || 1)
      setPage(data.data.pagination?.page || 1)
    } catch (error) {
      console.error("Error fetching categories:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCategories(page)
  }, [page])

  return (
    <React.Fragment>
      <Layout5>
        {/* breadcrumb */}
        <BreadCrumb title="Categories" titleType="Page" />

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Categories - responsive grid */}
            <div className="col-span-2">
              {loading ? (
                <p className="text-gray-500">Loading categories...</p>
              ) : (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {categories.map((cat) => (
                      <Link
                        key={cat._id}
                        to={`/blog-tag?id=${cat._id}&model=category`}
                        className="relative group rounded-lg overflow-hidden block"
                      >
                        {/* Category Image */}
                        <img
                          src={cat.images?.[0]?.url || "/default-category.jpg"}
                          alt={cat.name}
                          className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-end p-6">
                          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#ff3750] transition">
                            {cat.name}
                          </h3>
                          <p
                            className="text-sm text-gray-300"
                            dangerouslySetInnerHTML={{
                              __html:
                                cat.description?.length > 120
                                  ? cat.description.substring(0, 120) + "..."
                                  : cat.description,
                            }}
                          ></p>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Pagination Controls */}
                  {totalPages > 1 && (
                    <div className="flex justify-center items-center mt-6 gap-2">
                      <button
                        disabled={page === 1}
                        onClick={() => setPage(prev => prev - 1)}
                        className="px-3 py-2 rounded-lg bg-gray-200 dark:bg-gray-600 disabled:opacity-50"
                      >
                        Prev
                      </button>
                      <span className="text-sm dark:text-gray-300">
                        Page {page} of {totalPages}
                      </span>
                      <button
                        disabled={page === totalPages}
                        onClick={() => setPage(prev => prev + 1)}
                        className="px-3 py-2 rounded-lg bg-gray-200 dark:bg-gray-600 disabled:opacity-50"
                      >
                        Next
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Sidebar */}
            <div className="col-span-1 overflow-hidden">
              <Social2 />
              <PostList />
              <div className="main-title relative">
                <h2 className="text-2xl font-semibold mt-6 mb-6 lg:ps-4 dark:text-white">
                  Most Popular
                </h2>
              </div>
              <MostPopular swiperData={swiperData} />
            </div>
          </div>
        </div>
      </Layout5>
    </React.Fragment>
  )
}

export const Head = () => <Seo title="Categories" />

export default PostFormatStandard
