import React from "react";
import {Image,PageContainer,HeaderTitle} from "../components/BasicComponents.js"
import onepal1 from './res/onepal1.png';
import onepal2 from './res/onepal2.png';
import onepal3 from './res/onepal3.png';
import onepal4 from './res/onepal4.png';
import {NavBar, NavChild, PageTextContainer,Code,LinkWithImage,SubHeaderTitle} from "../components/BasicComponents";
import githubLogo from "../res/githublogo.png";

export class OnePalette extends React.Component {
    render() {
        return (
            <PageContainer>
                <NavBar>
                    <NavChild linkName={"Back"} style={{fontWeight: "bold", fontSize: "1.1em"}} link={"#/"}/>
                </NavBar>

                <HeaderTitle name={"One Palette"}/>
                <p>Open Source Project</p>
                <LinkWithImage imgSrc={githubLogo} name={"checkout the repo"} link={"https://github.com/JoeManto/OnePalette"} height={"20px"}/>

                <div style={{display:"flex",justifyContent:"center",margin:"60px 60px"}}>
                 <Image imgSrc = {onepal1} style = {{height:"300px"}}/>
                </div>

                <PageTextContainer>
                    <p>OnePalette is a modern material design color palette that allows for quick
                        and intuitive color lookups. OnePalette was designed and implemented for
                        frontend devs and UX designers in mind, allowing developers and designers
                        to stay on track and keep creating.</p>
                </PageTextContainer>

                <div style={{display:"flex",justifyContent:"center",margin:"60px 60px"} }>
                    <Image imgSrc = {onepal2}/>
                </div>
                <SubHeaderTitle name={"Unlimited Compatibility"}/>
                <PageTextContainer>
                    <p>Copy colors for any language. Simply pick your color copy
                        format from the dozens of options or make your own! Once
                        a color copy format is selected all you need to do is click
                        the color you wish to copy! Oneplatte uses core data to remember 
                        fields like these, so your selected copy format will only have to
                        be set once.</p>
                </PageTextContainer>

                <div style={{display:"flex",justifyContent:"center",margin:"60px 60px"} }>
                    <Image imgSrc = {onepal3}/>
                </div>
                <SubHeaderTitle name={"Integrated Work Flow"}/>
                <PageTextContainer>
                    <p>OnePalette is a swift MacOS hidden menu application.
                        One Palette is just one click away from you at all times, Which
                        allows OnePalette to be used all through your workflow.</p>
                </PageTextContainer>
                <div style={{display:"flex",justifyContent:"center",margin:"60px 60px"} }>
                    <Image imgSrc = {onepal4}/>
                </div>
                <SubHeaderTitle name={"Changeable"}/>
                <PageTextContainer>
                    <p>Don't care about material design? Need a palette just for a project?
                        Need to remove/change colors? Take control of your palette.
                        OnePalette allows users to take complete control over their palettes.</p>
                </PageTextContainer>
            </PageContainer>
        )
    }
}