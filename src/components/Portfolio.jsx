import React from 'react';
import { FaGithub, FaLink} from "react-icons/fa";
import { SiVercel } from "react-icons/si";


const Portfolio = ({ items }) => {

    return (
        <div className='section-center'>
            { items.map((portfolioItem) => {
                const { id, title, category, tech, img, desc, ghLink} = portfolioItem;
                
                return (
                    <article key={id} className='portfolio-item'>
                        <img src={img} alt={title} className='photo' />
                        <div className='item-info'>
                            <header>
                                <h4>{ title }</h4>
                                <h4 className='gh-link'>
                                    <a href={ ghLink } target="_blank"> <FaGithub /> </a>
                                    <a href={ ghLink } target="_blank"> <FaLink /> </a>
                                </h4>
                            </header>
                            <h5 className='tech'>{ tech }</h5>
                            <p className='item-text'>{ desc }</p>
                        </div>
                    </article>
                );
            })}
        </div>
    );
};

export default Portfolio;