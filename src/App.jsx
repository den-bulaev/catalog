import React from 'react';

import ControlMenu from './components/ControlMenu/ControlMenu';
import ProductCard from './components/ProductCard/ProductCard';
import Form from './components/Form/Form';

import './App.scss';

function App() {
  return (
    <main className="App">
      <section className="App__main-section">
        <ControlMenu />

        <div className="App__products">
          <ProductCard />
        </div>
      </section>

      <section className="App__new-product-section">
        <Form />
      </section>
    </main>
  );
}

export default App;
