
// Wave Surfer JS - Audio Player 
var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: 'violet',
    progressColor: 'purple'
});

// Loading the Audio 

wavesurfer.load('../assets/audio/rain.ogg');

// On "Ready", Play the Audio

wavesurfer.on('ready', function () {
    wavesurfer.play();
});