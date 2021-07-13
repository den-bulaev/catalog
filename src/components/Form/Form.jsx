import React from 'react';

import './Form.scss';

const Form = () => (
  <form action="" className="Form box">
    <div className="Form__container">
      <div className="Form__block">
        <label htmlFor="name">
          Name
        </label>

        <input
          className="input Form--input"
          type="text"
          placeholder="Product name"
          name="product-name"
          id="name"
          maxLength="32"
          required
        />
      </div>

      <div className="Form__block">
        <label htmlFor="price">
          Price
        </label>

        <input
          className="input Form--input"
          type="number"
          placeholder="Pice"
          name="price"
          id="price"
          required
        />
      </div>

      <div className="Form__block">
        <label htmlFor="1">Picture</label>
        <button
          type="button"
          className="button is-light"
          id="1"
        >
          +
        </button>
      </div>
    </div>

    <div className="Form__container">
      <textarea
        className="textarea"
        placeholder="Description"
        maxLength="500"
        required
      />
      <button type="submit" className="button is-light">
        Add product
      </button>
    </div>
  </form>
);

export default React.memo(Form);
