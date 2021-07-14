import React, { useState } from 'react';

import ControlMenu from './components/ControlMenu/ControlMenu';
import ProductCard from './components/ProductCard/ProductCard';
import Form from './components/Form/Form';

import './App.scss';

function App() {
  const [currency, setCurrency] = useState('UAH');
  const [convertedCurrency, setConvertedCurrency] = useState(0);

  return (
    <main className="App">
      <section className="App__main-section">
        <ControlMenu
          setCurrency={setCurrency}
          setConvertedCurrency={setConvertedCurrency}
          convertedCurrency={convertedCurrency}
        />

        <div className="App__products">
          <ProductCard
            currency={currency}
            convertedCurrency={convertedCurrency}
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
