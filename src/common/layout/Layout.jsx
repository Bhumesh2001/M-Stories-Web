import React from "react"
import Header from "../../components/headers/Header"
import Footer3 from "../../components/footers/Footer3"

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer3 />
    </React.Fragment>
  )
}

export default Layout
