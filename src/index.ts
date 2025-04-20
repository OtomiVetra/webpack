import './index.scss';

const sounds: {
  winter: HTMLAudioElement;
  summer: HTMLAudioElement;
  rain: HTMLAudioElement;
} = {
  winter: new Audio('/sounds/winter.mp3'),
  summer: new Audio('/sounds/summer.mp3'),
  rain: new Audio('/sounds/rain.mp3'),
};

const backgrounds: {
  winter: string;
  summer: string;
  rain: string;
} = {
  winter: '/pictures/winter-bg.jpg',
  summer: '/pictures/summer-bg.jpg',
  rain: '/pictures/rainy-bg.jpg',
};

let currentSound: HTMLAudioElement | null = null;

let currentKey: 'winter' | 'summer' | 'rain' | null = null;

const volumeControl = document.getElementById('volume') as HTMLInputElement | null;

if (volumeControl) {
  volumeControl.addEventListener('input', (): void => {
    if (currentSound) {

      currentSound.volume = parseFloat(volumeControl.value);
    }
  });


  Object.values(sounds).forEach((audio): void => {
    audio.volume = parseFloat(volumeControl.value);
  });
}


(Object.entries(sounds) as [string, HTMLAudioElement][]).forEach(([key, audio]): void => {
  const btn = document.getElementById(key) as HTMLButtonElement | null;

  if (!btn) return;

  btn.addEventListener('click', (): void => {
    const wasPlaying = !audio.paused;

    if (currentSound && currentSound !== audio) {
      currentSound.pause();
      currentSound.currentTime = 0;
    }

    if (wasPlaying) {
      audio.pause();
    } else {
      if (volumeControl) {
        audio.volume = parseFloat(volumeControl.value);
      }

      audio.play();

      document.body.style.backgroundImage =
        `url(${backgrounds[key as 'winter' | 'summer' | 'rain']})`;

      currentSound = audio;
      currentKey = key as 'winter' | 'summer' | 'rain';
    }
  });
});
