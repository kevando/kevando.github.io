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

	let looper = 0;
	let x = 0;
	let y = 0;
	let width = null;
	let rotation = 0;
	let skew = 0;
	let cursor = { x: 0, y: 0, proximity: 0, distanceX: null, distanceY: null };
	let $bird = $("<div>");

	$bird
		.attr("id", "Bird")
		.css("position", "absolute")
		.css("top", "0px")
		.css("left", "0px");

	let img = new Image();
	img.style.float = "right";

	// ---------------------
	// 			 Handlers
	// ---------------------

	function ready(event) {
		width = img.naturalWidth;
		$("body").append($bird.append(img));
		window.requestAnimationFrame(renderLoop);
		initialized = true;
	}

	function onMouseMove(e) {
		cursor.x = e.clientX;
		cursor.y = e.clientY;
	}

	function renderLoop() {
		looper++;

		cursor.distanceX = cursor.x - x;
		cursor.distanceY = cursor.y - y;
		cursor.proximityY = cursor.distanceY / window.innerHeight;
		cursor.proximityX = cursor.distanceX / window.innerWidth;

		// SCALE
		scale = lerp(0.5, 1.0, cursor.proximityX);

		// POSITION
		x = lerp(-80, -60, cursor.proximityX);

		if (looper > 300) {
			// move in sorta sporadic fashion
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

		// scoot in a bit when looking really far up or far down
		const containerWidth = range(50, 0, width, width * 1.8, Math.abs(rotation));
		$bird.width(containerWidth);

		let str = "";
		str += "rotateZ(" + rotation.toFixed(2) + "deg) ";
		str += "skew( " + skew + "deg) ";
		str += "scale( " + scale + ")";

		$bird.css("transform", str).css("top", y).css("left", x);

		window.requestAnimationFrame(renderLoop); // Repeat
	}

	// ------------------------------
	// Event Listeners
	// ------------------------------

	img.onload = ready;
	document.addEventListener("mousemove", onMouseMove, false);

	// ------------------------------
	// ------------------------------
	// ------------------------------
	// ------------------------------
	// ------------------------------
	// ------------------------------
	// Roll out the red carpet
	// ------------------------------
	img.src = IMG_SRC;
	// The star has arrived. When he is ready, the show will start
	// This will trigger the img.onload function
})();

// ---------------------
// 			 Helpers
// ---------------------

const lerp = (x, y, a) => x * (1 - a) + y * a;
const clamp = (a, min = 0, max = 1) => Math.min(max, Math.max(min, a));
const invlerp = (x, y, a) => clamp((a - x) / (y - x));
const range = (x1, y1, x2, y2, a) => lerp(x2, y2, invlerp(x1, y1, a));
