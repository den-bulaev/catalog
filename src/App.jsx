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

const transformPrice = (price, rate) => {
  if (rate) {
    return (price / rate).toFixed(2);
  }

  return price;
};

const filterArr = (arr, lower, higher, rate) => {
  if (lower && higher) {
    return arr.filter(
      (el) => transformPrice(el.price, rate) >= +lower && transformPrice(el.price, rate) <= +higher,
    );
  }

  if (lower) {
    return arr.filter((el) => transformPrice(el.price, rate) >= +lower);
  }

  if (higher) {
    return arr.filter((el) => transformPrice(el.price, rate) <= +higher);
  }

  return arr;
};

function App() {
  const [currency, setCurrency] = useState('UAH');
  const [convertedCurrency, setConvertedCurrency] = useState(0);
  const [sortBy, setSortBy] = useState('descending');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  const productsCopy = [...Products.products];

  const filteredProducts = useMemo(() => filterArr(
    productsCopy, from, to, convertedCurrency,
  ), [sortBy, from, to]);

  const sortedProducts = useMemo(() => sortArr(
    sortBy, filteredProducts,
  ), [sortBy, from, to]);

  return (
    <main className="App">
      <section className="App__main-section">
        <ControlMenu
          setCurrency={setCurrency}
          setConvertedCurrency={setConvertedCurrency}
          convertedCurrency={convertedCurrency}
          setSortBy={setSortBy}
          sortBy={sortBy}
          from={from}
          to={to}
          setFrom={setFrom}
          setTo={setTo}
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
