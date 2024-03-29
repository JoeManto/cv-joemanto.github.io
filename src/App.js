import React from 'react';
import Radium from 'radium';
import './App.css';
import twitterLogo from './res/twitterlog.png';
import githubLogo from './res/githublogo-1.png';
import mailLogo from './res/emailLogo.png';
import vmwLogo from './res/vmw.png';
import wmLogo from "./res/wmu.png";
import hapticLogo from "./res/haptic-icon.png";
import onePalLogo from "./res/onepal-icon.png";
import superWindowLogo from "./res/superwindow-icon.png";
import {PageContainer,PageTextContainer,Spacer,HeaderTitle,NavBar,NavChild,Button,Project,SubPageContainer,LinkWithImage,RoundedImg,HStack,VStack,Centered,BulletPoint,ProjectLabel} from './components/BasicComponents.js';

function App() {
  return (
      <PageContainer>
        <NavBar>
          <NavChild linkName={"Joe Manto"} style={{fontWeight:"bold",fontSize:"1.1em"}} link={"#/"}/>
        </NavBar>
        <HeaderTitle name = {"About Me"}/>
        <PageTextContainer>
        <p>
          Experienced software engineer with a strong background
          in building, releasing, and maintaining iOS and macOS apps.
        </p>
        <p>
        iOS Engineer 
          <span><a href="https://www.vmware.com/"> @VMware</a></span>&#160; 
        </p>
          <Button style = {{marginTop:"20px", float:"right"}} name = {"Resume"} link = {"/resume.pdf"}/>
          <LinkWithImage imgSrc={githubLogo} name={"joemanto"} link={"https://www.github.com/joemanto"} height={"20px"}/>
          <LinkWithImage imgSrc={mailLogo} name={"joemanto.dev+jobs@gmail.com"} link={"#"} height={"15px"}/>
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
          <p style={{position: "absolute", top: "30%", left: "-40px", backgroundColor: "black", padding: "10px"}}>Present</p>
            <p style={{position: "absolute", top: "38%", left: "-40px", backgroundColor: "black", padding: "10px"}}>2020</p>
            <HStack basis = {"30%"} style = {{borderLeft: "1px #a08bccFF solid", paddingLeft: "30px"}}>
              <BulletPoint>
              Worked closely with other engineers, product managers, 
              and designers in 60+ app releases 
              </BulletPoint>
              <BulletPoint>
              Worked on many UI-related features that expanded
              my knowledge of the iOS SDK and UI Frameworks such as
              UIKit and SwiftUI
              </BulletPoint>
              <BulletPoint>
              Provided software design and development contributions
              to an iOS widget integration
              </BulletPoint>
              <BulletPoint>
              Led the design and development of an
              in-app analytics engine that was deployed in two core apps
              that both have over 1 million monthly users.
 
              Enabling unique insights into user behavior and
              feature usage allowing app stakeholders to make informed
              data driven decisions
              </BulletPoint>
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
              <BulletPoint>
                Worked in a team environment leading and helping staff solve problems.
              </BulletPoint>
              <BulletPoint>
                Developed management skills with a focus on problem-solving.
              </BulletPoint>
              <BulletPoint>
                Collaboration on problems with co-workers.
              </BulletPoint>
              <BulletPoint>
                Developed and shipped a service on the university network
                that allowed employees to trade shifts with each other
              </BulletPoint>
              <BulletPoint>The ability to visualize problems from the customer's point of view.</BulletPoint>
            </HStack>
          </Centered>
        </SubPageContainer>
        <HeaderTitle name = {"Blog"}/>
        <SubPageContainer>
          <HStack style = {{marginBottom: "10px"}}>
              <a href='#/blog/arc-retain-cycles'><h3 style={{paddingLeft: "20px"}}>ARC and Retain Cycles Demystified</h3></a>
              <div style={{margin: "auto"}}></div> 
              <h5 style={{color: "#a08bccFF"}}>6/13/2023</h5>
          </HStack>
          <p>Learn about retain cycles, how to avoid retain cycles, leaks vs retain cycles, common spots for retain cycles, common false positive retain cycles, debugging retain cycles, testing that prevents retain cycles</p>
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
            <ProjectLabel name = "Swift Concurrency"/>
            <ProjectLabel name = "AppKit"/>
            <ProjectLabel name = "CoreData"/>
            <ProjectLabel name = "KeyChain"/>
            <ProjectLabel name = "UserDefaults"/>
            <ProjectLabel name = "StoreKit"/>
            <ProjectLabel name = "SpriteKit"/>
            <ProjectLabel name = "Snapshot Tests"/>
            <ProjectLabel name = "UI Tests"/>
            <ProjectLabel name = "Unit Tests"/>
            <ProjectLabel name = "Accessibility"/>
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

          <Project image = {<RoundedImg src = {onePalLogo} size = {"44px"} notRounded = {true}/>} name = {"One Palette"} link = {"#/projects/onepalette"} labels = {["macOS",  "Swift", "SwiftUI", "AppKit", "CoreData"]}>
            <p>OnePalette is a modern material design color palette that
              allows for quick and intuitive color lookups. OnePalette was designed and
              implemented for frontend devs and UX designers in mind, allowing developers
              and designers to stay on track and keep creating 🤙🏼</p>
          </Project>
          <Project image = {<RoundedImg src = {superWindowLogo} size = {"44px"} notRounded = {true}/>} name = {"Super Window"} link = {"#/projects/super-window"} labels = {["macOS",  "Swift", "SwiftUI", "AppKit"]}>
            <p>Super Window is a macOS app that allows users to create `always on top windows`
               that can be used to view files and web pages</p>
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
