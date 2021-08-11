import React from 'react'
import { NavLink } from 'react-router-dom'

function Categories({ filter, categories }) {
    return (
        <div className="buttons">
            {/* <h1 onClick={() => filter('Animation')}>Animation</h1> */}
            {
                categories.map((cat, i) => {
                    return <button type="button" class="btn-port" onClick={() => filter(cat)} key={i}>{cat}</button>
                })
            }
        </div>
    )
}

export default Categories
