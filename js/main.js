// Track scroll direction
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    const scrollingDown = currentScrollY > lastScrollY;

    document.querySelectorAll('.feature').forEach(feature => {
        const rect = feature.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8;

        if (isVisible && scrollingDown) {
            feature.classList.add('visible');
        } else if (!scrollingDown) {
            feature.classList.add('visible');
        }
    });

    lastScrollY = currentScrollY;
});
