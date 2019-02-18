---
layout: home
title:  "Kev·an·do"
---


<script>

window.onzoom = function(e) {
  var image = document.getElementById('i')
  var screenCssPixelRatio = (window.outerWidth - 8) / window.innerWidth;
  if (screenCssPixelRatio >= .46 && screenCssPixelRatio <= .54) {
    image.style.opacity = 0
  }
};
//
// // detect resize
(function() {
	var oldresize = window.onresize;
	window.onresize = function(e) {
      var event = window.event || e;
      if(typeof(oldresize) === 'function' && !oldresize.call(window, event)) {
        return false;
      }
      if(typeof(window.onzoom) === 'function') {
        return window.onzoom.call(window, event);
      }
  }
})();

</script>



<img src="/assets/images/place.svg" id="i" style="margin-left:-500px;margin-top:-500px; max-width:1000%"/>
