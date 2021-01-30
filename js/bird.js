// --------------------------------------------------------------------
// Put your custom bird here:
const IMG_SRC = "https://assets.codepen.io/5740/birdbrain_1.png";
// --------------------------------------------------------------------

// Version 1.0
// Dependencies: JQuery
// Description: Puts a bird on the left side of your website

// --------------------------------------------------------------------

let initialized = false;

(function () {
	if (initialized) return;
})();

let x = 0;
let y = 0;
let rotation = 0;
let skew = 0;
let cursor = { x: 0, y: 0, proximity: 0, distanceX: null, distanceY: null };
let $bird = $("<div>");
let img = new Image();

$bird.attr("id", "Bird"); // Our Lead Actor
$bird.css("position", "absolute").css("top", "0px").css("left", "0px");
img.style.float = "right";

let width;

img.onload = (event) => {
	width = img.naturalWidth;
	$("body").append($bird.append(img));
	window.requestAnimationFrame(renderLoop);
};

document.addEventListener(
	"mousemove",
	function (e) {
		cursor.x = e.clientX;
		cursor.y = e.clientY;
	},
	false
);

let looper = 0;

function renderLoop() {
	looper++;

	cursor.distanceX = cursor.x - x;
	cursor.distanceY = cursor.y - y;
	cursor.proximityY = cursor.distanceY / window.innerHeight;
	cursor.proximityX = cursor.distanceX / window.innerWidth;

	scale = lerp(0.5, 1.4, cursor.proximityX);
	x = lerp(-80, -60, cursor.proximityX);

	if (looper > 300) {
		y = lerp(y, cursor.y, 0.009);
	}
	if (looper > 400) {
		looper = 0;
	}

	// ROTATION
	const angle = [cursor.y - y, cursor.x - x];
	var targetRotation = (Math.atan2(angle[0], angle[1]) * 180) / Math.PI;
	targetRotation = targetRotation * 0.5;
	rotation = lerp(rotation, targetRotation, 0.09);

	var containerWidth = range(50, 0, width, width * 1.8, Math.abs(rotation));
	$bird.width(containerWidth);

	var str = "";
	str += "rotateZ(" + rotation.toFixed(2) + "deg) ";
	str += "skew( " + skew + "deg) ";
	str += "scale( " + scale + ")";

	$bird.css("transform", str);
	$bird.css("top", y);
	$bird.css("left", x);
	$("p").text(looper);
	window.requestAnimationFrame(renderLoop);
}

// ------------------------------
// ------------------------------
// ------------------------------
// ------------------------------
// ------------------------------
// ------------------------------
// Roll out the red carpet
// ------------------------------
img.src = IMG_SRC;

// ------------------------------
// Helpers
// ------------------------------

const lerp = (x, y, a) => x * (1 - a) + y * a;
const clamp = (a, min = 0, max = 1) => Math.min(max, Math.max(min, a));
const invlerp = (x, y, a) => clamp((a - x) / (y - x));
const range = (x1, y1, x2, y2, a) => lerp(x2, y2, invlerp(x1, y1, a));
