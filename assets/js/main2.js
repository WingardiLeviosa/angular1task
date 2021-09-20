let navbarToggler = document.querySelector('.home .navbar .navbar-toggler');
let overlay = document.querySelector('.home .navbar .overlay');
let closeicon = document.querySelector('.home .navbar .close-icon');
let navbarUl = document.querySelector('.home .navbar .navbar-collapse .navbar-nav');
let showNav = document.querySelector('.home .navbar .navbar-collapse');
let navbarLinks = document.querySelectorAll('.home .navbar .navbar-collapse .navbar-nav .nav-item .nav-link ');

//  end declaration

let removeclasses = () => {
    overlay.classList.remove("none");
    closeicon.classList.remove("none");
    navbarUl.classList.add('navmenu');
    navbarUl.classList.remove("none");
    showNav.classList.add('.show');
}

navbarToggler.addEventListener('click', removeclasses);
//  end removeclasses
let addnone = () => {
    overlay.classList.add("none");
    closeicon.classList.add("none");
    navbarUl.classList.remove('navmenu');
    showNav.classList.remove('show');
}
closeicon.addEventListener("click", addnone);
// end addnone 
let hideLinks = () => {
    addnone()
}
navbarLinks[0].addEventListener("click", hideLinks);
navbarLinks[1].addEventListener("click", hideLinks);
navbarLinks[2].addEventListener("click", hideLinks);
navbarLinks[3].addEventListener("click", hideLinks);
navbarLinks[4].addEventListener("click", hideLinks);
navbarLinks[5].addEventListener("click", hideLinks);
navbarLinks[6].addEventListener("click", hideLinks);

// end hidelinks


// Sticky navbar
// =========================
$(document).ready(function () {
    // Custom function which toggles between sticky class (is-sticky)
    var stickyToggle = function (sticky, stickyWrapper, scrollElement) {
        var stickyHeight = sticky.outerHeight();
        var stickyTop = stickyWrapper.offset().top;
        if (scrollElement.scrollTop() >= stickyTop) {
            stickyWrapper.height(stickyHeight);
            sticky.addClass("is-sticky");
        } else {
            sticky.removeClass("is-sticky");
            stickyWrapper.height('auto');
        }
    };

    // Find all data-toggle="sticky-onscroll" elements
    $('[data-toggle="sticky-onscroll"]').each(function () {
        var sticky = $(this);
        var stickyWrapper = $('<div>').addClass('sticky-wrapper'); // insert hidden element to maintain actual top offset on page
        sticky.before(stickyWrapper);
        sticky.addClass('sticky');

        // Scroll & resize events
        $(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function () {
            stickyToggle(sticky, stickyWrapper, $(this));
        });

        // On page load
        stickyToggle(sticky, stickyWrapper, $(window));
    });
});

//top
$(window).scroll(function () {
    x = $(window).scrollTop();
    if (x > 500) {
        $('.top-icon').css("display", "block")
    } else {
        $('.top-icon').css("display", "none")

    }
});

// smoth scroll 
let scroll = new SmoothScroll('a[href*="#"]', {
    speed: 250
});





// frequent copied

$('.color-frequent').click(function () {
    $('.color-frequent').removeClass('active');
    $(this).addClass('active');
});
$('.frequent-text .item').first().show();
$('.color-frequent').click(function () {
    let indexofColorfrequent = $(this).index();
    $('.frequent-text .item').hide();
    $('.frequent-text .item').eq(indexofColorfrequent).show();
});

$('.click1').click(function () {
    $('.frequent-text ul li.click1').toggleClass('style-li');
    $('.frequent-text ul li.click1 .icon-minus').toggle();
    $('.frequent-text ul li.click1 .icon-plus').toggle();
    $('.frequent-text ul li.click1 + .ul-text').toggle();
});
$('.click2').click(function () {
    $('.frequent-text ul li.click2').toggleClass('style-li');
    $('.frequent-text ul li.click2 .icon-minus').toggle();
    $('.frequent-text ul li.click2 .icon-plus').toggle();
    $('.frequent-text ul li.click2 + .ul-text').toggle();
});
$('.click3').click(function () {
    $('.frequent-text ul li.click3').toggleClass('style-li');
    $('.frequent-text ul li.click3 .icon-minus').toggle();
    $('.frequent-text ul li.click3 .icon-plus').toggle();
    $('.frequent-text ul li.click3 + .ul-text').toggle();
});
$('.click4').click(function () {
    $('.frequent-text ul li.click4').toggleClass('style-li');
    $('.frequent-text ul li.click4 .icon-minus').toggle();
    $('.frequent-text ul li.click4 .icon-plus').toggle();
    $('.frequent-text ul li.click4 + .ul-text').toggle();
});
$('.click5').click(function () {
    $('.frequent-text ul li.click5').toggleClass('style-li');
    $('.frequent-text ul li.click5 .icon-minus').toggle();
    $('.frequent-text ul li.click5 .icon-plus').toggle();
    $('.frequent-text ul li.click5 + .ul-text').toggle();
});
$('.click6').click(function () {
    $('.frequent-text ul li.click6').toggleClass('style-li');
    $('.frequent-text ul li.click6 .icon-minus').toggle();
    $('.frequent-text ul li.click6 .icon-plus').toggle();
    $('.frequent-text ul li.click6 + .ul-text').toggle();
});


document.addEventListener('DOMContentLoaded', function () {
    new WOW().init();
});