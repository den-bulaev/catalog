import React from 'react';
import PropTypes from 'prop-types';

import './ProductCard.scss';

const ProductCard = ({
  currency, convertedCurrency, sortedProducts,
}) => (
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

ProductCard.propTypes = {
  currency: PropTypes.string.isRequired,
  convertedCurrency: PropTypes.number.isRequired,
  sortedProducts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  })).isRequired,
};

export default React.memo(ProductCard);
