import { Link } from "gatsby"
import React, { useEffect, useState } from "react"
import { callApi } from "../../../services/apiHandler"
import AOS from "aos"
import "aos/dist/aos.css"
import { CategorySkeleton } from "../../Loader"

const Section6 = ({ categoryName = "Technology" }) => {
  const [category, setCategory] = useState(null)
  const [loading, setLoading] = useState(true)

  // Fetch Latest Category
  useEffect(() => {
    const loadCategory = async () => {
      try {
        const res = await callApi("/categories")
        const list = res?.data?.categories || []

        // Use the first category (assuming sorted)
        if (list.length > 0) {
          setCategory(list[0])
        }
      } catch (err) {
        console.error("Category fetch failed:", err)
      } finally {
        setLoading(false)
      }
    }

    loadCategory()
  }, [])

  // AOS initialization
  useEffect(() => {
    AOS.init({ duration: 600 })
  }, [])

  if (loading) return <CategorySkeleton />

  if (!category) {
    return (
      <section className="mt-10 text-center">
        <p className="text-red-500">{categoryName} category not found.</p>
      </section>
    )
  }

  const cover = category.images?.[0]?.url || "/default-category.jpg"

  return (
    <section className="mt-10" data-aos="zoom-in">
      <div className="container px-4 mx-auto">
        <figure className="relative rounded-2xl overflow-hidden cursor-pointer">

          <div
            className="px-4 py-10 sm:px-8 sm:py-16 bg-cover bg-center rounded-2xl transition"
            style={{ backgroundImage: `url(${cover})` }}
          >
            <figcaption className="text-white">
              <p className="text-sm uppercase">{category.name}</p>

              <div
                className="max-w-sm my-3 text-xl font-medium leading-normal capitalize"
                dangerouslySetInnerHTML={{
                  __html: category.description || "",
                }}
              />

              <Link
                to={`/blog-tag?id=${category._id}&model=category`}
                className="py-2.5 px-5 text-sm font-medium bg-white text-gray-800 rounded-full border hover:bg-gray-100 transition"
              >
                See More Info
              </Link>

            </figcaption>
          </div>

        </figure>
      </div>
    </section>
  )
}

export default Section6
