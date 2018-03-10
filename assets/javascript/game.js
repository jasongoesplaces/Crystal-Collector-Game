$(function () {
        
    // Defines the goal score variable and displays it on screen
    var goal = 18 + Math.floor(Math.random() * 120);

    $("#goal").text(goal);


    // Gives each of the crystals a random number value
    var crystal1 = 1 + Math.floor(Math.random() * 12);
    var crystal2 = 1 + Math.floor(Math.random() * 12);
    var crystal3 = 1 + Math.floor(Math.random() * 12);
    var crystal4 = 1 + Math.floor(Math.random() * 12);


    // Defines variables for the user's score, wins, and losses & displays them to the screen
    var userScore = 0;
    var wins = 0;
    var losses = 0;
    $("#userScore").text(userScore);
    $("#wins").text(wins);
    $("#losses").text(losses);


    // Function to reset the game
    var reset = function() {
        userScore = 0;
        goal = 18 + Math.floor(Math.random() * 120);
        crystal1 = 1 + Math.floor(Math.random() * 12);
        crystal2 = 1 + Math.floor(Math.random() * 12);
        crystal3 = 1 + Math.floor(Math.random() * 12);
        crystal4 = 1 + Math.floor(Math.random() * 12);
        $("#goal").text(goal);
        $("#userScore").text(userScore);
        $("#wins").text(wins);
        $("#losses").text(losses);
    }


    // Function for determining if the user won, lost, or if the game is still continuing
    var winLoss = function() {
        if (userScore === goal) {
            wins++;
            alert("You Win!");
            $("#wins").text(wins);
            reset();

        } else if (userScore > goal) {
            losses++;
            alert("You Lost!");
            $("#losses").text(losses);
            reset();
        }
    };


    // When a crystal is clicked, the point value assigned to that crystal is added to the user's score
    // Then the win/loss function is run to determine if the game has ended or is still continuing
    $("#crystal1").on("click", function() {
        userScore = userScore + crystal1;
        $("#userScore").text(userScore);
        winLoss();
    })

    $("#crystal2").on("click", function() {
        userScore = userScore + crystal2;
        $("#userScore").text(userScore);
        winLoss();
    })

    $("#crystal3").on("click", function() {
        userScore = userScore + crystal3;
        $("#userScore").text(userScore);
        winLoss();
    })

    $("#crystal4").on("click", function() {
        userScore = userScore + crystal4;
        $("#userScore").text(userScore);
        winLoss();
    })
});