function rollDice(){
    const numberOfDices = document.getElementById("numberOfDices").value;
    const textResult = document.getElementById("text-result");
    const images = document.getElementById("images-result");

    const ruslts = [] ;
    const rusltimg = [] ;


    for (let i = 0; i < numberOfDices; i++)
    {
        const random = Math.floor(Math.random() * 6)+1;
        ruslts.push(random) ;

        rusltimg.push(`<img src ="../dice_images/${random}.png">`) ;

    }
    textResult.textContent=` La resultat de roller : ${ruslts.join(",")}` ;
    images.innerHTML= rusltimg.join('') ;
}
for(let i=0 ; i<ruslts.length ; i++)
    {
        console.log(ruslts[i])
    }
console.log("this is for jota");

function generatePassword(length ,ContainLowerCase,ContainUpperCase,ContainSymbols,ContainNumbers ){
const password="";
const Concatination ="";
const passLowerCase = "abcdefghijklmnopqrstuvwxyz" ;
const passUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" ;
const PassSymbols ="<>.,/*()_+*(&^%$#@!"  ;
const passNumbers = '0123456789"

    Concatination+=ContainLowerCase?passLowerCase :"" ;
     Concatination+=ContainUpperCase?passUpperCase :"" ;
     Concatination+=ContainSymbols?PassSymbols :"" ;
     Concatination+=ContainNumbers?passNumbers :"" ;

    if (length<8){
    return "password must have at least 8 characteres"
    }
    {
        for( let j=0 ; j<length ; j++)
            {
                const AuHasard= Math.floor(Math.random()*Concatination.length) ; 
                password+=Concatination[AuHasard];
}
        return password ;
    }
const length=12 ;
const ContainLowerCase=true;
const ContainUpperCase=true;
const ContainSymbols=true;
const ContainNumbers=true;

  





