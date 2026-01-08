import React from "react"
import BlogPosts from "../common/BlogPosts"
import Seo from "../components/seo"
import Social from "../common/Social"
import MostPopular from "../common/MostPopular"
import PostList from "../common/PostList"
import BreadCrumb from "../common/BreadCrumb"
import Layout5 from "../common/layout/Layout5"
import img1 from "../assets/images/1.jpg"
import img2 from "../assets/images/3.jpg"
import img3 from "../assets/images/52.jpg"
import img4 from "../assets/images/22.jpg"
import img5 from "../assets/images/4.jpg"
import img6 from "../assets/images/6.jpg"
import postData from "../common/data/postData"

const LeftSidebar = () => {
  const swiperData = [
    { id: 1, margin: false, image: img1 },
    { id: 2, margin: true, image: img2 },
    { id: 3, margin: true, image: img3 },
    { id: 4, margin: false, image: img4 },
    { id: 5, margin: true, image: img5 },
    { id: 6, margin: true, image: img6 },
  ]

  return (
    <React.Fragment>
      <Layout5>
        {/* Breadcrumb */}
        <BreadCrumb title="Left Sidebar" titleType="blog" />

        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xs:gap-0 sm:gap-8">
            <div className="col-span-1 overflow-hidden">
              <form className="flex gap-1">
                <input
                  type="search"
                  className="w-full px-4 py-3 border rounded-lg form-input dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="search..."
                />
                <button
                  className="btn rounded-lg px-4 py-1 relative bg-black hover:bg-[#ff3750] text-xl dark:bg-[#ff3750] dark:hover:bg-gray-700"
                  aria-label="Search"
                >
                  <i className="ri-search-line"></i>
                </button>
              </form>

              {/* social & newsletter */}
              <Social />

              {/* <!-- Most popular --> */}
              <div className="relative main-title">
                <h2 className="mt-6 mb-6 text-2xl font-semibold ps-4 dark:text-white">
                  Most Popular
                </h2>
              </div>
              <MostPopular swiperData={swiperData} />

              {/* <!-- post list--> */}
              <PostList />
            </div>

            <div className="col-span-1 md:col-span-2">
              <BlogPosts postData={postData} />
            </div>
          </div>
        </div>
      </Layout5>
    </React.Fragment>
  )
}

export const Head = () => <Seo title="Left Sidebar" />

export default LeftSidebar
