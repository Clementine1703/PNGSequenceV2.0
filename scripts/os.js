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
			
			$(el).css('order', queue_number + 1);
			
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





	// перетаскивание
	 $('.desktop > div').each(function(){
		$(this).draggable({
			containment: "parent", 
			revert: true,
			revertDuration: 200,
			stack: ".desktop",
			start: function(){
				$(this).css({'cursor': 'grabbing',
					'cursor': '-moz-grabbing',
					'cursor': '-webkit-grabbing',});
			},
			stop: function(){
				$(this).css('cursor', 'default');
			}
	
	
		 });

		 $(this).droppable({
			drop: function(event){
				let o = $(event.target).css('order');
				$(event.target).css('order', $(event.originalEvent.target).css('order'));

				console.log(event.originalEvent.target);
				console.log(event.target);


				$(event.target).animate({
					order: $(event.originalEvent.target).css('order'),
				 }, 10, function(){
					$(event.target).css({'z-index' : '', 'left' : '', 'top' : ''});
				 });

				

				$(event.originalEvent.target).animate({
					order: o,
				 }, 10, function(){
					$(event.originalEvent.target).css({'z-index' : '', 'left' : '', 'top' : ''});
				 });
				 
				// $(event.target).css({'z-index' : '', 'left' : '', 'top' : ''});
				// $(event.originalEvent.target).css({'z-index' : '', 'left' : '', 'top' : ''});
				
			}
		 })
	 })

