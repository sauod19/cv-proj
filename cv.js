// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    AOS.init();

    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    const links = document.querySelectorAll('nav ul li a');
    for(const link of links) {
        link.addEventListener('click', function(event) {
           /// دكتور اذا شفت الكود شغله شيل تعليق عنه صارل علي جرب سيره ذاتيه صار مايشتغل ماعرفت السبب erorr  event.preventDefault();/// الكود هذا جبلي العله
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });

            navMenu.classList.remove('active');
        });
    }
});

