import React from 'react';

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

