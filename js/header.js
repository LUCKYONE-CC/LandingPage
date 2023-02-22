let header1;
let header2;

$(document).ready(function () {
    header1 = $('.header1')[0];
    header2 = $('.header2')[0];
});


$(document).scroll(function () {
    if(header1 === undefined || header2 === undefined) return;
    if ($(window).scrollTop() > 150) {
        header1.classList.add('active');
        header2.classList.add('active');
        return;
    }
    header1.classList.remove('active');
    header2.classList.remove('active');
});