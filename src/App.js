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
          <p>Currently, I am a senior at Western Michigan University studying Computer Science and expecting to graduate in May 2020. My current interests in computer science are Backend Development, IOS Development and Javascript frontend development. The roots of my programming experience are as an IOS and MacOS developer, but I enjoy writing back-end services, and c code just as must as I like frontend development.</p>
          <Button style = {{marginTop:"20px",float:"right"}} name = {"Resume"} link = {"/resume.pdf"}/>
          <LinkWithImage imgSrc={twitterLogo} name={"@manto_joe"} link={"https://www.twitter.com/manto_joe"}/>
          <LinkWithImage imgSrc={githubLogo} name={"joemanto"} link={"https://www.github.com/joemanto"}/>
          <LinkWithImage imgSrc={mailLogo} name={"joe.m.manto@wmich.edu"} link={"#"}/>
        </PageTextContainer>

        <HeaderTitle name = {"Projects"}/>
        <ProjectsContainer>
          <Project name = {"One Palette"} link = {"#/projects/onepalette"}>
            <p>OnePalette is a modern material design color palette that allows for quick and intuitive color lookups. OnePalette was designed and implemented for frontend devs and UX designers in mind, allowing developers and designers to stay on track and keep creating 🤙🏼</p>
          </Project>
          <Project name = {"Haptic"} link = {"#/projects/haptic"}>
            <p>Haptic is an IOS keyboard extension that provides 'haptic feedback'. Haptic is in the App Store as 'Haptic Feedback Keyboard'. The keyboard provides a small vibration to the users device via the tapic engine when a key on the keyboard is pressed, simulating a physical keyboard.</p>
          </Project>
          <Project name = {"Sheetie"} link = {"#/projects/sheetie"}>
            <p>Sheetie is a sketch 3 plugin developed for indie game developers in mind. Sheetie creates vectorized sprite sheet objects that are automatically placed and rendered into a sketch art-board.</p>
          </Project>
        </ProjectsContainer>

        <HeaderTitle name = {"Ux"}/>
        <PageTextContainer>
          <p>Nothing to see here yet...</p>
        </PageTextContainer>

        <HeaderTitle name = {"Blog"}/>
        <PageTextContainer>
          <p>Nothing to see here yet...</p>
        </PageTextContainer>

      </PageContainer>
  );
}

export default App;
