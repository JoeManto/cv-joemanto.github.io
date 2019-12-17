import React from "react";
import hapticLogo1 from './res/haptic1.png';
import hapticLogo2 from './res/haptic2.png';
import {HeaderTitle, Image, NavBar, NavChild, PageContainer,PageTextContainer} from '../components/BasicComponents';

export class Haptic extends React.Component{ render() {
    return(
        <PageContainer>
            <NavBar>
                <NavChild linkName={"Back"} style={{fontWeight: "bold", fontSize: "1.1em"}} link={"#/"}/>
            </NavBar>

            <HeaderTitle name={"Haptic"}/>
            <p><strong>Closed-Source IOS Keyboard extension</strong></p>
            <PageTextContainer>
                <p>Haptic is an IOS keyboard extension that provides 'haptic feedback'. Haptic is in the App Store as 'Haptic Feedback Keyboard'. The keyboard provides a small vibration to the users device via the tapic engine when a key on the keyboard is pressed, simulating a physical keyboard.</p>
                <p style={{color:"#C8AEFF"}}>Notice: The app as been temporary removed from sale as IOS 13 has introduced changes to the their Haptic Api. I am working on the update!</p>
            </PageTextContainer>
            <Image imgSrc = {hapticLogo1}/>
            <Image imgSrc = {hapticLogo2}/>
        </PageContainer>
    );
}}