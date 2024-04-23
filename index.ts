#! /usr/bin/env node

import inquirer from "inquirer";

console.log("Welcome to the Rock, Papers, Scissor game by Abdul Samad")

let condition = true 
while(condition){
    


let randomFunction = Math.floor(Math.random()* 3 + 1)
let functionNames = ["Rock", "Paper", "Scissor"]


function a(){
if(randomFunction == 1){
    return functionNames[0]
}
else if(randomFunction == 2){
    return functionNames[1]
}
else{
    return functionNames[2]
}
}

let cpuFunction = a()

console.log("-------------------------------------------------------------------------------------")
console.log("-------------------------------------------------------------------------------------")

    
let askQuestion = await inquirer.prompt([{
    name : "rock",
    type : "list",
    message : "Select One Of The Option",
    choices : ["Rock", "Paper", "Scissor"]
}])

console.log("-------------------------------------------------------------------------------------")
console.log("-------------------------------------------------------------------------------------")


askQuestion = askQuestion.rock

if(askQuestion == "Rock" && cpuFunction == "Rock"){
     console.log("The match has tied, the CPU chose Rock too!")
}
else if(askQuestion == "Paper" && cpuFunction == "Paper"){
    console.log("The match has tied, the CPU chose Paper too!")
}
else if(askQuestion == "Scissor" && cpuFunction == "Scissor"){
    console.log("The match has tied, the CPU chose Scissor too!")
}



else if(askQuestion == "Rock" && cpuFunction == "Paper"){
    console.log("You Lost!!, the CPU chose Paper")
}
else if(askQuestion == "Paper" && cpuFunction == "Scissor"){
    console.log("You Lost!!, the CPU chose Scissor")
}
else if(askQuestion == "Scissor" && cpuFunction == "Rock"){
    console.log("You Lost!!, the CPU chose Rock")
}



else if(askQuestion == "Rock" && cpuFunction == "Scissor"){
    console.log("You Win!!, the CPU chose Scissor")
}
else if(askQuestion == "Paper" && cpuFunction == "Rock"){
    console.log("You Lost!!, the CPU chose Rock")
}
else if(askQuestion == "Scissor" && cpuFunction == "Paper"){
    console.log("You Lost!!, the CPU chose Paper")
}

console.log("-------------------------------------------------------------------------------------")
console.log("-------------------------------------------------------------------------------------")

let againQuestion = await inquirer.prompt([{
    name : "again",
    type : "list",
    message : "Do you want to play again!!",
    choices : ["Yes", "No"]
}])

againQuestion = againQuestion.again

if(againQuestion == "Yes"){
    condition = true
}
else{
    condition = false
}
}
