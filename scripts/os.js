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
			width_calc();
		}
	})





	$('.desktop .close-button').each(function(){
		$(this).on('mousedown', function(){

			// взяли у родителя кнопки закрытия содержимое data-couple
			let parent = $(this).parent();
			parent.removeClass('active');
			parent.css('order', '0')
			let id = parent.attr('data-couple');

			$(`.preview > div[data-couple='${id}']`).removeClass('active');

			width_calc();

		})
	})





	function width_calc(){
		let queue_number = $('.desktop > div').filter(function(){
			return $(this).hasClass('active');
		}).length;

		if (queue_number == 1){
			$('.desktop > div').each(function(){
				$(this).css('width', '100%');
			})
			return 0;
		}

		$('.desktop > div').each(function(){
			$(this).css('width', '50%');
		})
	}


	$( ".el-2" ).draggable({
		containment: "parent", 
		revertDuration: 200,
		stack: ".desktop",
	 });
		

	