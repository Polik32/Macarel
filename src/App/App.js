import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Nav from '../Nav/Nav';
import MainPage from '../ComponentsPages/MainPage/MainPage';
import MousseCakes from '../ComponentsPages/MousseCakes/MousseCakes'
import Macarons from '../ComponentsPages/Macarons/Macarons';
import CandyBar from '../ComponentsPages/CandyBar/CandyBar';
import SpongeCakes from '../ComponentsPages/SpongeCakes/SpongeCakes';
import Footer from '../Footer/Footer';


const json = require('../json/settings.json');
const json_size_slider = require('../json/size_slider.json');
const json_card_sponge_cakes = require('../json/card_info_sponge_cakes.json');
const json_card_mousse_cakes = require('../json/card_info_mousse_cakes.json');


const App = (props) => {
    return (
        <BrowserRouter>
            <Nav data_nav={json[0]} />
            <Route path='/' component={(props)=><MainPage data_main={json[0]}/>} exact={true} />
            <Route path='/SpongeCakes' component={(props)=><SpongeCakes data_spong={json[0]} data_slider={json_size_slider[0]} data_card={[json_card_sponge_cakes]}/>} />
            <Route path='/Macarons' component={(props)=><Macarons data_macaron={json[0]} data_slider={json_size_slider[0]}/>} />
            <Route path='/CandyBar' component={(props)=><CandyBar data_candy={json[0]} />} />
            <Route path='/MousseCakes' component={(props)=><MousseCakes data_mousse={json[0]} data_slider={json_size_slider[0]} data_card={[json_card_mousse_cakes]}/>} />
            <Footer data_footer={json[0]} />
        </BrowserRouter>
    );
}

export default App;