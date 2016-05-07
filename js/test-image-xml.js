$(document).ready(function(){
	$.ajax({
		type: "GET",
		url: "clothes.xml",
		dataType: "xml",
		success: xmlParser
	}); 
});

function xmlParser(xml) {
	$('#load').fadeOut();
	$(xml).find("item").each(function(){
		$("#container").append('<div class="item"><img src="images/' + 
			$(this).find("image").text() + '" width="150" height ="150" alt="' + 
			$(this).find("sku").text() + '" /><br/><div class="sku">' + $(this).find("sku").text() + 
			'<br/>$' + $(this).find("name").text() + '</div></div>'); 
		$(".item").fadeIn(1000);
	});
}
