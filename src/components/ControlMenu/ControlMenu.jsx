import React from 'react';

import './ControlMenu.scss';

const ControlMenu = () => (
  <div className="ControlMenu">
    <div className="ControlMenu__block">
      <h2 className="title is-3 ControlMenu--title">
        Price
      </h2>

      <div className="ControlMenu__price-wrapper">
        <label htmlFor="from" className="ControlMenu__price-label">
          From:
          <input
            type="number"
            className="input ControlMenu__price"
            placeholder="From"
            id="from"
          />
        </label>

        <label htmlFor="to" className="ControlMenu__price-label">
          To:
          <input
            type="number"
            className="input ControlMenu__price"
            placeholder="To"
            id="to"
          />
        </label>
      </div>
    </div>

    <div className="ControlMenu__block">
      <h2 className="title is-3 ControlMenu--title">
        Currency
      </h2>

      <button type="button" className="button is-primary is-rounded usd">
        USD
      </button>

      <button type="button" className="button is-warning has-text-info is-rounded uah">
        UAH
      </button>
    </div>

    <div className="ControlMenu__block">
      <h2 className="title is-3 ControlMenu--title">
        Sort by
      </h2>

      <div>
        <label htmlFor="radio-1" className="ControlMenu__radio">
          <input
            type="radio"
            id="radio-1"
            name="sort"
          />
          price ascending
        </label>
        <label htmlFor="radio-2" className="ControlMenu__radio">
          <input
            type="radio"
            id="radio-2"
            name="sort"
            checked
          />
          price descending
        </label>
        <label htmlFor="radio-3" className="ControlMenu__radio">
          <input
            type="radio"
            id="radio-3"
            name="sort"
          />
          alphabet
        </label>
      </div>
    </div>
  </div>
);

export default React.memo(ControlMenu);
