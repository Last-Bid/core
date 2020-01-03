import React from 'react';
import { Provider } from 'react-redux'
import store from './state/store'
import './state/actions'
import './state/reducers'
import logo from './assets/logos/logo.svg';
import './app.css';

function App() {
    getProducts();
    return (
        <Provider store={store}>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        { JSON.stringify(store.getState()) }
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        </Provider>
    );
}

const getProducts = () => {
    fetch(
        'https://api.tmsandbox.co.nz/v1/Listings/closing.json', {
            headers: new Headers({
                'Authorization' : 'OAuth oauth_consumer_key="E3E3FE9D9BEF573C81D5180FD61BB830", oauth_signature_method="PLAINTEXT", oauth_signature="126D43EF3BD5D33FE3EDBA7F883567B4&"'
            })
        }
    ).then((data)=> {
        return console.log(data.json())
    })
}

export default App;
