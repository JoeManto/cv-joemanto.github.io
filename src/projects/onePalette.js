import React from "react";
import { Header } from "../blog/blog.js";
import "../landingStyles.css";
import sheetieLogoSrc from "./res/sheetie_logo.png";
import {JMImage,JMCode} from "../blog/blog";
import {GithubLogoLink} from "./projects";
import {ContentPlain,ContentText} from "./../components/Components.js";

export class Sheetie extends React.Component {
    render() {
        return (
            <ContentPlain>
                <div style={{marginBottom:"100px"}}>
                    <Header name={"Sheetie"} subtitle={"Open-Source Project developed in 2016"} />
                    <GithubLogoLink link = {"https://www.github.com/JoeManto/sheetie"} target = {"_blank"} text = {"View Repo"}/>
                </div>
                <JMImage position = {"center"} width = "300px" height = "auto" src = {sheetieLogoSrc} subtitle = {"Copyright Joseph Manto 2019"} alt = {"logo"}/>

                <ContentText text = {`
          Sheetie is a sketch 3 plugin developed for indie game developers in mind. Sheetie creates vectorized sprite sheet objects that are automatically placed and rendered into a sketch art-board.
          For information on installing the plugin please visit the github.
        `}/>
                <ContentText text = {`
          Sheetie is written in a sketch wrapper language on obj-c called cocoa-script. Which gives you access to the underlining Obj-c api and access the the sketch development api.
          Below you can see some obj-c based code that uses both the obj-c api and the sketch dev api. Although, this code block below looks a lot like objective-c you can tell it not because of the
          interesting observation of dynamic data types 🤙🏼 This function creates all the grid lines for the sprite sheet.
        `}/>
                <JMCode
                    position = {"center"}
                    code={codeblock1}
                    language={"javascript"}
                />
            </ContentPlain>
        );
    }
}

const codeblock1 = `
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
};`;