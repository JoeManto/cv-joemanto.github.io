import React from "react";
import "../landingStyles.css";
import "../styles.css";
import OnePaletteLogo from "./res/OnePaletteLogo.png";
import OnePaletteColorExport from "./res/OnePaletteColorExport.png";
import OnePaletteMenuView from "./res/OnePaletteMenuView.png"
import OnePaletteEditView from "./res/OnePaletteEditColors.png"

import {GithubLogoLink} from "./projects";
import {ContentPlain,ContentText,JMImage,JMCode,Header} from "./../components/components.js";

export class OnePalette extends React.Component {
    render() {
        return (
            <ContentPlain>
                <div style={{marginBottom:"100px"}}>
                    <Header name={"One Palette"} subtitle={"Open-Source Project started in 2018"} />
                    <GithubLogoLink link = {"https://www.github.com/JoeManto/onepalette"} target = {"_blank"} text = {"View Repo"}/>
                </div>

                <div style={{width:"500px",height:"500px",position:"relative",margin:"0 auto"}}>
                <JMImage position = {"center"} width = "300px" height = "auto" src = {OnePaletteLogo}  alt = {"logo"} ani={"bounceImage"}/>
                </div>
                <ContentText text = {`
                 OnePalette is a modern material design color palette that allows for quick and intuitive color lookups. OnePalette was designed and implemented for frontend devs and UX designs in mind, Letting developers stay on track and keep creating.
                 `}/>

                <JMImage position = {"center"} width = "80%" height = "auto" src = {OnePaletteColorExport}  alt = {"logo"}/>

                <ContentText text = {`
                 Copy colors for any language. Simply pick your color copy format from the dozens of options or make your own! Once a color copy format is selected all you need to do is click the color you wish to copy! Oneplatte uses core data to remember fields like these, so your selected copy format will only have to be set once.                  `}/>
                <JMImage position = {"center"} width = "50%" height = "auto" src = {OnePaletteMenuView}  alt = {"logo"}/>

                <ContentText text = {`
                OnePalette is a swift MacOS hidden menu application. One Palette is just one click away from you at all times, Which allows OnePalette to be used all through your workflow.
                 `}/>

                <JMImage position = {"center"} width = "50%" height = "auto" src = {OnePaletteEditView}  alt = {"logo"}/>
                <ContentText text = {`Don't care about material design?Need a palette just for a project?Need to remove/change colors?Take control of your palette. OnePalette allows users to take complete control over their palettes.`}/>

                <JMCode
                    position = {"center"}
                    code={codeblock1}
                    language={"swift"}
                />
            </ContentPlain>
        );
    }
}

const codeblock1 = `
//
//  Palette.swift
//  OnePalette
//
//  Created by Joe Manto on 3/6/18.
//  Copyright © 2018 Joe Manto. All rights reserved.
//
import Cocoa
import CoreData

class Palette: NSManagedObject {
    
    @NSManaged var paletteDataToSave:NSData?
    var paletteData: [String:OPColorGroup]?
    @NSManaged var paletteName:String
    @NSManaged var paletteWeights:[Int]?
    @NSManaged var paletteKey:[String]?
    @NSManaged var curGroupIndex:Int
    
    override init(entity: NSEntityDescription, insertInto context: NSManagedObjectContext?) {
        super.init(entity: entity, insertInto: context)
    }
    
    init(name:String,entity: NSEntityDescription, insertInto context: NSManagedObjectContext?) {
        super.init(entity: entity, insertInto: context)
        self.paletteData = NSDictionary.init() as? [String : OPColorGroup]
        self.paletteName = name
        self.paletteWeights = Array(repeating: 0, count: 10)
        self.paletteKey = Array(repeating: "", count: 0)
        self.curGroupIndex = 0
    }
   
     init(name:String,data:[String:OPColorGroup],palWeights:[Int],palKeys:[String],entity: NSEntityDescription, insertInto context: NSManagedObjectContext?) {
        super.init(entity: entity, insertInto: context)
        self.paletteData = data
        self.paletteName = name
        self.paletteWeights = palWeights
        self.paletteKey = palKeys
        self.curGroupIndex = 0
    }
    
    /*inits a palette object from an import from a local json file that contains palette data
     This method is used when the user first runs the application so it can intital install
     pre installed palettes*/
    convenience init(name:String,localFile:String,entity: NSEntityDescription, insertInto context: NSManagedObjectContext?){
        self.init(name: name, entity: entity, insertInto: context)
        let path = Bundle.main.url(forResource: localFile, withExtension: "json")
        let content = try? String(contentsOf: path!)
        
        let jsonWithObjectRoot = content!
        let data = jsonWithObjectRoot.data(using:.utf8)!
        do {
            let json = try JSONSerialization.jsonObject(with:data)
            if let dictionary = json as? [String: Any] {
                if let nestDictionary = dictionary["keys"] as? [String: Any]
                {
                    let keys:NSArray = nestDictionary["values"] as! NSArray
                    self.paletteKey = Array(repeating: "", count: keys.count)
                    for (index, i) in keys.enumerated(){
                        let stringVal:String = i as! String
                        self.paletteKey![index] = stringVal
                        //print(self.paletteKey[index])
                    }
                }

                
                if let nestDictionary = dictionary["weights"] as? [String: Any]
                {
                    let weights:NSArray = nestDictionary["values"] as! NSArray
                    for (index, i) in weights.enumerated(){
                        let stringVal:String = i as! String
                        self.paletteWeights![index] = Int(stringVal)!
                        //print(self.paletteWeights[index])
                    }
                }
                for  palKey in self.paletteKey!{
                    if let nestDictionary = dictionary[palKey] as? [String: Any]
                    {
                        let colorGroup:NSArray = nestDictionary["values"] as! NSArray
                        self.paletteData![palKey] = OPColorGroup.init(id: palKey)
                        for (index, i) in colorGroup.enumerated(){
                            self.paletteData![palKey]?.addColor(color: OPColor.init(hexString: i as! String, alpha: 1.0, weight: self.paletteWeights![index]))
                        }
                        self.paletteData![palKey]?.findHeaderColor()
                        
                       // print(self.paletteData![palKey]?.getColorArray().count as Any ," ",self.paletteData![palKey]?.getName() as Any)
                    }
                }
                
                if let nestDictionary = dictionary["Names"] as? [String:Any]{
                    let names:NSArray = nestDictionary["values"] as! NSArray
                    for (index, i) in (self.paletteKey?.enumerated())!{
                        self.paletteData?[i]?.setName(name: names[index] as! String)
                    }
                }
                
            }
        } catch {
            print("Error parsing Json")
        }
    }
    
    //----------------Group Methodds-------------------------
    /*adds a colorgroup to the palatte data*/
    func addColorGroup(group:OPColorGroup) {
        paletteData![group.getIdentifier()] = group
        //print(paletteData![group.getName().lowercased()])
        //print(paletteData)
        print("added colorGroup")
    }
    
    /*Adds an empty color group to the palette data with a name*/
    func addEmptyGroup(with groupID:String) {
        print("added empty group")
        paletteData![groupID] = OPColorGroup(id: groupID)
    }
    /*updates an existing color group value*/
    func updateColorGroup(group:OPColorGroup, for groupID:String){
        paletteData![groupID] = group
    }
    
    /*generates a simple color group used for when the user inserts a new color group in to a palette*/
    func generateTempColorGroup() -> OPColorGroup {
        let randomId = OPUtil.genIdOfLength(len: 10) as String
        let group = OPColorGroup(id:randomId)
        let random = arc4random_uniform(201) + 30
        let color:OPColor = OPColor(hexString: String(format:"%2X%2X%2X",random,random,random), weight: 50)
        group.addColor(color: color)
        paletteKey?.append(randomId)
        group.headerColorIndex = 0
        group.setHeaderColor(header: color)
        self.addColorGroup(group: group)
        return group
    }
    
    //------------------CoreData Save------------------------
    /*Turns paletteData to BinaryData so it can be saved as an NSManaged objec in core data*/
    func saveColorData(){
        self.paletteDataToSave = NSKeyedArchiver.archivedData(withRootObject: self.paletteData!) as NSData
    }
    /*Core data saves the manangedObjectContext to the entitity*/
    func save() ->  Bool{
        saveColorData()
        
        if (managedObjectContext?.hasChanges)!{
            do{
                try managedObjectContext?.save()
                print("saved palette")
                return true
            }catch{
                print("failed to save")
                return false
            }
        }
        return false
    }
}`;