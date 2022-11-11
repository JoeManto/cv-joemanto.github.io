import React from "react";
import {Image,PageContainer,HeaderTitle} from "../components/BasicComponents.js"
import sheetielogo1 from './res/sheetielog1.png';
import sheetielogo2 from './res/sheetielog2.png';
import githubLogo from '../res/githublogo.png';
import {NavBar, NavChild, PageTextContainer,Code,LinkWithImage} from "../components/BasicComponents";

export class Sheetie extends React.Component { render() {
    return (
        <PageContainer>
            <NavBar>
                <NavChild linkName={"Back"} style={{fontWeight: "bold", fontSize: "1.1em"}} link={"#/"}/>
            </NavBar>

            <HeaderTitle name={"Sheetie"}/>
            <p>Open Source Project</p>
            <LinkWithImage imgSrc={githubLogo} name={"checkout the repo"} link={"https://github.com/JoeManto/Sprite"}/>
            <PageTextContainer style={{marginBottom: "100px"}}>
                <Image imgSrc={sheetielogo2} name={"sheetielogo2"} style={{height: "300px"}}/>
                <Image imgSrc={sheetielogo1} name={"sheetielogo1"} style={{height: "250px"}}/>
            </PageTextContainer>
            <PageTextContainer>
                Sheetie is a sketch 3 plugin developed for indie game developers in mind.
                Sheetie creates vectorized sprite sheet objects that are automatically placed
                and rendered into a sketch art-board. For information
                on installing the plugin please visit the github repo.
            </PageTextContainer>
            <PageTextContainer>
                Sheetie was developed in cocoa-script which is a javascript based language that
                complies to native Objective-C. This was back in the early days of swift and Sketch.
                It was pretty interesting and fun to write obj-c code with dynamic types and all that
                fun stuff that javascript provides 🚀
            </PageTextContainer>
            <PageTextContainer>
                cocoa-script is very odd, because the language is pre-compiled like you would expect,
                but this allows you can do weird mixes of Obj-C and JavaScript at the same time.
                See the code snippet below that renders the sprite sheet to the artboard given
                a frame size.
            </PageTextContainer>
            <Code code={codeBlock}/>
        </PageContainer>
    )
}}

const codeBlock = `
function makeGrid(size){

   var rect;
   var shapeGroup;
   var fill;
   var group = [[NSMutableArray alloc] init];

   for(var i = 1;i*size <= width;i++){
        rect = MSRectangleShape.alloc().init();
        rect.frame = MSRect.rectWithRect(NSMakeRect(i*size, 0, 1, height));
        
        shapeGroup = MSShapeGroup.shapeWithPath(rect);
        shapeGroup.style().addStylePartOfType(0)
        
        fill = shapeGroup.style().fills().firstObject();
        fill.color = MSColor.colorWithRed_green_blue_alpha(181/255,9/255,255/255,1.0)
        
        [group addObject:shapeGroup];
   }
   
   for(var i = 1;i*size <= height;i++){
        rect = MSRectangleShape.alloc().init();
        rect.frame = MSRect.rectWithRect(NSMakeRect(0, i*size, width, 1));
        
        shapeGroup = MSShapeGroup.shapeWithPath(rect);
        shapeGroup.style().addStylePartOfType(0);
        
        fill = shapeGroup.style().fills().firstObject();
        fill.color = MSColor.colorWithRed_green_blue_alpha(181/255,9/255,255/255,1.0)
        
        [group addObject:shapeGroup];
   }
  var layer = MSLayerGroup.alloc().init();
  [layer addLayers:group];
  [layer setIsLocked:true];
  [layer setName:@"Contents"]
  artboard.addLayers([layer]);
};
`