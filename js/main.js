window.addEventListener('click', (e) => {
  e.preventDefault();
})

// Obramowanie wybóru 
const divGame = document.querySelector('.game__choice div')

divGame.addEventListener('click', (event) => {
  if (event.target.tagName === 'IMG' && event.target.classList.value !== 'game__choice__img game__choice__img--active') {
    document.querySelectorAll('.game__choice div img').forEach(img => img.classList.remove('game__choice__img--active'))
    event.target.classList.add('game__choice__img--active');
  } else {
    event.target.classList.remove('game__choice__img--active');
  }
})

const btnStart = document.querySelector('.game__choice__btn')

const rock = document.querySelector('[data-option="rock"]')
const paper = document.querySelector('[data-option="paper"]')
const scissors = document.querySelector('[data-option="scissors"]')

const game = {
  playerHand: '',
  aiHand: '',
}

let win = 0;
let lose = 0;
let draw = 0;


const startGame = (event) => {
  if (rock.classList.value !== 'game__choice__img game__choice__img--active' && paper.classList.value !== 'game__choice__img game__choice__img--active' && scissors.classList.value !== 'game__choice__img game__choice__img--active') {
    alert('Choose a hand')
    console.log('ok')
  }


}

btnStart.addEventListener('click', startGame)