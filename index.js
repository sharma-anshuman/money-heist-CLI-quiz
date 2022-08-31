var readlineSync = require('readline-sync');
var name = readlineSync.question("Your name: ");
console.log("Hello " + name + "!!\nlet's see how much do you know about Money Heist$$");
var score = 0, finalScore = 0;

var leaderBoard = [
  {
    name: 'Anshuman',
    score: 15
  },
  {
    name: 'Uma',
    score: 14
  }
];

var questions = [{
  question: "1. How many people did The Professor recruit to carry out the plan to occupy the Royal Mint of Spain?\na) 8\nb) 9\nc) 10\nd) 11\n",
  answer: "a"
}, {
  question: "2. Inspector Raquel’s mother suffers from what medical condition?\na) Alzheimer’s Disease\nb) Paranoid Schizophrenia\nc) Post-Traumatic Stress Disorder\nd) Cancer\n",
  answer: "a"
}, {
  question: "3. How much currency does the gang print at the Royal Mint?\na) 879 million euros\nb) 926 million euros\nc) 984 million euros\nd) 777 million euros\n",
  answer: "c"
}, {
  question: "4. The Professor’s first name is eventually revealed. What is it?\na) Andrés\nb) Aníbal\nc) Sergio\nd) Racquel\n",
  answer: "c"
}, {
  question: "5. Before giving up on society and turning to a life of crime, what was Moscow’s occupation?\na) Hacker\nb) Soldier\nc) Miner\nd) Clerk\n",
  
  answer: "c"
}, {
  question: "6. The show is actually called La Casa de Papel, which literally translates to what?\na) The Paper House\nb) The Outcasts\nc) The House of Outcasts\nd) The House\n",
  answer: "a"
}, {
  question: "7. In which country does Raquel track the Professor after the first heist?\na) Philippines\nb) Thailand\nc) China\nd) Malaysia\n",
  answer: "a"
}, {
  question: "8. “Let the matriarchy begin”: Whose words are these?\na) Tokyo\nb) Nairobi\nc) Raquel\nd) Professor\n",
  answer: "b"
}, {
  question: "9. Whose glasses contained a bug?\na) Raquel\nb) Angel\nc) Tokyo\nd) Professor\n",
  answer: "b"
}, {
  question: "10. How many heists had Berlin pulled off before the event of “Money Heist” ?\na) 25\nb) 27\nc) 32\nd) 23\n",
  answer: "b"
}, {
  question: "11. How many members of the original team die (or are presumed dead) during the course of Money Heist ?\na) 3\nb) 4\nc) None\nd) 1\n",
  answer: "a"
}, {
  question: "12. Who quoted this “After all what is more human than the fight for survival ” ?\na) Professor\nb) Tokyo\nc) Rio\nd) Berlin\n",
  answer: "b"
}, {
  question: "13. What is the name of Berlin’s girlfriend who comes to visit at the Monastery?\na) Jessica\nb) Maniana\nc) Selena\nd) Tatiana\n",
  answer: "d"
}, {
  question: "14. Which continent is *not* represented with a nickname among the robbers?\na) Africa\nb) Asia\nc) Oceania\nd) Australia\n",
  answer: "c"
}, {
  question: "15. Who said, “Are you a complete idiot, or what? You’ve heard of Stockholm Syndrome, right?”\na) Tokyo\nb) Denver\nc) Nairobi\nd) Arturo\n",
  answer: "c"
}];

function play(question, answer) {
  var res = readlineSync.question(question);
  if (res.toLowerCase() === answer.toLowerCase()) {
    score = score + 1;
    console.log("right!!");
  }
  else {
    console.log("wrong!!")
  }

  console.log("Current Score:", score)
  console.log("-----------------")
}

console.log("WELCOME TO LEVEL - 1!!\n")

var x = questions.length / 3;
var i = 0;
for (i = 0; i < x; i++) {
  play(questions[i].question, questions[i].answer);
}
finalScore = finalScore + score;
if (score > 2) {
  console.log("WELCOME TO LEVEL - 2\n");
  score = 0;
  for (; i < x * 2; i++) {
    play(questions[i].question, questions[i].answer);
  }
  finalScore = finalScore + score;
  if (score > 2) {
    console.log("WELCOME TO LEVEL - 3\n");
    score = 0;
    for (; i < x * 3; i++) {
      play(questions[i].question, questions[i].answer);
    }
    finalScore = finalScore + score;
    if (score > 2) {
      console.log("Congratulations on successfully completing the game!!\n You've scored: " + finalScore + "!! See you soon :)\nSome top scorers are: \n");
      for (var i = 0; i < leaderBoard.length; i++) {
        console.log(leaderBoard[i].name + ": " + leaderBoard[i].score);
      }
      console.log("Isn't your name in the leaderBoard? ping me with your score's screenshot and i'll update it!!");
    }
    else {
      console.log("Well tried!! Better luck next time :)\nYou scored: " + finalScore + "\nSome top scorers are: \n");
      for (var i = 0; i < leaderBoard.length; i++) {
        console.log(leaderBoard[i].name + ": " + leaderBoard[i].score);
      }
      console.log("Isn't your name in the leaderBoard? ping me with your score's screenshot and i'll update it!!");
    }
  }
  else {
    console.log("Sorry since you've scored less than 50% so you're out of the game :(")
    console.log("You only scored " + finalScore + " Better luck next time!!\nSome top scorers are: \n");
    for (var i = 0; i < leaderBoard.length; i++) {
      console.log(leaderBoard[i].name + ": " + leaderBoard[i].score);
    }
    console.log("Isn't your name in the leaderBoard? ping me with your score's screenshot and i'll update it!!");
  }

}
else {
  console.log("Sorry since you've scored less than 50% so you're out of the game :(")
  console.log("You only scored " + finalScore + " Better luck next time!!\nSome top scorers are: \n");
  for (var i = 0; i < leaderBoard.length; i++) {
    console.log(leaderBoard[i].name + ": " + leaderBoard[i].score);
  }
  console.log("Isn't your name in the leaderBoard? ping me with your score's screenshot and i'll update it!!");
}
