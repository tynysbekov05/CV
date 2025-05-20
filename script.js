document.addEventListener('DOMContentLoaded', function() {
    const themeButton = document.getElementById('themeButton');
    const body = document.body;
    

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeButton.textContent = 'Светлая тема';
    }

    themeButton.addEventListener('click', function() {
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
            themeButton.textContent = 'Темная тема';
        } else {
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
            themeButton.textContent = 'Светлая тема';
        }
    });
    
    const imagePlaceholder = document.querySelector('.image-placeholder');
    if (imagePlaceholder) {
        const initials = 'KT'; // Инициалы Kaisar Tynysbekov
        imagePlaceholder.textContent = initials;
    }
    
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 20,
                    behavior: 'smooth'
                });
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const footerYear = document.querySelector('footer p');
    if (footerYear) {
        const currentYear = new Date().getFullYear();
        footerYear.innerHTML = footerYear.innerHTML.replace('2025', currentYear);
    }
});