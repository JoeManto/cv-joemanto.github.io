import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Sheetie} from "./projects/Sheetie";
import {Haptic} from './projects/Haptic';
import {OnePalette} from './projects/OnePalette';
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
            </HashRouter>
        )
    }
}

ReactDOM.render(<AppPointer />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

/*
  /*font-family: Avenir Next,loto, Avenir, serif, -apple-system, sans-serif,BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue';*/

/*font-family: Avenir Next,'Lato', sans-serif;*/
/*font-family: 'PT Sans', sans-serif;
 */