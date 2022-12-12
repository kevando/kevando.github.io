let browserType = null;

// ---------------------------------------------------------

document.getElementById("Page_Debug").innerHTML = "Detecting Browser"
document.getElementById("Page_Message").innerHTML = "Gotham City"

// ---------------------------------------------------------

window.addEventListener("load", function () {

    const whatBrowser = () => {

        if (navigator.userAgent.indexOf("Chrome") != -1) {
            return "Chrome";
        }
        if (navigator.userAgent.indexOf("Firefox") != -1) {
            return "Firefox"
        }
        if (navigator.userAgent.indexOf("MSIE") != -1) {
            return "Internet Exploder"
        }
        if (navigator.userAgent.indexOf("Edge") != -1) {
            return "Internet Exploder"
        }
        if (navigator.userAgent.indexOf("Safari") != -1) {
            return "Safari"
        }
        if (navigator.userAgent.indexOf("Opera") != -1) {
            return "Opera"
        }
        if (navigator.userAgent.indexOf("YaBrowser") != -1) {
            return "Yandex"
        }

        // A NEW browser?!

        return "Something else"
    }

    browserType = whatBrowser();

    document.getElementById("Page_Message").classList.remove("hidden")
    // document.getElementById("Page_Message").innerHTML = browserType;

    


});


function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}  


docReady(function() {
    // DOM is loaded and ready for manipulation here
    
    
    // debugging
    document.getElementById("Page_Debug").innerHTML = navigator.userAgent.toString()
});