// import { Link } from "gatsby"
// import React from "react"
// import layout17 from "../../../assets/images/layout-2/17.jpg"

// const Section6 = () => {
//   return (
//     <React.Fragment>
//       <section className="mt-8" data-aos="zoom-in">
//         <div className="container px-4 mx-auto">
//           <div className="">
//             <figure className="relative cursor-pointer">
//               <div>
//                 <div
//                   className="px-3 py-10 transition duration-300 ease-in-out bg-center bg-cover rounded-2xl sm:px-8 sm:py:16"
//                   style={{ backgroundImage: `url(${layout17})` }}
//                 >
//                   <figcaption className="flex items-center px-4 text-lg">
//                     <div>
//                       <div className="text-sm text-white uppercase">
//                         Technology
//                       </div>
//                       <div className="max-w-sm my-3 text-xl font-medium leading-normal text-white capitalize">
//                         vulputate Vivamus Tortor Enim, Semper Lotem imusdsf
//                         Semper Et
//                       </div>
//                       <Link
//                         to="/single-post"
//                         className="py-2.5 px-5 text-sm font-medium bg-white rounded-full border hover:bg-gray-100 hover:text-[#062db9]"
//                       >
//                         See More Info
//                       </Link>
//                     </div>
//                   </figcaption>
//                 </div>
//               </div>
//             </figure>
//           </div>
//         </div>
//       </section>
//     </React.Fragment>
//   )
// }

// export default Section6


import { Link } from "gatsby"
import React, { useEffect, useState } from "react"
import { callApi } from "../../../services/apiHandler"
import AOS from "aos";
import "aos/dist/aos.css";

const Section6 = ({ categoryName = "Technology" }) => {
  const [category, setCategory] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const data = await callApi("/categories")
        if (data.success && data.data.categories.length > 0) {
          // ✅ Latest category (assuming backend sends sorted by createdAt: -1)
          const latestCategory = data.data.categories[0]

          if (latestCategory) {
            setCategory(latestCategory)
          }
        }
      } catch (error) {
        console.error("Error fetching category:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchCategory()
  }, [categoryName])

  useEffect(() => {
    AOS.init({ duration: 600 });
  }, [category]);


  if (loading) {
    return (
      <section className="mt-8 text-center">
        <p className="text-gray-500">Loading {categoryName} category...</p>
      </section>
    )
  }

  if (!category) {
    return (
      <section className="mt-8 text-center">
        <p className="text-red-500">{categoryName} category not found.</p>
      </section>
    )
  }

  return (
    <section className="mt-8" data-aos="zoom-in">
      <div className="container px-4 mx-auto">
        <div>
          <figure className="relative cursor-pointer">
            <div>
              <div
                className="px-3 py-10 transition duration-300 ease-in-out bg-center bg-cover rounded-2xl sm:px-8 sm:py-16"
                style={{
                  backgroundImage: `url(${category.images?.[0]?.url || "/default-category.jpg"})`,
                }}
              >
                <figcaption className="flex items-center px-4 text-lg">
                  <div>
                    <div className="text-sm text-white uppercase">
                      {category.name}
                    </div>
                    <div
                      className="max-w-sm my-3 text-xl font-medium leading-normal text-white capitalize"
                      dangerouslySetInnerHTML={{ __html: category.description }}
                    ></div>

                    <Link
                      to={`/blog-tag?id=${category._id}&model=category`}
                      className="py-2.5 px-5 text-sm font-medium bg-white rounded-full border hover:bg-gray-100 hover:text-[#062db9] transition"
                    >
                      See More Info
                    </Link>
                  </div>
                </figcaption>
              </div>
            </div>
          </figure>
        </div>
      </div>
    </section>
  )
}

export default Section6
