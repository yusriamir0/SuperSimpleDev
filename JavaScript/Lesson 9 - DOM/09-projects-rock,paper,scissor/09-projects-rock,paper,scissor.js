//  Falsy operator
let score = JSON.parse(localStorage.getItem("score")) || {
    wins: 0,
    loses: 0,
    ties: 0,
};
// Reference as previous alternative
/*
if (!score) {
  score = {
    wins: 0,
    loses: 0,
    ties: 0,
  };
}
*/
function jomMain(pemainGerak) {
    const pergerakanComp = biarCompGerak();

    let result = "";

    if (pemainGerak === "scissors") {
        if (pergerakanComp === "rock") {
            result = "You lose.";
        } else if (pergerakanComp === "paper") {
            result = "You win.";
        } else if (pergerakanComp === "scissors") {
            result = "Tie";
        }
    } else if (pemainGerak === "paper") {
        if (pergerakanComp === "rock") {
            result = "You win.";
        } else if (pergerakanComp === "paper") {
            result = "Tie";
        } else if (pergerakanComp === "scissors") {
            result = "You lose.";
        }
    } else if (pemainGerak === "rock") {
        if (pergerakanComp === "rock") {
            result = "Tie";
        } else if (pergerakanComp === "paper") {
            result = "You lose.";
        } else if (pergerakanComp === "scissors") {
            result = "You win.";
        }
    }
    if (result === "You win.") {
        score.wins += 1;
    } else if (result === "You lose.") {
        score.loses += 1;
    } else if (result === "Tie") {
        score.ties += 1;
    }
    localStorage.setItem("score", JSON.stringify(score));

    //* querySelector() untuk result
    document.querySelector(".js-result").innerHTML = result;

    //* querySelector() untuk movement Player dan Comp
    document.querySelector(
        ".js-move"
    ).innerHTML = `YOU : ${pemainGerak} vs ${pergerakanComp} : COMPUTER`;
    updateScore();
}

// * reset score with updateScore() function
function resetScore() {
    score.wins = 0;
    score.loses = 0;
    score.ties = 0;
    localStorage.removeItem("score");
    updateScore();
}

//* Guna querySelector() untuk kemaskini updateScore
const updateScore = () => {
    document.querySelector(
        ".js-score"
    ).innerHTML = `Wins: ${score.wins} Loses: ${score.loses} Ties: ${score.ties} `;
};

function biarCompGerak() {
    const apaNombor = Math.random();

    let pergerakanComp = "";

    if (apaNombor >= 0 && apaNombor < 1 / 3) {
        pergerakanComp = "rock";
    } else if (apaNombor >= 1 / 3 && apaNombor < 2 / 3) {
        pergerakanComp = "paper";
    } else if (apaNombor >= 2 / 3 && apaNombor < 1) {
        pergerakanComp = "scissors";
    }

    return pergerakanComp;
}
