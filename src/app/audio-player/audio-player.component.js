(function() {
'use strict';

// Create an instance
var wavesurfer;

// Init & load audio file
document.addEventListener('DOMContentLoaded', function() {
    // Init
    wavesurfer = WaveSurfer.create({
        container: document.querySelector('#waveform'),
        waveColor: 'violet',
        progressColor: 'purple',
        backend: 'MediaElement',
        mediaControls: false
    });

    wavesurfer.once('ready', function() {
        console.log('WaveSurfer Audio player successful');
    });

    wavesurfer.on('error', function(e) {
        console.warn(e);
    });

    const audioBtn = document.getElementById("controlAudioBtn");

    // Change Button Icon on Play
    wavesurfer.on('play', function() {
        audioBtn.classList.replace("fa-play-circle-o", "fa-pause-circle-o");
    });

    // Change Button Icon on Pause
    wavesurfer.on('pause', function() {
        audioBtn.classList.replace("fa-pause-circle-o", "fa-play-circle-o");
    });

    // If Button Icon was on pause when the song ended, reset it
    wavesurfer.on('finish', function() {
      if (audioBtn.classList == "fa-pause-circle-o") {
        audioBtn.classList.replace("fa-pause-circle-o", "fa-play-circle-o");
      }
    });

    // Load audio from URL
    wavesurfer.load('https://raw.githubusercontent.com/Dixon3991/comp/main/src/tmp/audio/thunder.wav');

    // toggle play button
    document
        .querySelector('[data-action="play"]')
        .addEventListener('click', wavesurfer.playPause.bind(wavesurfer));
});
})();
