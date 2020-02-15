import React from 'react';
import './app.css';
import './lib/css/foundation.css';
import logo from './assets/logo.svg';
import product from './assets/product.jpg';

function App() {
    return (
        <div className="app-frame">
            <div className="app-wrapper">
                <div className="app-header">
                </div>
                <div className="app-body">
                    <div className="product-wrapper">
                        <img src={product} alt='product' className="product-image"/>
                    </div>
                    <div className="product-description">
                        <div className="product-description__name">
                        Product Name
                        </div>
                        <div className="product-description__description">
                        Product Description
                        </div>
                    </div>
                    <div className="product-button-container">

                        <div className="product-reject-button">
                        </div>
                        <div className="product-reject-button">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
