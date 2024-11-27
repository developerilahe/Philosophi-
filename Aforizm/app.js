window.addEventListener('DOMContentLoaded', (event) => {
    const sr = ScrollReveal({
        distance: '50px',
        duration: 1000,
        easing: 'ease-out',
        reset: false
    });


    sr.reveal('.scroll-reveal', {
        opacity: 1,
        interval: 200
    });

});

function scrollToSection() {
    document.querySelector('.content-section').scrollIntoView({ behavior: 'smooth' });
}

document.querySelector('a[href="#aboutme"]').addEventListener('click', function(event) {
    event.preventDefault(); 
    const aboutMeSection = document.getElementById('aboutme');
    aboutMeSection.style.display = 'flex';
    window.scrollTo({ top: aboutMeSection.offsetTop, behavior: 'smooth' }); 
});