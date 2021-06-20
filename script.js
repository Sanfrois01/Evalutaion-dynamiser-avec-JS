// Récupétation des ID
const newGame = document.getElementById('new-game');
const dice = document.getElementById('dice');

const globalPointsP1 = document.getElementById('grobal-points-player1')
const globalPointsP2 = document.getElementById('grobal-points-player2')

const currentPointsP1 = document.getElementById('current-points-player1')
const currentPointsP2 = document.getElementById('current-points-player2')

const rollDice = document.getElementById('roll-dice')
const hold = document.getElementById('hold')

//Creation de nouvelle partie et condition de victoire

class nouvellePartie {
  constructor(turn,players){
    this.turn = turn
    this.players = players
    this.winner = null
  }

  winner(){
    let globalPoint = 0;
    this.players.forEach(player => {
    this.winner = player.globalPoint === 100 ? player : this.winner
  })
}
}

class Player {
  constructor(name,globalPoint,currentPoints,turn){
    this.name = name
    this.globalPoint = 0
    this.currentPoints = 0
    this.turn = null
  }

  

  roll(){      
    if (this.turn = true){
      this.currentPoints += this.rand(1,6)
    }
  }
  
}

// Déclaration des Listener

newGame.addEventListener('click', () =>{
  let player1 = new Player ('Player 1',0,0,true)
  let player2 = new Player ('Player 2',0,0,false)
})

rollDice.addEventListener('click',()=>{
  let score = rand(1,6)
  switch (score){
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

  }
)

//Déclaration de Fonctions

function rand(min,max){
  return Math.floor(Math.random()*(max-min+1)+min);
}




