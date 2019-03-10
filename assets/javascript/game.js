var wordBank = ["this", "that", "other", "pineapple"];
var gameOn = false;
var currentWord = "";
var wordArr = [];
var placeholder = [];
var guessedLetters = [];
var wrongLetters = [];
var lives = 9;
var okLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Press any key to start the game 
document.onkeyup = function (event) {

    if (gameOn === false) {

        //Begin game
        gameOn = true;
        document.getElementById("start").innerHTML = "Guess the word";

        //Load word
        currentWord = wordBank[Math.floor(Math.random() * wordBank.length)];
        wordArr = currentWord.split('');
        console.log(wordArr);

        //Initialize blank spaces
        for (var i = 0; i < currentWord.length; i++) {
            placeholder.push("_");
        }

        //display word
        document.getElementById("word").innerHTML = placeholder.join(" ");
    }
    //check that key is a letter
    else if (okLetters.includes(event.key) == false) {
        return; 
    }
    else {

        //check if letter has been guessed
        if (guessedLetters.includes(event.key)) {
            alert("that letter has already been guessed");
        }
        //check if letter is in the word
        else {
            console.log("not in string");
            guessedLetters.push(event.key);
            console.log(guessedLetters);
            console.log(placeholder);

            //compare key letter to word array
            for (var i = 0; i < wordArr.length; i++) {
                //update word if letter is correct
                if (event.key == wordArr[i]) {
                    placeholder.splice(i, 1, event.key);
                    document.getElementById("word").innerHTML = placeholder.join(" ");
                }
            }
            //add wrong letter to guessed letters
            if (wordArr.includes(event.key) == false) {
                wrongLetters.push(event.key);
                document.getElementById("guessed").innerHTML = wrongLetters.join(" ");
                lives--;
                document.getElementById("lives").innerHTML = "Lives: " + lives;
            }
        }
    }
}




