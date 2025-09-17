// import Aos from "aos"
// import { Link } from "gatsby"
// import React, { useEffect, useState } from "react"
// import BreadCrumb from "../common/BreadCrumb"
// import Layout5 from "../common/layout/Layout5"
// import Social from "../common/Social"
// import Seo from "../components/seo"
// // import blogPosts from '../common/data/blogData';
// import { callApi } from "../services/apiHandler"

// const BlogTag = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [allBlogs, setAllBlogs] = useState([]);

//   useEffect(() => {
//     Aos.init({ duration: 1000, disable: "mobile", offset: 100, once: false })

//     // refresh aos on scroll
//     const handleScroll = () => {
//       Aos.refresh()
//     }
//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   // Fetch all blogs on initial load
//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const data = await callApi('/blogs');
//         setAllBlogs(data.data.blogs);
//         setBlogs(data.data.blogs); // Display all blogs initially
//       } catch (err) {
//         console.error("API call failed:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   // Handle search logic
//   const handleSearch = () => {
//     if (searchQuery.trim() === '') {
//       setBlogs(allBlogs);
//     } else {
//       const filteredBlogs = allBlogs.filter(blog =>
//         blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         blog.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         blog.author.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//       setBlogs(filteredBlogs);
//     }
//   };

//   const handleKeyPress = (event) => {
//     if (event.key === 'Enter') {
//       handleSearch();
//     }
//   };

//   return (
//     <Layout5>
//       {/* Breadcrumb */}
//       <BreadCrumb title="TAG ARCHIVES : PORROS" titleType="blog" />

//       {/* Content */}
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xs:gap-0 sm:gap-8">
//           {/* blog post */}
//           {/* <div className="col-span-1 md:col-span-2">
//             <div className="grid">
//               {blogPosts.map((post) => (
//                 <div className="lg:mb-8" key={post.id}>
//                   <div className="block lg:flex gap-4">
//                     <div className="lg:w-1/2">
//                       <Link to={`/single-post`}>
//                         <img
//                           className="h-auto max-w-full rounded-lg w-full"
//                           src={post.image}
//                           alt="blog post"
//                         />
//                       </Link>
//                     </div>

//                     <div className="py-4 lg:py-0 lg:w-1/2">
//                       <h3 className="text-lg sm:text-xl mb-4 hover:text-[#ff3750] dark:text-white dark:hover:text-[#ff3750]">
//                         <Link to={`/single-post`}>{post.title}</Link>
//                       </h3>
//                       <div className="block lg:flex justify-start gap-4 text-xs sm:text-sm text-gray-500 mb-2 dark:text-gray-400">
//                         <span className="me-2 lg:me-0">
//                           <i className="ri-user-fill"></i> {post.author}
//                         </span>
//                         <span className="me-2 lg:me-0">
//                           <i className="ri-calendar-fill"></i> {post.date}
//                         </span>
//                         <span>
//                           <i className="ri-chat-1-fill"></i> {post.comments} comments
//                         </span>
//                       </div>
//                       <p className="text-gray-400 text-sm sm:text-base mb-2 dark:text-gray-300 line-clamp-3">
//                         {post.excerpt}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div> */}

//           <div className="col-span-1 md:col-span-2">
//             <div className="grid">
//               {loading && <p className="text-center text-blue-400">Loading blogs...</p>}
//               {!loading && blogs.length === 0 && <p className="text-center text-gray-500">No blogs found.</p>}
//               {blogs.map((post) => (
//                 <div className="lg:mb-8" key={post._id}>
//                   <div className="block lg:flex gap-4">
//                     <div className="lg:w-1/2">
//                       <Link to={`/single-post?id=${post._id}&model=blog`}>
//                         <img
//                           className="h-48 rounded-lg w-full object-cover"
//                           src={post.images[0]?.url || 'https://placehold.co/600x400'}
//                           alt={post.title}
//                         />
//                       </Link>
//                     </div>
//                     <div className="py-4 lg:py-0 lg:w-1/2">
//                       <h3 className="text-lg sm:text-xl mb-4 hover:text-[#ff3750] dark:text-white dark:hover:text-[#ff3750]">
//                         <Link to={`/single-post?id=${post._id}&model=blog`}>{post.title}</Link>
//                       </h3>
//                       <div className="block lg:flex justify-start gap-4 text-xs sm:text-sm text-gray-500 mb-2 dark:text-gray-400">
//                         <span className="me-2 lg:me-0">
//                           <i className="ri-user-fill"></i> {post.author}
//                         </span>
//                         <span className="me-2 lg:me-0">
//                           <i className="ri-calendar-fill"></i> {new Date(post.createdAt).toLocaleDateString()}
//                         </span>
//                         <span>
//                           <i className="ri-chat-1-fill"></i> 0 comments
//                         </span>
//                       </div>
//                       <p
//                         className="text-gray-400 text-sm sm:text-base mb-2 dark:text-gray-300 line-clamp-3"
//                         dangerouslySetInnerHTML={{ __html: post.content }}
//                       ></p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* blog search */}
//           <div className="col-span-1">
//             {/* <div className="flex">
//               <input
//                 type="search"
//                 className="form-input px-4 py-3 rounded-lg w-full border dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
//                 placeholder="search..."
//               />
//               <button
//                 className="btn rounded-lg px-4 py-1 relative bg-black hover:bg-[#ff3750] text-xl dark:bg-[#ff3750] dark:hover:bg-gray-700"
//                 aria-label="Search"
//               >
//                 <i className="ri-search-line"></i>
//               </button>
//             </div> */}

//             <div className="flex">
//               <input
//                 type="search"
//                 className="form-input px-4 py-3 rounded-l-lg w-full border dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
//                 placeholder="search..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 onKeyDown={handleKeyPress}
//               />
//               <button
//                 className="btn rounded-r-lg px-4 py-1 relative bg-black hover:bg-[#ff3750] text-xl dark:bg-[#ff3750] dark:hover:bg-gray-700"
//                 aria-label="Search"
//                 onClick={handleSearch}
//               >
//                 <i className="ri-search-line"></i>
//               </button>
//             </div>

//             {/* social */}
//             <Social />
//           </div>
//         </div>
//       </div>
//     </Layout5>
//   );
// };

// export const Head = () => <Seo title="Blog tag" />

// export default BlogTag


import Aos from "aos"
import { Link } from "gatsby"
import React, { useEffect, useState } from "react"
import BreadCrumb from "../common/BreadCrumb"
import Layout5 from "../common/layout/Layout5"
import Social from "../common/Social"
import Seo from "../components/seo"
import { callApi } from "../services/apiHandler"

const BlogTag = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [allBlogs, setAllBlogs] = useState([]);

  // pagination state
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Extract query params
  const searchParams = new URLSearchParams(typeof window !== "undefined" ? window.location.search : "");
  const id = searchParams.get("id");
  // const model = searchParams.get("model"); // blog, news, story, category

  useEffect(() => {
    Aos.init({ duration: 1000, disable: "mobile", offset: 100, once: false })
    const handleScroll = () => Aos.refresh();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Fetch blogs with pagination
    const fetchBlogs = async (pageNumber = 1) => {
      setLoading(true);
      try {
        let url;

        if (id) {
          url = `/blogs/category/${id}?page=${pageNumber}&limit=10`;
        } else {
          url = `/blogs?page=${pageNumber}&limit=10`;
        }
        const data = await callApi(url);
        setAllBlogs(data.data.blogs || []);
        setBlogs(data.data.blogs || []);
        setTotalPages(data.data.pagination.totalPages);
        setPage(data.data.pagination.page);
      } catch (err) {
        console.error("API call failed:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs(page);
  }, [page, id]);

  // Handle search logic
  const handleSearch = () => {
    if (searchQuery.trim() === '') {
      setBlogs(allBlogs);
    } else {
      const filteredBlogs = allBlogs.filter(blog =>
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.author.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setBlogs(filteredBlogs);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  // Helper function
  const isHTML = (str) => /<\/?[a-z][\s\S]*>/i.test(str);

  return (
    <Layout5>
      <BreadCrumb title="TAG ARCHIVES : PORROS" titleType="blog" />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xs:gap-0 sm:gap-8">

          {/* Blog List */}
          <div className="col-span-1 md:col-span-2">
            <div className="grid">
              {loading && <p className="text-center text-blue-400">Loading blogs...</p>}
              {!loading && blogs.length === 0 && <p className="text-center text-gray-500">No blogs found.</p>}
              {blogs.map((post) => (
                <div className="lg:mb-8" key={post._id}>
                  <div className="block lg:flex gap-4">
                    <div className="lg:w-1/2">
                      <Link to={`/single-post?id=${post._id}&model=blog`}>
                        <img
                          className="h-48 rounded-lg w-full object-cover"
                          src={post.images[0]?.url || 'https://placehold.co/600x400'}
                          alt={post.title}
                        />
                      </Link>
                    </div>
                    <div className="py-4 lg:py-0 lg:w-1/2">
                      <h3 className="text-lg sm:text-xl mb-4 hover:text-[#ff3750] dark:text-white dark:hover:text-[#ff3750]">
                        <Link to={`/single-post?id=${post._id}&model=blog`}>{post.title}</Link>
                      </h3>
                      <div className="block lg:flex justify-start gap-4 text-xs sm:text-sm text-gray-500 mb-2 dark:text-gray-400">
                        <span className="me-2 lg:me-0">
                          <i className="ri-user-fill"></i> {post.author}
                        </span>
                        <span className="me-2 lg:me-0">
                          <i className="ri-calendar-fill"></i> {new Date(post.createdAt).toLocaleDateString()}
                        </span>
                        <span>
                          <i className="ri-chat-1-fill"></i> 0 comments
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm sm:text-base mb-2 dark:text-gray-300 line-clamp-3">
                        {post.content ? (
                          isHTML(post.content) ? (
                            <span dangerouslySetInnerHTML={{ __html: post.content }} />
                          ) : (
                            post.content
                          )
                        ) : (
                          ""
                        )}
                      </p>

                    </div>
                  </div>
                </div>
              ))}

              {/* Pagination Controls */}
              {!loading && totalPages > 1 && (
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
            </div>
          </div>

          {/* Blog Search */}
          <div className="col-span-1">
            <div className="flex">
              <input
                type="search"
                className="form-input px-4 py-3 rounded-l-lg w-full border dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyPress}
              />
              <button
                className="btn rounded-r-lg px-4 py-1 relative bg-black hover:bg-[#ff3750] text-xl dark:bg-[#ff3750] dark:hover:bg-gray-700"
                aria-label="Search"
                onClick={handleSearch}
              >
                <i className="ri-search-line"></i>
              </button>
            </div>
            <Social />
          </div>
        </div>
      </div>
    </Layout5>
  );
};

export const Head = () => <Seo title="Blog tag" />

export default BlogTag;
