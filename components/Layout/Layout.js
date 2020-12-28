import React from "react"
import Navbar from "./Navbar/Navbar"
import Pie from "./Pie"
import 'react-bulma-components/dist/react-bulma-components.min.css';

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Pie />
    </div>
  )
}

export default Layout
