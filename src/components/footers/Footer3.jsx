import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import { callApi } from "../../services/apiHandler";
import AOS from "aos";
import "aos/dist/aos.css";
import { PopularChoiceSkeleton } from "../../common/Loader";

const Footer3 = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch Blogs
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await callApi("/blogs");
        const list = res?.data?.blogs || [];
        setBlogs(list.slice(0, 3));
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Init AOS only once
  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);

  return (
    <footer className="p-5 mt-10 bg-gray-950" data-aos="fade-up">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-12 gap-4 lg:gap-8">

          {/* Popular Choice */}
          <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-4">
            <h5 className="text-2xl font-bold mb-4 text-white">Popular Choice</h5>

            {loading ? (
              <PopularChoiceSkeleton />
            ) : (
              <ul>
                {blogs.map((blog) => (
                  <li key={blog._id} className="py-2">
                    <div className="flex items-center overflow-hidden">
                      <img
                        className="rounded-2xl w-16 h-16 object-cover flex-shrink-0"
                        src={blog.images?.[0]?.url}
                        alt={blog.title}
                      />

                      <div className="ms-4 flex-1 min-w-0">
                        <Link
                          to={`/single-post?id=${blog._id}&model=blog`}
                          className="text-sm font-medium text-white hover:text-[#E32C26] break-words"
                        >
                          {blog.title}
                        </Link>

                        <div className="text-[11px] text-gray-500 uppercase mt-1">
                          <span className="me-2">{blog.author}</span>
                          <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Information */}
          <div className="col-span-8 sm:col-span-6 md:col-span-6 lg:col-span-2">
            <h5 className="text-2xl font-bold mb-4 text-white">Information</h5>
            <ul className="text-gray-300 capitalize">
              {["support center", "terms & conditions", "privacy policy"].map((item, idx) => (
                <li key={idx} className="mb-3">
                  <Link to="#" className="hover:text-[#E32C26] text-base">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-8 sm:col-span-6 md:col-span-6 lg:col-span-2">
            <h5 className="text-2xl font-bold mb-4 text-white">Our Services</h5>
            <ul className="text-gray-300 capitalize">
              {["refund policy", "FAQs", "coming soon"].map((item, idx) => (
                <li key={idx} className="mb-3">
                  <Link to="#" className="hover:text-[#E32C26] text-base">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Subscribe */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4 text-center md:text-left">
            <h5 className="text-2xl font-bold mb-4 text-white">Subscribe Now</h5>
            <p className="my-4 text-base text-gray-500 md:max-w-60">
              Get the latest creative news from Atlas magazine
            </p>

            <form className="max-w-sm mx-auto md:mx-0">
              <div className="flex">
                <input
                  type="email"
                  className="flex-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-full px-4 py-2.5 dark:bg-gray-900 dark:border-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#E32C26]"
                  placeholder="info@example.com"
                  required
                />
                <button
                  type="submit"
                  className="bg-[#E32C26] text-white text-sm rounded-r-full px-5 py-2.5 flex items-center justify-center hover:bg-[#c12723]"
                >
                  Sign Up
                </button>
              </div>
            </form>

          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container px-4 py-4 mx-auto text-xs text-center text-gray-400">
        <p>Copyright © {new Date().getFullYear()} Blogs News. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer3;
