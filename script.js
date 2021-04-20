// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire
// un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, 
// altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” 
// o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, 
// cioè il numero di volte che l’utente ha inserito un numero consentito.

(function() {
    

    var minNumber = 1;
    var maxNumber = 100;
    var aiNumbersLenght = 16;

    var aiNumbers = [];
    var userNumbers = [];

    //chiede all'utente di inserire un numero tramite prompt x volte, dove x è la differenza tra il valore max number e aiNumbersLenght
    //controllare che il numero inserito sia valido e che non sia anora stato usato
    //deve anche controllare che il numero non esista all'interno dell'array aiNumbers
    function askUserNumbers() {
        var userLenghtMax = maxNumber - minNumber- aiNumbersLenght;

        var gameOver = false

        //finche la lenght dei num inseriti è min della lenght max dei numeri inseriti, continuo a chiedere all'utente di inserire un num tramite prompt
        while (userNumbers.length < userLenghtMax && !gameOver) {
            var userInput = prompt("inserisci un numero tra " + minNumber + "e " + maxNumber);
            
            if(userInput == null) {
                gameOver == true;
            }
            if(userNumbers.length === userLenghtMax) {
                alert("HAI VINTO!");
                gameOver = true
            }

            // se il valore inserito è valido, ritorna true 
            // se il valore non è valido e l'utete deve reinserirlo, ritorna false
            // se il valore non è valido perchè è una mina, ritorna game over
            var inputIsValid = checkUserInput(userInput)

            if(!inputIsValid && inputIsValid !== "game over"){
                alert("Numero inserito non valido");
            } else if (inputIsValid === "game over"){
                gameOver = true
                alert("hai perso dopo aver inserito " + userNumbers.length + " numeri.");
            } else {
                userNumbers.push(parseInt(userInput));
            }                    
        }
    }

    //deve controllare se : -il valore è un num reale -il num NON è minore di minNumber -non èmaggiore di maxNumber -non sia già stato usato dall'urente 
    function checkUserInput(inputValue) {
        var result = true
        var numberToCheck = parseInt(inputValue)

        if(Number.isNaN(numberToCheck )) {
            return false
        }

        if(numberToCheck < minNumber|| numberToCheck > maxNumber){
            return false
        }

        if (userNumbers.indexOf(numberToCheck) > -1) {
            return false
        }

        if(aiNumbers.indexOf(numberToCheck) > -1) {
            return "game over";
        }

        return result;
    }

    //crea i num iniziali del compter e si assicura che non siano doppi
    function createAiNumbers() {
        do {
            var numeroRandom = generateRandomNumers(minNumber, maxNumber);

            if (aiNumbers.indexOf(numeroRandom) === -1) {                
                aiNumbers.push(numeroRandom)
            }
        } while (aiNumbers.length < aiNumbersLenght)

        console.log(aiNumbers);
    }

    function generateRandomNumers(min, max) {
        return Math.floor(Math.random() * max) + min;
    }

    createAiNumbers();
    askUserNumbers();
})
()