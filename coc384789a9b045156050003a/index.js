import React from "react"
import ReactDOM from "react-dom"
import App from "./App"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faEarthAmericas, faLocationDot)


ReactDOM.render(<App />, document.getElementById("root"))