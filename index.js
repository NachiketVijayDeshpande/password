const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let pwd1el=document.getElementById("pwd1")

let pwd2el=document.getElementById("pwd2")
let isgenerated =false

function random(){ if (isgenerated=== false){
    isgenerated=true
    for (let i=0; i<11; i++){
        random1= Math.floor(Math.random()*characters.length)
        pwd1el.textContent += characters[random1]
        random2= Math.floor(Math.random()*characters.length)
        pwd2el.textContent += characters[random2]
        
        }
    }


    // let random1= Math.floor(Math.random()*characters.length)
    // let random2= Math.floor(Math.random()*characters.length)
    // let random3= Math.floor(Math.random()*characters.length)
    // let random4= Math.floor(Math.random()*characters.length)
    // let random5= Math.floor(Math.random()*characters.length)
    // let random6= Math.floor(Math.random()*characters.length)
    // let random7= Math.floor(Math.random()*characters.length)
    // let random8= Math.floor(Math.random()*characters.length)
    
    
    //pwd1el.textContent = characters[random1] + characters[random2]+characters[random3]+characters[random4]+characters[random5]+characters[random6]+characters[random7]+characters[random8]
    //pwd2el.textContent =  characters[random1] + characters[random2]+characters[random3]+characters[random4]+characters[random5]+characters[random6]+characters[random7]+characters[random8]

}


function reset(){
    location.reload();
}
    
const button = document.getElementById("copy1");
const elementToCopy = document.querySelector("#pwd1");
const textToCopy = elementToCopy.innerText;

function copy ( text ) {
  navigator.clipboard.writeText( text )
}

button.addEventListener( 'click' , () => {
  copy( textToCopy )
})
    
const button1 = document.getElementById("copy2");
const elementToCopy1 = document.querySelector("#pwd2");
const textToCopy1 = elementToCopy.innerText;

function copy1 ( text ) {
  navigator.clipboard.writeText( text )
}

button1.addEventListener( 'click' , () => {
  copy( textToCopy1 )
})



