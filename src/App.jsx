import React from 'react';

import Products from './Database/products.json';

import './App.scss';

function App() {
  return (
    <main className="App">
      <section className="App__main-section">
        <div className="Control-menu">
          <div className="Control-menu__block">
            <h2 className="title is-3 Control-menu--title">
              Price
            </h2>

            <div className="Control-menu__price-wrapper">
              <label htmlFor="from" className="Control-menu__price-label">
                From:
                <input
                  type="number"
                  className="input Control-menu__price"
                  placeholder="From"
                  id="from"
                />
              </label>

              <label htmlFor="to" className="Control-menu__price-label">
                To:
                <input
                  type="number"
                  className="input Control-menu__price"
                  placeholder="To"
                  id="to"
                />
              </label>
            </div>
          </div>

          <div className="Control-menu__block">
            <h2 className="title is-3 Control-menu--title">
              Currency
            </h2>

            <button type="button" className="button is-primary is-rounded usd">
              USD
            </button>

            <button type="button" className="button is-warning has-text-info is-rounded uah">
              UAH
            </button>
          </div>

          <div className="Control-menu__block">
            <h2 className="title is-3 Control-menu--title">
              Sort by
            </h2>

            <div>
              <label htmlFor="radio-1" className="Control-menu__radio">
                <input
                  type="radio"
                  id="radio-1"
                  name="sort"
                />
                price ascending
              </label>
              <label htmlFor="radio-2" className="Control-menu__radio">
                <input
                  type="radio"
                  id="radio-2"
                  name="sort"
                  checked
                />
                price descending
              </label>
              <label htmlFor="radio-3" className="Control-menu__radio">
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

        <div className="Products">
          <div className="Products__wrapper">
            <div className="card Products__card">
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-128x128 is-4by5">
                      <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQHvtW7wbNR8cLwaG5Vu9ltH1q3oovWxdMsL0H6xLMrzAA1ET8nZiXfurWhig3y&usqp=CAc" alt="Placeholder_image" />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4">Defunc True Go Slim TWS Red</p>
                    <p>{`${19999} ${'UAH'}`}</p>
                    <p>Description:</p>
                    <p>
                      {Products.products[0].description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Products__wrapper">
            <div className="card Products__card">
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-128x128 is-4by5">
                      <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTxy_SAe8-beD9vRw7Uz0Oea5XyOA4-ejCA6Pze4FPjFHtbp2RqyLcEp-h35EyWTw&usqp=CAc" alt="Placeholder_image" />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4">Samsung Galaxy S20</p>
                    <p>{`${19999} ${'UAH'}`}</p>
                    <p>Description:</p>
                    <p>Content</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Products__wrapper">
            <div className="card Products__card">
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-128x128 is-4by5">
                      <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTxy_SAe8-beD9vRw7Uz0Oea5XyOA4-ejCA6Pze4FPjFHtbp2RqyLcEp-h35EyWTw&usqp=CAc" alt="Placeholder_image" />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4">Samsung Galaxy S20</p>
                    <p>{`${19999} ${'UAH'}`}</p>
                    <p>Description:</p>
                    <p>Content</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Products__wrapper">
            <div className="card Products__card">
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-128x128 is-4by5">
                      <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTxy_SAe8-beD9vRw7Uz0Oea5XyOA4-ejCA6Pze4FPjFHtbp2RqyLcEp-h35EyWTw&usqp=CAc" alt="Placeholder_image" />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4">Samsung Galaxy S20</p>
                    <p>{`${19999} ${'UAH'}`}</p>
                    <p>Description:</p>
                    <p>Content</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Products__wrapper">
            <div className="card Products__card">
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-128x128 is-4by5">
                      <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTxy_SAe8-beD9vRw7Uz0Oea5XyOA4-ejCA6Pze4FPjFHtbp2RqyLcEp-h35EyWTw&usqp=CAc" alt="Placeholder_image" />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4">Samsung Galaxy S20</p>
                    <p>{`${19999} ${'UAH'}`}</p>
                    <p>Description:</p>
                    <p>Content</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Products__wrapper">
            <div className="card Products__card">
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-128x128 is-4by5">
                      <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTxy_SAe8-beD9vRw7Uz0Oea5XyOA4-ejCA6Pze4FPjFHtbp2RqyLcEp-h35EyWTw&usqp=CAc" alt="Placeholder_image" />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4">Samsung Galaxy S20</p>
                    <p>{`${19999} ${'UAH'}`}</p>
                    <p>Description:</p>
                    <p>Content</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Products__wrapper">
            <div className="card Products__card">
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-128x128 is-4by5">
                      <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTxy_SAe8-beD9vRw7Uz0Oea5XyOA4-ejCA6Pze4FPjFHtbp2RqyLcEp-h35EyWTw&usqp=CAc" alt="Placeholder_image" />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4">Samsung Galaxy S20</p>
                    <p>{`${19999} ${'UAH'}`}</p>
                    <p>Description:</p>
                    <p>Content</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Products__wrapper">
            <div className="card Products__card">
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-128x128 is-4by5">
                      <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTxy_SAe8-beD9vRw7Uz0Oea5XyOA4-ejCA6Pze4FPjFHtbp2RqyLcEp-h35EyWTw&usqp=CAc" alt="Placeholder_image" />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4">Samsung Galaxy S20</p>
                    <p>{`${19999} ${'UAH'}`}</p>
                    <p>Description:</p>
                    <p>Content</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Products__wrapper">
            <div className="card Products__card">
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-128x128 is-4by5">
                      <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTxy_SAe8-beD9vRw7Uz0Oea5XyOA4-ejCA6Pze4FPjFHtbp2RqyLcEp-h35EyWTw&usqp=CAc" alt="Placeholder_image" />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4">Samsung Galaxy S20</p>
                    <p>{`${19999} ${'UAH'}`}</p>
                    <p>Description:</p>
                    <p>Content</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Products__wrapper">
            <div className="card Products__card">
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-128x128 is-4by5">
                      <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTxy_SAe8-beD9vRw7Uz0Oea5XyOA4-ejCA6Pze4FPjFHtbp2RqyLcEp-h35EyWTw&usqp=CAc" alt="Placeholder_image" />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4">Samsung Galaxy S20</p>
                    <p>{`${19999} ${'UAH'}`}</p>
                    <p>Description:</p>
                    <p>Content</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Products__wrapper">
            <div className="card Products__card">
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-128x128 is-4by5">
                      <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTxy_SAe8-beD9vRw7Uz0Oea5XyOA4-ejCA6Pze4FPjFHtbp2RqyLcEp-h35EyWTw&usqp=CAc" alt="Placeholder_image" />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4">Samsung Galaxy S20</p>
                    <p>{`${19999} ${'UAH'}`}</p>
                    <p>Description:</p>
                    <p>Content</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Products__wrapper">
            <div className="card Products__card">
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-128x128 is-4by5">
                      <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTxy_SAe8-beD9vRw7Uz0Oea5XyOA4-ejCA6Pze4FPjFHtbp2RqyLcEp-h35EyWTw&usqp=CAc" alt="Placeholder_image" />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4">Samsung Galaxy S20</p>
                    <p>{`${19999} ${'UAH'}`}</p>
                    <p>Description:</p>
                    <p>Content</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Products__wrapper">
            <div className="card Products__card">
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-128x128 is-4by5">
                      <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTxy_SAe8-beD9vRw7Uz0Oea5XyOA4-ejCA6Pze4FPjFHtbp2RqyLcEp-h35EyWTw&usqp=CAc" alt="Placeholder_image" />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4">Samsung Galaxy S20</p>
                    <p>{`${19999} ${'UAH'}`}</p>
                    <p>Description:</p>
                    <p>Content</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Products__wrapper">
            <div className="card Products__card">
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-128x128 is-4by5">
                      <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTxy_SAe8-beD9vRw7Uz0Oea5XyOA4-ejCA6Pze4FPjFHtbp2RqyLcEp-h35EyWTw&usqp=CAc" alt="Placeholder_image" />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4">Samsung Galaxy S20</p>
                    <p>{`${19999} ${'UAH'}`}</p>
                    <p>Description:</p>
                    <p>Content</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="App__new-product-section">
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
            />
            <button type="button" className="button is-light">
              Add product
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default App;
