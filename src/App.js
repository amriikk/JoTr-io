import React, { useState } from 'react';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Categories from './components/Categories';
import projects from './data';

const allCategories = ['all', ...new Set(projects.map((item) => item.category))];

function App() {
  const [portfolioItems, setPortfolioItems] = useState(projects);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if(category === 'all'){
      setPortfolioItems(projects);
      return;
    }
    const newItems = projects.filter((item) => item.category === category);
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
        <Categories categories={categories} filterItems={filterItems}/>
        <Portfolio items={portfolioItems} />
        <br /><hr />
        <Footer />
      </section>
    </main>
  );
}

export default App;
