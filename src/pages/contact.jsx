// import React from "react"
// import Layout5 from "../common/layout/Layout5"
// import { Link } from "gatsby"
// import PostList from "../common/PostList"
// import MostPopular from "../common/MostPopular"
// import Social2 from "../common/Social2"
// import img1 from "../assets/images/1.jpg"
// import img2 from "../assets/images/3.jpg"
// import img3 from "../assets/images/52.jpg"
// import img4 from "../assets/images/22.jpg"
// import img5 from "../assets/images/4.jpg"
// import img6 from "../assets/images/6.jpg"
// import BreadCrumb from "../common/BreadCrumb"

// const Contact = () => {
//   const swiperData = [
//     { id: 1, margin: false, image: img1 },
//     { id: 2, margin: true, image: img2 },
//     { id: 3, margin: true, image: img3 },
//     { id: 4, margin: false, image: img4 },
//     { id: 5, margin: true, image: img5 },
//     { id: 6, margin: true, image: img6 },
//   ]
//   return (
//     <Layout5>
//       {/* breadcrumb */}
//       <BreadCrumb title="Contact Us" />

//       {/* content */}
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xs:gap-0 gap-8">
//           <div className="col-span-1 md:col-span-2">
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 xs:gap-0 gap-2">
//               <div className="text-center mt-5">
//                 <div className="text-2xl text-[#ff000] dark:text-white">
//                   <i className=" ri-map-pin-fill"></i>
//                 </div>
//                 <h3 className="text-xl font-semibold dark:text-slate-200 dark:font-normal mb-1">
//                   Address:
//                 </h3>
//                 <p className="sm:text-sm md:text-base text-gray-400">
//                   1093 Marigold Lane, Coral Way, Miami, Florida, 33169
//                 </p>
//               </div>

//               <div className="text-center mt-5">
//                 <div className="text-2xl text-[#ff000] dark:text-white">
//                   <i className="ri-mail-fill"></i>
//                 </div>
//                 <h3 className="text-xl font-semibold dark:text-slate-200 dark:font-normal mb-1">
//                   Email:
//                 </h3>
//                 <p className="sm:text-sm md:text-base text-gray-400">
//                   company@example.com
//                 </p>
//               </div>

//               <div className="text-center mt-5">
//                 <div className="text-2xl text-[#ff000] dark:text-white">
//                   <i className="ri-phone-fill"></i>
//                 </div>
//                 <h3 className="text-xl font-semibold dark:text-slate-200 dark:font-normal mb-1">
//                   Phone:
//                 </h3>
//                 <p className="sm:text-sm md:text-base text-gray-400">
//                   610-403-403 <br /> 610-403-404
//                 </p>
//               </div>
//             </div>

//             <div className="block mt-8">
//               <iframe
//                 title="video"
//                 src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d459938.4211270264!2d-80.1917902!3d25.7616798!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1711972983844!5m2!1sen!2sin"
//                 width="100%"
//                 height="450"
//                 style={{ border: "0px", borderRadius: "8px" }}
//                 allowFullScreen=""
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//               ></iframe>
//             </div>

//             <div className="border-b mt-8 dark:border-gray-700">
//               <h3 className="uppercase font-bold tracking-wide border-b-2 inline-block border-[#ff3750] pb-4 dark:text-white">
//                 Submit Queries
//               </h3>
//             </div>

//             <div className="bg-slate-50 mt-8 p-5 md:p-10 rounded dark:bg-gray-800">
//               <form action="">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-0 sm:gap-2 md:gap-8">
//                   <div>
//                     <input
//                       type="text"
//                       className="form-input px-4 py-3 rounded-lg border w-full mt-5 dark:bg-gray-900 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white capitalize"
//                       placeholder="First Name"
//                     />
//                   </div>
//                   <div>
//                     <input
//                       type="email"
//                       className="form-input px-4 py-3 rounded-lg border w-full mt-5 dark:bg-gray-900 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white capitalize"
//                       placeholder="Enter email"
//                     />
//                   </div>
//                 </div>
//                 <div className="mb-5">
//                   <input
//                     type="text"
//                     className="w-full form-input px-4 py-3 rounded-lg border mt-5 dark:bg-gray-900 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white"
//                     placeholder="Subject"
//                   />
//                 </div>
//                 <textarea
//                   className="mt-1 block border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5 dark:bg-gray-900 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white capitalize"
//                   rows="5"
//                   placeholder="write comment here"
//                   defaultValue={""}
//                 ></textarea>
//                 <Link to="#" className="btn mt-5 bg-black hover:bg-[#ff3750]">
//                   Send
//                 </Link>
//               </form>
//             </div>
//           </div>

//           {/*  */}
//           <div className="col-span-1 overflow-hidden">
//             <Social2 />
//             <PostList />
//             <div className="main-title relative">
//               <h2 className="text-2xl font-semibold mt-6 mb-6 lg:ps-4 dark:text-white">
//                 Most Popular
//               </h2>
//             </div>
//             <MostPopular swiperData={swiperData} />
//           </div>
//         </div>
//       </div>
//     </Layout5>
//   )
// }

// export default Contact


import React, { useState, useEffect } from "react"
import Layout5 from "../common/layout/Layout5"
// import { Link } from "gatsby"
import PostList from "../common/PostList"
import MostPopular from "../common/MostPopular"
import Social2 from "../common/Social2"
import img1 from "../assets/images/1.jpg"
import img2 from "../assets/images/3.jpg"
import img3 from "../assets/images/52.jpg"
import img4 from "../assets/images/22.jpg"
import img5 from "../assets/images/4.jpg"
import img6 from "../assets/images/6.jpg"
import BreadCrumb from "../common/BreadCrumb"
import { callApi } from "../services/apiHandler"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)
  const [responseMessage, setResponseMessage] = useState("")

  // 👇 auto remove message after 3s
  useEffect(() => {
    if (responseMessage) {
      const timer = setTimeout(() => {
        setResponseMessage("")
      }, 3000) // 3 seconds
      return () => clearTimeout(timer) // cleanup
    }
  }, [responseMessage])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setResponseMessage("")

    try {
      await callApi("/contacts", "POST", JSON.stringify(formData))
      setResponseMessage("✅ Query submitted successfully!")
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      console.error("Error:", error.response.data.errors || error);
      setResponseMessage("⚠️ Something went wrong.")
    } finally {
      setLoading(false)
    }
  }

  const swiperData = [
    { id: 1, margin: false, image: img1 },
    { id: 2, margin: true, image: img2 },
    { id: 3, margin: true, image: img3 },
    { id: 4, margin: false, image: img4 },
    { id: 5, margin: true, image: img5 },
    { id: 6, margin: true, image: img6 },
  ]

  return (
    <Layout5>
      {/* breadcrumb */}
      <BreadCrumb title="Contact Us" />

      {/* content */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xs:gap-0 gap-8">
          <div className="col-span-1 md:col-span-2">
            {/* Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 xs:gap-0 gap-2">
              <div className="text-center mt-5">
                <div className="text-2xl text-[#ff000] dark:text-white">
                  <i className=" ri-map-pin-fill"></i>
                </div>
                <h3 className="text-xl font-semibold dark:text-slate-200 dark:font-normal mb-1">
                  Address:
                </h3>
                <p className="sm:text-sm md:text-base text-gray-400">
                  1093 Marigold Lane, Coral Way, Miami, Florida, 33169
                </p>
              </div>

              <div className="text-center mt-5">
                <div className="text-2xl text-[#ff000] dark:text-white">
                  <i className="ri-mail-fill"></i>
                </div>
                <h3 className="text-xl font-semibold dark:text-slate-200 dark:font-normal mb-1">
                  Email:
                </h3>
                <p className="sm:text-sm md:text-base text-gray-400">
                  company@example.com
                </p>
              </div>

              <div className="text-center mt-5">
                <div className="text-2xl text-[#ff000] dark:text-white">
                  <i className="ri-phone-fill"></i>
                </div>
                <h3 className="text-xl font-semibold dark:text-slate-200 dark:font-normal mb-1">
                  Phone:
                </h3>
                <p className="sm:text-sm md:text-base text-gray-400">
                  610-403-403 <br /> 610-403-404
                </p>
              </div>
            </div>

            {/* Map */}
            <div className="block mt-8">
              <iframe
                title="video"
                src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d459938.4211270264!2d-80.1917902!3d25.7616798!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1711972983844!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: "0px", borderRadius: "8px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Form */}
            <div className="border-b mt-8 dark:border-gray-700">
              <h3 className="uppercase font-bold tracking-wide border-b-2 inline-block border-[#ff3750] pb-4 dark:text-white">
                Submit Queries
              </h3>
            </div>

            <div className="bg-slate-50 mt-8 p-5 md:p-10 rounded dark:bg-gray-800">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 sm:gap-2 md:gap-8">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input px-4 py-3 rounded-lg border w-full mt-5 dark:bg-gray-900 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white capitalize"
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input px-4 py-3 rounded-lg border w-full mt-5 dark:bg-gray-900 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white capitalize"
                      placeholder="Enter email"
                      required
                    />
                  </div>
                </div>
                <div className="mb-5">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full form-input px-4 py-3 rounded-lg border mt-5 dark:bg-gray-900 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Subject"
                    required
                  />
                </div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5 dark:bg-gray-900 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white capitalize"
                  rows="5"
                  placeholder="Write comment here"
                  required
                ></textarea>
                <button
                  type="submit"
                  disabled={loading}
                  className="btn mt-5 bg-black hover:bg-[#ff3750] disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Send"}
                </button>
              </form>

              {responseMessage && (
                <p className="mt-4 text-sm text-center text-gray-700 dark:text-gray-300">
                  {responseMessage}
                </p>
              )}
            </div>
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
  )
}

export default Contact
