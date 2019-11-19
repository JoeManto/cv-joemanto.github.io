import React from "react";
import { Menu } from "./blog/blog.js";
import profilePicSrc from "./res/profilepic2.png";
import profilePicSrc1 from "./res/profilepic.png";
import { GraphCanvas } from "./components/graph-canvas.js";
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
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </p>
          <h2 className={"lightRed"}>Contact</h2>
          <p className={"content-text landing-text"}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </p>
        </div>
      </div>
    );
  }
}
