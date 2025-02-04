onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };

document.addEventListener('DOMContentLoaded', function() {
    const audioButton = document.getElementById('toggleAudio');
    const iframe = document.querySelector('.spotify-player iframe');
    let isPlaying = true;

    // Intenta reproducir la música después de una interacción del usuario
    document.body.addEventListener('click', function() {
        if (isPlaying) {
            iframe.src = iframe.src.replace('&autoplay=0', '&autoplay=1');
        }
    }, { once: true });

    audioButton.addEventListener('click', function() {
        if (isPlaying) {
            iframe.src = iframe.src.replace('&autoplay=1', '&autoplay=0');
            audioButton.textContent = '🔈';
        } else {
            iframe.src = iframe.src.replace('&autoplay=0', '&autoplay=1');
            audioButton.textContent = '🔊';
        }
        isPlaying = !isPlaying;
    });
});
