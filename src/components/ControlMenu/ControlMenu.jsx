import React from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';

import { convertCurrency } from '../../api/currency';

import './ControlMenu.scss';

const currencyPair = ['USD', 'UAH'];

const ControlMenu = ({ setCurrency, setConvertedCurrency }) => {
  const defineCurrency = (event) => {
    setCurrency(event.target.innerText);
  };

  const handleClickConvert = debounce((event) => {
    defineCurrency(event);

    convertCurrency(currencyPair[0], currencyPair[1])
      .then((result) => setConvertedCurrency(result[currencyPair.join('_')]));
  }, 500);

  const handleClickUah = (event) => {
    defineCurrency(event);

    setConvertedCurrency(0);
  };

  return (
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

        <button
          type="button"
          className="button is-primary is-rounded usd"
          onClick={handleClickConvert}
        >
          USD
        </button>

        <button
          type="button"
          className="button is-warning has-text-info is-rounded uah"
          onClick={handleClickUah}
        >
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
};

ControlMenu.propTypes = {
  setCurrency: PropTypes.func.isRequired,
  setConvertedCurrency: PropTypes.func.isRequired,
};

export default React.memo(ControlMenu);
