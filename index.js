let char = [
  "A" , "B" , "C" , "D" , "E" , "F" , "G" , "H" , "I" , "J" , "K" , "L" , "M" , "N" , "O" , "P" , "Q" , "R" , "S" , "T" , "U" , "V" , "W" , "X" , "Y" , "Z" ,
  "a" , "b" , "c" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t" , "u" , "v" , "w" , "x" , "y" , "z" , 
  "0" , "1" , "2" , "3" , "4" , "5" , "6" , "7" , "8" , "9",
  "~" , "`" , "!" , "@" , "#" , "$" , "%" , "^" , "&" , 
  "*" , "_" , "-" , "+" , "=" , "/" ,
  "(" , ")" , "{" , "[" , "}" , "]" , "," , "|" , ":" , ";" , "<" , ">" , "." , "?" 
  ];
  
  let charac = [
      "A" , "B" , "C" , "D" , "E" , "F" , "G" , "H" , "I" , "J" , "K" , "L" , "M" , "N" , "O" , "P" , "Q" , "R" , "S" , "T" , "U" , "V" , "W" , "X" , "Y" , "Z" ,
      "a" , "b" , "c" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t" , "u" , "v" , "w" , "x" , "y" , "z"
  ]
  

  let password_len = 15;
  let pass_1 = document.getElementById("p1")
  let pass_2 = document.getElementById("p2")
  
  
  let count = 0;
  
  let checkBox = document.getElementById("inp")

  function checker() {
    if(checkBox.checked == true){
      char = [
        "A" , "B" , "C" , "D" , "E" , "F" , "G" , "H" , "I" , "J" , "K" , "L" , "M" , "N" , "O" , "P" , "Q" , "R" , "S" , "T" , "U" , "V" , "W" , "X" , "Y" , "Z" ,
        "a" , "b" , "c" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t" , "u" , "v" , "w" , "x" , "y" , "z" , 
        "0" , "1" , "2" , "3" , "4" , "5" , "6" , "7" , "8" , "9",
        "~" , "`" , "!" , "@" , "#" , "$" , "%" , "^" , "&" , 
        "*" , "_" , "-" , "+" , "=" , "/" ,
        "(" , ")" , "{" , "[" , "}" , "]" , "," , "|" , ":" , ";" , "<" , ">" , "." , "?" 
        ];
    }
    else{
      char = [
        "A" , "B" , "C" , "D" , "E" , "F" , "G" , "H" , "I" , "J" , "K" , "L" , "M" , "N" , "O" , "P" , "Q" , "R" , "S" , "T" , "U" , "V" , "W" , "X" , "Y" , "Z" ,
        "a" , "b" , "c" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t" , "u" , "v" , "w" , "x" , "y" , "z"
    ]
    }
}
  

  function random_char() {
      return Math.floor( Math.random( ) * char.length)
  }
  
  
  function password_1() {
      for(let i = 0; i < password_len; i++){
          pass_1.innerText += char[random_char()]
      }
    }
  
  
  function password_2() {
      for(let i = 0; i < password_len; i++){
          pass_2.innerText += char[random_char()]
      }
    }
  
  
    let paa = document.getElementById("pass") 
  
  function password_generator(){
      paa.style.opacity = 1
      document.getElementById("line").style.opacity = 0.1
  
  if(count===0){   
      password_1()
      password_2()
  }else if(count >= 1){
      pass_1.innerText = ""
      pass_2.innerText = ""
  
      password_1()
      password_2()
  }
      count++;
      
  }   


  
  
  const span1 = document.querySelector("#p1");
  
  span1.onclick = function() {
    document.execCommand("copy");
  }
  
  span1.addEventListener("copy", function(event) {
    event.preventDefault();
    if (event.clipboardData) {
      event.clipboardData.setData("text/plain", span1.textContent);
      console.log(event.clipboardData.getData("text"))
    }
  });
  
  
  
  const span2 = document.querySelector("#p2");
  
  span2.onclick = function() {
    document.execCommand("copy");
  }
  
  span2.addEventListener("copy", function(event) {
    event.preventDefault();
    if (event.clipboardData) {
      event.clipboardData.setData("text/plain", span2.textContent);
      console.log(event.clipboardData.getData("text"))
    }
  });



