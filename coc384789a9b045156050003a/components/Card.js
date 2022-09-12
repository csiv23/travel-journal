import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Card(props) {
    let location = (props.location).toUpperCase()
    return (
        <div className="card">
            <div className="card--contents">
                <div className="card--image" style={{ backgroundImage: `url(${props.imageUrl})` }}></div>
                <div className="card--stats">
                    <div className="card--location-stats">
                        <span className="card--location">
                            <FontAwesomeIcon className="card--location-icon" icon="fa-solid fa-location-dot" />
                            {location}
                        </span>
                        <a className="card--mapslink" href="{props.googleMapsUrl}">View on Google Maps</a>
                    </div>
                    <h2 className="card--title">{props.title}</h2>
                    <h3 className="card--date">{props.startDate} - {props.endDate}</h3>
                    <p className="card--description">{props.description}</p>
                </div>
            </div>
            {!props.isLast && <div className="card--line"></div>}
        </div>

    )
}