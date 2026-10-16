(() => {
  const revealItems = document.querySelectorAll('.section-label, .experience-row, .program-item, .gallery-image, .gallery-aside, .audio-player, .faq details');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal', 'is-visible');
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });
    revealItems.forEach(item => { item.classList.add('reveal'); observer.observe(item); });
  }

  const audio = document.querySelector('#festival-audio');
  const playButton = document.querySelector('.audio-play');
  const playGlyph = document.querySelector('.play-glyph');
  const progress = document.querySelector('#audio-progress');
  const volume = document.querySelector('#audio-volume');
  const timeLabel = document.querySelector('.audio-time');
  const status = document.querySelector('.audio-status');
  const soundSection = document.querySelector('.sound-section');
  if (!audio || !playButton || !progress || !volume) return;

  const formatTime = seconds => {
    if (!Number.isFinite(seconds)) return '0:00';
    const minutes = Math.floor(seconds / 60);
    return `${minutes}:${String(Math.floor(seconds % 60)).padStart(2, '0')}`;
  };
  const updateProgress = () => {
    const duration = audio.duration || 36;
    const current = audio.currentTime || 0;
    progress.value = String((current / duration) * 100);
    progress.setAttribute('aria-valuetext', `${formatTime(current)} de ${formatTime(duration)}`);
    timeLabel.textContent = `${formatTime(current)} / ${formatTime(duration)}`;
  };
  const setPlayingState = playing => {
    playButton.setAttribute('aria-pressed', String(playing));
    playButton.setAttribute('aria-label', playing ? 'Pausar faixa' : 'Reproduzir faixa');
    playGlyph.textContent = playing ? 'Ⅱ' : '▶';
    soundSection.classList.toggle('is-playing', playing);
    status.textContent = playing ? 'Faixa em reprodução.' : 'Faixa pausada.';
  };

  audio.volume = Number(volume.value);
  playButton.addEventListener('click', async () => {
    if (audio.paused) {
      try {
        await audio.play();
        setPlayingState(true);
      } catch {
        status.textContent = 'Não foi possível carregar a faixa. Tente novamente.';
      }
    } else {
      audio.pause();
      setPlayingState(false);
    }
  });
  audio.addEventListener('timeupdate', updateProgress);
  audio.addEventListener('loadedmetadata', updateProgress);
  audio.addEventListener('play', () => setPlayingState(true));
  audio.addEventListener('pause', () => setPlayingState(false));
  audio.addEventListener('ended', () => { setPlayingState(false); audio.currentTime = 0; updateProgress(); });
  audio.addEventListener('error', () => { status.textContent = 'A faixa não pôde ser carregada.'; });
  progress.addEventListener('input', () => {
    if (Number.isFinite(audio.duration)) audio.currentTime = (Number(progress.value) / 100) * audio.duration;
    updateProgress();
  });
  volume.addEventListener('input', () => { audio.volume = Number(volume.value); });
  updateProgress();
})();
