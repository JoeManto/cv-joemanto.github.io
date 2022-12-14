import React from 'react';
import Radium from 'radium';
import './App.css';
import twitterLogo from './res/twitterlog.png';
import githubLogo from './res/githublogo.png';
import mailLogo from './res/mailLogo.png';
import vmwLogo from './res/vmw.png';
import wmLogo from "./res/wmu.png";
import hapticLogo from "./res/haptic-icon.png";
import onePalLogo from "./res/onepal-icon.png";
import {PageContainer,PageTextContainer,Spacer,HeaderTitle,NavBar,NavChild,Button,Project,SubPageContainer,LinkWithImage,RoundedImg,HStack,VStack,Centered,BulletPoint,ProjectLabel} from './components/BasicComponents.js';

function App() {
  return (
      <PageContainer>
        <NavBar>
          <NavChild linkName={"Joe Manto"} style={{fontWeight:"bold",fontSize:"1.1em"}} link={"#/"}/>
        </NavBar>
        <HeaderTitle name = {"About Me"}/>
        <PageTextContainer>
        <p>Experienced software engineer with a strong background in building, releasing, and maintaining iOS and macOS apps. Currently doing iOS and analytics work <a href="https://www.vmware.com/">@VMware</a></p>
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
              <h5 style={{color: "#a08bccFF"}}>Member of Technical Staff 2</h5>
          </HStack>
          <Centered style = {{marginBottom: "20px", position: "relative"}}>
            <p style={{position: "absolute", top: "60%", left: "-30px", backgroundColor: "black", padding: "10px"}}>2020</p>
            <p>Member of the apps team working on two enterprise MDM apps</p>
            <HStack style = {{paddingBottom: "20px"}}>
              <VStack style = {{width: "200px"}}>
                <HStack><h4>Workspace One Boxer</h4><p style={{margin: "auto 10px", color: "#a08bccFF"}}>2 years</p></HStack>
                <p>A security-focused email, calendar, and contacts app</p>
              </VStack>
              <VStack style = {{width: "250px", margin: "0 auto"}}>
                <HStack><h4>Workspace One Intelligent Hub</h4><p style={{margin: "auto 10px", color: "#a08bccFF"}}>7 months</p></HStack>
                <p>The central app for the Workspace One suite of apps</p>
              </VStack>
            </HStack>
            <HStack basis = {"30%"} style = {{borderLeft: "1px #a08bccFF solid", paddingLeft: "30px"}}>
              <BulletPoint>Worked closely with designers, product managers, and other engineers in 60+ app releases ensuring that the apps met user needs and business goals</BulletPoint>
              <BulletPoint>Provided software design and development contributions to an iOS widget integration that provided users with a calendar widget</BulletPoint>
              <BulletPoint>Worked on many UI-related features that expanded my knowledge of the iOS SDK and automated UI testing </BulletPoint>
              <BulletPoint>Worked on apps that have native versions on multiple platforms (iOS & macOS & Android)</BulletPoint>
              <BulletPoint>Led the design and development of an in-app analytics engine that was deployed in two core apps that both have over 1 million monthly users. This enabled unique insights into user behavior and feature usage allowing app stakeholders to make informed data-driven decisions</BulletPoint>
            </HStack>
          </Centered>

          <HStack style = {{marginBottom: "10px"}} >
            <RoundedImg src = {wmLogo} size = {"50px"}></RoundedImg>
            <h3 style={{paddingLeft: "20px"}}>Western Michigan University</h3>
            <div style={{margin: "auto"}}></div> 
            <h5 style={{color: "#a08bccFF"}}>Student Lead & Web Dev</h5>
          </HStack>
          <Centered style = {{borderLeft: "", position: "relative"}}>
            <p style={{position: "absolute", top: "30%", left: "-30px", backgroundColor: "black", padding: "10px"}}>2016</p>
            <HStack basis = {"30%"} style = {{borderLeft: "1px #a08bccFF solid", paddingLeft: "30px"}}>
              <BulletPoint>Worked in a team environment leading and helping staff solve problems.</BulletPoint>
              <BulletPoint>Developed management skills with a focus on problem-solving.</BulletPoint>
              <BulletPoint>Collaboration on problems with co-workers.</BulletPoint>
              <BulletPoint>Developed and shipped a service on the university network that allowed employees to trade shifts with each other</BulletPoint>
              <BulletPoint>The ability to visualize problems from the customer's point of view.</BulletPoint>
            </HStack>
          </Centered>
        </SubPageContainer>

        <HeaderTitle name = {"Skills"}/>
        <SubPageContainer>
          <HStack style = {{marginBottom: "10px"}}>
            <ProjectLabel name = "iOS"/>
            <ProjectLabel name = "macOS"/>
            <ProjectLabel name = "Swift"/>
            <ProjectLabel name = "Xcode"/>
            <ProjectLabel name = "SwiftUI"/>
            <ProjectLabel name = "UIKit"/>
            <ProjectLabel name = "AutoLayout"/>
            <ProjectLabel name = "XCTest"/>
            <ProjectLabel name = "Combine"/>
            <ProjectLabel name = "WidgetKit"/>
            <ProjectLabel name = "MVVM"/>
            <ProjectLabel name = "Dependency Injection"/>
            <ProjectLabel name = "GCD"/>
            <ProjectLabel name = "Async / Await"/>
            <ProjectLabel name = "AppKit"/>
            <ProjectLabel name = "CoreData"/>
            <ProjectLabel name = "KeyChain"/>
            <ProjectLabel name = "UserDefaults"/>
            <ProjectLabel name = "StoreKit"/>
            <ProjectLabel name = "SpriteKit"/>
            <ProjectLabel name = "SnapshotTesting"/>
            <ProjectLabel name = "UI Tests"/>
            <ProjectLabel name = "Unit Tests"/>
            <ProjectLabel name = "Accessibility Inspector"/>
            <ProjectLabel name = "Obj-C"/>
            <ProjectLabel name = "Git"/>
            <ProjectLabel name = "Docker"/>
            <ProjectLabel name = "Xcode"/>
            <ProjectLabel name = "Jira"/>
            <ProjectLabel name = "BitBucket"/>
            <ProjectLabel name = "Bamboo"/>
            <ProjectLabel name = "Swift Package Manager"/>
            <ProjectLabel name = "CocoaPods"/>
          </HStack>
        </SubPageContainer>

        <HeaderTitle name = {"Projects"}/>
        <SubPageContainer>
          <Project image = {<RoundedImg src = {onePalLogo} size = {"44px"} notRounded = {true}/>} name = {"One Palette"} link = {"#/projects/onepalette"} labels = {["macOS",  "Swift", "AppKit", "CoreData"]}>
            <p>OnePalette is a modern material design color palette that
              allows for quick and intuitive color lookups. OnePalette was designed and
              implemented for frontend devs and UX designers in mind, allowing developers
              and designers to stay on track and keep creating 🤙🏼</p>
          </Project>
          <Project image = {<RoundedImg src = {hapticLogo} size = {"44px"}/>} name = {"Haptic"} link = {"#/projects/haptic"} labels = {["iOS", "Swift", "UIKit"]}>
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

        <HeaderTitle name = {"Education"}/>
        <SubPageContainer>
          <HStack>
            <h3>Western Michigan University</h3>
            <Spacer/>
            <p style={{color: "#a08bccFF"}}>Aug 2016 - May 2020</p>
          </HStack>
          <p>Bachelor of Science in Computer Science from the College of Engineering and Applied Sciences</p>
        </SubPageContainer>
      </PageContainer>
  );
}

export default App;
