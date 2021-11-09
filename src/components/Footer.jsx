import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaFilePdf } from "react-icons/fa"

const Footer = () => {
    return (
        <div align="center" className='footer'>
            <br />
            <h3><FaGithub /> <FaLinkedin /> <FaInstagram /> <FaFilePdf /></h3>
        </div>
    );
}

export default Footer;