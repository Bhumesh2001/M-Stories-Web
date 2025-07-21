import React from "react"
import Header5 from "../../components/headers/Header5"
import Footer5 from "../../components/footers/Footer5"
import Footer3 from "../../components/footers/Footer3"


const Layout5 = ({ children }) => {
  return (
    <React.Fragment>
      <Header5 />
      {children}
      <Footer3 />
    </React.Fragment>
  )
}

export default Layout5
