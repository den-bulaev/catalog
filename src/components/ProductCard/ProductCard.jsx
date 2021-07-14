import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import Products from '../../Database/products.json';

import './ProductCard.scss';

const ProductCard = ({ currency, convertedCurrency, sortBy }) => {
  const sortProducts = () => {
    const arr = [...Products.products];

    switch (sortBy) {
      case 'descending':
        return arr.sort((a, b) => a.price - b.price);

      case 'ascending':
        return arr.sort((a, b) => b.price - a.price);

      case 'alphabet':
        return arr.sort((a, b) => a.name.localeCompare(b.name));

      default:
        throw new Error(`Unexpected sort option: ${sortBy}`);
    }
  };

  const sortedProducts = useMemo(sortProducts, [sortBy]);

  return (
    <>
      {sortedProducts.map(({
        id, name, price, image, description,
      }) => (
        <div key={id} className="ProductCard">
          <div className="card ProductCard--card">
            <div className="card-content">
              <div className="media">
                <div className="media-left">
                  <figure>
                    <img
                      src={image}
                      alt={name}
                      className="ProductCard__image"
                    />
                  </figure>
                </div>
                <div className="media-content">
                  <p className="title is-4">{name}</p>
                  <p>{`${convertedCurrency ? (price / convertedCurrency).toFixed(2) : price} ${currency}`}</p>
                  <p>Description:</p>
                  <p>
                    {description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

ProductCard.propTypes = {
  currency: PropTypes.string.isRequired,
  convertedCurrency: PropTypes.number.isRequired,
  sortBy: PropTypes.string.isRequired,
};

export default React.memo(ProductCard);
