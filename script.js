let usrmove = "";
let usr_score = 0,
  pc_score = 0;

const usr = document.querySelector(".us_ch_box");
const compmoveGuirock = document.querySelector("#pc_rock");
const compmoveGuipaper = document.querySelector("#pc_paper");
const compmoveGuiscissor = document.querySelector("#pc_scissor");
const resetBtn = document.querySelector("#resetBtn");
usr.addEventListener("click", usrMove);
usr.addEventListener("mouseout", resetpcmove);
resetBtn.addEventListener("click", gameDefault);

function gameDefault() {
  resetScore();
  defaultTitle();
  contentVisibility(document.querySelector(".pc_ch_box"), "flex");
  contentVisibility(document.querySelector(".us_ch_box"), "flex");
  contentVisibility(document.querySelector(".scorebox"), "flex");
  contentVisibility(resetBtn, "none");
}
function resetpcmove(e) {
  let tar2 = e.target.id;
  switch (tar2) {
    case "rockimg":
    case "us_rock":
    case "paperimg":
    case "us_paper":
    case "scissorimg":
    case "us_scissor":
      resetColor(compmoveGuirock);
      resetColor(compmoveGuipaper);
      resetColor(compmoveGuiscissor);
      break;
  }
  //resets title to default
  if (usr_score < 5 && pc_score < 5) {
    defaultTitle();
  }
}
function resetColor(elementSel) {
  elementSel.setAttribute(
    "style",
    "border-radius: 20px;border: 2px solid black;background-color:white"
  );
}

function computerMove() {
  let compmoveinnumb = Math.floor(Math.random() * 3 + 1);
  resetColor(compmoveGuirock);
  resetColor(compmoveGuipaper);
  resetColor(compmoveGuiscissor);

  if (compmoveinnumb == 1) {
    compmoveGuirock.setAttribute(
      "style",
      "background-color: rgb(107, 165, 255);border: 2px solid rgb(107, 165, 255)"
    );
    return "rock";
  }
  if (compmoveinnumb == 2) {
    compmoveGuipaper.setAttribute(
      "style",
      "background-color: rgb(107, 165, 255);border: 2px solid rgb(107, 165, 255)"
    );
    return "paper";
  }
  if (compmoveinnumb == 3) {
    compmoveGuiscissor.setAttribute(
      "style",
      "background-color: rgb(107, 165, 255);border: 2px solid rgb(107, 165, 255)"
    );
    return "scissor";
  }
}
function usrMove(e) {
  resetpcmove(e);
  usrmove = "";
  let roundWinner = "";
  let tar = e.target.id;
  if (tar !== "") {
    let compmove = computerMove();
    switch (tar) {
      case "rockimg":
      case "us_rock":
        usrmove = "rock";
        break;
      case "paperimg":
      case "us_paper":
        usrmove = "paper";
        break;
      case "scissorimg":
      case "us_scissor":
        usrmove = "scissor";
        break;
    }
    roundWinner = checkRoundWinner(compmove);
    if (roundWinner == "user") {
      usr_score += 1;
      changeTitle(document.querySelector(".titleUser"), "You Won!!");
    }
    if (roundWinner == "pc") {
      pc_score += 1;
      changeTitle(document.querySelector(".titleComputer"), "Computer Won!!");
    }
    if (roundWinner == "tie") {
      changeTitle(document.querySelector(".titleUser"), "Tie!!");
      changeTitle(document.querySelector(".titleComputer"), "Tie!!");
    }
    updateScore();
    if (pc_score >= 5) {
      changeTitle(
        document.querySelector(".titleComputer"),
        "Computer Winner!!"
      );
      changeTitle(document.querySelector(".titleUser"), `Score:${pc_score}`);
      contentVisibility(document.querySelector(".pc_ch_box"), "none");
      contentVisibility(document.querySelector(".us_ch_box"), "none");
      contentVisibility(document.querySelector(".scorebox"), "none");
      displayResetBtn();
    }
    if (usr_score >= 5) {
      changeTitle(
        document.querySelector(".titleComputer"),
        "You are the Winner!!"
      );
      changeTitle(document.querySelector(".titleUser"), `Score:${usr_score}`);
      contentVisibility(document.querySelector(".pc_ch_box"), "none");
      contentVisibility(document.querySelector(".us_ch_box"), "none");
      contentVisibility(document.querySelector(".scorebox"), "none");
      displayResetBtn();
    }
  }
}
function checkRoundWinner(compmove) {
  //USER WINNER
  if (compmove === "rock" && usrmove === "paper") return "user";
  if (compmove === "paper" && usrmove === "scissor") return "user";
  if (compmove === "scissor" && usrmove === "rock") return "user";

  //PC WINNER
  if (compmove === "rock" && usrmove === "scissor") return "pc";
  if (compmove === "paper" && usrmove === "rock") return "pc";
  if (compmove === "scissor" && usrmove === "paper") return "pc";
  //TIE
  if (compmove === usrmove) return "tie";
}
function changeTitle(elemnt, txt) {
  elemnt.textContent = txt;
}
function resetScore() {
  usr_score = 0;
  pc_score = 0;
  updateScore();
}
function updateScore() {
  let usc = document.querySelector("#us_score");
  let psc = document.querySelector("#pc_score");
  usc.textContent = usr_score;
  psc.textContent = pc_score;
}
function contentVisibility(Winnerelement, value) {
  Winnerelement.setAttribute("style", `display:${value}`);
}
function displayResetBtn() {
  resetBtn.setAttribute("style", "display:inline");
}
function defaultTitle() {
  changeTitle(document.querySelector(".titleUser"), "User");
  changeTitle(document.querySelector(".titleComputer"), "Computer");
}
