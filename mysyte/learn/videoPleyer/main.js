var videoElement = document.getElementById("myvideo");;
var playButton = document.querySelector('.playVidio');
var containerVideo = document.querySelector('.container__video');

var noPlayVideo = function () {
    videoElement.pause();
    //playButton.classList.remove('playVidio--opacity');
}

function fullScreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.webkitRequestFullscreen) { //opera,chrome
        element.webkitRequestFullscreen();
    } else if (element.mozRequestFullScreen) { //firefox
        element.mozRequestFullScreen();
    } else if (element.msRequestFullscreen) { //ie11
        element.msRequestFullscreen();
    } else if (element.webkitEnterFullscreen) { //safari
        element.webkitEnterFullscreen();
    }
}

var resizeVideo = function () {
    fullScreen(videoElement)
}

var onPlayVideo = function () {
    videoElement.play();
    videoElement.removeEventListener('click', onPlayVideo);
    videoElement.addEventListener('mouseover', onPlayVideo);
    videoElement.addEventListener('mouseleave', noPlayVideo);
    videoElement.addEventListener('click', resizeVideo);
}



videoElement.addEventListener('click', onPlayVideo);