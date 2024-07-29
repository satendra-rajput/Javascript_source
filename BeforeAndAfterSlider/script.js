const slider = document.querySelector('.slider');
const handle = document.querySelector('.handle');
const before = document.querySelector('.before');
const after = document.querySelector('.after');

slider.addEventListener('mousemove', function(e) {
    const rect = slider.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const width = slider.offsetWidth;
    const percentage = (x / width) * 100;

    before.style.clip = `rect(0, ${percentage}%, 100%, 0)`;
    after.style.clip = `rect(0, 100%, 100%, ${percentage}%)`;
    handle.style.left = `${percentage}%`;
});

handle.addEventListener('mousedown', function() {
    slider.addEventListener('mousemove', moveHandle);
    slider.addEventListener('mouseup', function() {
        slider.removeEventListener('mousemove', moveHandle);
    });
});

function moveHandle(e) {
    const rect = slider.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const width = slider.offsetWidth;
    const percentage = (x / width) * 100;

    before.style.clip = `rect(0, ${percentage}%, 100%, 0)`;
    after.style.clip = `rect(0, 100%, 100%, ${percentage}%)`;
    handle.style.left = `${percentage}%`;
}
