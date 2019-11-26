import React from "react";
import { Header } from "../blog/blog.js";
import "../landingStyles.css";
import HapticPic1 from "./res/HapticFeedBack.png";
import HapticPic2 from "./res/HapticFeedBack2.png";
import {JMImage,JMCode} from "../blog/blog";
import {ContentPlain,ContentText} from "./../components/Components.js";

export class Haptic extends React.Component {
    render() {
        return (
            <ContentPlain>
                <div style={{marginBottom:"100px"}}>
                    <Header name={"Haptic"} subtitle={"Closed Source IOS App developed in 2019"} />
                </div>
                <JMImage position = {"center"} width = "75%" height = "auto" src = {HapticPic1} subtitle = {"Copyright Joseph Manto 2019"} alt = {"logo"}/>
                <ContentText text = {`
                 Haptic is an IOS keyboard extension that provides 'haptic feedback'. Haptic is in the App Store as 'Haptic Feedback Keyboard'. The keyboard provides a small vibration to the users device via the tapic engine when a key on the keyboard is pressed, simulating a physical keyboard. 
                 `}/>
                <JMImage position = {"center"} width = "75%" height = "auto" src = {HapticPic2} subtitle = {"Copyright Joseph Manto 2019"} alt = {"logo"}/>
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
