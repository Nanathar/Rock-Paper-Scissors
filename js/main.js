window.addEventListener('click', (e) => {
  e.preventDefault();
})

// Obramowanie wybóru 
const divGame = document.querySelector('.game__choice div');

divGame.addEventListener('click', (event) => {
  if (event.target.tagName === 'IMG' && event.target.classList.value !== 'game__choice__img game__choice__img--active') {
    document.querySelectorAll('.game__choice div img').forEach(img => img.classList.remove('game__choice__img--active'))
    event.target.classList.add('game__choice__img--active');
  } else {
    event.target.classList.remove('game__choice__img--active');
  }
})


// Gra
const btnStart = document.querySelector('.game__choice__btn');

const rock = document.querySelector('[data-option="rock"]');
const paper = document.querySelector('[data-option="paper"]');
const scissors = document.querySelector('[data-option="scissors"]');

const spanPlayer = document.querySelector('[data-summary="your-choice"]');
const spanAi = document.querySelector('[data-summary="ai-choice"]');
const spanWinner = document.querySelector('[data-summary="who-win"]');

const game = {
  playerHand: '',
  aiHand: '',
}

const statsNumbers = document.querySelector('.numbers');
const statsWins = document.querySelector('.wins');
const statsLosses = document.querySelector('.losses');
const statsDraws = document.querySelector('.draws');


let games = 0;
let win = 0;
let lose = 0;
let draw = 0;

// wybór gracza
const playerChoice = () => {
  if (rock.classList.value === 'game__choice__img game__choice__img--active') {
    game.playerHand = 'rock'
    spanPlayer.textContent = 'ROCK'
  } else if (paper.classList.value === 'game__choice__img game__choice__img--active') {
    game.playerHand = 'paper'
    spanPlayer.textContent = 'PAPER'
  } else if (scissors.classList.value === 'game__choice__img game__choice__img--active') {
    game.playerHand = 'scissors'
    spanPlayer.textContent = 'SCISSORS'
  }
}

// wybór komputera
const aiChoice = () => {
  let x
  x = Math.floor(Math.random() * 3)
  if (x === 0) {
    game.aiHand = 'rock'
    spanAi.textContent = 'ROCK'
  } else if (x === 1) {
    game.aiHand = 'paper'
    spanAi.textContent = 'PAPER'
  } else if (x === 2) {
    game.aiHand = 'scissors'
    spanAi.textContent = 'SCISSORS'
  }

}

// game result
const gameResult = () => {
  if (game.playerHand === 'rock' && game.aiHand === 'rock' || game.playerHand === 'paper' && game.aiHand === 'paper' || game.playerHand === 'scissors' && game.aiHand === 'scissors') {
    spanWinner.textContent = 'DRAW'
    spanWinner.style.color = 'blue'
  } else if (game.playerHand === 'rock' && game.aiHand === 'scissors' || game.playerHand === 'scissors' && game.aiHand === 'paper' || game.playerHand === 'paper' && game.aiHand === 'rock') {
    spanWinner.textContent = 'WIN'
    spanWinner.style.color = 'green'
  } else {
    spanWinner.textContent = 'LOSE'
    spanWinner.style.color = 'red'
  }
}

//statystyki 
const stats = () => {
  if (spanWinner.textContent === 'DRAW') {
    draw++
    statsDraws.textContent = draw
  } else if (spanWinner.textContent === 'WIN') {
    win++
    statsWins.textContent = win
  } else if (spanWinner.textContent === 'LOSE') {
    lose++
    statsLosses.textContent = lose
  }
  statsNumbers.textContent = draw + win + lose
}

const startGame = (event) => {
  if (rock.classList.value !== 'game__choice__img game__choice__img--active' && paper.classList.value !== 'game__choice__img game__choice__img--active' && scissors.classList.value !== 'game__choice__img game__choice__img--active') {
    alert('Choose a hand')
    return
  }

  playerChoice()
  aiChoice()
  gameResult()
  stats()

  document.querySelectorAll('.game__choice div img').forEach(img => img.classList.remove('game__choice__img--active'))
  event.target.classList.remove('game__choice__img--active');
}

btnStart.addEventListener('click', startGame)