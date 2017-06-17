$(document).ready(function() {

  $("#start").on("click", function() {
    $("#instructions").css("display", "none");
    $("#game").css("display", "block")
  });

  var wins=0;
  var loss=0;
  var score=0;
  var targetScore=0;

  function newTarget() {
    targetScore = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
  }

  function randomCrystal() {
    var rand = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    $("#button-1").attr("value",rand);
    console.log("Button-1: " + $("#button-1").attr("value"));

    rand = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    $("#button-2").attr("value",rand);
    console.log("Button-2: " + $("#button-2").attr("value"));

    rand = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    $("#button-3").attr("value",rand);
    console.log("Button-3: " + $("#button-3").attr("value"));

    rand = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    $("#button-4").attr("value",rand);
    console.log("Button-4: " + $("#button-4").attr("value"));
  }

  function newGame() {
    newTarget();
    score=0;
    randomCrystal();
    $("#target").text(targetScore);
    $("#score").text(score);
    $("#wins").text("Wins: " + wins);
    $("#loss").text("Losses: " + loss);
  }

  newGame();

  $(".btn").on("click", function() {
    console.log($(this).attr("value"));
    score += parseInt($(this).attr("value"));
    $("#score").text(score);

    if (targetScore === score) {
      wins++;
      newGame();
    }
    else if (score > targetScore) {
      loss++;
      newGame();
    }
  });


});