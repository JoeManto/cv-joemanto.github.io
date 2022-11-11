import React from "react";
import hapticLogo1 from './res/haptic1.png';
import hapticLogo2 from './res/haptic2.png';
import githubLogo from '../res/githublogo.png';
import {HeaderTitle, Image, NavBar, NavChild, PageContainer,PageTextContainer, LinkWithImage} from '../components/BasicComponents';

export class Haptic extends React.Component{ render() {
    return(
        <PageContainer>
            <NavBar>
                <NavChild linkName={"Back"} style={{fontWeight: "bold", fontSize: "1.1em"}} link={"#/"}/>
            </NavBar>

            <HeaderTitle name={"Haptic"}/>
            <p><strong>Open Source iOS keyboard extension</strong></p>
            <LinkWithImage imgSrc={githubLogo} name={"checkout the repo"} link={"https://github.com/JoeManto/Haptic-Feedback-Keyboard"}/>
            <PageTextContainer>
                <p>Haptic is a previously closed source App released on the app store that offered an
                    iOS keyboard extension that gave the user access to a haptic feedback keyboard
                    experience. The keyboard provides a small vibration to the users device via the
                    taptic engine when a key on the keyboard is pressed, simulating a physical keyboard.
                </p>
                <p style={{color:"#C8AEFF"}}>Notice: Removed from sale as iOS 13 has introduced changes
                 to the haptic Api that removed the ability to request haptics within a keyboard extension</p>
            </PageTextContainer>
            <Image imgSrc = {hapticLogo1}/>
            <Image imgSrc = {hapticLogo2}/>
        </PageContainer>
    );
}}