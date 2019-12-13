import React from 'react';
import Highlight from "react-highlight";
import {Link} from 'react-router-dom';
import "../styles.css"

export function ContentPlain(props){
    const contentPlainStyle = {
        margin: "10% 10%",
    };
    return(
        <div style={contentPlainStyle}>
            {props.children}
        </div>
    );
}

export function ContentText(props) {
    const contentTextStyle = {
        textAlign: "left",
        fontWeight: "bold",
        lineHeight: "190%",
        margin:"0 20%",
        marginBottom: "5%",
    };
    return(
        <p style={contentTextStyle}>
            {props.text}
        </p>
    )
}

/*---------------------------------MENU COMP------------------------------------------*/

/*
  The Navigation button to show and hide the menu children
  The button receives onClick events and sends them to the parent component through onChange
*/
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

  /*
    Returns a single Menu Element
  */
  function MenuElement(props){
    let {name,link} = props
    return(
      <a href = {"#"+link}>
        <h4 style={{margin:"10px"}}>{name}</h4>
      </a>
    );
  }
  
  /**
   * Component renders the navigation menu to navigation between root pages
   */
  export class Menu extends React.Component {

    constructor(props) {
      super(props);
      
      //deconstruct props
      Object.assign(this,{props}['props']);

      this.state = {
        closed: true,
        firstRender: true
      };
  
      this.handleMenuClick = this.handleMenuClick.bind(this);
    }
    
    /**
     * Event Handler for when the menu button receives an click event
     * Toggle for the open status of the menu
     */
    handleMenuClick = () => {
      this.setState({ closed: !this.state.closed, firstRender: false });
    };
    
    /**
     * Sets the classname for the css animation and returns all the Menu children
     */
    animateMenu = (links,animationClass) => {

      const menuElementStyle = {
        marginTop: "30px",
        display: "flex",
        fixDirection: "column",
        overflow: "hidden",
        backgroundColor: "white",
      }

      return(
        <div className={"menu-elements-cnt "+animationClass}>
          {links.map((obj, i) => {
            let name = this.names[i]
            return (
              <MenuElement key={i} name={name} link={obj} />
            );
          })}
        </div>
      )
    } 

    /**
     * Renders all the menu links with the correct animation relative to the state
     */
    render() {
      return (
        <div>
          <MenuButton onChange={this.handleMenuClick} />

          {this.state.firstRender 
          ? null 
          : ( !this.state.closed ? 
                this.animateMenu(this.links,"up") : this.animateMenu(this.links,"down")
            )
          }
        </div>
      );
    }
  }
  
  /*---------------------------------HEADER COMP------------------------------------------*/

  export function Header(props) {
    let {name,subtitle} = props
    return (
      <div className={"header-cnt space-left"}>
        <Menu
          names={["~ /", "Blog", "Projects", "UX-Gallary",]}
          links={["/", "/Blog", "/projects", "/UX",]}
        />
        <h1 className={"header-name"}>{name}</h1>
        <p className={"header-sub"}>{subtitle}</p>
      </div>
    );
  }
  
  /*---------------------------------OTHER-----------------------------------------------*/
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
  
  export class ButtonTest extends React.Component {
    constructor(props) {
      super(props)

      Object.assign(this,{props}['props']);

      this.linkRef = React.createRef();
    }

    handleButtonClick = () => {
      this.linkRef.current.click();
    }

    render(){
      return(
        <div className = {"btn-cnt-1"}>
          <button onClick = {()=> this.handleButtonClick()} className = {"btn-style-1"}>{this.btnText}</button>
          <a ref = {this.linkRef} style = {{display:"none"}} href = {"/favicon.ico"} download>a</a>
        </div>
      );
    }
  }




















  /*class MenuElement extends React.Component{
      constructor(props){
          super(props);
  
          this.handleClick = this.handleClick.bind(this);
      }
      handleClick = () => {
          this.refs.link.click();
      };

      /*
              <a href = {"#"+this.props.link}>
                  <h4 style={{margin:"10px"}} onClick={()=>{this.handleClick()}}>{this.props.name}</h4>
                  <div style={{display:"none"}}>
                      <Link ref="link" to={this.props.link}>{this.props.name}</Link>
                  </div>
              </a>
      
      render() {
          return (
            <a href = {"#"+this.props.link}>
              <h4 style={{margin:"10px"}}>{this.props.name}</h4>
            </a>
          )
      }
  }*/
