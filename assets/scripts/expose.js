// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const horns = {
    'air-horn': {
      image: 'assets/images/air-horn.svg',
      imageAlt: 'Air horn',
      audio: 'assets/audio/air-horn.mp3',
    },
    'car-horn': {
      image: 'assets/images/car-horn.svg',
      imageAlt: 'Car horn',
      audio: 'assets/audio/car-horn.mp3',
    },
    'party-horn': {
      image: 'assets/images/party-horn.svg',
      imageAlt: 'Party horn',
      audio: 'assets/audio/party-horn.mp3',
    },
  };

  const hornSelect = document.getElementById('horn-select');
  const hornImage = document.querySelector('#expose > img');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('#expose button');
  const audio = document.querySelector('#expose audio');
  const confetti = window.JSConfetti ? new window.JSConfetti() : null;

  function updateHorn() {
    const selectedHorn = horns[hornSelect.value];

    if (!selectedHorn) {
      return;
    }

    hornImage.src = selectedHorn.image;
    hornImage.alt = selectedHorn.imageAlt;
    audio.src = selectedHorn.audio;
  }

  function updateVolume() {
    const volume = Number(volumeSlider.value);
    let iconLevel = 3;

    if (volume === 0) {
      iconLevel = 0;
    } else if (volume < 33) {
      iconLevel = 1;
    } else if (volume < 67) {
      iconLevel = 2;
    }

    audio.volume = volume / 100;
    volumeIcon.src = `assets/icons/volume-level-${iconLevel}.svg`;
    volumeIcon.alt = `Volume level ${iconLevel}`;
  }

  hornSelect.addEventListener('change', updateHorn);
  volumeSlider.addEventListener('input', updateVolume);

  playButton.addEventListener('click', () => {
    if (!horns[hornSelect.value]) {
      return;
    }

    audio.currentTime = 0;
    audio.play();

    if (hornSelect.value === 'party-horn' && confetti) {
      confetti.addConfetti();
    }
  });

  updateVolume();
}
