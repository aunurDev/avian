// hover background
$(document).ready(function(){
	// option1
	// if ($("#link-gedung").mouseenter()) {
	// 	$(".push-right").css("display", "block");
	// 	$("#content").css("display", "none");
	// }else{
	// 	$(".push-right").css("display", "none");
	// 	$("#content").css("display", "block");
	// }

	// option2
	// $('#link-gedung').mouseenter(function(){
	// 	$(".push-right").css("display", "block");
	// 	$("#content").css("display", "none");
	// 	$(this).mouseleave(function(){
	// 		$(".push-right").css("display", "none");
	// 		$("#content").css("display", "block");
	// 	});
	// });

	// option3
	$('#link-gedung').mouseenter(function(){
		if ($(".push-right").css("display", "block")) {
			$("#content").css("display", "none");	
		}
		$(this).mouseleave(function(){
			if ($(".push-right").css("display", "none")) {
				$("#content").css("display", "block");
			}	
		});
	});


});


// end hoover background