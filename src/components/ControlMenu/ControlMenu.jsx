import React from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';

import { convertCurrency } from '../../api/currency';

import './ControlMenu.scss';

const currencyPair = ['USD', 'UAH'];

const ControlMenu = ({
  setCurrency, setConvertedCurrency, sortBy, setSortBy,
}) => {
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

  const handleChange = (event) => {
    const sortOption = event.target.id;

    setSortBy(sortOption);
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
          <label htmlFor="ascending" className="ControlMenu__radio">
            <input
              type="radio"
              id="ascending"
              name="sort"
              onChange={handleChange}
              checked={sortBy === 'ascending'}
            />
            price ascending
          </label>
          <label htmlFor="descending" className="ControlMenu__radio">
            <input
              type="radio"
              id="descending"
              name="sort"
              onChange={handleChange}
              checked={sortBy === 'descending'}
            />
            price descending
          </label>
          <label htmlFor="alphabet" className="ControlMenu__radio">
            <input
              type="radio"
              id="alphabet"
              name="sort"
              onChange={handleChange}
              checked={sortBy === 'alphabet'}
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
  sortBy: PropTypes.string.isRequired,
  setSortBy: PropTypes.func.isRequired,
};

export default React.memo(ControlMenu);
