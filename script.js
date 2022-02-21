function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.key}"]`)
  const key = document.querySelector(`.key[data-key="${e.key}"]`)
  if (!audio) return
  audio.currentTime = 0
  audio.play()
  key.classList.add('playing')
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return
  this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', removeTransition))
window.addEventListener('keydown', playSound)


function playSound2() {
  const audio = document.getElementById('divide')
  audio.currentTime = 0
  audio.play()
}

function playSound3() {
  const audio = document.getElementById('multiply')
  audio.currentTime = 0
  audio.play()
}

function playSound4() {
  const audio = document.getElementById('subtract')
  audio.currentTime = 0
  audio.play()
}

function playSound5() {
  const audio = document.getElementById('seven')
  audio.currentTime = 0
  audio.play()
}

function playSound6() {
  const audio = document.getElementById('eight')
  audio.currentTime = 0
  audio.play()
}

function playSound7() {
  const audio = document.getElementById('nine')
  audio.currentTime = 0
  audio.play()
}

function playSound8() {
  const audio = document.getElementById('plus')
  audio.currentTime = 0
  audio.play()
}

function playSound9() {
  const audio = document.getElementById('four')
  audio.currentTime = 0
  audio.play()
}

function playSound10() {
  const audio = document.getElementById('five')
  audio.currentTime = 0
  audio.play()
}

function playSound11() {
  const audio = document.getElementById('six')
  audio.currentTime = 0
  audio.play()
}

function playSound12() {
  const audio = document.getElementById('one')
  audio.currentTime = 0
  audio.play()
}

function playSound13() {
  const audio = document.getElementById('two')
  audio.currentTime = 0
  audio.play()
}

function playSound14() {
  const audio = document.getElementById('three')
  audio.currentTime = 0
  audio.play()
}

function playSound15() {
  const audio = document.getElementById('zero')
  audio.currentTime = 0
  audio.play()
}

function playSound16() {
  const audio = document.getElementById('comma')
  audio.currentTime = 0
  audio.play()
}

function playSound17() {
  const audio = document.getElementById('enter')
  audio.currentTime = 0
  audio.play()
}
