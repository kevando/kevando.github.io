function preloadSound(src) {
    var sound = document.createElement("audio");
    if ("src" in sound) {
        sound.autoPlay = false;
    }
    else {
        sound = document.createElement("bgsound");
        sound.volume = -10000;
    }
    sound.src = src;
    document.body.appendChild(sound);
    return sound;
}

function loadSound(src) {
    var sound = document.createElement("audio");
    if ("src" in sound) {
        sound.autoPlay = false;
    }
    else {
        sound = document.createElement("bgsound");
        sound.volume = -10000;
        sound.play = function () {
            this.src = src;
            this.volume = 0;
        }
    }


    sound.src = src;
    document.body.appendChild(sound);
    return sound;
}