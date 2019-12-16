import React from 'react'
import Radium from 'radium';
import Highlight from 'react-highlight';
import "../../node_modules/highlight.js/styles/rainbow.css";

const subPageContainerStyle = {
    margin: "20px auto",
    maxWidth:"80%",
};

export function PageContainer(props){
    const style = {
        margin: "0 auto",
        maxWidth: "700px",
    };
    return <div style = {style}>{props.children}</div>
}

export function PageTextContainer(props) {
    const style = {
        fontSize:"1em",
        lineHeight:"25px",
    };

    //Style Injection
    Object.assign(style,subPageContainerStyle);
    Object.assign(style,props.style);

    return <div style={style}>{props.children}</div>
}

export function HRLine() {
    const style = {
        width:"100%",
        height:"2px",
        backgroundColor:"white",
    };
    return(
        <div style={style}/>
    )
}

export function HeaderTitle(props){
    const style = {
        margin:"40px 0",
    };
    return(
        <div style={style}>
            <h1 id = {props.name}>{props.name}</h1>
            <HRLine/>
        </div>
    )
}

export function SubHeaderTitle(props) {
    const style = {
        margin:"40px 0",
    };
    return(
        <div style={style}>
            <h4 id = {props.name}>{props.name}</h4>
        </div>
    )
}

export function NavChild({linkName,style,link}) {
    const linkStyle = {
        color:"white",
        margin: "0 10px",
        textDecoration:"none",
        ":hover":{
            fontWeight: "bold",
        }
    };

    Object.assign(linkStyle,style);
    let href = (!link) ? linkName : link;

    return(
        <a style={linkStyle} href={href}>{linkName}</a>
    );
}
NavChild = Radium(NavChild);

export function NavBar(props) {
    const style = {
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
    };
    return (
        <div style={style}>
            {props.children}
        </div>
    )
}

export class Button extends React.Component{
    constructor(props){
        super(props);

        this.buttonStyle = {
            width: "100px",
            height: "50px",
            backgroundColor: "transparent",
            border:"solid 2px white",
            borderRadius:"5px",
            color:"white",

            ":hover":{
                color:"black",
                backgroundColor:"white",
            }
        };

        this.linkRef = React.createRef();

        //Css Injection
        Object.assign(this.buttonStyle,props.style);
    };

    handleClick = () => {
        this.linkRef.current.click();
    };

    render(){return(
        <div>
            <a ref = {this.linkRef} href={this.props.link} target={"_blank"} style={{display:"none"}}>s</a>
            <button style={this.buttonStyle} onClick={this.handleClick}>{this.props.name}</button>
        </div>
    );}
}

Button = Radium(Button);

export function Project(props) {
    const projectCntStyle = {
        position:"relative",
        padding:"20px",
        marginBottom:"50px",
        borderRadius: "10px",
        backgroundColor:"#0A0A0A",
        lineHeight: "30px",
    };

    const titleStyle = {
        marginTop:0,
        marginBottom: "5px",
    };

    const moreInfoLinkStyle = {
        color:"#C8AEFF",
        textDecoration: "none",
        fontDisplay:"Italic",
        fontSize:"0.8em",
        fontWeight:"bold",
        float:"right",
    };

    return(
        <div style={projectCntStyle}>
            <h2 style={titleStyle}>{props.name}</h2>
            <br/>
            {props.children}
            <a style={moreInfoLinkStyle} href={props.link}>Check It Out</a>
        </div>
    )
}

export function ProjectsContainer(props){
    const style = {
        display:"flex",
        flexDirection: "column",
    };
    Object.assign(style,subPageContainerStyle);
    return(
        <div style={style}>
            {props.children}
        </div>
    )
}

export function LinkWithImage({imgSrc,name,link}) {
    const cntStyle = {
        display:"flex",
        flexDirection:"row",
    };
    const imgStyle = {
        maxHeight:"25px",
    };
    return(
        <div style={cntStyle}>
            <div style={{width:"30px",marginRight:"15px"}}>
             <img src={imgSrc} style={imgStyle} alt={name}/>
            </div>
            <a href={link} target={"_blank"}>{name}</a>
        </div>
    )
}

export function Centered(props) {
    const style = {
        margin: "0 auto",
        display:"inline-block"
    };
    Object.assign(style,props.style);
    return <div style={{margin:"0 auto"}}>{props.children}</div>
}

export function Image(props) {
    const imgStyle = {
        maxHeight:"500px",
        width:"auto",
    };

    Object.assign(imgStyle,props.style);

    return <img style={imgStyle} src = {props.imgSrc} alt={props.name}/>
}

export function Code(props) {
    return(
        <div>

            <Highlight className = {"code"} language = {"JavaScript"}>
                {props.code}
            </Highlight>
        </div>
    );
}


