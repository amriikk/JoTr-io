import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaFilePdf } from "react-icons/fa";

const Footer = () => {
    return (
        <div align="center" className='footer'>
            <br />
            <h3 className="fa-links">
                <a href="https://github.com/amriikk" target="_blank">
                    <FaGithub />      
                </a>
                <a href="https://www.linkedin.com/in/jhonkhrizhtian/" target="_blank">
                    <FaLinkedin />         
                </a>
                <a href="https://instagram.com/vajra.io" target="_blank">
                    <FaInstagram />         
                </a>
                <a href='https://drive.google.com/file/d/1fmlfrL7hsSAkFjbSsqAGp2It4uamFdZ2/view?usp=sharing' target="_blank" download>
                    <FaFilePdf />
                </a>
            </h3>
        </div>
    );
}

export default Footer;