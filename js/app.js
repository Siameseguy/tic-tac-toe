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

  const clickBox = (eleClass, image) => {
    $('.box').click(function(){
      $(this).addClass(eleClass);
      $(this).css("background-image", image);
      $(this).unbind('mouseenter, mouseleave');
    });
  }  
    
  // player functions that hold player turn methods
  const playerOneTurn = () => {
    enterBox("url(img/o.svg)");
    leaveBox();

    $('#player2').removeClass('active');
    $('#player1').addClass('active');

    clickBox("box-filled-1", "url(img/o.svg)"); 
    
  }

  const playerTwoTurn = () => {
    enterBox("url(img/x.svg)");
    leaveBox();

    $('#player1').removeClass('active');
    $('#player2').addClass('active');

    clickBox("box-filled-2", "url(img/x.svg)"); 
  }

// select random starting player
const pickStartingPlayer = () => {
  const playerOne = 1;
  const playerTwo = 2;
  const players = [playerOne, playerTwo];

  // get random player
  const player = players[Math.floor(Math.random()*players.length)];

  if(player === 1) {
    playerOneTurn();
  } else {
    playerTwoTurn();
  }
}

pickStartingPlayer();

}();
