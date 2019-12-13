import React from "react";
import "../styles.css";
import "./projectsStyle.css";
import { Header } from "../components/components.js";
import githublogo from "../res/githublogo.png"
import {Link} from "react-router-dom";

function TechBubble(props) {

  const background = tech => {
    if (tech === "swift") {
      return "#ff9500";
    } else if (tech === "obj-c"){
      return "#2196f3";
    } else if (tech === "open-source"){
      return  "#ffca28";
    } else if  (tech === "cocoa-script"){
      return "#2196f3";
    } else if (tech === "IOS"){
      return "#2196f3";
    }
    else{
      return "#212121";
    }
  };
  const style = {
    backgroundColor: background(props.tech),
    borderRadius: "15px",
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
//<a ref={"link"} href={this.props.link} className={"hiddenLink"}>a</a>
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

          <div style={{display:"none"}}>
            <Link ref = {"link"} to={this.props.link}>a</Link>
          </div>

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
        <Header name={"Projects"} subtitle={"Featured Projects"} />
        <GithubLogoLink link = {"https://www.github.com/JoeManto"} target = {"_blank"} text = {"View Profile"}/>
        <div className={"projectsList-cnt slideRight"}>
        <Project
          name={"One Palette"}
          link={"projects/onepalette"}
          backgroundColor={"blue"}
          date={"2019"}
          disc={"OnePalette is a modern material design color palette that allows for quick and intuitive color lookups. OnePalette was designed and implemented for frontend devs and UX designs in mind, Allowing developers and designers stay on track and keep creating."}
          tech={[<TechBubble tech = "swift"/>,<TechBubble tech = "open-source"/>]}
        />
        <Project
          name={"Haptic"}
          link={"projects/haptic"}
          backgroundColor={"blue"}
          date={"2019"}
          disc={"Haptic is an IOS keyboard extension that provides 'haptic feedback'. Haptic is in the App Store as 'Haptic Feedback Keyboard'"}
          tech={[<TechBubble tech = "swift"/>,<TechBubble tech = "IOS"/>]}
        />
        <Project
          name={"Sheetie"}
          link={"/projects/sheetie"}
          backgroundColor={"blue"}
          date={"2016"}
          disc={"Sheetie is a sketch 3 plugin developed for indie game developers in mind. Sheetie creates vectorized sprite sheets objects that are automatically placed and rendered into a sketch art-board"}
          tech={[<TechBubble tech = "cocoa-script"/>,<TechBubble tech = "open-source"/>]}
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
        <img width={"25px"} height={"25px"} className={"flexRowElement"} src = {githublogo} alt={"github logo"}/>
        <a href = {props.link} style={textStyle}>{props.text}</a>
      </div>
  )
}
