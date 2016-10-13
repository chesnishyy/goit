
//FPS - Frames Per Second



function slideLeft(el, duration, slideLenth) {
    var leftPositoin = parseInt(el.style.left) || 0;
    var time = 0;
    var fps = 50;
    var interval = setInterval(function () {

        if (time > duration){
            clearInterval(interval);
        }

        leftPositoin += slideLenth/(duration/fps*2);
        time += duration/fps;
        el.style.left = leftPositoin + 'px';
    }, duration/fps);
}

var box = document.querySelector('.js-box');

box.addEventListener('click', function () {
    slideLeft(box, 1000, 200);
});


//JQuery animation

$('.jquery-box').on('click', function () {
    $(this).animate({
        left: '+=260'
    }, 2000, 'easeInBounce');
});

$('.jquery-box-1').on('click', function () {
    $(this).animate({
        left: '+=260'
    }, 2000, 'easeInOutBounce');
});


//css animation

$('.css-box').on('click', function () {
    $(this).addClass('css-box-animated');
});