# Word-Guess-Game

###OVERVIEW

This is a hangman-type word guess game where users are given an image from a movie and guess which movie it is.  The user is shown a blank word and guesses one letter at a time.  If the letter is in the movie, the blank space is updated with the letter.  If the letter is not in the movie, it is displayed in the "Guessed Letters" bank, and a life is removed from the user.  If a the user selects a letter that has already been guessed, an alert is displayed.

The game ends when a user runs out of lives or correctly guesses all of the letters in the movie. A sound is played that depends on the outcome, and a message is displayed informing the user whether they won or lost. Movies are shown in a random order, and an alert is displayed when the user has played through all available movies.  The win counter is then reset, and the game restarts.

The game difficulty can be adjusted by changing the the `maxLives` variable and giving the user more or less incorrect guesses.

Clue images are stored in the [images folder](assets/images), and new movies can be added in the `wordBank` array.

Sounds are stored in the [sounds folder](assets/sounds).

A custom font is used for the game header, and stored in the [fonts folder](assets/fonts).