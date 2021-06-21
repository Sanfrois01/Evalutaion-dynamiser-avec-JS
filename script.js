// Récupétation des ID
const customModalEvent = new Event("custom-modal-event")

let player1 = document.getElementById('player1');
let player2 = document.getElementById('player2');
let activePlayer1 = document.getElementById('active-player1')
let activePlayer2 = document.getElementById('active-player2')
let winner = document.getElementById('winner')



let globalPointsP1 = document.getElementById('global-points-player1');
let globalPointsP2 = document.getElementById('global-points-player2');

let currentPointsP1 = document.getElementById('current-points-player1');
let currentPointsP2 = document.getElementById('current-points-player2');

//Buttons
let btnRollDice = document.getElementById('roll-dice');
let btnHold = document.getElementById('hold');
let btnNewGame = document.getElementById('new-game');

let currentScore;
let currentPlayer;
let globalScore1;
let globalScore2;


//Creation de nouvelle partie 

function init() {

  currentPlayer = true;
  activePlayer()
  // Tous les score a 0

  currentScore = globalScore1 = globalScore2 = 0;

  

  // affichage des score a 0
  
  currentPointsP1.textContent = "0";
  currentPointsP2.textContent = "0";
  globalPointsP1.textContent = "0";
  globalPointsP2.textContent = "0";

  //Listener et stop du bouillonnement
  
  btnNewGame.addEventListener('click',resetNewGame,true);
  btnRollDice.addEventListener('click',rollDice,true);
  btnHold.addEventListener('click',holdingPoint,true);
  

  


}

// Roulement de dés avec affichage des images

  function rollDice(){
    let scoreDice = Math.floor(Math.random()*Math.floor(6))+1;
    switch (scoreDice){
      case 1:
      document.getElementById('dice').src='img/dice-1.svg'; 
      break;
      case 2:
      document.getElementById('dice').src='img/dice-2.svg';
      break;
      case 3:
      document.getElementById('dice').src='img/dice-3.svg';
      break;
      case 4:
      document.getElementById('dice').src='img/dice-4.svg';
      break;
      case 5:
      document.getElementById('dice').src='img/dice-5.svg';
      break;
      case 6:
      document.getElementById('dice').src='img/dice-6.svg';
      break;
    }

      if(scoreDice !=1) {
        currentScore += scoreDice      
        currentPlayer === true ? currentPointsP1.textContent = currentScore : currentPointsP2.textContent = currentScore
      }else{
        nextPlayer()
        
      }
    }

  //Transfert des points au joueur du Current au Global

  function holdingPoint(){
    if (currentPlayer === true){
      globalScore1 += currentScore
      globalPointsP1.textContent = globalScore1
  } else {
      globalScore2 += currentScore
      globalPointsP2.textContent = globalScore2
  }
    
    nextPlayer()
    checkScore()
  
  }
  

//Condition de Victoire

function checkScore(){

  if(globalScore1 >= 100){
    winner.textContent = 'Player 1 Won'
    showModal()
    init()
    }

  if(globalScore2 >= 100){
    winner.textContent ='Player 2 Won'
    showModal()
    init()

  }
}

// Reset du Jeu
function resetNewGame(){
  let beganNewGame = document.getElementById('modal-newgame')
  $('#modal-newgame').modal('show')
    init()
}

//Joueur actif
function activePlayer() {
  if (currentPlayer === true){
  activePlayer1.style.display = 'inline';
  activePlayer2.style.display = 'none';
  }
  if (currentPlayer === false){
  activePlayer2.style.display = 'inline';
  activePlayer1.style.display = 'none';
  }
}

//Prochain joueur
function nextPlayer(){
  currentScore = 0
  // currentScore à 0 en HTML
  currentPointsP1.textContent = '0'
  currentPointsP2.textContent = '0'
  // changer le currentPlayer
  currentPlayer === true ? currentPlayer = false : currentPlayer = true

  activePlayer()
}

//afficher modal de victoire
function showModal(){
  let modalWinner = document.getElementById('modal-winner')
  $('#modal-winner').modal('show')
}

init()