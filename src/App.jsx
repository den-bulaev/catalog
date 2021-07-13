import React from 'react';

import ControlMenu from './components/ControlMenu/ControlMenu';
import Form from './components/Form/Form';

import Products from './Database/products.json';

import './App.scss';

function App() {
  return (
    <main className="App">
      <section className="App__main-section">
        <ControlMenu />

        <div className="App__products">
          <div className="ProductCard">
            <div className="card ProductCard--card">
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

          <div className="ProductCard">
            <div className="card ProductCard--card">
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

          <div className="ProductCard">
            <div className="card ProductCard--card">
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

          <div className="ProductCard">
            <div className="card ProductCard--card">
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

          <div className="ProductCard">
            <div className="card ProductCard--card">
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

          <div className="ProductCard">
            <div className="card ProductCard--card">
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

          <div className="ProductCard">
            <div className="card ProductCard--card">
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

          <div className="ProductCard">
            <div className="card ProductCard--card">
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

          <div className="ProductCard">
            <div className="card ProductCard--card">
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

          <div className="ProductCard">
            <div className="card ProductCard--card">
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

          <div className="ProductCard">
            <div className="card ProductCard--card">
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

          <div className="ProductCard">
            <div className="card ProductCard--card">
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

          <div className="ProductCard">
            <div className="card ProductCard--card">
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

          <div className="ProductCard">
            <div className="card ProductCard--card">
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
        <Form />
      </section>
    </main>
  );
}

export default App;
