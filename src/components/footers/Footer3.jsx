import { Link } from "gatsby"
import React, { useEffect, useState } from "react"
import { callApi } from '../../services/apiHandler';
import AOS from "aos";
import "aos/dist/aos.css";
import { PopularChoiceSkeleton } from '../../common/Loader';

const Footer3 = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    try {
      const fetchBlogs = async () => {
        try {
          const data = await callApi("/blogs")
          setBlogs(data.data.blogs.slice(0, 3))
        } catch (error) {
          console.error("Error fetching blogs:", error)
        }
      }
      fetchBlogs()
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  }, [])

  useEffect(() => {
    AOS.init({ duration: 600 });
  }, [blogs]);

  return (
    <React.Fragment>
      <footer className="p-5 mt-10 bg-gray-950" data-aos="fade-up">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-12 gap-4 lg:gap-8">
            {/* Popular Choice */}
            <div className="col-span-12 sm:col-span-12 md:col-span-6 md:order-3 lg:order-1 lg:col-span-4">
              <div className="mb-4">
                <h5 className="text-2xl font-bold leading-none text-white">
                  Popular Choice
                </h5>
              </div>
              {loading ? (
                <PopularChoiceSkeleton />
              ) : (
                <ul>
                  {blogs.map(blog => (
                    <li key={blog._id} className="py-1 sm:py-2">
                      <div className="flex items-center overflow-hidden">
                        <div className="flex-shrink-0">
                          <img
                            className="rounded-2xl w-16 h-16 object-cover"
                            src={blog.images?.[0]?.url}
                            alt={blog.title}
                          />
                        </div>
                        <div className="flex-1 min-w-0 ms-4">
                          <Link
                            to={`/single-post?id=${blog._id}&model=blog`} // dynamic blog page
                            className="text-sm font-medium text-white hover:text-[#E32C26] dark:hover:text-[#7b51ff] break-words"
                          >
                            {blog.title}
                          </Link>
                          <div className="block text-[11px] text-gray-500 dark:text-gray-400 uppercase">
                            <span className="me-2">{blog.author}</span>
                            <span>
                              {new Date(blog.createdAt).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Information */}
            <div className="col-span-8 sm:col-span-6 md:col-span-6 md:order-1 lg:order-2 lg:col-span-2">
              <div className="mb-4">
                <h5 className="text-2xl font-bold leading-none text-white">
                  Information
                </h5>
              </div>
              <ul className="text-gray-300 capitalize list-none dark:text-gray-400">
                <li className="mb-3">
                  <Link to="#" className="hover:text-[#E32C26] text-base">
                    support center
                  </Link>
                </li>
                <li className="mb-3">
                  <Link to="#" className="hover:text-[#E32C26] text-base">
                    terms & conditions
                  </Link>
                </li>
                <li className="mb-3">
                  <Link to="#" className="hover:text-[#E32C26] text-base">
                    privacy policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="col-span-8 sm:col-span-6 md:col-span-6 md:order-2 lg:order-3 lg:col-span-2">
              <div className="mb-4">
                <h5 className="text-2xl font-bold leading-none text-white">
                  Our Services
                </h5>
              </div>
              <ul className="text-gray-300 capitalize list-none dark:text-gray-400">
                <li className="mb-3">
                  <Link to="#" className="hover:text-[#E32C26] text-base">
                    refund policy
                  </Link>
                </li>
                <li className="mb-3">
                  <Link to="#" className="hover:text-[#E32C26] text-base">
                    FAQs
                  </Link>
                </li>
                <li className="mb-3">
                  <Link to="#" className="hover:text-[#E32C26] text-base">
                    coming soon
                  </Link>
                </li>
              </ul>
            </div>

            {/* Subscribe */}
            <div className="col-span-12 text-center sm:col-span-12 md:col-span-6 md:order-4 lg:order-4 lg:col-span-4 md:text-left">
              <div className="mb-4">
                <h5 className="text-2xl font-bold leading-none text-white">
                  Subscribe Now
                </h5>
                <p className="my-4 text-base text-gray-500 md:max-w-60">
                  Get the latest creative news from Atlas magazine
                </p>
              </div>
              <form className="max-w-sm mx-auto">
                <div className="flex">
                  <input
                    type="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full block w-full px-4 py-2.5 dark:bg-gray-900 dark:border-gray-700 dark:text-white"
                    placeholder="info@example.com"
                    required
                  />
                  <button
                    type="submit"
                    className="text-white bg-[#E32C26] hover:bg-[#E32C26] focus:ring-4 focus:outline-none font-medium rounded-r-full rtl:rounded-l-full rtl:rounded-r-none text-sm w-full max-w-24 md:max-w-28 -ms-4 px-0 py-2.5 text-center dark:bg-[#7b51ff] dark:hover:bg-[#6b2ef9]"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="container px-4 py-4 mx-auto text-xs text-center text-gray-400">
          <p>Copyright © 2025 Blogs News . All Rights Reserved</p>
        </div>
      </footer>
    </React.Fragment>
  )
};

export default Footer3
