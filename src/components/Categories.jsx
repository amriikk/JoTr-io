import React from 'react';

const Categories = ({ filterItems }) => {
    return (
        <div className='btn-container'>
            <button className='filter-btn' onClick={() => filterItems('React')}>
                React
            </button>
        </div>
    );
};

export default Categories;