
class Letter {
    constructor(char){
        this.char = char;
        this.vissible = false;
 
    }

    toString(){
if(this.vissible){
    return this.char
} 
return "_"
}

guess(letter){
    if(letter.toUpperCase() == this.char.toUpperCase()){
          this.vissible = true;
          return true
    }
    
}
getSolution(){
    return this.char ;
}

}

// const char1 = new Letter("a");
// char1.guess("a")
// console.log(char1.toString())

module.exports = Letter;