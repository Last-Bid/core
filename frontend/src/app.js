import React from 'react';
import { useSelector } from 'react-redux';
// import { useSelector, useDispatch } from 'react-redux';
// import { function } from './state/actions'
import './app.css';

function App() {
    const vals = useSelector(state => state);
    return (
            <div className="App">
                <p>
                    State Values: {JSON.stringify(vals)}
                </p>
            </div>
    );
}

// const getProducts = () => {
//     fetch(
//         'https://api.tmsandbox.co.nz/v1/Listings/closing.json', {
//             headers: new Headers({
//                 'Authorization' : 'OAuth oauth_consumer_key="E3E3FE9D9BEF573C81D5180FD61BB830", oauth_signature_method="PLAINTEXT", oauth_signature="126D43EF3BD5D33FE3EDBA7F883567B4&"'
//             })
//         }
//     ).then((data)=> {
//         return console.log(data.json())
//     })
// }

export default App;
