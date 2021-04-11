
$(function() {
	$(".chaticon").on("click",function() {
		$(".chatbox").toggleClass('active');
	});

	$('.my-conv-form-wrapper').convform({selectInputStyle: 'disable'})
});
