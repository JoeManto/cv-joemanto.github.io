import React from "react";
import superWindowSnap from './res/super-view-res.png';
import githubLogo from '../res/githublogo.png';
import {HeaderTitle, Image, NavBar, NavChild, PageContainer,PageTextContainer, LinkWithImage} from '../components/BasicComponents';

export class SuperWindow extends React.Component{ render() {
    return(
        <PageContainer>
            <NavBar>
                <NavChild linkName={"Back"} style={{fontWeight: "bold", fontSize: "1.1em"}} link={"#/"}/>
            </NavBar>

            <HeaderTitle name={"Super Window"}/>
            <p><strong>Closed Source macOS App</strong></p>
            <a href="https://apps.apple.com/us/app/super-window-reference-viewer/id1587601078?mt=12">View on the AppStore</a>
            <PageTextContainer>
                <p>Super Window is a macOS app that allows users to create always on top windows that can be used to view files and web pages
                </p>
            </PageTextContainer>
            <Image imgSrc = {superWindowSnap}/>
        </PageContainer>
    );
}}