import React from "react";
import {HeaderTitle, Image, NavBar, NavChild, PageContainer,PageTextContainer, LinkWithImage, Centered, BulletPoint, Quoted} from '../components/BasicComponents';

export class Links extends React.Component{ render() {
    return(
        <PageContainer>
                <NavBar>
                    <NavChild linkName={"Back"} style={{fontWeight: "bold", fontSize: "1.1em"}} link={"#/"}/>
                </NavBar>

                <HeaderTitle name={"Links"}/>

            <Quoted>
                <p>Heap data structure in swift for interviews</p>
                <a href="https://github.com/kodecocodes/swift-algorithm-club/blob/master/Heap/Heap.swift">swift-algorithm-club</a>
            </Quoted>
            
        </PageContainer>
    );
}}