const myAudio = document.getElementById("trackAudio");

window.onload = function () {
    setTimeout(() => {
        //myAudio.muted = false;
        myAudio.play();
    }, 2000)
}