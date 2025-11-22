import React, { useState, useEffect } from 'react';
import { Link } from "gatsby";
// import { latestpost } from "../../data";
import { callApi } from "../../../services/apiHandler";
import AOS from "aos";
import "aos/dist/aos.css";
import { PostSkeleton } from '../../Loader';

const Section8 = () => {
  const [latestPosts, setLatestPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Helper function
  const isHTML = (str) => /<\/?[a-z][\s\S]*>/i.test(str);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await callApi('/blogs');
        setLatestPosts(data.data.blogs.slice(0, 4));
      } catch (err) {
        console.error("API call failed:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    AOS.init({ duration: 600 });
  }, [latestPosts]);

  return (
    <section className="mt-8">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Latest Post Section */}
          <div className="md:col-span-2" data-aos="fade-up">
            <div className="p-5 bg-white rounded-lg dark:bg-gray-800/70">
              <div className="mb-4">
                <h5 className="text-xl font-bold text-gray-900 dark:text-white">
                  Latest Post
                </h5>
              </div>

              {/* SKELETON LOADER */}
              {loading && (
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <PostSkeleton key={i} />
                  ))}
                </div>
              )}

              {error && (
                <div className="flex justify-center items-center h-48">
                  <p className="text-lg text-red-500">Error fetching posts. Please try again later.</p>
                </div>
              )}

              {!loading && !error && latestPosts.length === 0 && (
                <div className="flex justify-center items-center h-48">
                  <p className="text-lg text-gray-500">No posts available.</p>
                </div>
              )}

              {latestPosts.map(item => (
                <div
                  className="flex flex-col sm:flex-row gap-4 mb-6"
                  key={item._id}
                >
                  <Link to={`/single-post?id=${item._id}&model=blog`} className="flex-shrink-0">
                    <img
                      className="w-full sm:w-48 md:w-56 lg:w-64 h-40 sm:h-32 md:h-36 lg:h-40 object-cover rounded-2xl"
                      src={item.images[0]?.url || 'https://placehold.co/600x400/cccccc/ffffff?text=No+Image'}
                      alt={item.title}
                    />
                  </Link>
                  <div className="flex-1">
                    <div className="text-sm capitalize text-[#478cff] font-medium">
                      {item.category?.name}
                    </div>
                    <Link to={`/single-post?id=${item._id}&model=blog`}>
                      <h5 className="mb-1 text-base sm:text-lg leading-snug font-medium text-[#2d3340] hover:text-[#478cff] dark:text-white">
                        {item.title}
                      </h5>
                    </Link>
                    <p className="mb-2 text-sm text-gray-400 line-clamp-3">
                      {item.content ? (
                        isHTML(item.content) ? (
                          <span dangerouslySetInnerHTML={{ __html: item.content }} />
                        ) : (
                          item.content
                        )
                      ) : (
                        ""
                      )}
                    </p>
                    <div className="text-xs text-gray-400 uppercase">
                      <span className="me-2">{item.author}</span>
                      <span>7 Months Ago</span>
                    </div>
                  </div>
                </div>
              ))}

              <div className="flex justify-center">
                <Link to="/blog-tag" className="flex-shrink-0 font-bold text-blue-500">
                  See more...
                </Link>
              </div>
            </div>
          </div>

          {/* Sidebar Section */}
          <div className="md:col-span-1 h-full space-y-8" data-aos="flip-right">
            {/* Join With Us */}
            <div className="p-6 bg-white dark:bg-gray-800/70 rounded-xl shadow">
              <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Join With Us
              </h5>
              <ul>
                {[
                  {
                    name: "Facebook",
                    icon: "ri-facebook-circle-fill",
                    color: "bg-[#062DB9]",
                    count: "42.2k",
                    link: "https://www.facebook.com/muslimstoriesmedia"
                  },
                  {
                    name: "Twitter",
                    icon: "ri-twitter-x-line",
                    color: "bg-[#20A1EB]",
                    count: "10.1m",
                    link: "https://x.com/muslimstoriesm"
                  },
                  {
                    name: "LinkedIn",
                    icon: "ri-linkedin-fill",
                    color: "bg-[#0077B5]",
                    count: "22.9k",
                    link: "https://www.linkedin.com"
                  },
                  {
                    name: "Instagram",
                    icon: "ri-instagram-line",
                    color:
                      "bg-gradient-to-r from-[#863FA6] via-[#E12C61] to-[#F46F46] hover:from-[#683181] hover:via-[#c91d50] hover:to-[#f25626]",
                    count: "50.2k",
                    link: "https://www.instagram.com"
                  },
                ].map(({ name, icon, color, count, link }) => (
                  <li key={name}>
                    <a href={link} target="_blank">
                      <div
                        className={`${color} text-white rounded-full py-3 px-6 mb-3 hover:opacity-90 text-base transition-all duration-200`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <i className={`text-lg ${icon}`}></i>
                            <span className="font-medium">{name}</span>
                          </div>
                          <div className="text-sm">{count}</div>
                        </div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="p-5 text-center bg-white shadow dark:bg-gray-800/70 hover:shadow-lg rounded-xl">
              <div className="relative inline-block -top-5 mt-5">
                <div className="bg-[#E40666] dark:bg-gray-700 w-20 h-20 rounded-full flex items-center justify-center text-4xl text-white">
                  <i className="ri-mail-line"></i>
                </div>
              </div>
              <div className="mb-4">
                <h5 className="text-lg font-bold leading-none capitalize dark:text-white">
                  Subscribe To Newsletter
                </h5>
                <p className="my-4 text-sm text-gray-500">
                  Get the latest news and updates from blogpoint
                </p>
              </div>
              <form className="max-w-sm mx-auto">
                <input
                  type="email"
                  id="email"
                  className="block w-full px-4 py-2 mb-4 text-sm text-gray-900 border border-gray-300 rounded bg-gray-50 dark:bg-gray-900 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white"
                  placeholder="info@example.com"
                  required
                />
                <button
                  type="submit"
                  className="text-white bg-[#E40666] hover:bg-[#003d3c] font-medium rounded w-full px-0 py-2 text-center dark:bg-[#E40666] dark:hover:bg-gray-700"
                >
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section8;
