function active(el, visible = true){
	if (typeof(el) == 'object'){
		$(el).each(function(){
			if (visible == false){
				$(this).removeClass('active');
			}
			$(this).addClass('active');
		})
	}
	else{
		if (visible == false){
			$(this).removeClass('active');
		}
		$(this).addClass('active');
	}
	}

	// function change_elements_size(){
	// 	$('.desktop div')
	// }

	$('.preview').on('click', function(event){
		if ($(event.target).attr('data-couple')){
			active(event.target);

			let queue_number = $('.desktop > div').filter(function(){
				return $(this).hasClass('active');
			}).length + 1;

			// получаем элемент по дата аттрибуту
			let el = $(`.${$(event.target).attr('data-couple')}`);
			
			$(el).css('order', queue_number);
			
			active(el);
		}
	})


	$('.desktop .close-button').each(function(){
		$(this).on('click', function(){

			// взяли у родителя кнопки закрытия содержимое data-couple
			let parent = $(this).parent();
			parent.removeClass('active');
			parent.css('order', '0')
			let id = parent.attr('data-couple');

			$(`.preview > div[data-couple='${id}']`).removeClass('active');

		})
	})