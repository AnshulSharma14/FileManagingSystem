#!/usr/bin/env node
let inputarr=process.argv.slice(2);
let fsy=require("fs")
let path=require("path");
let treeObj=require("./Commands/tree")
let organizeObj=require("./Commands/organize")
let helpObj=require("./Commands/help")
let command=inputarr[0];
let types={
  media:["mp4","mkv"],
  archives:["zip","7z","rar","tar"],
  documents:["docx","doc","pdf","txt"],
  app:["exe","dmg","pkg","deb"]
}
switch (command){
    case "tree":
        treeObj.treekey(inputarr[1])
        break;
    case "organize":
        organizeObj.organizeKey(inputarr[1])
        break;
    case "help":
        helpObj.helpKey()
        break;        
    default:
        console.log("Please Enter a valid choice")  
        break;
    }
    
