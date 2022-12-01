import React from "react";
import hapticLogo1 from './res/haptic1.png';
import hapticLogo2 from './res/haptic2.png';
import githubLogo from '../res/githublogo.png';
import {HeaderTitle, Image, NavBar, NavChild, PageContainer,PageTextContainer, LinkWithImage, SubHeaderTitle, Code} from '../components/BasicComponents';

const codeBlock = `
XCT -t [@saveable fileTarget]
    -esd [@nullable testCaseMatcher]
    -P [@saveable project]
    -S [@saveable scheme]
    -O [@saveable OS]
    -D [@saveable device]
    --dry --ugly --clear-inline
    --clear-global --clear-all
    --list-inline --list-global
`

export class XCT extends React.Component{ render() {
    return(
        <PageContainer>
            <NavBar>
                <NavChild linkName={"Back"} style={{fontWeight: "bold", fontSize: "1.1em"}} link={"#/"}/>
            </NavBar>

            <HeaderTitle name={"XCT"}/>
            <p><strong>Open Source Command Line Tool [ On Going ]</strong></p>
            <LinkWithImage imgSrc={githubLogo} name={"checkout the repo for more info"} link={"https://github.com/JoeManto/XCT"}/>
            <PageTextContainer>
                <p> A preprocessing CLI wrapper on Apple's xcodebuild's test runner. XCT's goal
                    is to make running tests via a CLI more accessible and practical.</p>
            
            
            </PageTextContainer>
            <div style = {{height: "90vh"}}></div>
        </PageContainer>
    );
}}