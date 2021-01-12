const X_OFFSET = 1;

const lerp = (x, y, a) => x * (1 - a) + y * a;
const clamp = (a, min = 0, max = 1) => Math.min(max, Math.max(min, a));
const invlerp = (x, y, a) => clamp((a - x) / (y - x));
const range = (x1, y1, x2, y2, a) => lerp(x2, y2, invlerp(x1, y1, a));

function randomRange(min, max) {
    return min + Math.random() * (max - min);
}
function randomInt(min, max) {
    var diff = max - min;
    var rand = Math.random() * diff;

    rand += min;

    return Math.floor(rand);
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

// var initialState = "sleeping";


var x = 0;//randomInt(400);
var y = 0;//randomInt(500);
var z = 0;
var p = 0;
var rot = "1,1,1,0deg";
var skew = "0deg";

const EDGE = 300

const OFFSET_X = randomInt(EDGE, document.body.clientWidth - EDGE)
const OFFSET_Y = randomInt(EDGE, document.body.clientHeight - EDGE)

const INITIAL_STATE = "sleeping";

// eyyyy
var $Paulie = $("#Paulie");

// Set System Size based on browser window

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

// --------------------------------------------
//      PAULIE BABY!!
// --------------------------------------------




$Paulie.css("left", OFFSET_X)
$Paulie.css("top", OFFSET_Y)
$Paulie.addClass(INITIAL_STATE);
$("body").addClass(INITIAL_STATE)

$Paulie.isSleeping = function () { return $(this).hasClass("sleeping"); }
$Paulie.isAwake = function () { return $(this).hasClass("awake") }

var clickDown = document.getElementById("AudioClickDown");
var clickUp = document.getElementById("AudioClickUp");
var wakeUp = document.getElementById("AudioWakeUp");

clickDown.load();
clickUp.load();
wakeUp.load();

var clicking = false;
var awake = false;
var asleep = true;


// WAKE UP

$("#Paulie").on("mousedown", function (e) {
    if (asleep) {
        asleep = false;
        $(this).addClass("clicking")
        $("body").removeClass("sleeping")
        $(this).removeClass("sleeping");
        $(this).addClass("waking");
    }

});

$("#Paulie").on("mouseup", function (e) {

    if (!asleep && !awake) {
        awake = true;
        $("body").addClass("awake")
        wakeUp.play()
        $Paulie.removeClass("clicking")
        $Paulie.addClass("awake")
        $Paulie.removeClass("sleeping")
        $Paulie.addClass("jump")
        $Paulie.addClass("disableClicker")
        x = e.clientX - OFFSET_X;
        y = e.clientY - OFFSET_Y;
        updateTransform();
        setTimeout(function () { $Paulie.removeClass("jump") }, 500)
        setTimeout(function () { $Paulie.removeClass("waking") }, 50)
    }

});


function updateTransform() {
    var transform = "perspective(" + p + "px) translate3d(" + x + "px," + y + "px, " + z + "px) skewY(" + skew + ") rotate3d(" + rot + ")";
    $("#Paulie").css("transform", transform)
}
// Clicks


function onMouseMove(e) {

    if ($Paulie.hasClass("waking")) {
        setTimeout(function () { $Paulie.removeClass("waking") }, 50)
        // return
    }
    if (awake) {
        console.log('mouse move CLASSES = ', $(this).attr("class"))

        x = e.clientX - OFFSET_X;
        y = e.clientY - OFFSET_Y;
        updateTransform()
    }
}


window.addEventListener("mousedown", (e) => {
    if (awake) {
        clickDown.play();
        $Paulie.addClass("clicking")
        $('.icon-hitbox').removeClass('selected')
        updateTransform()
    }

});

window.addEventListener("mouseup", (e) => {

    if (awake) {
        clickUp.play()
        $Paulie.removeClass("clicking")
        skew = "0deg"
        updateTransform()
    }

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
            x = e.clientX - OFFSET_X;
            y = e.clientY - OFFSET_Y;
            updateTransform()
        },
        onPress: function () {


            clickDown.play();
            $Paulie.addClass("clicking")

            $('.icon-hitbox').removeClass('selected')
            this.target.classList.add("dragging")
            this.target.classList.add("selected")

            paulie.style.marginTop = "-2px"
            paulie.style.marginLeft = "-1px"
            rot = "0.1,0,0.1,-1deg"
            updateTransform()
        },
        onRelease: function () {
            if(awake) {
                clickUp.play()
                this.target.classList.remove("dragging")
                paulie.style.marginTop = "0px"
                paulie.style.marginLeft = "0px"
                rot = "1,1,1,0deg"
                skew = "0deg"
                updateTransform()
            }
       
        }
    });


