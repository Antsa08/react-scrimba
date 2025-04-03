import React from "react"
import avatar from "/user.png"

import { Star } from './Star'

export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (212) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })
    /**
     * Challenge: Fill in the values in the markup
     * using the properties of our state object above
     * (Ignore `isFavorite` for now)
     */

    const { firstName, lastName, phone, email, isFavorite } = contact

    function toggleFavorite() {
        setContact(prev => {
        	return {...prev, isFavorite: !prev.isFavorite}
        })
    }

    return (
        <main>
            <article className="card">
                <img
                    src={avatar}
                    className="avatar"
                    alt="User profile picture of John Doe"
                />
                <div className="info">

                    <Star toggleFavorite={toggleFavorite} isFavorite={isFavorite} />

                    <h2 className="name">
                        { firstName } { lastName }
                    </h2>
                    <p className="contact">{ phone }</p>
                    <p className="contact">{ email }</p>
                </div>
            </article>
        </main>
    )
}
