import React from "react";
import hapticLogo1 from './res/haptic1.png';
import hapticLogo2 from './res/haptic2.png';
import githubLogo from '../res/githublogo.png';
import {HeaderTitle, Image, NavBar, NavChild, PageContainer,PageTextContainer, LinkWithImage} from '../components/BasicComponents';

export class AirPodsPair extends React.Component{ render() {
    return(
        <PageContainer>
            <NavBar>
                <NavChild linkName={"Back"} style={{fontWeight: "bold", fontSize: "1.1em"}} link={"#/"}/>
            </NavBar>

            <HeaderTitle name={"AirPods Pair"}/>
            <p><strong>Open Source Command Line Tool</strong></p>
            <LinkWithImage imgSrc={githubLogo} name={"checkout the repo for more info"} link={"https://github.com/JoeManto/AirPodsPair"}/>
            <PageTextContainer>
                <p>Executable that can be used in the terminal
                    or in automation tasks that will attempt to make
                    a bluetooth connection to your AirPods 
                </p>
            </PageTextContainer>
            <div style = {{height: "90vh"}}></div>
        </PageContainer>
    );
}}