$(document).ready(function(){

	const patternEmail = /^[a-z0-9_-]+@[a-z0-9-]+\.[a-z]{2,6}$/i,
	      patternName = /^((?=.*[а-яА-Я])([а-яА-Я\s-]){2,})$/i,
	      patternSurname = /^((?=.*[а-яА-Я])([а-яА-Я\s-]){2,})$/i,
	 	  mail = $('#mail'),
	  	  name = $('#name'),
	      surname = $('#surname');
	
	//валидация	  
	$('input').change(function(){
	if((mail.val() != '') && (name.val() != '' ) && (surname.val() != '' ) ){
	if((mail.val().search(patternEmail) == 0) && (name.val().search(patternName) == 0 ) && (surname.val().search(patternSurname) == 0 )){
	$('#valid').text('Нажмите кнопку Отправить');
	$('#form__btn').css('background', '#f6ae48').css('border', 'none' );
	$('#form__btn').attr('disabled', false);
	$('#form__btn').click(function(){
		$('#form__btn').css('background', 'transparent').css('border', '1px solid #fff');	
	});
	}else{
	$('#valid').text('Форма заполнена не корректно');
	$('#form__btn').attr('disabled', true);
	}
	}else{
	$('#valid').text('Заполните обязательные поля * !');
	$('#form__btn').attr('disabled', true);
	}
	});

	
	//слайдер
    $('.slider_development').slick({
		arrows: true,
		prevArrow: $('.prev'),
		nextArrow: $('.next'),
		centerMode: false,
		
		infinite: true,
		speed: 500,
		dots: false,
		draggable: false,
		slidesToShow: 1,
		
	});
	//форма 
	$('input,textarea').focus(function(){
		$(this).data('placeholder',$(this).attr('placeholder'));
		$(this).attr('placeholder','');
	  });
	  $('input,textarea').blur(function(){
		$(this).attr('placeholder',$(this).data('placeholder'));
	  });

	  $('#form_btn').click(function(e){
          e.preventDefault(); 
	  });
	  $(function(){
		$('#form').on('submit', function(e){
		  e.preventDefault();
		  var form = $(this),
		  formData = new FormData(form.get(0)); // создаем новый экземпляр объекта и передаем ему нашу форму (*)
		  var url = 'mail.php';
		  $.ajax({
			url: url,
			type: 'POST',
			cache: false,
			contentType: false, // важно - убираем форматирование данных по умолчанию
			processData: false, // важно - убираем преобразование строк по умолчанию
			data: formData,
			success: function(response){
			  if(response){
				console.log(response);
				$('#modal-thank').fadeIn();
				$('#form')[0].reset();
				$('#form__btn').css('background', 'transparent').css('border', '1px solid #fff');
				$('#valid').text('');
				$(".form__small").css('display', 'flex');
				$('#form__btn').attr('disabled', true);
			
			  }
			},
			error: function(json){
				if(!response){	
				$('#valid').text('Попробуйте позже');
				$('#form')[0].reset();
			  }
			}	
		  });
		});
	  });
	  
	 //наведение в about
	  $('.description__block:first').hover(function(){
		$('.about__img:first').attr('src', 'img/about/desc01.png');

	  },
	  function(){
		$('.about__img:first').attr('src', 'img/about/desc1.png');
	  });
	  $('.description__block:eq(1)').hover(function(){
		$('.about__img:eq(1)').attr('src', 'img/about/desc02.png');

	  },
	  function(){
		$('.about__img:eq(1)').attr('src', 'img/about/desc2.png');
	  });
	  $('.description__block:eq(2)').hover(function(){
		$('.about__img:eq(2)').attr('src', 'img/about/desc3.png');

	  },
	  function(){
		$('.about__img:eq(2)').attr('src', 'img/about/desc03.png');
	  });
	  //
	  $('.parallax-window').parallax({imageSrc: 'img/credo/credo-bg.png'});
	  //
	  $('.prise__link').click(function(e){
		e.preventDefault(); 
	  });
	  $('.prise__link').click(function(e){
		e.preventDefault(); 
	  });
	   $('.item__link').click(function(e){
		e.preventDefault(); 
	  });
	  $('.block1').click(function(e){
		e.preventDefault(); 
	  });
	  $('.block2').click(function(e){
		e.preventDefault(); 
	  });
});