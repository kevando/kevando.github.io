const GIF = 'https://assets.codepen.io/5740/kevin_1.gif'

const DANCING_MAN_WIDTH = 100
const MAX_DANCERS_BEFORE_HAVOC = 11
const danceFloorCapacity = parseInt(window.innerWidth / DANCING_MAN_WIDTH)
const dancingManSpawnOffsetX = DANCING_MAN_WIDTH + 40

let totalDancers = 0
let danceFloorEntranceX = 200
let dancingManEntranceSpeed = 100
let dancingManPauseBeforeEntrance = 40
let delayBeforeMoreDancing = 800

function createDancer() {
    var man = document.createElement('img')

    let entranceSpeed = getRandomInt(800, 900) + totalDancers * 100
    const exitSpeed = getRandomInt(12, 38) + 's'

    man.src = GIF
    man.style.left = '-' + dancingManSpawnOffsetX + 'px'
    man.style.position = 'fixed'
    man.style.bottom = '0px'
    man.style.transition =
        'left ' +
        entranceSpeed +
        'ms ease-out, transform ' +
        exitSpeed +
        ' ease-in'

    return man
}

let danceFloorZamboni = setInterval(function () {
    if (danceFloorEntranceX > 10) {
        danceFloorEntranceX -= 11
    }
}, 1000)

function dance() {
    var man = createDancer()

    document.body.appendChild(man)

    kevin.newDancer()

    // randomize how long dancing man is alive
    const secondsOnDanceFloor = getRandomInt(7, 11)

    setTimeout(function () {
        // New Dancer!
        man.style.left = danceFloorEntranceX + 'px'
        danceFloorEntranceX += DANCING_MAN_WIDTH + getRandomInt(0, 10)
    }, dancingManPauseBeforeEntrance)

    setTimeout(function () {
        // Dancer Exits
        man.style.transform = 'translateX(-100vw)'
    }, secondsOnDanceFloor * 1000)

    setTimeout(function () {
        man.src = '' // this man's dance has ended
    }, 70000)
}

function errorOutButton(evt) {
    clearInterval(danceFloorZamboni)

    $('#ActivateDancingMan')
        .css('color', 'red')
        .attr('disabled', true)
        .text('dancing max')

    return
}

$('#ActivateDancingMan').addClass('raised--button')
$('#ActivateDancingMan').removeClass('pressed--button')

$('#ActivateDancingMan').on('click', function (e) {
    e.preventDefault()

    if (kevin.dancersCurrently > MAX_DANCERS_BEFORE_HAVOC) {
        return errorOutButton('click')
    } else {
        $('#ActivateDancingMan').removeClass('raised--button')
        $('#ActivateDancingMan').addClass('pressed--button')
    }

    $(this).attr('disabled', true)

    setTimeout(function () {
        if (kevin.dancersCurrently > MAX_DANCERS_BEFORE_HAVOC) {
            return
        } else {
            $('#ActivateDancingMan').addClass('raised--button')
            $('#ActivateDancingMan').removeClass('pressed--button')
        }
    }, 60)

    dance()

    if (delayBeforeMoreDancing > 100) {
        delayBeforeMoreDancing -= 70
    } else {
        delayBeforeMoreDancing = 50
    }

    setTimeout(function () {
        if (kevin.dancersCurrently > MAX_DANCERS_BEFORE_HAVOC) {
            return errorOutButton('timeout')
        }

        $('#ActivateDancingMan').attr('disabled', false)
    }, delayBeforeMoreDancing)
})

function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}
