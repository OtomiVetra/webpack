import './index.scss';

const sounds = {
  winter: new Audio('/sounds/winter.mp3'),
  summer: new Audio('/sounds/summer.mp3'),
  rain: new Audio('/sounds/rain.mp3'),
};

const backgrounds = {
  winter: '/pictures/winter-bg.jpg',
  summer: '/pictures/summer-bg.jpg',
  rain: '/pictures/rainy-bg.jpg',
};

let currentSound = null;
let currentKey = null;

const volumeControl = document.getElementById('volume');

volumeControl.addEventListener('input', () => {
  if (currentSound) {
    currentSound.volume = parseFloat(volumeControl.value);
  }
});

Object.values(sounds).forEach(audio => {
  audio.volume = parseFloat(volumeControl.value);
});

Object.entries(sounds).forEach(([key, audio]) => {
  const btn = document.getElementById(key);

  btn.addEventListener('click', () => {
    const wasPlaying = !audio.paused;

    if (currentSound && currentSound !== audio) {
      currentSound.pause();
      currentSound.currentTime = 0;
    }

    if (wasPlaying) {
      audio.pause();
    } else {
      audio.volume = parseFloat(volumeControl.value);
      audio.play();
      document.body.style.backgroundImage = `url(${backgrounds[key]})`;
      currentSound = audio;
      currentKey = key;
    }
  });
});
