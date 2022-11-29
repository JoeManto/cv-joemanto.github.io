import React from 'react';
import Radium from 'radium';
import './App.css';
import twitterLogo from './res/twitterlog.png';
import githubLogo from './res/githublogo.png';
import mailLogo from './res/mailLogo.png';
import {PageContainer,PageTextContainer,HeaderTitle,NavBar,NavChild,Button,Project,ProjectsContainer,LinkWithImage} from './components/BasicComponents.js';

function App() {
  return (
      <PageContainer>
        <NavBar>
          <NavChild linkName={"Joe Manto"} style={{fontWeight:"bold",fontSize:"1.1em"}} link={"#/"}/>
        </NavBar>
        <HeaderTitle name = {"About Me"}/>
        <PageTextContainer>
        <p>I'm an iOS and macOS developer with 10 years of experience developing
          apps, frameworks, and tools. Currently doing iOS and analytics work @VMware</p>
          <Button style = {{marginTop:"20px",float:"right"}} name = {"Resume"} link = {"/resume.pdf"}/>
          <LinkWithImage imgSrc={twitterLogo} name={"@manto_joe"} link={"https://www.twitter.com/manto_joe"}/>
          <LinkWithImage imgSrc={githubLogo} name={"joemanto"} link={"https://www.github.com/joemanto"}/>
          <LinkWithImage imgSrc={mailLogo} name={"jmantoapps@gmail.com"} link={"#"}/>
        </PageTextContainer>

        <HeaderTitle name = {"Projects"}/>
        <ProjectsContainer>
          <Project name = {"Haptic"} link = {"#/projects/haptic"}>
            <p>Haptic is a previously closed source App released on the app store that offered
              an iOS keyboard extension that gave the user access to a haptic feedback
              keyboard experience. The keyboard provides a small vibration to the users
              device via the taptic engine when a key on the keyboard is pressed,
              simulating a physical keyboard.</p>
          </Project>
          <Project name = {"XCT"} link = {"#/projects/xct"}>
            <p>A preprocessing CLI wrapper on Apple's xcodebuild test runner.
               XCT's goal is to make running tests git aia a CLI more accessible and practical
              </p>
          </Project>
          <Project name = {"One Palette"} link = {"#/projects/onepalette"}>
            <p>OnePalette is a modern material design color palette that
              allows for quick and intuitive color lookups. OnePalette was designed and
              implemented for frontend devs and UX designers in mind, allowing developers
              and designers to stay on track and keep creating 🤙🏼</p>
          </Project>
          <Project name = {"Sheetie"} link = {"#/projects/sheetie"}>
            <p>Sheetie is a sketch 3 plugin developed for indie game developers
              in mind. Sheetie creates vectorized sprite sheet objects that are
              automatically placed and rendered into a sketch art-board.</p>
          </Project>
          <Project name = {"AirPodsPair"} link = {"#/projects/airpods-pair"}>
            <p>Executable that can be used in the terminal or in automation tasks that will attempt
              to make a bluetooth connection to your AirPods</p>
          </Project>
        </ProjectsContainer>
      </PageContainer>
  );
}

export default App;
