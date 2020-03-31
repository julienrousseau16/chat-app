import React from 'react'
import './Contact.css'

const Contact = () => {
    return <div className="Contact">
        <img src='https://randomuser.me/api/portraits/women/85.jpg' alt='avatar-pic' className='avatar' />
        <div>
            <h4 className="name">Ann O' Nyme</h4>
            <div className='status'>
                <div className='status-online'></div>
                <p className="status-text">online</p>
            </div>
        </div>
    </div>
}

export default Contact