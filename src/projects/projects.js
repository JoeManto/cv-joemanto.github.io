import React from "react";
import "../styles.css";
import "./projectsStyle.css";
import { Header } from "../blog/blog.js";
import githublogo from "../res/githublogo.png"

function TechBubble(props) {
  const getBackgroundForTech = tech => {
    if (tech === "swift") {
      return "#ff9500";
    } else if (tech === "obj-c"){
      return "#2196f3";
    } else if (tech === "open-source"){
      return  "#ffca28";
    }
    else{
      return "#212121";
    }
  };
  const style = {
    backgroundColor: getBackgroundForTech(props.tech),
    borderRadius: "15%",
    padding: "8px",
    marginRight: "10px"
  };
  return <h4 style={style}>{props.tech}</h4>;
}

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false
    };
    this.handleHover = this.handleHover.bind(this);
  }

  handleHover = (e) => {
    this.setState({ hovered: !this.state.hovered });
  };

  render() {
    return (
      <div
        onMouseEnter={(e)=>{this.handleHover(e)}}
        onMouseLeave={(e)=>{this.handleHover(e)}}
        //onMouseOver={(e)=>{this.handleHover(e)}}
        onClick={() => {
          this.refs.link.click();
        }}
        className={"project-cnt"}
      >
        <div style={{display:"inline-block"}} className={"flexColumn"}>
          <a ref={"link"} href={this.props.link} className={"hiddenLink"}>a</a>
          <h1 className={"flexColumnElem"}>{this.props.name}</h1>
          {this.state.hovered &&
            <div id={"viewProject-cnt"} className = {"growRight"}>
              <h5 id = {"viewProject-text"} className={"slideRight"}>View Project</h5>
            </div>
          }
          <div>
            <p id="project-discription" className={"flexColumnElem"}>
              {this.props.disc}
              <label id="project-date">{this.props.date}</label>
            </p>
            <div className={"flexRow"}>
              {this.props.tech}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export class Projects extends React.Component {
  render() {
    return (
      <div className={"content-cnt"}>
        <Header name={"Projects"} subtitle={"subtitle"} />
        <div className={"projectsList-cnt slideRight"}>
        <Project
          name={"Sheetie"}
          link={"/projects/sheetie"}
          backgroundColor={"blue"}
          date={"2016"}
          disc={"Sheetie is a sketch 3 plugin developed for indie game developers in mind. Sheetie creates vectorized sprite sheets objects that are automatically placed and rendered into a sketch art-board"}
          tech={[<TechBubble tech = "obj-c"/>,<TechBubble tech = "open-source"/>]}
        />
        <Project
          name={"Sheetie"}
          link={"projects/sheetie"}
          backgroundColor={"blue"}
          date={"2019"}
          disc={"hello"}
        />
        <Project
          name={"Sheetie"}
          link={"projects/sheetie"}
          backgroundColor={"blue"}
          date={"2019"}
          disc={"hello"}
        />
      </div>
      </div>
    );
  }
}

export function GithubLogoLink(props){
  const textStyle = {
    margin:"auto 0",
    color:"#212121",
    marginLeft:"10px",
    textDecoration:"none",
  };
  return(
      <div className={"space-left flexRow"}>
        <img width={"50px"} height={"50px"} className={"flexRowElement"} src = {githublogo} alt={"github logo"}/>
        <a href = {props.link} style={textStyle}>{props.text}</a>
      </div>
  )
}
