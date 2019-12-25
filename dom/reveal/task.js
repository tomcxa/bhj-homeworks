document.addEventListener('DOMContentLoaded', function() {
    const reveal = document.getElementsByClassName('reveal');

    document.addEventListener('scroll', (event) => {
        const viewportHeight = window.innerHeight;
        for (const el of reveal) {
            if (el.getBoundingClientRect().top < viewportHeight
                && el.getBoundingClientRect().bottom > 0) {
                el.classList.add('reveal_active');
            } else {
                el.classList.remove('reveal_active');
            }
        }
    });
});