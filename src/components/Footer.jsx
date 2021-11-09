import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaFilePdf } from "react-icons/fa";

const Footer = () => {
    return (
        <div align="center" className='footer'>
            <br />
            <h3 className="fa-links">
                <a href="https://github.com/amriikk">
                    <FaGithub />      
                </a>
                <a href="https://www.linkedin.com/in/jhonkhrizhtian/">
                    <FaLinkedin />         
                </a>
                <a href="https://instagram.com/vajra.io">
                    <FaInstagram />         
                </a>
                <a href='https://drive.google.com/file/d/1fmlfrL7hsSAkFjbSsqAGp2It4uamFdZ2/view?usp=sharing' download>
                    <FaFilePdf />
                </a>
            </h3>
        </div>
    );
}

export default Footer;