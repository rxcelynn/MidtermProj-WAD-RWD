    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    const menuIcon = menuToggle.querySelector('.menu-icon');
    const closeIcon = menuToggle.querySelector('.close-icon');

    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('show');
      menuIcon.style.display = navLinks.classList.contains('show') ? 'none' : 'inline';
      closeIcon.style.display = navLinks.classList.contains('show') ? 'inline' : 'none';
    });