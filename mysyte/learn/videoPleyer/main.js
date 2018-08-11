var videoElement = document.querySelector('video');
var playButton = document.querySelector('.playVidio');
var containerVideo = document.querySelector('.container__video');

var noPlayVideo = function () {
    videoElement.pause();
    playButton.classList.remove('playVidio--opacity');
}

var resizeVideo = function () {
    videoElement.webkitEnterFullscreen();
}

var onPlayVideo = function () {
    playButton.classList.add('playVidio--opacity');
    videoElement.play();
    playButton.removeEventListener('click', onPlayVideo)
    videoElement.removeEventListener('click', onPlayVideo);
    videoElement.addEventListener('mouseover', onPlayVideo);
    videoElement.addEventListener('mouseleave', noPlayVideo);
    videoElement.addEventListener('click', resizeVideo);
}



videoElement.addEventListener('click', onPlayVideo);
playButton.addEventListener('click', onPlayVideo)