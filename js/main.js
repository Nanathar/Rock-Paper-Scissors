const divGame = document.querySelector('.game__choice div')

divGame.addEventListener('click', (event) => {
  if (event.target.tagName === 'IMG' && event.target.classList.value !== 'game__choice__img game__choice__img--active') {
    document.querySelectorAll('.game__choice div img').forEach(img => img.classList.remove('game__choice__img--active'))
    event.target.classList.add('game__choice__img--active');
  } else {
    event.target.classList.remove('game__choice__img--active');
  }
})