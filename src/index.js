import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Sheetie } from "./projects/sheetie";
import { Haptic } from './projects/haptic';
import { OnePalette } from './projects/onePalette';
import { AirPodsPair } from './projects/airpods-pair';
import { XCT } from './projects/xct';
import { SuperWindow } from './projects/superWindow';
import { RetainCycles } from './blog/retainCycles';
import * as serviceWorker from './serviceWorker';
import {HashRouter,Route} from "react-router-dom";

class AppPointer extends React.Component {
    render() {
        return(
            <HashRouter>
                <Route exact path ='/' component = {App}/>
                <Route exact path ='/projects/sheetie' component = {Sheetie}/>
                <Route exact path ='/projects/haptic' component = {Haptic}/>
                <Route exact path ='/projects/onepalette' component = {OnePalette}/>
                <Route exact path ='/projects/airpods-pair' component = {AirPodsPair}/>
                <Route exact path ='/projects/xct' component = {XCT}/>
                <Route exact path ='/projects/super-window' component = {SuperWindow}/>
                <Route exact path = '/blog/arc-retain-cycles' component = {RetainCycles}/>
            </HashRouter>
        )
    }
}

ReactDOM.render(<AppPointer />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();