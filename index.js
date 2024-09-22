let characters = [
"A" , "B" , "C" , "D" , "E" , "F" , "G" , "H" , "I" , "J" , "K" , "L" , "M" , "N" , "O" , "P" , "Q" , "R" , "S" , "T" , "U" , "V" , "W" , "X" , "Y" , "Z" ,
"a" , "b" , "c" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t" , "u" , "v" , "w" , "x" , "y" , "z" , 
"0" , "1" , "2" , "3" , "4" , "5" , "6" , "7" , "8" , "9",
"~" , "`" , "!" , "@" , "#" , "$" , "%" , "^" , "&" , 
"*" , "_" , "-" , "+" , "=" , "/" ,
"(" , ")" , "{" , "[" , "}" , "]" , "," , "|" , ":" , ";" , "<" , ">" , "." , "?" 
];

let password_len = 15;
let pass_1 = document.getElementById("p1")
let pass_2 = document.getElementById("p2")

let count = 0;

function random_char() {
    return Math.floor( Math.random( ) * characters.length)
}


function password_1() {
    for(let i = 0; i < password_len; i++){
        pass_1.innerText += characters[random_char()]
    }
  }


function password_2() {
    for(let i = 0; i < password_len; i++){
        pass_2.innerText += characters[random_char()]
    }
  }


function password_generator(){
    
if(count===0){   
    password_1()
    password_2()
}else if(count >= 1){
    pass_1.innerText = ""
    pass_2.innerText = ""

    password_1()
    password_2()
}

    count++
}   