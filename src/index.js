import React from "react";
import ReactDOM from "react-dom";
import { BlogPost } from "./blog/blog.js";
import { Landing } from "./landing.js";
import { UX } from "./UX/UX.js";
import { Projects } from "./projects/projects.js";
import { Sheetie } from "./projects/sheetie.js";
import { OnePalette } from "./projects/onePalette";
import { Haptic } from "./projects/haptic";
import { Route, HashRouter } from 'react-router-dom';
import './styles.css';
import './landingStyles.css';

console.log(HashRouter.hash);
class App extends React.Component {  render() {
    return (
        <div className={"App"}>
        <HashRouter>
            <Route exact path='/' component={Landing} />
            <Route exact path='/projects/sheetie' component={Sheetie} />
            <Route exact path='/projects' component={Projects} />
        </HashRouter>
        </div>
    )
}}



/*
  return(
      <div className={"App"}>

          <BrowserRouter basename={'/'}>
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route path={`${process.env.PUBLIC_URL}/projects`} component={Projects} />
              <Route component={() => (<div>404 Not found </div>)} />
            </Switch>
          </BrowserRouter>

      </div>
  )*/

  /*return (
    <div className={"App"}>
      <HashRouter basename='/'>
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
      </HashRouter>
    </div>
  );*/
  /*console.log(process.env.PUBLIC_URL);
  return (
      <div className={"App"}>
          <HashRouter basename='/'>
              <Route path = {"projects/sheetie"} component = {Sheetie}/>
              <Route path = {"/onepalette"} component = {OnePalette}/>
              <Route path = {"/haptic"} component = {Haptic}/>
              <Route path = {"/projects"} component = {Projects}/>
              <Route path = {"/UX"} component = {UX}/>
              <Route path = {"/blog"} component = {BlogPost}/>
              <Route exact path="/" component = {Landing} />
          </HashRouter>
      </div>
  );
}*/

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
