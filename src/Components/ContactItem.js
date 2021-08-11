import React from 'react'

function ContactItem({ text1, title }) {
    return (
        <div className="ContactItem">
            <div className="Contact">
                <div className="right-items">
                    <h6>{title}</h6>
                    <p>{text1}</p>
                </div>
            </div>
        </div>

    )
}

export default ContactItem
