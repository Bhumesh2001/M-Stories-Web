// import { Link } from "gatsby"
// import React from "react"
// import picked1 from "../../../assets/images/layout-8/hand-picked/01.jpg"
// import picked2 from "../../../assets/images/layout-8/hand-picked/02.jpg"
// import picked3 from "../../../assets/images/layout-8/hand-picked/03.jpg"
// import postList5 from "../../../assets/images/layout-3/post-list/05.jpg"
// import postList1 from "../../../assets/images/layout-3/post-list/01.jpg"
// import postList2 from "../../../assets/images/layout-3/post-list/02.jpg"
// import postList3 from "../../../assets/images/layout-3/post-list/03.jpg"
// import postList4 from "../../../assets/images/layout-3/post-list/04.jpg"
// import { latestStory } from "../../data/index8data"

// const Section3 = () => {
//   return (
//     <React.Fragment>
//       <section className="mt-8">
//         <div className="container px-4 mx-auto">
//           <div className="grid grid-cols-12 gap-4 lg:gap-8">
//             {/* Hand-picked Stories */}
//             <div
//               className="col-span-12 sm:col-span-12 lg:col-span-8 rounded-xl"
//               data-aos="fade-up"
//             >
//               <h3 className="mb-4 text-2xl font-bold tracking-normal capitalize dark:text-white">
//                 Hand-picked Stories
//               </h3>
//               <div className="grid grid-cols-4 gap-6">
//                 <div className="col-span-4 sm:col-span-2">
//                   {/* Card 1 */}
//                   <div className="">
//                     <Link to="/single-post" className="relative">
//                       <img
//                         className="w-full h-auto max-w-full rounded-2xl"
//                         src={picked1}
//                         alt="post"
//                       />
//                       <div className="absolute px-7 text-md bottom-5">
//                         <span className="text-white text-xs uppercase bg-[#FF0000] pt-[6px] px-2.5 py-1 rounded-full">
//                           Travelling
//                         </span>
//                       </div>
//                     </Link>
//                     <div className="pt-3">
//                       <Link to="/single-post">
//                         <h5 className="mb-1 text-md leading-normal capitalize font-medium text-gray-900 dark:text-white hover:text-[#E32C26]">
//                           Travel with ease and immerse yourself in the adventure
//                           of a lifetime
//                         </h5>
//                       </Link>
//                       <div className="block gap-4 text-[11px] text-gray-500 dark:text-gray-400 uppercase">
//                         <span className="me-2 lg:me-1">John Doe</span>
//                         <span>7 Months Ago</span>
//                       </div>
//                     </div>
//                   </div>
//                   {/* Card 2 */}
//                   <div className="mt-6">
//                     <Link to="/single-post" className="relative">
//                       <img
//                         className="w-full h-auto max-w-full rounded-2xl"
//                         src={picked2}
//                         alt="post"
//                       />
//                       <div className="absolute px-7 text-md bottom-5">
//                         <span className="text-white text-xs uppercase bg-[#FF0000] pt-[6px] px-2.5 py-1 rounded-full">
//                           Lifestyle
//                         </span>
//                       </div>
//                     </Link>
//                     <div className="pt-3">
//                       <Link to="/single-post">
//                         <h5 className="mb-1 text-md leading-normal capitalize font-medium text-gray-900 dark:text-white hover:text-[#E32C26]">
//                           Travel with ease and immerse yourself in the adventure
//                           of a lifetime
//                         </h5>
//                       </Link>
//                       <div className="block gap-4 text-[11px] text-gray-500 dark:text-gray-400 uppercase">
//                         <span className="me-2 lg:me-1">John Doe</span>
//                         <span>7 Months Ago</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-span-4 sm:col-span-2">
//                   {/* Card 3 */}
//                   <div className="">
//                     <Link to="/single-post">
//                       <img
//                         className="w-full h-auto max-w-full rounded-2xl"
//                         src={picked3}
//                         alt="post"
//                       />
//                     </Link>
//                     <div className="pt-4">
//                       <div className="mb-2 text-md">
//                         <span className="text-white text-xs uppercase bg-[#FF0000] pt-[6px] px-2.5 py-1 rounded-full">
//                           Travelling
//                         </span>
//                       </div>
//                       <Link to="/single-post">
//                         <h5 className="mb-1 text-xl leading-normal capitalize font-medium text-gray-900 dark:text-white hover:text-[#E32C26]">
//                           New food trends, innovative recipes, and exciting
//                           dining experiences
//                         </h5>
//                       </Link>
//                       <p className="mb-1 text-sm text-gray-500 sm:text-base dark:text-gray-300">
//                         Fresh, organic produce to gourmet delicacies, we offer
//                         high-quality ingredients that bring flavor and nutrition
//                         to your table.
//                       </p>
//                       <div className="mt-2 block gap-4 text-[12px] text-gray-600 dark:text-gray-400 uppercase">
//                         <span className="me-2 lg:me-1">John Doe</span>
//                         <span>7 Months Ago</span>
//                       </div>
//                     </div>
//                     {/* Nested Card */}
//                     <div className="mt-2">
//                       <div className="flex items-center">
//                         <div className="flex-shrink-0">
//                           <img
//                             className="rounded-full w-14 h-14"
//                             src={postList5}
//                             alt="Neil"
//                           />
//                         </div>
//                         <div className="flex-1 min-w-0 ms-4">
//                           <h6 className="text-sm font-medium text-gray-900 dark:text-white hover:text-[#E32C26]">
//                             <Link to="/single-post">
//                               The Power Of Big Data In The Fashion Decision
//                               Making
//                             </Link>
//                           </h6>
//                           <div className="block gap-4 text-[11px] text-gray-500 dark:text-gray-400 uppercase">
//                             <span className="me-2 lg:me-1">John Doe</span>
//                             <span>7 Months Ago</span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Latest News & Stories */}
//             <div
//               className="col-span-12 sm:col-span-12 lg:col-span-4"
//               data-aos="fade-up"
//             >
//               <h3 className="mb-4 text-2xl font-bold tracking-normal capitalize dark:text-white">
//                 Latest News & Stories
//               </h3>
//               <div className="w-full bg-[#f5f5f5] dark:bg-gray-800/70 p-5 rounded-xl">
//                 <div className="flow-root">
//                   <ul>
//                     {latestStory &&
//                       latestStory.map((post, index) => (
//                         <li key={index} className="py-1 sm:py-2">
//                           <div className="flex items-center">
//                             <div className="flex-shrink-0">
//                               <img
//                                 className="rounded-full w-14 h-14"
//                                 src={
//                                   index === 0
//                                     ? postList1
//                                     : index === 1
//                                       ? postList2
//                                       : index === 2
//                                         ? postList3
//                                         : index === 7
//                                           ? postList5
//                                           : postList4
//                                 }
//                                 alt="Neil"
//                               />
//                             </div>
//                             <div className="flex-1 min-w-0 ms-4">
//                               <h6 className="text-sm font-medium text-gray-900 dark:text-white hover:text-[#E32C26]">
//                                 <Link to="/single-post">{post.title}</Link>
//                               </h6>
//                               <div className="block gap-4 text-[11px] text-gray-500 dark:text-gray-400 uppercase">
//                                 <span className="me-2 lg:me-1">John Doe</span>
//                                 <span>7 Months Ago</span>
//                               </div>
//                             </div>
//                           </div>
//                         </li>
//                       ))}
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </React.Fragment>
//   )
// }

// export default Section3


import { Link } from "gatsby"
import React, { useEffect, useState } from "react"
import { callApi } from '../../../services/apiHandler';

const Section3 = () => {
  const [stories, setStories] = useState([])
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)

  // Helper function
  const isHTML = (str) => /<\/?[a-z][\s\S]*>/i.test(str);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch News & Stories
        const storyData = await callApi("/story")
        const newsData = await callApi("/news")

        setStories(storyData.data.stories || [])
        setNews(newsData.data.newsList || [])

        setLoading(false)
      } catch (err) {
        console.error("Error fetching data:", err)
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <section className="mt-8">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-12 gap-4 lg:gap-8">

          {/* Hand-picked Stories */}
          <div className="col-span-12 lg:col-span-8 rounded-xl" data-aos="fade-up">
            <h3 className="mb-4 text-2xl font-bold tracking-normal capitalize dark:text-white">
              Hand-picked Stories
            </h3>

            {loading ? (
              <p className="text-gray-500 dark:text-gray-300">Loading stories...</p>
            ) : (
              // <div className="grid grid-cols-4 gap-6">
              //   {stories.slice(0, 3).map((story, idx) => (
              //     <div key={story._id} className="col-span-4 sm:col-span-2">
              //       <div>
              //         <Link to={`/single-post`} className="relative">
              //           <img
              //             className="w-full h-auto max-w-full rounded-2xl"
              //             src={story.images?.[0]?.url || "https://via.placeholder.com/400x250"}
              //             alt={story.title}
              //           />
              //           <div className="absolute px-4 text-md bottom-5">
              //             <span className="text-white text-xs uppercase bg-[#FF0000] px-2.5 py-1 rounded-full">
              //               {story.category?.name || "General"}
              //             </span>
              //           </div>
              //         </Link>

              //         <div className="pt-3">
              //           <Link to={`/single-post`}>
              //             <h5 className="mb-1 text-md leading-normal capitalize font-medium text-gray-900 dark:text-white hover:text-[#E32C26]">
              //               {story.title}
              //             </h5>
              //           </Link>
              //           <div className="block text-[11px] text-gray-500 dark:text-gray-400 uppercase">
              //             <span className="me-2">{story.author || "Unknown"}</span>
              //             <span>{new Date(story.createdAt).toDateString()}</span>
              //           </div>
              //         </div>
              //       </div>
              //     </div>
              //   ))}
              // </div>

              <div className="grid grid-cols-4 gap-6">
                {stories.slice(0, 4).map((story) => (
                  <div
                    key={story._id}
                    className="col-span-4 sm:col-span-2" // har ek 2 column lega (2 side-by-side)
                  >
                    <div>
                      <Link to={`/single-post?id=${story._id}&model=story`} className="relative block">
                        <img
                          className="w-full h-56 rounded-2xl object-cover" // sabka ek hi height
                          src={story.images?.[0]?.url || "https://via.placeholder.com/400x250"}
                          alt={story.title}
                        />
                        <div className="absolute px-4 text-md bottom-5">
                          <span className="text-white text-xs uppercase bg-[#FF0000] px-2.5 py-1 rounded-full">
                            {story.category?.name || "General"}
                          </span>
                        </div>
                      </Link>

                      <div className="pt-3">
                        <Link to={`/single-post?id=${story._id}&model=story`}>
                          <h5 className="mb-1 text-md leading-normal capitalize font-medium text-gray-900 dark:text-white hover:text-[#E32C26]">
                            {story.title}
                          </h5>
                        </Link>
                        
                        <div className="block text-[11px] text-gray-500 dark:text-gray-400 uppercase">
                          <span className="me-2">{story.author || "Unknown"}</span>
                          <span>{new Date(story.createdAt).toDateString()}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Latest News & Stories */}
          <div className="col-span-12 lg:col-span-4" data-aos="fade-up">
            <h3 className="mb-4 text-2xl font-bold tracking-normal capitalize dark:text-white">
              Latest News & Stories
            </h3>

            <div className="w-full bg-[#f5f5f5] dark:bg-gray-800/70 p-5 rounded-xl">
              <div className="flow-root">
                {loading ? (
                  <p className="text-gray-500 dark:text-gray-300">Loading news...</p>
                ) : (
                  <ul>
                    {news.map((item) => (
                      <li key={item._id} className="py-2">
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <img
                              className="rounded-full w-14 h-14 object-cover"
                              src={item.images?.[0]?.url || "https://via.placeholder.com/100"}
                              alt={item.title}
                            />
                          </div>
                          <div className="flex-1 min-w-0 ms-4">
                            <h6 className="text-sm font-medium text-gray-900 dark:text-white hover:text-[#E32C26]">
                              <Link to={`/single-post?id=${item._id}&model=news`}>{item.title}</Link>
                            </h6>
                            <div className="block text-[11px] text-gray-500 dark:text-gray-400 uppercase">
                              <span className="me-2">{item.reporter || "Unknown"}</span>
                              <span>{new Date(item.createdAt).toDateString()}</span>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section3
