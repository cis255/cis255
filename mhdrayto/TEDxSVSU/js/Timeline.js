$('.dot:nth-child(1)').click(function(){
  $('.inside').animate({
    'width' : '15%'
  }, 500);
});
$('.dot:nth-child(2)').click(function(){
  $('.inside').animate({
    'width' : '25%'
  }, 500);
});
$('.dot:nth-child(3)').click(function(){
  $('.inside').animate({
    'width' : '35%'
  }, 500);
});
$('.dot:nth-child(4)').click(function(){
  $('.inside').animate({
    'width' : '45%'
  }, 500);
});
$('.dot:nth-child(5)').click(function(){
  $('.inside').animate({
    'width' : '55%'
  }, 500);
});
$('.dot:nth-child(6)').click(function(){
  $('.inside').animate({
    'width' : '65%'
  }, 500);
});
$('.dot:nth-child(7)').click(function(){
  $('.inside').animate({
    'width' : '75%'
  }, 500);
});
$('.dot:nth-child(8)').click(function(){
  $('.inside').animate({
    'width' : '85%'
  }, 500);
});


$('.modal').hide();
$('.modal').addClass('nobox');
$('.dot').click(function(){
	var modal = $(this).attr('id');
	$('article.nobox').hide();
	$('article.nobox.' + modal).fadeIn(200);
});
$('.modal').click(function(){
	var modal = $(this).attr('id');
	$('article.nobox').hide();
	$('article.nobox.' + modal).fadeOut(200);
	
});

