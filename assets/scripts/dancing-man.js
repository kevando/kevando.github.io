const GIF = 'https://assets.codepen.io/5740/kevin_1.gif'

const HOW_FAST = 3100
const GIRTH = 90

let DANCE_FLOOR = 0
let PARTY = 0
const MAX_DANCERS = parseInt(window.innerWidth / GIRTH)

let transitionSpeed = 1000

let youCanDanceIfYouWantTo = setInterval(dancingManIsHere, HOW_FAST)

function dancingManIsHere() {
    var man = document.createElement('img')

    man.src = GIF
    man.style.left = '-' + GIRTH + 'px'
    man.style.position = 'fixed'
    man.style.bottom = '0px'
    man.style.transition = 'left ' + transitionSpeed + 'ms ease-out'

    transitionSpeed += 200

    document.body.appendChild(man)

    function letTheManDance() {
        man.style.left = DANCE_FLOOR + 'px'
        DANCE_FLOOR += GIRTH
    }
    setTimeout(letTheManDance, 50)

    if (++PARTY >= MAX_DANCERS) clearInterval(youCanDanceIfYouWantTo)
}
