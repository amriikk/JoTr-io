import React from 'react';

const Portfolio = ({ items }) => {

    return (
        <div className='section-center'>
            { items.map((portfolioItem) => {
                const { id, title, category, tech, img, desc} = portfolioItem;
                
                return (
                    <article key={id} className='portfolio-item'>
                        <img src={img} alt={title} className='photo' />
                    </article>
                );
            })}
        </div>
    );
};

export default Portfolio;