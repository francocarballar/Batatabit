const buttonPrev = document.getElementById('button-prev')
const buttonNext = document.getElementById('button-next')
const secondPrevButton = document.getElementById('second-prev-button')
const secondNextButton = document.getElementById('second-next-button')
const track = document.getElementById('track')
const secondTrack = document.getElementById('secondTrack')
const slick = document.querySelectorAll('.slick')
const secondSlick = document.querySelectorAll('.secondSlick')
const mainTablesContainer = document.querySelector('.main-tables-container')
const plansContainer = document.querySelector('.plans-container--slider')

const slickWidth = slick[0].offsetWidth - 14
const secondSlickWidth = secondSlick[0].offsetWidth + 16

buttonPrev.onclick = () => Move(1)
buttonNext.onclick = () => Move(2)
secondPrevButton.onclick = () => secondMove(1)
secondNextButton.onclick = () => secondMove(2)

const Move = value => {
  const trackWidth = track.offsetWidth
  const mainTablesContainerWidth = mainTablesContainer.offsetWidth
  let leftPosition
  track.style.left === ''
    ? (leftPosition = track.style.left = 0)
    : (leftPosition = parseFloat(track.style.left.slice(0, -2) * -1))
  if (leftPosition < trackWidth - mainTablesContainerWidth && value === 2) {
    track.style.left = `${-1 * (leftPosition + slickWidth)}px`
  } else if (leftPosition > 0 && value === 1) {
    track.style.left = `${-1 * (leftPosition - slickWidth)}px`
  }

  if (track.style.left === '0px') {
    buttonPrev.style.opacity = 0
    buttonNext.style.opacity = 1
  } else if (track.style.left === '-221px') {
    buttonPrev.style.opacity = 1
    buttonNext.style.opacity = 0
  }
}

const secondMove = value => {
  const secondTrackWidth = secondTrack.offsetWidth
  const plansContainerWidth = plansContainer.offsetWidth
  let leftPosition
  secondTrack.style.left === ''
    ? (leftPosition = secondTrack.style.left = 0)
    : (leftPosition = parseFloat(secondTrack.style.left.slice(0, -2) * -1))
  if (leftPosition < secondTrackWidth - plansContainerWidth && value === 2) {
    secondTrack.style.left = `${-1 * (leftPosition + secondSlickWidth)}px`
  } else if (leftPosition === 0 && value === 1) {
    secondTrack.style.left = '206px'
  } else if (leftPosition > 0 && value === 1) {
    secondTrack.style.left = `${-1 * (leftPosition - secondSlickWidth)}px`
  }

  if (secondTrack.style.left === '0px') {
    secondPrevButton.style.opacity = 1
    secondNextButton.style.opacity = 1
  } else if (secondTrack.style.left === '-206px') {
    secondPrevButton.style.opacity = 1
    secondNextButton.style.opacity = 0
  } else if (secondTrack.style.left === '206px') {
    secondPrevButton.style.opacity = 0
    secondNextButton.style.opacity = 1
  }
}
