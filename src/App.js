import React, { useState } from 'react';
import Portfolio from './components/Portfolio';
import Categories from './components/Categories';
import projects from './data';

function App() {
  const [portfolioItems, setPortfolioItems] = useState(projects);
  const [categories, setCategories] = useState([]);

  return (
    <main>
      <section className='portfolio'>
        <div>
          <h1>Jo.Tr.io</h1>
          <h2>A Visionary Portfolio</h2>
          <div className='underline'></div>
        </div>
        <Categories />
        <Portfolio />
      </section>
    </main>
  );
}

export default App;
