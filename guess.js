const guess = (userGuess, secret) => {

  if (userGuess < secret) {
    console.log("Too small!")
  }
  else if (userGuess > secret) {
    console.log("Too Big!")
  }
  else if (userGuess === secret) {
    console.log("You win")
  }
}

guess(1, 10)