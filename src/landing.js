import React from "react";
import { Menu } from "./blog/blog.js";
import profilePicSrc from "./res/profilepic2.png";
import profilePicSrc1 from "./res/profilepic.png";
import { GraphCanvas } from "./components/graph-canvas.js";
import {GithubLogoLink} from "./projects/projects";
import "./styles.css";
import "./landingStyles.css";

function BouncingArrow(props) {
  return (
    <div
      onClick={() => {
        document.getElementById("bouncingArrows").click();
      }}
      className="arrow-down bounce"
    >
      <a id="bouncingArrows" style={{ display: "none" }} href={"#info-cnt"}>
        s
      </a>
    </div>
  );
}

class ProfileHeader extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      profileImg:false,
    };
    this.handleProfileImageChange = this.handleProfileImageChange.bind(this);
  }

  handleProfileImageChange = () => {
    this.setState({profileImg:!this.state.profileImg});
  };

  render() {
    return (
        <div className={"landing-header-cnt flexRow"}>
          <div onMouseEnter={this.handleProfileImageChange} onMouseLeave={this.handleProfileImageChange} className={"landing-header-image-cnt"}>
            {this.state.profileImg ? (
                <img
                    src={this.props.imagesrc}
                    className={"profile-image roundedImage"}
                    alt={"profile-pic"}
                />
            ):(
                <img
                src={this.props.imagesrc2}
                className={"profile-image roundedImage"}
                alt={"profile-pic"}
              />
            )
            }
          </div>
          <div className={"flexColumn"}>
            <h1>Joseph Manto</h1>
            <h3>Software Engineer {this.props.company}</h3>
          </div>
          <p
              id={"background-text landing-text"}
              style={{marginTop: "100px"}}
              className={"content-text"}
          >
            Currently, I am a senior at Western Michigan University studying
            Computer Science and expecting to graduate in May 2020. My current
            interests in computer science are Machine Learning, Python, and Javascript frontend
            development. The roots of my programming experience are as an IOS and
            MacOS developer, but I enjoy writing back-end services, and c code just
            as must as I like frontend development.
          </p>
        </div>
    );
  }
}

export class Landing extends React.Component {
  render() {
    return (
      <div className={"content-cnt"}>
        <div id="landing-first-cnt">
          <Menu
            className={"landing-menu-cnt"}
            names={["~ /", "Blog", "Projects", "UX-Gallary", "Contact"]}
            links={["/", "/Blog", "/projects", "/UX", "/#info-cnt"]}
          />
          <ProfileHeader imagesrc={profilePicSrc} imagesrc2 = {profilePicSrc1} company={""} />
          <BouncingArrow />
        </div>

        <div id="info-cnt" href="#">
          <h2 className={"lightBlue"}>Careers Interests</h2>
          <p className={"content-text landing-text"}>
              My main career interests currently are to learn as much as I possibly can. The ideal company for me currently is a company that has very experienced and talented software engineers which will give me the basis to learn and expand my knowledge as a jr. engineer!
          </p>

          <h2 className={"lightRed"}>Contact</h2>
            <div className={"landing-text"}>
            <p className={"content-text"}>
                <strong>Email: joe.m.manto@wmich.edu</strong>

            </p>
            <GithubLogoLink link = {"https://www.github.com/JoeManto"} target = {"_blank"} text = {"View Profile"}/>
            </div>
        </div>
      </div>
    );
  }
}
