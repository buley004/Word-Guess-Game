var wordBank = [
    { movie: "raising arizona", photo: "assets/images/arizona.jpg" },
    { movie: "super troopers", photo: "assets/images/troops.jpg" },
    { movie: "better off dead", photo: "assets/images/bod.jpg" },
    { movie: "legend", photo: "assets/images/legend.jpg" },
    { movie: "zardoz", photo: "assets/images/zardoz.jpg" },
    { movie: "pineapple express", photo: "assets/images/pe.jpg" },
    { movie: "michael", photo: "assets/images/michael.jpg" },
    { movie: "surf ninjas", photo: "assets/images/sn.jpg" },
    { movie: "fargo", photo: "assets/images/fargo.jpg" },
    { movie: "kazaam", photo: "assets/images/kazaam.jpg" },
    { movie: "vampires kiss", photo: "assets/images/vk.jpg" },
    { movie: "mandy", photo: "assets/images/mandy.jpg" },
    { movie: "pans labyrinth", photo: "assets/images/pl.jpg" },
    { movie: "the big lebowski", photo: "assets/images/rug.jpg" },
    { movie: "the royal tenenbaums", photo: "assets/images/rt.JPG" },
    { movie: "hot fuzz", photo: "assets/images/hf.jpg" },
    { movie: "apocalypse now", photo: "assets/images/an.jpg" },
    { movie: "the garbage pail kids movie", photo: "assets/images/gpkm.jpg" },
    { movie: "the life of brian", photo: "assets/images/lob.jpg" },
    { movie: "theodore rex", photo: "assets/images/trex.jpg" },
    { movie: "air bud golden receiver", photo: "assets/images/abgr.jpeg" },
    { movie: "inherent vice", photo: "assets/images/iv.jpg" },
    { movie: "walk hard", photo: "assets/images/wh.jpg" },
    { movie: "the shining", photo: "assets/images/shining.jpg" },
    { movie: "return to oz", photo: "assets/images/rto.jpg" },
    { movie: "chicken run", photo: "assets/images/cr.jpg" },
    { movie: "highlander", photo: "assets/images/hl.jpg" },
    { movie: "uhf", photo: "assets/images/uhf.jpg" },
    { movie: "interstellar", photo: "assets/images/interstellar.jpg" },
    { movie: "jumanji", photo: "assets/images/jumanji.jpg" },
    { movie: "batman returns", photo: "assets/images/br.jpg" }
];
var activeWords = wordBank.slice(0);
var gameOn = false;
var currentWord = "";
var wordArr = [];
var placeholder = [];
var guessedLetters = [];
var wrongLetters = [];
var maxLives = 6;
var wins = 0;
var rand;
var okLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//function to reset game board
reset = function () {
    //initialize variables
    gameOn = true;
    placeholder = [];
    guessedLetters = [];
    wrongLetters = [];
    lives = maxLives;

    //reset html elements
    document.getElementById("start").innerHTML = "Press any letter key to guess this movie!";
    document.getElementById("lives").innerHTML = "Lives: " + lives;
    document.getElementById("glbank").innerHTML = "Guessed letters: "
    document.getElementById("guessed").innerHTML = wrongLetters.join(" ");
    document.getElementById("message").innerHTML = "";
    document.getElementById("wins").innerHTML = "Wins: " + wins;

    //reload movies if all have been played
    if (activeWords.length === 0) {
        activeWords = wordBank.splice(0);
    }

    //Load random word and matching clue image
    rand = Math.floor(Math.random() * activeWords.length);
    currentWord = activeWords[rand].movie;
    wordArr = currentWord.split('');
    document.getElementById("clue").src = activeWords[rand].photo;
    console.log(wordArr);
    console.log(activeWords);

    //Initialize blank spaces
    for (var i = 0; i < currentWord.length; i++) {
        //allow for spaces in multi-word options
        if (wordArr[i] === " ") {
            placeholder.push("&nbsp;");
        }
        else {
            placeholder.push("_");
        }
    }

    //display word
    document.getElementById("word").innerHTML = placeholder.join(" ");

    //remove movie from actives to prevent repeats 
    activeWords.splice(rand, 1);
    console.log("current actives");
    console.log(activeWords);

    //play sound reel clip
    document.getElementById("reel").play();
}

// Press any key to start the game 
document.onkeyup = function (event) {

    var guess = event.key.toLowerCase();
    
    //initialize or reset game if not currently active
    if (gameOn === false) {
        reset();
    }
    //check that key is a letter
    else if (okLetters.includes(guess) == false) {
        return;
    }
    //main game logic in this else statement
    else {
        //check if letter has been guessed
        if (guessedLetters.includes(guess)) {
            alert("that letter has already been guessed");
        }
        //check if letter is in the word
        else {
            //add letter to guessed array
            guessedLetters.push(guess);

            console.log(guessedLetters);
            console.log(placeholder);

            //compare key letter to word array
            for (var i = 0; i < wordArr.length; i++) {
                //update word if letter is correct
                if (guess == wordArr[i]) {
                    placeholder.splice(i, 1, guess);
                    document.getElementById("word").innerHTML = placeholder.join(" ");
                    console.log(placeholder.join());
                }
            }
            //add wrong letter to wrong letter display and remove a life 
            if (wordArr.includes(guess) == false) {
                //display as uppercase 
                wrongLetters.push(event.key.toUpperCase());
                document.getElementById("guessed").innerHTML = wrongLetters.join(" ");
                lives--;
                document.getElementById("lives").innerHTML = "Lives: " + lives;
            }

            //display a message if word is fully guessed and end game
            if (placeholder.includes("_") == false) {
                document.getElementById("start").innerHTML = "Correct! Press any key to play again"
                wins++;
                document.getElementById("wins").innerHTML = "Wins: " + wins;

                //play sound effect
                document.getElementById("correct").play();
                gameOn = false;
            }

            //display a message if lives are gone and end game
            if (lives == 0) {
                document.getElementById("start").innerHTML = "You lose! Press any key to play again"

                //display correct answer
                for (var i = 0; i < wordArr.length; i++) {
                    //keep escaped blank space characters
                    if (placeholder[i] !== "&nbsp;") {
                        placeholder.splice(i, 1, wordArr[i]);
                    }
                }
                document.getElementById("word").innerHTML = placeholder.join(" ");

                //play sound effect
                document.getElementById("wrong").play();

                gameOn = false;
            }
        }
    }
}




