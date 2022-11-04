class Start {
  //cosntructor untuk default gamenya berjalan yang akan dibuat
  constructor() {
    this.playerName = "Player";
    this.botName = "bot";
    this.playerOption;
    this.botOption;
    this.winner = "";
  }

  //get and set
  //* Bot option

  get getBotOption() {
    return this.botOption;
  }

  set setBotOption(option) {
    this.botOption = option;
  }

  //* Player option
  get getPlayerOption() {
    return this.playerOption;
  }

  set setPlayerOption(option) {
    this.playerOption = option;
  }

  //! di dalam constructor tidak perlu menambahkan kata function

  botBrain() {
    const option = ["✋", "✌️", "✊"];
    const generateBot = option[Math.floor([Math.random() * option.length])];
    return generateBot;
  }

  winCalculation() {
    if (this.botOption == "✋" && this.playerOption == "✌️") {
      return (this.winner = this.playerName);
    } else if (this.botOption == "✋" && this.playerOption == "✊") {
      return (this.winner = this.botName);
    } else if (this.botOption == "✌️" && this.playerOption == "✋") {
      return (this.winner = this.botName);
    } else if (this.botOption == "✌️" && this.playerOption == "✊") {
      return (this.winner = this.playerName);
    } else if (this.botOption == "✊" && this.playerOption == "✋") {
      return (this.winner = this.playerName);
    } else if (this.botOption == "✊" && this.playerOption == "✌️") {
      return (this.winner = this.botName);
    } else {
      return (this.winner = "SERI");
    }
  }

  matchResult() {
    if (this.winner != "SERI") {
      return `${this.winner} menang `;
    } else {
      return ` waa ${this.winner} gak ada yang menang ni boss😂`;
    }
  }
}

function pickOption(params) {
  const start = new Start();
  start.setPlayerOption = params;
  start.setBotOption = start.botBrain();
  start.winCalculation();

  const inGame = document.getElementById("inGame");
  const result = document.getElementById("result");

  inGame.textContent = "...";
  result.textContent = "...";
  setTimeout(() => {
    inGame.textContent = ` ${start.getPlayerOption} Vs  ${start.getBotOption}`;
    result.textContent = start.matchResult();
  }, 1500);
}
