$(function () {
	$('.book').click(function() {
		$('#modal2').addClass('show');
	});
	$('.modal2__overlay').click(function (){
		$('#modal2').removeClass('show');
	})
})