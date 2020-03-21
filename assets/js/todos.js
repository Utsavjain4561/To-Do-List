//check on/of specific todos
$('ul').on('click','li',function(){
	
	$(this).toggleClass("selected");
});
// deleting the specific todo when X span is clicked 
$('ul').on('click','span',function(event){

	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	// disable events to bubble of in parents
	event.stopPropagation();

});

$('input[type="text"]').keypress(function(event){
	//grabbing the type of chracter input @[ENTER]
	if(event.which === 13){
		var todoText = $(this).val();
		$(this).val("");
		$('ul').append('<li><span>X</span> '+todoText+'</li');
	}
});