document.addEventListener('DOMContentLoaded', () => {
    const user = localStorage.getItem('loggedInUser');
    const link = document.getElementById('nav-user-link');
    const dropdown = document.getElementById('user-dropdown');

    if (user && link) {
        link.textContent = user.toUpperCase();
        link.href = '#';
        link.style.color = '#00ffcc';
        link.style.textShadow = '0 0 10px rgba(0,255,204,0.6)';

        link.addEventListener('click', e => {
            e.preventDefault();
            dropdown.style.display = dropdown.style.display === 'flex' ? 'none' : 'flex';
        });

        document.addEventListener('click', e => {
            if (!e.target.closest('#nav-user-container')) dropdown.style.display = 'none';
        });

        document.getElementById('logout-btn')?.addEventListener('click', e => {
            e.preventDefault();
            localStorage.removeItem('loggedInUser');
            location.reload();
        });

        document.getElementById('switch-user-btn')?.addEventListener('click', () => {
            localStorage.removeItem('loggedInUser');
        });
    }







    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.feature-item', {
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.feature-list',
            start: 'top 50%',
            end: 'bottom 20%',
            toggleActions: 'play reverse play reverse'
        }
    });
});
