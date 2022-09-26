function rpsGame(yourChoice) {
  //console.log(yourChoice);

  var humanChoice = yourChoice.id;
  console.log(humanChoice);

  var computerChoice = numToImage(randTorpsInt());
  console.log(computerChoice);

  var result = decideWinner(humanChoice, computerChoice);
  console.log(result);

  var msg = finalMessage(result);
  console.log(msg);

  rpsFrontEnd(yourChoice.id, computerChoice, msg);
}

function randTorpsInt() {
  return Math.floor(Math.random() * 3);
}

function numToImage(number) {
  return ["rock", "paper", "scissors"][number];
}

function decideWinner(yourChoice, computerChoice) {
  var rpsDatabase = {
    rock: { scissors: 1, rock: 0.5, paper: 0 },
    paper: { rock: 1, paper: 0.5, scissors: 0 },
    scissors: { paper: 1, scissors: 0.5, rock: 0 },
  };
  var yourScore = rpsDatabase[yourChoice][computerChoice];
  var computerScore = rpsDatabase[computerChoice][yourChoice];

  return [yourScore, computerScore];
}
function finalMessage([yourScore, computerScore]) {
  if (yourScore == 0) {
    return { message: "You Lost!", color: "red" };
  } else if (yourScore == 0.5) {
    return { message: "Draw!", color: "yellow" };
  } else {
    return { message: "You Won!", color: "green" };
  }
}

function rpsFrontEnd(humanImgChoice, ComputerImgChoice, FinalMsg) {
  // Made a copy of all sources of images
  var imageDatabase = {
    rock: document.getElementById("rock").src,
    paper: document.getElementById("paper").src,
    scissors: document.getElementById("scissors").src,
  };

  // Remove all Images
  document.getElementById("rock").remove();
  document.getElementById("paper").remove();
  document.getElementById("scissors").remove();

  // Create Div
  var humanDiv = document.createElement("div");
  var computerDiv = document.createElement("div");
  var messageDiv = document.createElement("div");

  // Write data in div

  // Create a humanchoiceImg
  humanDiv.innerHTML =
    "<img src='" +
    imageDatabase[humanImgChoice] +
    "'height=200 width=200 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>";

  // Create a FinalMsg div
  messageDiv.innerHTML =
    "<h1 style='color: " +
    FinalMsg["color"] +
    "; font-size:80px; padding:25px; '>" +
    FinalMsg["message"] +
    "</h1>";

  // Create computerChoiceImg
  computerDiv.innerHTML =
    "<img src='" +
    imageDatabase[ComputerImgChoice] +
    "'height=200 width=200 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>";

  // Append All Div's
  document.getElementById("images-div").appendChild(humanDiv);
  document.getElementById("images-div").appendChild(messageDiv);
  document.getElementById("images-div").appendChild(computerDiv);
}
