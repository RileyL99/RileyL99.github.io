function fadeContent(){
	$(".contentPanel.content:hidden:first").fadeIn(500).delay(8000).fadeOut(500,
	function(){
		$(this).appendTo($(this).parent());
		fadeContent();
	})
}
fadeContent();