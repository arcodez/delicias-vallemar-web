import React from "react"
import { empresa, encargados } from "../miconfig"
import { Link } from "gatsby"

function Pie() {
  return (
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>{` ${empresa.nombre}`}</strong> by
          <Link to="https://jgthms.com"> {` ${encargados.nombre[1]}`} </Link>.
          The source code is licensed
          <Link to="http://opensource.org/licenses/mit-license.php">MIT</Link>.
          The website content is licensed
          <Link to="http://creativecommons.org/licenses/by-nc-sa/4.0/">
            CC BY NC SA 4.0
          </Link>
          .
        </p>
      </div>
    </footer>
  )
}

export default Pie
