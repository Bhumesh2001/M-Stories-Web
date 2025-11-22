import React, { useState, useEffect } from "react"
import Layout5 from "../common/layout/Layout5"
import PostList from "../common/PostList"
import MostPopular from "../common/MostPopular"
import Social2 from "../common/Social2"
import BreadCrumb from "../common/BreadCrumb"
import ClientOnly from "../components/utils/ClientOnly"
import { callApi } from "../services/apiHandler"

import img1 from "../assets/images/1.jpg"
import img2 from "../assets/images/3.jpg"
import img3 from "../assets/images/52.jpg"
import img4 from "../assets/images/22.jpg"
import img5 from "../assets/images/4.jpg"
import img6 from "../assets/images/6.jpg"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const [responseMessage, setResponseMessage] = useState("")

  useEffect(() => {
    if (!responseMessage) return
    const timer = setTimeout(() => setResponseMessage(""), 3000)
    return () => clearTimeout(timer)
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
      console.error("Error:", error.response?.data?.errors || error)
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
      <BreadCrumb title="Contact Us" />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Contact Form + Info */}
          <div className="col-span-1 md:col-span-2">
            {/* Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-center mt-5">
              <ContactCard
                icon="ri-map-pin-fill"
                title="Address"
                content="F-123 Ground floor, Abul-Fazal part II Jamia Nagar, Okhla, New Delhi 110025"
              />
              <ContactCard
                icon="ri-mail-fill"
                title="Email"
                content="muslim@stories.com"
              />
              <ContactCard
                icon="ri-phone-fill"
                title="Phone"
                content="610-403-403 <br /> 610-403-404"
              />
            </div>

            {/* Map */}
            <div className="mt-8 rounded overflow-hidden">
              <iframe
                title="location-map"
                src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d459938.4211270264!2d-80.1917902!3d25.7616798!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1711972983844!5m2!1sen!2sin"
                width="100%"
                height="450"
                className="border-0 rounded-lg"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Form */}
            <div className="mt-8">
              <h3 className="uppercase font-bold tracking-wide border-b-2 inline-block border-[#ff3750] pb-4 dark:text-white">
                Submit Queries
              </h3>

              <div className="bg-slate-50 dark:bg-gray-800 mt-6 p-5 md:p-10 rounded">
                <form onSubmit={handleSubmit} className="grid gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="First Name"
                      required
                      className="form-input w-full px-4 py-3 rounded-lg border dark:bg-gray-900 dark:border-gray-700 dark:text-white capitalize"
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      required
                      className="form-input w-full px-4 py-3 rounded-lg border dark:bg-gray-900 dark:border-gray-700 dark:text-white capitalize"
                    />
                  </div>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    required
                    className="w-full form-input px-4 py-3 rounded-lg border dark:bg-gray-900 dark:border-gray-700 dark:text-white"
                  />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write comment here"
                    rows="5"
                    required
                    className="w-full px-4 py-3 rounded-lg border dark:bg-gray-900 dark:border-gray-700 dark:text-white"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn mt-2 bg-black hover:bg-[#ff3750] disabled:opacity-50"
                  >
                    {loading ? "Sending..." : "Send"}
                  </button>
                </form>

                {responseMessage && (
                  <p className="mt-4 text-center text-gray-700 dark:text-gray-300">
                    {responseMessage}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-span-1">
            <Social2 />

            <ClientOnly>
              <PostList />
            </ClientOnly>

            <div className="main-title relative">
              <h2 className="text-2xl font-semibold mt-6 mb-6 lg:ps-4 dark:text-white">
                Most Popular
              </h2>
            </div>

            <ClientOnly>
              <MostPopular swiperData={swiperData} />
            </ClientOnly>
          </div>

        </div>
      </div>
    </Layout5>
  )
}

const ContactCard = ({ icon, title, content }) => (
  <div className="mt-5">
    <div className="text-2xl text-[#ff000] dark:text-white">
      <i className={icon}></i>
    </div>
    <h3 className="text-xl font-semibold dark:text-slate-200 mb-1">{title}:</h3>
    <p className="sm:text-sm md:text-base text-gray-400" dangerouslySetInnerHTML={{ __html: content }} />
  </div>
)

export default Contact
