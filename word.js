const Letter = require('./letter');


class Word {

    constructor(str){
        this.str = str.split('').map(element =>{ 
            let chars = new Letter(element)
            return chars
        })
    }

    check(){
        var result = []
        this.str.forEach(char => {
            result.push(char.toString());
        })
    return result.join(' ');
    }
    
    
    guessLetter(letter){
 this.str.forEach(element => {
 element.guess(letter);
    
  })

} ;
}
const javier = new Word('javier');
javier.guessLetter('a');
console.log(javier.str);
javier.guessLetter('j');
javier.check();

module.exports = Word;