
document.addEventListener('DOMContentLoaded', function() {
    AOS.init();

    const enterBtn = document.getElementById('enterBtn');
    const envelope = document.querySelector('.envelope');

    envelope.addEventListener('mouseover', function() {
        envelope.classList.add('open');
    });

    envelope.addEventListener('mouseout', function() {
        envelope.classList.remove('open');
    });

    enterBtn.addEventListener('click', function() {
        window.location.href = 'cv.html';
    });
});
