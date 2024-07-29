document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('slider');
    const beforeAfter = document.querySelector('.before-after');
    const afterImgWrapper = document.querySelector('.after-img-wrapper');

    let isDragging = false;

    const setSliderPosition = (x) => {
        const containerRect = beforeAfter.getBoundingClientRect();
        const offsetX = x - containerRect.left;
        const percentage = Math.max(0, Math.min(100, (offsetX / containerRect.width) * 100));
        
        slider.style.left = `${percentage}%`;
        afterImgWrapper.style.clipPath = `polygon(0 0, 0 100%, ${percentage}% 100%, ${percentage}% 0)`;
    };

    slider.addEventListener('mousedown', (e) => {
        isDragging = true;
        document.body.style.cursor = 'ew-resize';
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            setSliderPosition(e.clientX);
        }
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        document.body.style.cursor = 'default';
    });

    setSliderPosition(beforeAfter.offsetWidth / 16);
});
