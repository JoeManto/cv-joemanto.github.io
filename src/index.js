import React from "react";
import ReactDOM from "react-dom";
import { BlogPost } from "./blog/blog.js";
import { Landing } from "./landing.js";
import { UX } from "./UX/UX.js";
import { Projects } from "./projects/projects.js";
import { Sheetie } from "./projects/sheetie.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export let host = () => {
  return "";
};

function App() {
  return (
    <div className={"App"}>
      <Router>
        <Switch>
          <Route path="/blog">
            <BlogPost />
          </Route>

          <Route path="/UX">
            <UX />
          </Route>

          <Route path="/projects/sheetie">
            <Sheetie />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>

          <Route path="/users" />
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
