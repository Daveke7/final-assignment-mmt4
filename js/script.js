$( function() {
    $( "#accordion" ).accordion();
} );

$(document).ready(function () {
    $("#accordion").accordion({
        animate: 1200,
        heightStyle: "content",
        header: ".slide .onderwerp"
    });

    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        spaceBetween: 60,
    });
});

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else {        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);



