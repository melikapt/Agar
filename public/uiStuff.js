let hHeight = $(window).height();
let wWidth = $(window).width();
let player = {};

let canvas = document.querySelector('#the-canvas');
let context = canvas.getContext('2d');
canvas.height = hHeight;
canvas.width = wWidth;


$(window).load(() => {
    $('#loginModal').modal('show');
})

$('.name-form').submit((event) => {
    event.preventDefault();
    player.name = document.querySelector('#name-input').value;
    $('#loginModal').modal('hide');
    $('#spawnModal').modal('show');
    document.querySelector('.player-name').innerHTML = player.name;
})

$('.start-game').click((event)=>{
    $('.modal').modal('hide');
    $('.hiddenOnStart').removeAttr('hidden');
    init();
})
