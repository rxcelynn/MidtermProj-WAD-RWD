const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    const menuIcon = menuToggle.querySelector('.menu-icon');
    const closeIcon = menuToggle.querySelector('.close-icon');

    menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    const isOpen = navLinks.classList.contains('show');
    menuIcon.style.display = isOpen ? 'none' : 'inline';
    closeIcon.style.display = isOpen ? 'inline' : 'none';
});

    const form = document.getElementById('adoptForm');
    const lightbox = document.getElementById('lightbox');
    const closeBtn = document.getElementById('closeLightbox');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

    // Show the lightbox
        lightbox.style.display = 'flex';
});

    closeBtn.addEventListener('click', function() {
        lightbox.style.display = 'none';
        form.reset(); 
});