---
layout: default
title: Bio
permalink: /bio
---

Kevin is a freelance XR developer.

Previously, he was the CTO & Co-founder of Frameri Eyewear, the first interchangeable eyewear company for perscription glasses, that you may have seen on Shark Tank! Other In 2019, he completed Snap's first ever residency program.

was the first person to travel the world with Google Glass and document how people reacted to seeing and experiencing it for the first time.

Kevin graduated from University of Illinois at Chicago with a B.S. degree in Computer Engineering.

Kevin is known as the dancing man.

<!-- [Add me to your website]() -->

<!-- https://www.instagram.com/p/1WbUjhGZOd/ -->

<!-- https://paper.dropbox.com/doc/Kevin-Habich--BQs8wVy7UyEwv8UT9RwAM36oAg-Ceh5hz0g5xJ4TM2frDdFl -->

<!--
This is my website. Hi, I'm Kevin Habich. You may remember me from such things as Season 6 of Shark Tank, or this website.

I'm a freelance XR developer. Previously, I was the CTO & Co-founder of Frameri Eyewear. We made the first interchangeable perscription eyewear and while ultimately we failed, I'm very proud of what our team acheived. We earned the trust of many loyal customers.

After a string of successes, we took a big risk that didn't pay off in time and were forced to close down.

Kevin graduated from University of Illinois at Chicago with a B.S. degree in Computer Engineering.  -->

<script type="text/javascript">

const GIF = "https://assets.codepen.io/5740/kevin_1.gif"

const HOW_FAST = 3100;
const GIRTH = 90;

let DANCE_FLOOR = 0;
let PARTY = 0;
const MAX_DANCERS = parseInt(window.innerWidth / GIRTH);

let transitionSpeed = 1000;

let youCanDanceIfYouWantTo = setInterval(dancingManIsHere,HOW_FAST)

function dancingManIsHere() 
{  
   var man= document.createElement("img");
   
   man.src = GIF
   man.style.left = "-" + GIRTH + "px"
   man.style.position = "fixed"
   man.style.bottom = "0px"
   man.style.transition = "left " + transitionSpeed + "ms ease-out";

   transitionSpeed += 200

   document.body.appendChild(man);
   
   function letTheManDance() 
   {
      man.style.left = DANCE_FLOOR + "px";
      DANCE_FLOOR += GIRTH;
   }
   setTimeout(letTheManDance,50);
   
   if(++PARTY >= MAX_DANCERS) clearInterval(youCanDanceIfYouWantTo);
}
</script>
