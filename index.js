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





