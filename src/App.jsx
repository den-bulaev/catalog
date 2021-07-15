import React, { useState, useMemo } from 'react';

import ControlMenu from './components/ControlMenu/ControlMenu';
import ProductCard from './components/ProductCard/ProductCard';
import Form from './components/Form/Form';

import Products from './Database/products.json';

import './App.scss';

const sortArr = (by, arr) => {
  switch (by) {
    case 'descending':
      return arr.sort((a, b) => b.price - a.price);

    case 'ascending':
      return arr.sort((a, b) => a.price - b.price);

    case 'alphabet':
      return arr.sort((a, b) => a.name.localeCompare(b.name));

    default:
      throw new Error(`Unexpected sort option: ${by}`);
  }
};

function App() {
  const [currency, setCurrency] = useState('UAH');
  const [convertedCurrency, setConvertedCurrency] = useState(0);
  const [sortBy, setSortBy] = useState('descending');

  const arr = [...Products.products];

  const sortedProducts = useMemo(() => sortArr(sortBy, arr), [sortBy]);

  return (
    <main className="App">
      <section className="App__main-section">
        <ControlMenu
          setCurrency={setCurrency}
          setConvertedCurrency={setConvertedCurrency}
          convertedCurrency={convertedCurrency}
          setSortBy={setSortBy}
          sortBy={sortBy}
        />

        <div className="App__products">
          <ProductCard
            currency={currency}
            convertedCurrency={convertedCurrency}
            sortedProducts={sortedProducts}
          />
        </div>
      </section>

      <section className="App__new-product-section">
        <Form />
      </section>
    </main>
  );
}

export default App;
