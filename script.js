document.addEventListener('DOMContentLoaded', function () {
    var projectsCarousel = document.querySelector('.projects-flickity');
    if (!projectsCarousel) return;

    new Flickity(projectsCarousel, {
        wrapAround: true,
        autoPlay: 4000,
        pauseAutoPlayOnHover: true,
        pageDots: true,
        prevNextButtons: true,
        adaptiveHeight: true,
        cellAlign: 'center',
        contain: true
    });
});
