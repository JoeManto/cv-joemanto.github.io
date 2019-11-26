import React from "react";
import ReactDOM from "react-dom";
import { BlogPost } from "./blog/blog.js";
import { Landing } from "./landing.js";
import { UX } from "./UX/UX.js";
import { Projects } from "./projects/projects.js";
import { Sheetie } from "./projects/sheetie.js";
import { OnePalette } from "./projects/onePalette";
import { Haptic } from "./projects/haptic";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export let host = () => {
  return "";
};

function App() {
  return (
    <div className={"App"}>
      <Router>
        <Switch>
          <Route path = {process.env.PUBLIC_URL + "/blog"}>
            <BlogPost />
          </Route>
          <Route path = {process.env.PUBLIC_URL + "/UX"}>
            <UX />
          </Route>
          <Route path= {process.env.PUBLIC_URL + "/projects/haptic"}>
            <Haptic />
          </Route>
          <Route path = {process.env.PUBLIC_URL +"/projects/onepalette"}>
            <OnePalette />
          </Route>
          <Route path = {process.env.PUBLIC_URL +"/projects/sheetie"}>
            <Sheetie />
          </Route>
          <Route path = {process.env.PUBLIC_URL + "/projects"}>
            <Projects />
          </Route>
          <Route path = {process.env.PUBLIC_URL +"/"}>
            <Landing />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
