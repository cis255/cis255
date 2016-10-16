
timer = setInterval( function() {

var randomColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';

$('#color').css('backgroundColor', randomColor);

}, 1000);