import React from 'react';
import { FaGithub, FaLinkedin} from "react-icons/fa"

const Footer = () => {
    return (
        <div className='footer'>
            <br />
            <h3><FaGithub /><FaLinkedin /></h3>
        </div>
    );
}

export default Footer;