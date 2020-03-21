$('li').click(function(){
	
	$(this).toggleClass("selected");
});
$('span').click(function(event){

	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();

});