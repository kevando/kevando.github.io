var surfsUp = true;
var SURFS_DOWN = "/freedom-torch/surfs-down";

// --------------------------------------------------------------------------

function isWorstBrowser() {

  // Check #1

  if (window.document.documentMode) {
    return true;
  }

  // Check #2

  var ua = window.navigator.userAgent;
  var msie = ua.indexOf("MSIE ");

  if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))  // If Internet Explorer, return version number
  {
    console.info("IE Version: " + parseInt(ua.substring(msie + 5, ua.indexOf(".", msie))));
    return true;
  }
  else  // If another browser, return 0
  {
    console.info('Normal Browser');
  }

  return false;
}

// ======================================================================== 

if (isWorstBrowser()) surfsUp = false;

if (!surfsUp) window.location = SURFS_DOWN; // <---- No Internet Explorers Allowed