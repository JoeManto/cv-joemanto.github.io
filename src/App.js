import React from 'react';
import Radium from 'radium';
import './App.css';
import twitterLogo from './res/twitterlog.png';
import githubLogo from './res/githublogo.png';
import mailLogo from './res/mailLogo.png';
import vmwLogo from './res/vmw.png';
import wmLogo from "./res/wmu.png"
import {PageContainer,PageTextContainer,HeaderTitle,NavBar,NavChild,Button,Project,SubPageContainer,LinkWithImage,RoundedImg,HStack,Centered,BulletPoint} from './components/BasicComponents.js';

function App() {
  return (
      <PageContainer>
        <NavBar>
          <NavChild linkName={"Joe Manto"} style={{fontWeight:"bold",fontSize:"1.1em"}} link={"#/"}/>
        </NavBar>
        <HeaderTitle name = {"About Me"}/>
        <PageTextContainer>
        <p>I'm an iOS and macOS developer with 10 years of experience developing
          apps, frameworks, and tools. Currently doing iOS and analytics work <a href="https://www.vmware.com/">@VMware</a></p>
          <Button style = {{marginTop:"20px", float:"right"}} name = {"Resume"} link = {"/resume.pdf"}/>
          <LinkWithImage imgSrc={twitterLogo} name={"@manto_joe"} link={"https://www.twitter.com/manto_joe"}/>
          <LinkWithImage imgSrc={githubLogo} name={"joemanto"} link={"https://www.github.com/joemanto"}/>
          <LinkWithImage imgSrc={mailLogo} name={"joemanto.dev+jobs@gmail.com"} link={"#"}/>
        </PageTextContainer>
        <HeaderTitle name = {"Experience"}/>
        <SubPageContainer>
          <HStack style = {{marginBottom: "10px"}}>
            <RoundedImg src = {vmwLogo} size = {"50px"}></RoundedImg>
              <h3 style={{paddingLeft: "20px"}}>VMware</h3>
              <div style={{margin: "auto"}}></div> 
              <h5>Member of Technical Staff 2</h5>
          </HStack>
          <Centered style = {{marginBottom: "20px", position: "relative"}}>
            <p style={{position: "absolute", top: "50%", left: "-30px", backgroundColor: "black", padding: "10px"}}>2017</p>
            <HStack basis = {"30%"} style = {{borderLeft: "1px #a08bccFF solid", paddingLeft: "30px"}}>
              <BulletPoint>Provided code and design contributions for customer-facing NIAP-compliant (security standard) apps.</BulletPoint>
              <BulletPoint>Led the design and development of in-app analytics efforts in two core apps. Allowing app stakeholders to make informed data-driven decisions</BulletPoint>
              <BulletPoint>Implemented a Zoom OAuth client allowing zoom integration for users</BulletPoint>
              <BulletPoint>Collaborated in and with internal and external agile teams all around the world</BulletPoint>
              <BulletPoint>Designed and contributed to an iOS widget integration</BulletPoint>
              <BulletPoint>Experience working on apps that utilize a central SDK</BulletPoint>
              <BulletPoint>Experience working with apps that use Swift and Obj-C as well as UIKit and SwiftUI</BulletPoint>
              <BulletPoint>Worked on apps that have native versions on multiple platforms (iOS & macOS & Android)</BulletPoint>
              <BulletPoint>Experience working on apps that utilize a central SDK</BulletPoint>
              <BulletPoint>Worked on multiple distributed code bases</BulletPoint>
              <BulletPoint>Experience working with CocoaPods and Swift Package Manager</BulletPoint>
            </HStack>
          </Centered>

          <HStack style = {{marginBottom: "10px"}} >
            <RoundedImg src = {wmLogo} size = {"50px"}></RoundedImg>
            <h3 style={{paddingLeft: "20px"}}>Western Michigan University</h3>
            <div style={{margin: "auto"}}></div> 
            <h5>Student Lead & Web Dev</h5>
          </HStack>
          <Centered style = {{borderLeft: "", position: "relative"}}>
            <HStack basis = {"30%"} style = {{borderLeft: "1px #a08bccFF solid", paddingLeft: "30px"}}>
              <BulletPoint>Worked in a team environment leading and helping staff solve problems.</BulletPoint>
              <BulletPoint>Developed management skills with a focus on problem-solving.</BulletPoint>
              <BulletPoint>Collaboration on problems with co-workers.</BulletPoint>
              <BulletPoint>Developed and shipped a service on the university network that allowed employees to trade shifts with each other</BulletPoint>
              <BulletPoint>The ability to visualize problems from the customer's point of view.</BulletPoint>
            </HStack>
          </Centered>
        </SubPageContainer>
        <HeaderTitle name = {"Projects"}/>

        <SubPageContainer>
          <Project name = {"Haptic"} link = {"#/projects/haptic"} labels = {["iOS", "Swift", "UIKit"]}>
            <p>Haptic is a previously closed source App released on the app store that offered
              an iOS keyboard extension that gave the user access to a haptic feedback
              keyboard experience. The keyboard provides a small vibration to the users
              device via the taptic engine when a key on the keyboard is pressed,
              simulating a physical keyboard.</p>
          </Project>
          <Project name = {"XCT"} link = {"#/projects/xct"} labels = {["Xcode", "C", "CLI-Tool"]}>
            <p>A preprocessing CLI wrapper on Apple's xcodebuild test runner.
               XCT's goal is to make running tests git aia a CLI more accessible and practical
              </p>
          </Project>
          <Project name = {"One Palette"} link = {"#/projects/onepalette"} labels = {["macOS", "AppKit"]}>
            <p>OnePalette is a modern material design color palette that
              allows for quick and intuitive color lookups. OnePalette was designed and
              implemented for frontend devs and UX designers in mind, allowing developers
              and designers to stay on track and keep creating 🤙🏼</p>
          </Project>
          <Project name = {"Sheetie"} link = {"#/projects/sheetie"} labels = {["Plug-In"]}>
            <p>Sheetie is a sketch 3 plugin developed for indie game developers
              in mind. Sheetie creates vectorized sprite sheet objects that are
              automatically placed and rendered into a sketch art-board.</p>
          </Project>
          <Project name = {"AirPodsPair"} link = {"#/projects/airpods-pair"} labels = {["Swift", "CLI-Tool"]}>
            <p>Executable that can be used in the terminal or in automation tasks that will attempt
              to make a bluetooth connection to your AirPods</p>
          </Project>
        </SubPageContainer>
      </PageContainer>
  );
}

export default App;
