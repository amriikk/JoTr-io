import React from 'react';

const Portfolio = ({ items }) => {

    return (
        <div className='section-center'>
            { items.map((portfolioItem) => {
                const { id, title, category, tech, img, desc} = portfolioItem

            })}
        </div>
    );
};

export default Portfolio;