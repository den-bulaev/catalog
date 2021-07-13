import React from 'react';

import Products from '../../Database/products.json';

import './ProductCard.scss';

const ProductCard = () => (
  <>
    {Products.products.map(({
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
                <p>{`${price} ${'UAH'}`}</p>
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

export default React.memo(ProductCard);
