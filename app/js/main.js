$(document).ready(function() {

	$('#iphone').mouseenter(function(){ // Навели на ссылку?

	      $( "#iphone + .megamenu" ).show(); // Показываем блок
	   });
	$("#iphone + .megamenu").mouseleave(function(event ){ // курсор ушел с ссылки?
        event = event || window.event   // Не знаю что тут происходит
			 $( "#iphone + .megamenu" ).hide();  // Скрываем блок
      });
});