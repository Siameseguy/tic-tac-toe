!function() {
  // hide start up page after start button is pressed
  $('#board, #finish' ).hide();
  // hide starting image and show the board when start button is clicked
  $('.button').click(function(){
    $('#start').fadeOut('fast');
    $('#board').fadeIn('fast');
  });

  let winner = "";

  // select random starting player
  const pickStartingPlayer = () => {
    const playerOne = 1;
    const playerTwo = 2;
    const players = [playerOne, playerTwo];

    // get random player
    const player = players[Math.floor(Math.random()*players.length)];

    if(player === 1) {
     $('#player1').addClass("active");
    } else {
     $('#player2').addClass("active");
    }
    return player;
  }

  pickStartingPlayer();

  $('.box').mouseenter(function(){
    if($(this).hasClass("box-filled-1") === false && $(this).hasClass("box-filled-2") === false) {
      if((player1).hasClass("active")) {
        $(this).css("backgroundImage", "url(img/o.svg)");
      } else {
        $(this).css("backgroundImage", "url(img/x.svg)");
      }
      $(this).mouseleave(function(){
        $(this).css("backgroundImage", "none");
      });
    }
  });
  $('.box').click(function(){
    if(player1.hasClass("active")) {
      if($(this).hasClass("box-filled-1") === false && $(this).hasClass("box-filled-2") === false) {
        $(this).addClass("box-filled-1");
        $(this).css("backgroundImage", "url(img/o.svg)");
        $(this).unbind("mouseenter, mouseleave");
        gameStatus();
        playerSwitch();
      }
    } else if(player2.hasClass("active")) {
      if($(this).hasClass("box-filled-1") === false && $(this).hasClass("box-filled-2") === false) {
        $(this).addClass("box-filled-2");
        $(this).css("backgroundImage", "url(img/x.svg)");
        $(this).unbind("mouseenter, mouseleave");
        gameStatus();
        playerSwitch();
      }
    }
  });

  const player1 = $('#player1');
  const player2 = $('#player2');

  const playerSwitch = () => {
    if(player1.hasClass("active")) {
      $('#player1').removeClass("active");
      $('#player2').addClass("active");
    } else {
      $('#player2').removeClass("active");
      $('#player1').addClass("active");
    }
  }

  const gameStatus = () => {
    const gameArray = [];
    $('.box').each(function(){
      if($(this).hasClass("box-filled-1")) {
        gameArray.push("player1"); 
        console.log(gameArray);   
     
      } else if($(this).hasClass("box-filled-2")) {
        gameArray.push("player2");
        console.log(gameArray);
      } else {
         gameArray.push("none");
      }

      if(gameArray[0] === gameArray[1] && gameArray[1] === gameArray[2]) {
        winner = gameArray[0];
        // first row
        showWinner();
      } else if(gameArray[0] === gameArray[3] && gameArray[3] === gameArray[6]) {
        winner = gameArray[0];
        // first column
        showWinner();
      }
    });
  }


  

  const showWinner = () => {
    $('#finish').fadeIn('fast');
    $('#board').fadeOut('fast');
    if(winner === "player1") {
       $('#finish').addClass("screen-win-one");
       console.log(winner);
    } else if(winner == "player2") {
       $('#finish').addClass("screen-win-two");
       console.log(winner);
    }
    
  }
}();
