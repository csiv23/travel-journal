import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Header() {
    return (
        <div className="header--contents">
            <FontAwesomeIcon className="header--logo" icon="fa-solid fa-earth-americas" />
            <h1 className="header--title">my travel journal.</h1>
        </div>
    )
} 