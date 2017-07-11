!function() {
  // hide start up page after start button is pressed
  $('.board').hide();
  // hide starting image and show the board when start button is clicked
  $('.button').click(function(){
    $('.screen').fadeOut('fast');
    $('.board').fadeIn('fast');
  });
  
  // show background svg if box is empty and on mouseenter
  const enterBox = (image) => {
    $('.box').mouseenter(function(){
      if($(this).val() == "") {
          $(this).css("background-image", image);
      }
    });
  }
  
   // delete background svg if box is not clicked and on mouseleave
  const leaveBox = () => {
    $('.box').mouseleave(function(){
      $(this).css("background-image", "none");
    });
  }

  const clickBox = () => {
    $('.box').click(function(){
      playerSwitch('#player-1');
    });
  }  

const playerSwitch = (player) => {
  $(player).removeClass("active");
  $(player).addClass("active");
}
  

  clickBox();

  if($('#player1').hasClass("active")) {
    enterBox("url(img/o.svg)");
  } 

  // player functions that hold player actions
  const playerOneTurn = () => {
    //enterBox("url(img/o.svg)");
    // leaveBox();


    clickBox(); 
  }

  const playerTwoTurn = () => {
    // enterBox("url(img/x.svg)");
    // leaveBox();


    clickBox(); 
  }

  // select random starting player
  const pickStartingPlayer = () => {
    const playerOne = 1;
    const playerTwo = 2;
    const players = [playerOne, playerTwo];

    // get random player
    const player = players[Math.floor(Math.random()*players.length)];

    if(player === 1) {
     $('#player1').addClass("active");
     playerOneTurn();
    } else {
     $('#player2').addClass("active");
     playerTwoTurn();
    }

    return player;
  }

  pickStartingPlayer();

 


}();
