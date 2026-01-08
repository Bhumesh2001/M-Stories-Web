import React from "react"
import Layout5 from "../common/layout/Layout5"
import BreadCrumb from "../common/BreadCrumb"
import Seo from "../components/seo"
import { Link } from "gatsby"
import m_stories from "../assets/images/m_stories.png"

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
                Muslim Stories Media shares inspiring stories of Muslim success,
                highlighting startups and featuring conversations with
                influential figures. We aim to amplify the voices of Muslim
                innovators and leaders.
              </p>
            </div>
            <img
              className="h-full max-w-full rounded-lg w-full"
              src={m_stories}
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
                    Muslim Stories Media shares inspiring stories of Muslim
                    success
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
                    Muslim Stories Media shares inspiring stories of Muslim
                    success
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
                    Muslim Stories Media shares inspiring stories of Muslim
                    success
                  </p>
                </Link>
              </div>
            </div>

            <h3 className="text-xl md:text-2xl font-medium mt-8 md:mt-28 dark:text-white dark:hover:text-[#ff3750]">
              The Stories Behind Muslim Success: Leadership, Startups, and
              Global Impact.
            </h3>
          </div>
          <div className="text-center mx-auto my-0 w-full max-w-3xl">
            <p className="text-gray-400 leading-6 mb-4 dark:text-gray-300">
              Muslim Stories Media shares inspiring stories of Muslim success,
              highlighting startups and featuring conversations with influential
              figures. We aim to amplify the voices of Muslim innovators and
              leaders.
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
                highlighting startups and featuring conversations with
                influential figures.
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
                highlighting startups and featuring conversations with
                influential figures.
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
                highlighting startups and featuring conversations with
                influential figures.
              </p>
            </div>
          </div>

        </div>
      </Layout5>
    </React.Fragment>
  )
}

export const Head = () => <Seo title="About us" />

export default About
