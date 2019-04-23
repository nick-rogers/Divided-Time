$(document).ready(function(){

$('#x').mouseover(function(){
	$(this).css('opacity', '1');
	console.log('moused');
}).mouseout(function(){
	$(this).css('opacity', '0.18');
});



$('#circle').mouseover(function(){

	$('#progress').css('width', '200px');
	$('#progress').css('height', '200px');

	$('#progress').css('margin-top', '0px');
	$('#progress').css('margin-left', '0px');


}).mouseout(function(){

	$('#progress').css('width', '100px');
	$('#progress').css('height', '100px');

	$('#progress').css('margin-top', '50px');
	$('#progress').css('margin-left', '50px');

});









});