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
        console.log('Ready to go ');
    });

    wavesurfer.on('error', function(e) {
        console.warn(e);
    });

    // Load audio from URL
    wavesurfer.load('../tmp/audio/rain.ogg');

    // toggle play button
    document
        .querySelector('[data-action="play"]')
        .addEventListener('click', wavesurfer.playPause.bind(wavesurfer));
});
