$(function() {
    'use strict';
    //Adjust Slider Hieght
    var winH = $(window).height(),
        upperH = $('.upper-bar').innerHeight(),
        navH = $('.navbar').innerHeight();
    $('.slider, .carousel-item').height(winH - (upperH + navH));

});

// // When the user scrolls the page, execute myFunction
// window.onscroll = function() { myFunction() };

// // Get the header
// var header = document.getElementById("myHeader");

// // Get the offset position of the navbar
// var sticky = header.offsetTop;

// // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//     if (window.pageYOffset > sticky) {
//         header.classList.add("sticky");
//     } else {
//         header.classList.remove("sticky");
//     }
// }

// navbar link color 
$('.navbar-nav li').on('click', function() {
    $(this).addClass('active').siblings().removeClass('active');
    console.log($(this).data('class'));
});

//Featured Work Shuffle
$('.featured-work ul li').on('click', function() {
    $(this).addClass('active').siblings().removeClass('active');
    console.log($(this).data('class'));
    if ($(this).data('class') === 'all') {
        $('.shuffle-images .col-sm-6').css('opacity', 1);
    } else {
        $('.shuffle-images .col-sm-6').css('opacity', 0.08);
        $($(this).data('class')).parent().css('opacity', 1);
    }

});