import React from "react";
import ReactDOM from "react-dom";
import { BlogPost } from "./blog/blog.js";
import { Landing } from "./landing.js";
import { UX } from "./UX/UX.js";
import { Projects } from "./projects/projects.js";
import { Sheetie } from "./projects/sheetie.js";
import { OnePalette } from "./projects/onePalette";
import { Haptic } from "./projects/haptic";


import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';



const history = createHistory({
  basename: process.env.PUBLIC_URL,
});


export let host = () => {
  return "";
};

function App() {



  return(
      <div className={"App"}>

          <BrowserRouter history={history} basename={process.env.PUBLIC_URL}>
            <Switch>
              <Route exact path="/" component={App} />
              <Route path="/projects" component={Projects} />
              <Route component={() => (<div>404 Not found </div>)} />
            </Switch>
          </BrowserRouter>

      </div>
  )
  /*
  return (
    <div className={"App"}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path = {"/blog"}>
            <BlogPost />
          </Route>
          <Route path = {"/UX"}>
            <UX />
          </Route>
          <Route path= {"/projects/haptic"}>
            <Haptic />
          </Route>
          <Route path = {"/projects/onepalette"}>
            <OnePalette />
          </Route>
          <Route path = {"/projects/sheetie"}>
            <Sheetie />
          </Route>
          <Route path = {"/projects"}>
            <Projects />
          </Route>
          <Route path = {"/"}>
            <Landing />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );*/
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
