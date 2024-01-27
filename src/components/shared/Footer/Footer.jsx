import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillChatRightHeartFill } from "react-icons/bs";

import "./Footer.scss";

const Footer = () => {
    return(
        <footer className='footer'>
            <div className='footer-info'>
                <span><BsFillChatRightHeartFill /></span>
                <p>Powered by <Link to="https://hindrav.com" className='footer-link'>@hindrav</Link></p>
            </div>
        </footer>
    )
}

export { Footer};