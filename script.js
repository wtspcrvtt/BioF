const audio = document.querySelector('audio');
audio.play().catch(error => {
    console.log('Автовоспроизведение заблокировано браузером');
});