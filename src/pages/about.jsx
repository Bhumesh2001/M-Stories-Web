import React from "react"
import Layout5 from "../common/layout/Layout5"
import BreadCrumb from "../common/BreadCrumb"
import Seo from "../components/seo"
import { Link } from "gatsby"
import about from "../assets/images/about.jpg"
import clothImg from "../assets/images/19.jpg"
import brand1 from "../assets/images/29.jpg"
import brand2 from "../assets/images/37.jpg"
import brand3 from "../assets/images/47.jpg"
import brand4 from "../assets/images/57.jpg"

const About = () => {
  return (
    <React.Fragment>
      <Layout5>
        {/* Breadcrumb */}
        <BreadCrumb title="About us" titleType="Pages" />

        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="mb-4">
              <h3 className="text-xl sm:text-2xl font-medium dark:text-white dark:hover:text-[#ff3750]">
                Focus on Inspiration and Leadership (Elevated Tone)
              </h3>
            </div>
            <div className="text-center mx-auto my-0 w-full max-w-3xl">
              <p className="text-sm text-gray-400 leading-6 mb-4 dark:text-gray-300">
                Muslim Stories Media shares inspiring stories of Muslim success, highlighting startups and featuring conversations with influential figures. We aim to amplify the voices of Muslim innovators and leaders.
              </p>
            </div>
            <img
              className="h-auto max-w-full rounded-lg w-full"
              src={about}
              alt="blog post"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-6 mb-8 mt-8 md:-mt-20 mx-5">
              <div className="mb-5 md:mb-0">
                <Link
                  to="#"
                  className="block p-5 xl:p-10 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                >
                  <h5 className="mb-2 text-lg font-bold uppercase tracking-tight text-gray-900 dark:text-white">
                    Focus on Innovation and Startups
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Muslim Stories Media shares inspiring stories of Muslim success
                  </p>
                </Link>
              </div>
              <div className="mb-5 md:mb-0">
                <Link
                  to="#"
                  className="block p-5 xl:p-10 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                >
                  <h5 className="mb-2 text-lg font-bold uppercase tracking-tight text-gray-900 dark:text-white">
                    Highlighting Success. Inspiring Innovation.
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Muslim Stories Media shares inspiring stories of Muslim success
                  </p>
                </Link>
              </div>
              <div>
                <Link
                  to="#"
                  className="block p-5 xl:p-10 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                >
                  <h5 className="mb-2 text-lg font-bold uppercase tracking-tight text-gray-900 dark:text-white">
                    The Platform for Muslim Trailblazers.
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Muslim Stories Media shares inspiring stories of Muslim success
                  </p>
                </Link>
              </div>
            </div>

            <h3 className="text-xl md:text-2xl font-medium mt-8 md:mt-28 dark:text-white dark:hover:text-[#ff3750]">
              The Stories Behind Muslim Success: Leadership, Startups, and Global Impact.
            </h3>
          </div>
          <div className="text-center mx-auto my-0 w-full max-w-3xl">
            <p className="text-gray-400 leading-6 mb-4 dark:text-gray-300">
              Muslim Stories Media shares inspiring stories of Muslim success, highlighting startups and featuring conversations with influential figures. We aim to amplify the voices of Muslim innovators and leaders.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xs:gap-0 gap-6 mb-28 mt-8">
            <div className="text-center mx-auto">
              <div className="w-16 h-16 bg-[#ff3750] text-white rounded-full mx-auto mb-6">
                <i className="ri-drag-move-fill text-4xl leading-[64px]"></i>
              </div>
              <h5 className="mb-2 text-lg font-bold uppercase tracking-tight text-gray-900 dark:text-white">
                Success. Amplified.
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                highlighting startups and featuring conversations with influential figures.
              </p>
            </div>
            <div className="text-center mx-auto">
              <div className="w-16 h-16 bg-[#ff3750] text-white rounded-full mx-auto mb-6">
                <i className="ri-drag-move-fill text-4xl leading-[64px]"></i>
              </div>
              <h5 className="mb-2 text-lg font-bold uppercase tracking-tight text-gray-900 dark:text-white">
                Inspiring Stories. Muslim Voices.
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                highlighting startups and featuring conversations with influential figures.
              </p>
            </div>
            <div className="text-center mx-auto">
              <div className="w-16 h-16 bg-[#ff3750] text-white rounded-full mx-auto mb-6">
                <i className="ri-drag-move-fill text-4xl leading-[64px]"></i>
              </div>
              <h5 className="mb-2 text-lg font-bold uppercase tracking-tight text-gray-900 dark:text-white">
                The Voice of Muslim Innovation.
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                highlighting startups and featuring conversations with influential figures.
              </p>
            </div>
          </div>

          <div className="block sm:flex gap-4 items-center">
            <div className="w-full sm:w-1/2">
              <img
                className="h-auto max-w-full rounded-lg w-full"
                src={clothImg}
                alt="blog post"
              />
            </div>
            <div className="mt-5 sm:mt-0 w-full sm:w-1/2">
              <span className="block text-[#ff3750] uppercase mb-4">
                FLAT DISCOUNT 70% OFF ON SELECTED ITEMS
              </span>
              <h3 className="text-xl mb-4 dark:text-white">
                They are the most expendable pieces of furniture on face of the
                earth.
              </h3>
              <p className="text-sm text-gray-500 leading-6 dark:text-gray-300">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using ‘Content
                here, content here’, making it look like readable English.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xs:gap-0 gap-6 mt-8">
            <div>
              <div className="">
                <Link to="#">
                  <img
                    className="h-auto max-w-full rounded-lg w-full"
                    src={brand1}
                    alt=""
                  />
                </Link>
                <div className="py-3">
                  <Link to="#">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Quality
                    </h5>
                  </Link>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque quis ligula eu lectus vulputate porttitor sed
                    feugiat nunc. Mauris ac consectetur ante, dapibus gravida
                    tellus. Nullam aliquet eleifend dapibus.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="">
                <Link to="#">
                  <img
                    className="h-auto max-w-full rounded-lg w-full"
                    src={brand2}
                    alt=""
                  />
                </Link>
                <div className="py-3">
                  <Link to="#">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Teamwork
                    </h5>
                  </Link>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque quis ligula eu lectus vulputate porttitor sed
                    feugiat nunc. Mauris ac consectetur ante, dapibus gravida
                    tellus. Nullam aliquet eleifend dapibus.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="">
                <Link to="#">
                  <img
                    className="h-auto max-w-full rounded-lg w-full"
                    src={brand3}
                    alt=""
                  />
                </Link>
                <div className="py-3">
                  <Link to="#">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Respect
                    </h5>
                  </Link>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque quis ligula eu lectus vulputate porttitor sed
                    feugiat nunc. Mauris ac consectetur ante, dapibus gravida
                    tellus. Nullam aliquet eleifend dapibus.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="">
                <Link to="#">
                  <img
                    className="h-auto max-w-full rounded-lg w-full"
                    src={brand4}
                    alt=""
                  />
                </Link>
                <div className="py-3">
                  <Link to="#">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Responsibility
                    </h5>
                  </Link>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque quis ligula eu lectus vulputate porttitor sed
                    feugiat nunc. Mauris ac consectetur ante, dapibus gravida
                    tellus. Nullam aliquet eleifend dapibus.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-6 mt-8">
            <div>
              <div className="py-3">
                <Link to="#">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Our Mission
                  </h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  I am text block. Click edit button to change this text. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                  tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>
              </div>
            </div>
            <div>
              <div className="py-3">
                <Link to="#">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Our Vision
                  </h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  I am text block. Click edit button to change this text. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                  tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout5>
    </React.Fragment>
  )
}

export const Head = () => <Seo title="About us" />

export default About
