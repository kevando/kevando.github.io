const X_OFFSET = 1;

const lerp = (x, y, a) => x * (1 - a) + y * a;
const clamp = (a, min = 0, max = 1) => Math.min(max, Math.max(min, a));
const invlerp = (x, y, a) => clamp((a - x) / (y - x));
const range = (x1, y1, x2, y2, a) => lerp(x2, y2, invlerp(x1, y1, a));

function randomRange(min, max) {
    return min + Math.random() * (max - min);
}
function randomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

var paulie = document.getElementById("Paulie");

var screenArea = window.screen.height * window.screen.width;
var windowArea = window.outerHeight * window.outerWidth;
var documentArea = document.body.clientHeight * document.body.clientWidth
var windowAttention = windowArea / screenArea;
var documentAttention = documentArea / windowArea;

var paulie_width_min = 40;
var paulie_width_max = 100;
var paulieAspectRatio = 1.5833333;
var paulieWidth, paulieHeight, borderSize, fontSize, iconSize;

var initialState = "sleeping";

// --------------------------------------------
//      PAULIE BABY!!
// --------------------------------------------


var $Paulie = $("#Paulie");

function updateSystemDisplay() {

    var systemSize = range(900, 2000, 0, 1, document.body.clientWidth)
    paulieWidth = lerp(paulie_width_min, paulie_width_max, systemSize);
    paulieHeight = paulieWidth * paulieAspectRatio
    iconSize = paulieWidth * 0.944;
    borderSize = range(paulie_width_min, paulie_width_max, 2, 5, paulieWidth)
    fontSize = lerp(16, 22, systemSize)

    $Paulie.width(paulieWidth)
    $Paulie.height(paulieHeight)
    $('.icon').width(iconSize).height(iconSize).css("borderWidth", Math.round(borderSize));
    $('.icon-hitbox span').css("fontSize", Math.round(fontSize))
}


updateSystemDisplay()

$Paulie.addClass(initialState);

var clickDownSound = new Audio('/assets/paulie/sounds/click_down.mp3');
var clickUpSound = new Audio('/assets/paulie/sounds/click_up.mp3');

clickDownSound.volume = 0.2;
clickUpSound.volume = 0.2;

var x = 0;//randomInt(400);
var y = 0;//randomInt(500);
var z = 0;
var p = 0;
var rot = "1,1,1,0deg";
var skew = "0deg";

const OFFSET_X = randomInt(200)
const OFFSET_Y = randomInt(200)



// ---- $Paulie -----


$Paulie.isSleeping = function () {
    if ($(this).hasClass("sleeping")) {
        return true;
    }
    return false;
}



function wakeUp(e) {

    // $Paulie.css("left", e.clientX)

    $("body").addClass("awake")
    $("body").removeClass("sleeping")
    $Paulie.addClass("jump")
    $Paulie.addClass("awake")
    $Paulie.removeClass("sleeping")
}
$Paulie.on("click", wakeUp)


function updateTransform() {
    var transform = "perspective(" + p + "px) translate3d(" + x + "px," + y + "px, " + z + "px) skewY(" + skew + ") rotate3d(" + rot + ")";
    $("#Paulie").css("transform", transform)
}
// Clicks


function onMouseDown(e) {
    clickDownSound.play();
    $("#Paulie").addClass("clicking")
}
function onMouseUp(e) {
    setTimeout(function () { clickUpSound.play() }, 50);
    $("#Paulie").removeClass("clicking")
}
function onMouseMove(e) {
    if ($Paulie.isSleeping()) {
        return;
    }

    x = e.clientX - OFFSET_X;
    y = e.clientY - OFFSET_Y;
    updateTransform()
}

window.addEventListener('resize', function () {
    updateSystemDisplay()
});

window.addEventListener("mousedown", (e) => {
    if($Paulie.isSleeping()) return;
    onMouseDown(e)
    $('.icon-hitbox').removeClass('selected')
    updateTransform()
});

window.addEventListener("mouseup", (e) => {
    if($Paulie.isSleeping()) return;
    onMouseUp()
    skew = "0deg"
    updateTransform()
});

$Paulie.css("left", OFFSET_X)
$Paulie.css("top", OFFSET_Y)

window.addEventListener("focus", (e) => {
    // $("#Paulie").css("left", x)
    // $("#Paulie").css("top", y)
});

window.addEventListener("mousemove", onMouseMove);


Draggable.zIndex = 10;
Draggable.create(".icon-hitbox",
    {
        type: "x,y",
        edgeResistance: 0.65,
        force3D: true,
        bounds: "body",
        inertia: true,

        cursor: "none",
        activeCursor: "none",

        onDrag: function (e) {
            if($Paulie.isSleeping()) return;
            x = e.clientX;
            y = e.clientY;
            updateTransform()
        },
        onPress: function () {
            if($Paulie.isSleeping()) return;
            onMouseDown()
            $('.icon-hitbox').removeClass('selected')
            this.target.classList.add("dragging")
            this.target.classList.add("selected")

            paulie.style.marginTop = "-2px"
            paulie.style.marginLeft = "-1px"
            rot = "0.1,0,0.1,-1deg"
            updateTransform()
        },
        onRelease: function () {
            if($Paulie.isSleeping()) return;
            onMouseUp()
            this.target.classList.remove("dragging")
            paulie.style.marginTop = "0px"
            paulie.style.marginLeft = "0px"
            rot = "1,1,1,0deg"
            skew = "0deg"
            updateTransform()
        }
    });





// });


// var system = {
//     createWindow: function (headerText, content) {

//         var $window = document.createElement("div");
//         var $header = document.createElement("div");
//         var $content = document.createElement("div");
//         var $closeBtn = document.createElement("div");

//         $window.classList.add("window")

//         $header.innerHTML = headerText
//         $content.innerHTML = content

//         $header.classList.add("header")
//         $content.classList.add("content")
//         $closeBtn.classList.add("close")

//         $window.append($closeBtn);
//         $window.append($header);
//         $window.append($content);
//         document.body.appendChild($window)
//     },
//     fart: function () {
//         var sound = new Audio("/assets/sounds/fart.mp3");
//         sound.play();
//     }
// };



// const AudioContext = window.AudioContext || window.webkitAudioContext;
// const audioCtx = new AudioContext();


// function update() {
// 	// document.getElementById('SystemClock').innerHTML = moment().format("h:mma")
// 	requestAnimationFrame(update)
// }

// requestAnimationFrame(update)
