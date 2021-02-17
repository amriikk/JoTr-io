import React, { useState } from 'react';
import Portfolio from './components/Portfolio';
import Categories from './components/Categories';
import projects from './data';

function App() {
  const [portfolioItems, setPortfolioItems] = useState(projects);
  const [categories, setCategories] = useState([]);

  const filterItems = (category) => {
    const newItems = items.filter((item) => item.category === category);
    setPortfolioItems(newItems);
  };

  return (
    <main>
      <section className='portfolio'>
        <div>
          <h1 className='title'>Jo.Tr.io</h1>
          <h2 className='subtitle'>A Visionary Portfolio</h2>
          <div className='underline'></div>
        </div>
        <Categories filterItems={filterItems}/>
        <Portfolio items={portfolioItems} />
      </section>
    </main>
  );
}

export default App;
