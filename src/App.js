import React from 'react';
import './App.css';
import './index.css';
import handybag from './assets/bag_1.png';
import stylishbag from './assets/bag_2.png';
import simplebag from './assets/bag_3.png';
import trendybag from './assets/bag_4.png';
import brand from './assets/brand.png';
import ourstory from './assets/our_story.png';
import Button from "./Component/Button";
import DisabledButton from "./Component/DisabledButton";
import Product from "./Component/Product";
import Tile from "./Component/Tile";


function App() {

    return (
        <>

            <h1>Handbags & Purses</h1>
            <nav>
                <Button
                    title={"to the collection"}></Button>
                <Button
                    title={"shop all bags"}></Button>
                <DisabledButton
                    title={"pre-orders"}></DisabledButton>
            </nav>

            <main>

                <Product
                    span="Best seller"
                    title="The handy bag"
                    image={handybag}
                    price="€400,-">
                </Product>
                <Product
                    span="Best seller"
                    title="The stylish bag"
                    image={stylishbag}
                    price="€250,-">
                </Product>
                <Product
                    span="New collection"
                    title="The simple bag"
                    image={simplebag}
                    price="€300,-">
                </Product>
                <Product
                    span="New collection"
                    title="The trendy bag"
                    image={trendybag}
                    price="€150,-">
                </Product>
            </main>
            <footer>
                <Tile
                    title="The brand"
                    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus animi nulla omnis optio. Distinctio dolor dolore dolorum ducimus error iusto laudantium libero numquam odit, optio quod, reiciendis sed sit unde."></Tile>
                <Tile
                    image={brand}></Tile>
                <Tile
                    image={ourstory}></Tile>
                <Tile
                    title="Our story"
                    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus animi nulla omnis optio. Distinctio dolor dolore dolorum ducimus error iusto laudantium libero numquam odit, optio quod, reiciendis sed sit unde. "></Tile>
            </footer>

        </>
    );

}

export default App;



