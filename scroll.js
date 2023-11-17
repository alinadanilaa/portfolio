const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function highlightActiveSection() {
    const scrollPosition = window.scrollY;

    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            sectBtns.forEach((btn) => btn.classList.remove('active'))
            sectBtns[index].classList.add('active');
        }
    });

    function scrollToSection(index) {
        const targetSection = sections[index];
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    }

    sectBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            scrollToSection(index);
        });
    });

    window.addEventListener('scroll', () => {
        highlightActiveSection();
    });

}
highlightActiveSection();