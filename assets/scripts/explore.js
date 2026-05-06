// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const face = document.querySelector('#explore > img');
  const textToSpeak = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  const talkButton = document.querySelector('#explore button');
  let voices = [];

  if (!synth) {
    return;
  }

  function populateVoices() {
    const previousValue = voiceSelect.value;
    voices = synth.getVoices();

    voiceSelect.innerHTML = '<option value="select" disabled>Select Voice:</option>';

    voices.forEach((voice, index) => {
      const option = document.createElement('option');
      option.value = String(index);
      option.textContent = `${voice.name} (${voice.lang})`;
      voiceSelect.appendChild(option);
    });

    if (voices.length === 0) {
      voiceSelect.value = 'select';
    } else if (voices[Number(previousValue)]) {
      voiceSelect.value = previousValue;
    } else {
      voiceSelect.value = '0';
    }
  }

  function closeMouth() {
    face.src = 'assets/images/smiling.png';
    face.alt = 'Smiling face';
  }

  function openMouth() {
    face.src = 'assets/images/smiling-open.png';
    face.alt = 'Smiling face with open mouth';
  }

  talkButton.addEventListener('click', () => {
    if (textToSpeak.value.length === 0) {
      closeMouth();
      return;
    }

    const utterance = new SpeechSynthesisUtterance(textToSpeak.value);
    const selectedVoice = voices[Number(voiceSelect.value)];

    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }

    utterance.addEventListener('start', openMouth);
    utterance.addEventListener('end', closeMouth);
    utterance.addEventListener('error', closeMouth);

    synth.cancel();
    synth.speak(utterance);
  });

  populateVoices();
  synth.addEventListener('voiceschanged', populateVoices);
}
