const inquirer = require('inquirer');
const Letter = require('./letter');
const Word = require('./word');

const words = ['javier','samy']
let randomWord = words[Math.floor(Math.random()* words.length)];
const questions = [{
    type:'input',
    message:'give me a letter',
    name:'answer',
}]
function play(){
var playWord = new Word(randomWord);
console.log(playWord.check());
inquirer.prompt(questions).then(({answer})=>{
playWord.guessLetter(answer);
console.log(playWord.check())
}
)
}

play();