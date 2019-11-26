import React from "react";
import image from "./res/image.png";
import Highlight from "react-highlight";
import {ContentPlain,ContentText} from "../components/Components";
import "../styles.css";


class MenuButton extends React.Component {
  render() {
    return (
      <div
        onClick={() => {
          this.props.onChange();
        }}
      >
        <div>
          <div className={"menu-btn-child slide-enter-left"} />
          <div className={"menu-btn-child slide-enter-left"} />
          <div className={"menu-btn-child slide-enter-left"} />
        </div>
      </div>
    );
  }
}

function MenuElement(props) {
  return (
    <a className={"menu-links"} href={props.link}>
      {props.name}
    </a>
  );
}

export class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      closed: true,
      firstRender: true
    };

    this.handleMenuClick = this.handleMenuClick.bind(this);
  }

  handleMenuClick = () => {
    this.setState({ closed: !this.state.closed, firstRender: false });
  };

  render() {
    return (
      <div className={"menu-cnt"}>
        <MenuButton onChange={this.handleMenuClick} />

        {!this.state.closed ? (
          <div className={"menu-elements-cnt up"}>
            {this.props.names.map((obj, i) => {
              return (
                <MenuElement key={i} name={obj} link={this.props.links[i]} />
              );
            })}
          </div>
        ) : (
          [!this.state.firstRender && (
            <div className={"menu-elements-cnt down"}>
              {this.props.names.map((obj, i) => {
                return (
                  <MenuElement key={i} name={obj} link={this.props.links[i]}/>
                );
              })}
            </div>
          )]
        )}
      </div>
    );
  }
}

export function Header(props) {
  return (
    <div className={"header-cnt space-left"}>
      <Menu
        names={["~ /", "Blog", "Projects", "UX-Gallary", "Contact"]}
        links={["/", "/Blog", "/projects", "/UX", "/#info-cnt"]}
      />
      <h1 className={"header-name"}>{props.name}</h1>
      <p className={"header-sub"}>{props.subtitle}</p>
    </div>
  );
}

export function JMImage(props) {
    let className = "image";
    if(props.ani){
        className = "image "+props.ani;
    }
  return (
    <div className={className}>
      <img className={props.position} src={props.src} width={props.width} height={props.height} alt={props.alt} />
      {props.subtitle && (
        <h6 className={"image-subtitle"}>{props.subtitle}</h6>
      )}
    </div>
  );
}

export function JMCode(props) {
  return (
    <div className={"code-cnt "+props.position}>
      <Highlight className={"code"} language={props.language}>
        {props.code}
      </Highlight>
    </div>
  );
}

export function BlogPost() {

    return (
      <div style={{position:"fixed",top:"40%",left:"30%"}}>
          <h1>Page is not ready yet 👨🏽‍🚀</h1>
          <p>Working on adding blog posts</p>

          <p>In the meantime enjoy a random quote <strong>"Reading without reflecting is like eating without digesting."</strong> - Edmund Burke </p>
      </div>
    );

  /*return (
    <div className="App">
      <Header name={"header-name"} subtitle={"this is a subtitle"} />
      <ContentPlain>
          <ContentText text = {`
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
          `}/>
        <ContentText text = {`
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
          `}/>

        <JMImage src={image} alt={"image"} subtitle={"this is a subtitle"} />

        <JMCode
          code={`function JMImage(props) {
            return (
              <div className={"image"}>
                <img src={props.src} width={"100%"} height={"100%"} alt={props.alt} />
                {props.subtitle !== "" && (
                  <label className={"image-subtitle"}>{props.subtitle}</label>
                )}
              </div>
            );
          }`}
          language={"javascript"}
        />
      </ContentPlain>
    </div>
  );*/
}
