function startGame() {
  for (i = 1; i <= 9; i++){
      clearBox(i);
  }
  document.turn = 'X';
  document.winner = null;
  setMessage(document.turn + ' gets to start');
}


function nextMove(square) {
  if (document.winner !== null) {
      setMessage(document.turn + ' already won');
  } else
  if (square.innerText === ''){
      square.innerText = document.turn;
      switchTurn();
      setMessage(document.turn + 's turn');
  } else {
      setMessage('Pick another square');
  }
}


function switchTurn() {
  if (checkForWinner(document.turn)) {
      document.winner = document.turn;
      setMessage('Congrats ' + document.turn + ' you won!');
  } else 
  if (document.turn == 'X') {
      document.turn = 'O';
  } else {
      document.turn = 'X';
  }
}


//check winning condition
function checkRow(a, b, c, move) {
  var result = false;
  if (getBox(a) == move && getBox(b) == move && getBox(c) == move) {
      result = true;
  }
  return result;
}


function checkForWinner(move) {
  var result = false;
  if (checkRow(1, 2, 3, move) ||
      checkRow(4, 5, 6, move) || 
      checkRow(7, 8, 9, move) ||
      checkRow(1, 4, 7, move) ||
      checkRow(2, 5, 8, move) ||
      checkRow(3, 6, 9, move) ||
      checkRow(1, 5, 9, move) ||
      checkRow(3, 5, 7, move)
  ) {
      result = true;
  }
  return result;
}


function getBox(number) {
  return document.getElementById('s' + number).innerText;
}


function clearBox(number) {
  return document.getElementById('s' + number).innerText = '';
}


function setMessage(msg) {
  document.getElementById('message').innerText = msg;
}
