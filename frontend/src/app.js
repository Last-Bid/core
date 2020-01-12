import React from 'react';
import { useSelector } from 'react-redux';
// import { useSelector, useDispatch } from 'react-redux';
// import { function } from './state/actions'
import './app.css';
import Product from './components/products/product';
import {GridList, GridListTile} from "@material-ui/core";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";

function App() {
    const vals = useSelector(state => state);
    const product = {
        img : "https://trademe.tmcdn.co.nz/photoserver/tq/1217991283.jpg",
        alt : "Air Pods",
        title : "Air Pods",
        author : "260"
    };

    return (
        <div className="App">
            <GridList cellHeight={160} className={""} cols={3}>
                <GridListTile key={"https://trademe.tmcdn.co.nz/photoserver/tq/1217991283.jpg"} cols={1}>
                    <img src={product.img} alt={product.alt}/>
                    <GridListTileBar
                        title={product.title}
                        subtitle={<span>Price: ${product.author}</span>}
                        actionIcon={
                            <IconButton aria-label={`info about ${product.title}`} className={product.icon}>
                                {/*<InfoIcon/>*/}
                            </IconButton>
                        }
                    />
                </GridListTile>
                <GridListTile key={"https://trademe.tmcdn.co.nz/photoserver/tq/1217991283.jpg"} cols={1}>
                    <img src={product.img} alt={product.alt}/>
                </GridListTile>

                <GridListTile key={"https://trademe.tmcdn.co.nz/photoserver/tq/1217991283.jpg"} cols={1}>
                    <img src={product.img} alt={product.alt}/>
                </GridListTile>
            </GridList>
            {/*<Product/>*/}
        </div>
    );
}

// const getProducts = () => { // This will fail because oauth requires https, so we'll need to set up nginx and a staging server
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
