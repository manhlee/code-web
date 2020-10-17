$(document).ready(function(){
	var body_width=$(window).width();
	if(body_width<989)
	{
		$('.btn-menu').removeClass('show-btn-menu');
	}else {
		$('.btn-menu').addClass('show-btn-menu');
	}
	$(window).resize(function(){
		var body_width=$(window).width();
	if(body_width<989)
	{
		$('.btn-menu').removeClass('show-btn-menu');
	}else {
		$('.btn-menu').addClass('show-btn-menu');
	}
	});
});

$(document).ready(function(){
	$('.btn-menu').click(function(){
		$('.layer-right').addClass('show-info');
	});
	$('.layer-right').click(function(){
		$('.layer-right').removeClass('show-info');
	});
});