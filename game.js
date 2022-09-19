// useful vars
var buttonColors = ["red", "blue", "green", "yellow"]

var gamePattern = [];

var userClickedPattern = [];

var level = 1;

var gameStarted = false;


// in charge of automated sequence
function nextSequence() {

    var randomNumber = Math.round((Math.random() * 3)) 
    

    var randomChosenColor = buttonColors[randomNumber]

    gamePattern.push(randomChosenColor)

    $("." + randomChosenColor).fadeOut(100).fadeIn(100);

    playSound(randomChosenColor)

    $("#level-title").text("Level " + level);

    level += 1;

    gameStarted = true;

}


// in charge of button clicks
$(".btn").click(function (e) { 
    
    var userChosenColor = $(this).attr("id");
    
    userClickedPattern.push(userChosenColor)

    playSound(userChosenColor)

    animatePress($(this))

});


// in charge of sound
function playSound(name) {

    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();

}

// in charge of waiting for css
function sleep(ms) {
    return new Promise(
      resolve => setTimeout(resolve, ms)
    );
  }

// in charge of click animations
function animatePress(currentColor) {
    $(currentColor).addClass("pressed")


    setTimeout(function () {
        $(currentColor).removeClass("pressed");
      }, 100);

}

// start the game
$(document).keypress(function (e) { 
    if (gameStarted == false) {
    nextSequence();
    }
});