
let browserType = null;

const getBrowser = () => {


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


const detectBrowser = () => {
    browserType = getBrowser();

    document.getElementById("Page_Message").classList.remove("hidden")
    document.getElementById("Page_Message").innerHTML = browserType + " City"

}

window.addEventListener("load", detectBrowser);