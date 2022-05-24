$(function(){

	$('#final-scene').hide();
	// $('#start-scene').fadeOut(400);	// !!! Для создания финальной сцены, после убрать

	// Начальная сцена

	// Отображение вложенных окон при нажатии на текст
	// Для "Перед тем как Начать"
	$('#rules').on('click', function(){
		var popup = $('#rules-div');
		if (popup.css('display') == 'block'){
			popup.fadeOut(400);
		}
		else {
			popup.fadeIn(400);
		}
	});

	// Для "Что это такое?"
	$('#help').on('click', function(){
		var popup = $('#help-div');
		if (popup.css('display') == 'block'){
			popup.fadeOut(400);
		}
		else {
			popup.fadeIn(400);
		}
	});

	// Для вложенных окон
	$('.popup-window').on('click', function(){
		$(this).fadeOut(400);
	});

	// Начало мелодии и строк стихотворения
	$('#start-pic').on('click', function(){
		
		$('#audio-verse').html('<audio id="low-roar" src="sound/test-sound.mp3"></audio>'); // !!! Поменять на - Low Roar - Tonight, Tonight, Tonight
    	document.getElementById("low-roar").play();

    	// Уходят остальные элементы
    	$('#start-scene').fadeOut(400);

		/* !!! Вывод стихотворения*/

    	// Вывод первого четверостишья
    	setTimeout(function(){
    		var imageChange = 'pics/five_grid.jpg';
    		$('#vignette').css("background-image", "url(" + imageChange + ")");
			$('#verse-1').slideDown(10000);	// !!! Только на ВЫВОД: slideDown(10000)
    	}, 5000);	// 21s -1s

    	// Вывод второго четверостишья
    	setTimeout(function(){
    		$('#verse-1').fadeOut(1000);
    		setTimeout("console.log('Четверостишье прошло!');", 1);
    		$('#verse-2').slideDown(10000);
    	}, 31000);	// 32s -1s
/*
    	// Вывод третьего четверостишья
    	setTimeout(function(){
    		$('#verse-2').fadeOut(1000);
    		setTimeout("console.log('Четверостишье прошло!');", 1);
    		$('#verse-3').fadeIn(1500);
    	}, 43000);	// 43s

    	// Вывод четвертого четверостишья
    	setTimeout(function(){
    		$('#verse-3').fadeOut(1000);
    		setTimeout("console.log('Четверостишье прошло!');", 1);
    		$('#verse-4').fadeIn(1500);
    	}, 53000);	// 53s

    	// Вывод пятого четверостишья
    	setTimeout(function(){
    		$('#verse-4').fadeOut(1000);
    		setTimeout("console.log('Четверостишье прошло!');", 1);
    		$('#verse-5').fadeIn(1500);
    	}, 64000);	// 64s

    	// Скрытие пятого четверостишья
    	setTimeout(function(){
			$('#verse-5').fadeOut(1500);
    	}, 74000);	// 74s
		
		*/

    	// Плавная смена задних фонов (!!! встроить в setTimeout)

    	// Финальный экран (с названием песни, ссылками, переходом на начальную страницу, текстом стихотворения и правами)
    	setTimeout(function(){
    		$('#final-scene').fadeIn(1500);
    	}, 40000);	// 476s
	});

	// Возвращение стартового экрана
	$('#to-start-scene').on('click', function(){
		$('#final-scene').fadeOut(500);
		$('#start-scene').fadeIn(500);
	});
});