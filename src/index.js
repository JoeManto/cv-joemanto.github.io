import React from "react";
import ReactDOM from "react-dom";
import { BlogPost } from "./blog/blog.js";
import { Landing } from "./landing.js";
import { UX } from "./ux/UX.js";
import { Projects } from "./projects/projects.js";
import { Sheetie } from "./projects/sheetie.js";
import { OnePalette } from "./projects/onePalette";
import { Haptic } from "./projects/haptic";
import { Route, HashRouter } from 'react-router-dom';
import './styles.css';
import './landingStyles.css';

class App extends React.Component {  render() {
    return (
        <div className={"App"}>
        <HashRouter>
            <Route exact path='/' component={Landing} />
            <Route exact path='/blog' component={BlogPost} />
            <Route exact path='/UX' component={UX} />
            <Route exact path='/projects/sheetie' component={Sheetie} />
            <Route exact path='/projects/haptic' component={Haptic} />
            <Route exact path='/projects/onepalette' component={OnePalette} />
            <Route exact path='/projects' component={Projects} />
        </HashRouter>
        </div>
    )
}}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
