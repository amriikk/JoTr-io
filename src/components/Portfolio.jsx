import React from 'react';

const Portfolio = ({ items }) => {

    return (
        <div className='section-center'>
            { items.map((portfolioItem) => {
                const { id, title, category, tech, img, desc} = portfolioItem;
                
                return (
                    <article key={id} className='portfolio-item'>
                        <img src={img} alt={title} className='photo' />
                        <div className='item-info'>
                            <header>
                                <h4>{ title }</h4>
                                <h5 className='tech'>{ tech }</h5>
                            </header>
                            <p className='item-text'>{ desc }</p>
                        </div>
                    </article>
                );
            })}
        </div>
    );
};

export default Portfolio;