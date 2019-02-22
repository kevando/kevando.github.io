---
layout: home
title:  "Kev·an·do"
---

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
<script src="/assets/js/dz.js"></script>


<script>



$(function() {


})


window.addEventListener('scroll', function (e) {
  var zoom = detectZoom.zoom();
  var device = detectZoom.device();
  console.log(zoom, device);
})


</script>

<style>

html {
  scroll-behavior: smooth;
}

.taco {
    background-image: url('./assets/images/place.jpg');
    background-size: 100%;
    /* border:  solid 5px blue; */
    position: absolute;
    top: 0;
    left: 0;
    height: 8000px;
    width: 8000px;
    transform: scale(2)
}

#ball {
  width: 20px;
  height: 20px;
  position: absolute;
  background: red;
  bo
}

</style>
<!-- <span id='ball'></span> -->
<div class="taco" id="bisco">

</div>
