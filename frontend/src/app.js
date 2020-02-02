import React from 'react';
import './app.css';
import './lib/css/foundation.css';
import logo from './assets/logo.svg';
import product from './assets/product.jpg';

function App() {
    return (
        <div className="app-container">
            <div className="app-header">
                <img className="app-header-logo" src={logo} alt="logo"/>
            </div>
            <div className="app-body">
                <div className="app-product-container">
                    <div className="app-product">
                        <div className="app-product-image">
                            <img className="product-image" src={product} alt="product"/>
                        </div>
                        <div className="product-pricing">

                        </div>
                        <div className="product-timer">
                            05:12
                        </div>
                    </div>
                    <div className="app-product-description">
                        Description goes here
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
