// import React from "react"
// import { Link } from "gatsby"
// import Seo from "../components/seo"
// import Social from "../common/Social"
// import PostList from "../common/PostList"
// import story1 from "../assets/images/stories/01.jpg"
// import Layout5 from "../common/layout/Layout5"
// import womenStyleImg from "../assets/images/16.jpg"
// import post1 from "../assets/images/27.jpg"
// import post2 from "../assets/images/34.jpg"
// import post3 from "../assets/images/45.jpg"
// import comment1 from "../assets/images/45.jpg"
// import comment2 from "../assets/images/55.jpg"
// import comment3 from "../assets/images/64.jpg"

// const SinglePost = () => {
//   return (
//     <React.Fragment>
//       <Layout5>
//         <div className="container mx-auto mt-8 px-4">
//           <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-8">
//             <div className="col-span-1 md:col-span-2">
//               <div className="grid">
//                 <div className="rounded md:me-3">
//                   <div className="font-semibold text-2xl mb-3 text-black dark:text-white">
//                     Vivamus Tortor Enim, Semper Et Ornare Sed
//                   </div>
//                   <div className="block md:flex justify-start gap-4 text-sm text-gray-500 mb-6 dark:text-gray-400">
//                     <Link to="#" className="hover:text-[#ff3750] me-2 md:me-0">
//                       <i className="ri-user-fill"></i> <span>Admin</span>
//                     </Link>
//                     <Link to="#" className="hover:text-[#ff3750] me-2 md:me-0">
//                       <i className="ri-calendar-fill"></i>{" "}
//                       <span>Mar 18, 2024</span>
//                     </Link>
//                     <Link to="#" className="hover:text-[#ff3750] me-2 md:me-0">
//                       <i className="ri-bookmark-fill"></i> <span>Fashion</span>
//                     </Link>
//                     <Link to="#" className="hover:text-[#ff3750] me-2 md:me-0">
//                       <i className="ri-chat-1-fill"></i> <span>0 comments</span>
//                     </Link>
//                   </div>

//                   <hr className="dark:border-slate-800" />
//                   <img
//                     className="h-auto max-w-full rounded-lg mt-8"
//                     src={story1}
//                     alt="Mountain"
//                   />
//                   <div className="py-4">
//                     <p className="text-gray-400 mb-2 dark:text-gray-300">
//                       Lorem Ipsum is simply dummy text of the printing and
//                       typesetting industry. Lorem Ipsum has been the industry’s
//                       standard dummy text ever since the 1500s. Lorem Ipsum is
//                       simply dummy text of the printing and typesetting
//                       industry. Lorem Ipsum has been the standard dummy text.
//                       Lorem Ipsum is simply dummy text of the printing and
//                       typesetting industry. Lorem Ipsum has been the industry’s
//                       standard dummy text ever since the 1500s. Lorem Ipsum is
//                       simply dummy text of the printing and typesetting
//                       industry. Lorem Ipsum has been the standard dummy text.
//                     </p>
//                   </div>
//                   <div className="font-normal text-xl mb-3 text-black dark:text-white ">
//                     Jason Santa Maria
//                   </div>

//                   <p className="text-gray-400 mb-2 dark:text-gray-300">
//                     Reading is not only informed by what’s going on with us at
//                     that moment, but also governed by how our eyes and brains
//                     work to process information. What you see and what you’re
//                     experiencing as you read these words is quite different.
//                   </p>

//                   <p className="text-gray-400 mb-4 dark:text-gray-300">
//                     Lorem Ipsum is simply dummy text of the printing and
//                     typesetting industry. Lorem Ipsum has been the industry’s
//                     standard dummy text ever since the 1500s. Lorem Ipsum is
//                     simply dummy text of the printing and typesetting industry.
//                     Lorem Ipsum has been the standard dummy text.
//                   </p>

//                   <p className="text-gray-400 mb-8 dark:text-gray-300">
//                     Lorem Ipsum is simply dummy text of the printing and
//                     typesetting industry. Lorem Ipsum has been the industry’s
//                     standard dummy text ever since the 1500s. Lorem Ipsum is
//                     simply dummy text of the printing and typesetting industry.
//                     Lorem Ipsum has been the standard dummy text. Lorem Ipsum is
//                     simply dummy text of the printing and typesetting industry.
//                     Lorem Ipsum has been the industry’s standard dummy text ever
//                     since the 1500s. Lorem Ipsum is simply dummy text of the
//                     printing and typesetting industry. Lorem Ipsum has been the
//                     standard dummy text.
//                   </p>

//                   <div className="xl:flex lg:flex md:flex sm:flex block gap-4 mb-8 dark:text-gray-300">
//                     <div className="w-full">
//                       <Link to="#">
//                         <img
//                           className="h-auto w-full max-w-full rounded-lg "
//                           src={womenStyleImg}
//                           alt="post "
//                         />
//                       </Link>
//                     </div>
//                     <div>
//                       <p className="text-gray-400 leading-6 mb-4 dark:text-gray-300">
//                         Sed et aliquam est, sed blandit lectus. Nullam ligula
//                         ex, tempor a lacus non, posuere condimentum elit. Fusce
//                         volutpat turpis sed tellus congue, eget sagittis mauris
//                         elementum. Curabitur sed tellus odio. Nulla vehicula
//                         erat imperdiet lorem auctor, in porta nunc porttitor.
//                         Suspendisse eu sapien sed erat consectetur tristique
//                         quis non dolor. Fusce sed viverra quam, et efficitur
//                         purus. Lectus cursus vestibulum. Quisque efficitur,
//                         tellus sed
//                       </p>
//                     </div>
//                   </div>

//                   <p className="text-gray-400 mb-4 dark:text-gray-300">
//                     Lorem Ipsum is simply dummy text of the printing and
//                     typesetting industry. Lorem Ipsum has been the industry’s
//                     standard dummy text ever since the 1500s. Lorem Ipsum is
//                     simply dummy text of the printing and typesetting industry.
//                     Lorem Ipsum has been the standard dummy text.
//                   </p>
//                   <p className="text-gray-400 mb-4 dark:text-gray-300">
//                     Lorem Ipsum is simply dummy text of the printing and
//                     typesetting industry. Lorem Ipsum has been the industry’s
//                     standard dummy text ever since the 1500s. Lorem Ipsum is
//                     simply dummy text of the printing and typesetting industry.
//                     Lorem Ipsum has been the standard dummy text.
//                   </p>

//                   <div className="grid grid-cols-3 gap-6 mb-8 dark:text-gray-300">
//                     <div>
//                       <img
//                         className="h-auto max-w-full rounded-lg w-full"
//                         src={post1}
//                         alt="post banner"
//                       />
//                     </div>
//                     <div>
//                       <img
//                         className="h-auto max-w-full rounded-lg w-full"
//                         src={post2}
//                         alt="post banner"
//                       />
//                     </div>
//                     <div>
//                       <img
//                         className="h-auto max-w-full rounded-lg w-full"
//                         src={post3}
//                         alt="post banner"
//                       />
//                     </div>
//                   </div>

//                   <p className="text-gray-400 mb-4 dark:text-gray-300">
//                     Lorem Ipsum is simply dummy text of the printing and
//                     typesetting industry. Lorem Ipsum has been the industry’s
//                     standard dummy text ever since the 1500s. Lorem Ipsum is
//                     simply dummy text of the printing and typesetting industry.
//                     Lorem Ipsum has been the standard dummy text.
//                   </p>
//                   <p className="text-gray-400 mb-4 dark:text-gray-300">
//                     Lorem Ipsum is simply dummy text of the printing and
//                     typesetting industry. Lorem Ipsum has been the industry’s
//                     standard dummy text ever since the 1500s. Lorem Ipsum is
//                     simply dummy text of the printing and typesetting industry.
//                     Lorem Ipsum has been the standard dummy text.
//                   </p>
//                 </div>

//                 <h3 className="uppercase font-bold tracking-wide border-b pb-4 mt-8 mb-4 dark:text-white dark:border-gray-700">
//                   Comments
//                 </h3>

//                 <div className="flex mb-5 gap-3">
//                   <div>
//                     <Link to="#">
//                       <img
//                         className="h-auto max-w-40 rounded-full"
//                         src={comment1}
//                         alt="post "
//                       />
//                     </Link>
//                   </div>

//                   <div>
//                     <h3 className="mb-2">
//                       <Link
//                         to="#"
//                         className="hover:text-[#ff3750] dark:text-white"
//                       >
//                         Vestibulum euismod, leo eget varius gravida, eros enim
//                         interdum urna, non rutrum enim ante quis metus. Duis
//                         porta ornare nulla ut bibendum
//                       </Link>
//                     </h3>
//                     <div className="flex justify-start gap-4 text-sm text-gray-500 dark:text-gray-400">
//                       <span className="font-bold"> Jonh Doe</span>{" "}
//                       <span> 10 hours ago </span>
//                     </div>
//                     <div className="block text-sm text-gray-500 py-2 dark:text-gray-400">
//                       <Link to="#">
//                         <i className="ri-reply-line"></i> reply
//                       </Link>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="ms-20">
//                   <div className="flex mb-5 gap-3">
//                     <div>
//                       <Link to="#">
//                         <img
//                           className="h-auto max-w-40 rounded-full"
//                           src={comment2}
//                           alt="post "
//                         />
//                       </Link>
//                     </div>

//                     <div>
//                       <h3 className="mb-2">
//                         <Link
//                           to="#"
//                           className="hover:text-[#ff3750] dark:text-white"
//                         >
//                           Vestibulum euismod, leo eget varius gravida, eros enim
//                           interdum urna, non rutrum enim ante quis metus. Duis
//                           porta ornare nulla ut bibendum
//                         </Link>
//                       </h3>
//                       <div className="flex justify-start gap-4 text-sm text-gray-500 dark:text-gray-400">
//                         <span className="font-bold"> Kinzgi</span>{" "}
//                         <span> 6 minutes ago </span>
//                       </div>
//                       <div className="block text-sm text-gray-500 py-2 dark:text-gray-400">
//                         <Link to="#">
//                           <i className="ri-reply-line"></i> reply
//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex mb-5 gap-3">
//                   <div>
//                     <Link to="#">
//                       <img
//                         className="h-auto max-w-40 rounded-full"
//                         src={comment3}
//                         alt="post "
//                       />
//                     </Link>
//                   </div>

//                   <div>
//                     <h3 className="mb-2">
//                       <Link
//                         to="#"
//                         className="hover:text-[#ff3750] dark:text-white"
//                       >
//                         Vestibulum euismod, leo eget varius gravida, eros enim
//                         interdum urna, non rutrum enim ante quis metus. Duis
//                         porta ornare nulla ut bibendum
//                       </Link>
//                     </h3>
//                     <div className="flex justify-start gap-4 text-sm text-gray-500 dark:text-gray-400">
//                       <span className="font-bold"> Jonh Doe</span>{" "}
//                       <span> 10 hours ago </span>
//                     </div>
//                     <div className="block text-sm text-gray-500 py-2 dark:text-gray-400">
//                       <Link to="#">
//                         <i className="ri-reply-line"></i> reply
//                       </Link>
//                     </div>
//                   </div>
//                 </div>

// <h3 className="uppercase font-bold tracking-wide border-b pb-4 mt-8 mb-4 dark:text-white dark:border-gray-700">
//   Leave A Reply
// </h3>

// <p className="dark:text-gray-400">
//   Your email address will not be published.
// </p>

// <form action="">
//   <div className="grid grid-cols-2 gap-4">
//     <div>
//       <input
//         type="text"
//         className="form-input px-4 py-3 rounded-lg border w-full mt-5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
//         placeholder="First Name"
//       />
//     </div>
//     <div>
//       <input
//         type="email"
//         className="form-input px-4 py-3 rounded-lg border w-full mt-5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
//         placeholder="Enter Email"
//       />
//     </div>
//   </div>
//   <div className="mb-5">
//     <input
//       type="text"
//       className="w-full form-input px-4 py-3 rounded-lg border mt-5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
//       placeholder="Website"
//     />
//   </div>
//   <textarea
//     className="mt-1 block border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
//     rows="5"
//     placeholder="write comment here"
//   ></textarea>
//   <Link
//     to="#"
//     className="btn mt-5 bg-black hover:bg-[#ff3750] dark:bg-[#ff3750] dark:hover:bg-gray-700"
//   >
//     submit
//   </Link>
// </form>
//               </div>
//             </div>

//             <div className="col-span-1">
//               <form className="flex gap-1">
//                 <input
//                   type="search"
//                   className="form-input px-4 py-3 rounded-lg w-full border dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
//                   placeholder="search..."
//                 />
//                 <button
//                   className="btn rounded-lg px-4 py-1 relative bg-black hover:bg-[#ff3750] text-xl dark:bg-[#ff3750] dark:hover:bg-gray-700"
//                   aria-label="search"
//                 >
//                   <i className="ri-search-line"></i>
//                 </button>
//               </form>

//               {/* <!-- social && newsletter --> */}
//               <Social />

//               {/* postlist */}
//               <PostList />
//             </div>
//           </div>
//         </div>
//       </Layout5>
//     </React.Fragment>
//   )
// };

// export const Head = () => <Seo title="Single Post" />

// export default SinglePost


import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import Seo from "../components/seo";
import Social from "../common/Social";
import PostList from "../common/PostList";
import Layout5 from "../common/layout/Layout5";
import { callApi } from "../services/apiHandler"

const SinglePost = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Extract query params
  const searchParams = new URLSearchParams(typeof window !== "undefined" ? window.location.search : "");
  const id = searchParams.get("id");
  const model = searchParams.get("model"); // blog, news, story, category

  const isHTML = (str) => /<\/?[a-z][\s\S]*>/i.test(str);


  useEffect(() => {
    if (!id || !model) return;

    const fetchData = async () => {
      try {
        let url = "";
        switch (model) {
          case "blog":
            url = `/blogs/${id}`;
            break;
          case "news":
            url = `/news/${id}`;
            break;
          case "story":
            url = `/story/${id}`;
            break;
          case "category":
            url = `/categories/${id}`;
            break;
          default:
            return;
        }

        const res = await callApi(url);
        setData(res.data);
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id, model]);

  if (loading) {
    return (
      <Layout5>
        <div className="text-center py-20 text-xl dark:text-white">Loading...</div>
      </Layout5>
    );
  }

  if (!data) {
    return (
      <Layout5>
        <div className="text-center py-20 text-xl text-red-500">No Data Found</div>
      </Layout5>
    );
  }

  return (
    <React.Fragment>
      <Layout5>
        <div className="container mx-auto mt-8 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="rounded">
                <h1 className="font-semibold text-3xl mb-4 text-black dark:text-white">
                  {data.title || data.name}
                </h1>

                {/* Author / Reporter / Admin */}
                <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-6 dark:text-gray-400">
                  {data.author && (
                    <span>
                      <i className="ri-user-fill"></i> {data.author}
                    </span>
                  )}
                  {data.reporter && (
                    <span>
                      <i className="ri-user-fill"></i> {data.reporter}
                    </span>
                  )}
                  {data.createdAt && (
                    <span>
                      <i className="ri-calendar-fill"></i>{" "}
                      {new Date(data.createdAt).toDateString()}
                    </span>
                  )}
                  {data.category?.name && (
                    <span>
                      <i className="ri-bookmark-fill"></i> {data.category.name}
                    </span>
                  )}
                </div>

                <hr className="dark:border-slate-800" />

                {/* Main Image */}
                {data.images?.[0]?.url && (
                  <div className="flex justify-center mt-6 mb-6">
                    <img
                      className="w-full max-w-full h-96 object-cover rounded-lg"
                      src={data.images[0].url}
                      alt={data.title || "image"}
                    />
                  </div>
                )}

                {/* Content */}
                <p className="text-gray-700 dark:text-gray-300 leading-7 whitespace-pre-line">
                  {data.description || data.content ? (
                    isHTML(data.description || data.content) ? (
                      <span dangerouslySetInnerHTML={{ __html: data.description || data.content }} />
                    ) : (
                      data.description || data.content
                    )
                  ) : (
                    ""
                  )}
                </p>

                {/* If news, show source */}
                {data.sourceUrl && (
                  <p className="mt-4">
                    Source:{" "}
                    <a
                      href={data.sourceUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-500 underline"
                    >
                      {data.sourceUrl}
                    </a>
                  </p>
                )}
              </div>

              <h3 className="uppercase font-bold tracking-wide border-b pb-4 mt-8 mb-4 dark:text-white dark:border-gray-700">
                Leave A Reply
              </h3>

              <p className="dark:text-gray-400">
                Your email address will not be published.
              </p>

              <form action="">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      className="form-input px-4 py-3 rounded-lg border w-full mt-5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="First Name"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      className="form-input px-4 py-3 rounded-lg border w-full mt-5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="Enter Email"
                    />
                  </div>
                </div>
                <div className="mb-5">
                  <input
                    type="text"
                    className="w-full form-input px-4 py-3 rounded-lg border mt-5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Website"
                  />
                </div>
                <textarea
                  className="mt-1 block border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  rows="5"
                  placeholder="write comment here"
                ></textarea>
                <Link
                  to="#"
                  className="btn mt-5 bg-black hover:bg-[#ff3750] dark:bg-[#ff3750] dark:hover:bg-gray-700"
                >
                  submit
                </Link>
              </form>
            </div>

            {/* Sidebar */}
            <div className="col-span-1">
              <form className="flex gap-1 mb-6">
                <input
                  type="search"
                  className="form-input px-4 py-3 rounded-lg w-full border dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="search..."
                />
                <button
                  className="btn rounded-lg px-4 py-1 bg-black hover:bg-[#ff3750] text-xl dark:bg-[#ff3750] dark:hover:bg-gray-700"
                  aria-label="search"
                >
                  <i className="ri-search-line"></i>
                </button>
              </form>

              <Social />
              <PostList />
            </div>
          </div>
        </div>
      </Layout5>
    </React.Fragment>
  );
};

export const Head = () => <Seo title="Single Post" />;

export default SinglePost;
