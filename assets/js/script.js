// hover background
$(document).ready(function(){
	$('#link-gedung').mouseenter(function(){
		$(".push-right").css("display", "block");
		$(this).mouseleave(function(){
			$(".push-right").css("display", "none");
		});
	});
});


// end hoover background