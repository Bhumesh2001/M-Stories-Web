import React, { useEffect } from "react"
import Aos from "aos"
import Seo from "../components/seo"
import Section6 from "../common/view/index/Section6"
import Section8 from "../common/view/index/Section8"
import Layout from "../common/layout/Layout"
import Section3 from '../common/view/index-3/Section3';
import Section2 from '../common/view/index-3/Section2';
import Section4 from '../common/view/index-3/Section4';
import Section7 from "../common/view/index-3/Section7";
import Section8HotStory from "../common/view/index-3/Section8"

const Index = () => {

  useEffect(() => {
    Aos.init({ duration: 1000, disable: "mobile", offset: 100, once: true })

    // refresh aos on scroll
    const handleScroll = () => {
      Aos.refresh()
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <React.Fragment>
      <Layout>
        <Section8 />
        <Section3 />
        <Section6 />
        <Section2 />
        <Section4 />
        <Section7 />
        <Section8HotStory />
      </Layout>
    </React.Fragment>
  )
};

export const Head = () => <Seo title="Index" />

export default Index
