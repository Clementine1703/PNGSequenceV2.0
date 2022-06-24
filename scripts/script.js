
				window.onbeforeunload = function () { window.scrollTo(0, 0); }

				const imageURL = 'bg_images/babina30fps_jpeg_v3<number_of_image>.jpg';
				// let context_scalled = false;
				let preloadImagesCounter = 1;
				let context_visible = true;
				let contentBlock = document.querySelector('.site-content');
				let canvas_conteiner = document.querySelector('.background');
				let video_block1 = document.querySelector('.block1-video');
				let content_container = document.querySelector('.container');
				let imagesList = [];
				let introImage = document.querySelector('.image-intro');
				const imagesStartsWith = 70;
				const imagesEndWith = 179;
				const countOfImages = imagesEndWith - imagesStartsWith;
				let slides_active = false;
				let change_slide_range = 0.25 * window.innerHeight;
				let block_nav_list = document.querySelector('.blocks-navigate-menu');

				
					









				let sliderToggler = {
						exScrollValue: 0,
						content_blocks: document.querySelectorAll('.block'),
						reset: function(){
							$(this.content_blocks).each(function(){
								this.active = false;
							})
						},


						nextSlide: function(active_slide){
							sliderToggler.animating = true;
							$('html, body').animate( {scrollTop: $(active_slide.nextElementSibling).offset().top},500,function(){
								sliderToggler.animating = false;  
								sliderToggler.reset();
								active_slide.nextElementSibling.active = true;
								sliderToggler.find_div_for_focus(active_slide.nextElementSibling);
							});

							return 0;
						},


						prevSlide: function(active_slide){
							sliderToggler.animating = true;
							$('html, body').animate( {scrollTop: $(active_slide.previousElementSibling).offset().top},500,function(){
								sliderToggler.animating = false; 
								sliderToggler.reset();
								active_slide.previousElementSibling.active = true;
								sliderToggler.find_div_for_focus(active_slide.previousElementSibling);
							});

							return 0;
						},


						check: function(){
								if (contentBlock.getBoundingClientRect().top <= 1000){
									if (slides_active == false){
										sliderToggler.animating = true;
										$('html, body').animate( {scrollTop: $(sliderToggler.content_blocks[0]).offset().top},500,function(){
											sliderToggler.animating = false; 
											sliderToggler.reset();
											sliderToggler.content_blocks[0].active = true;
											slides_active = true;
										});
										return 0;
									}

									else {
											$(sliderToggler.content_blocks).each(function(){
												if (this.active == true){
													if ((this.nextElementSibling) && (this.getBoundingClientRect().top <= -change_slide_range)){
														sliderToggler.nextSlide(this);
													} else {
														if ((this.previousElementSibling) && (this.getBoundingClientRect().top >= change_slide_range)){
														sliderToggler.prevSlide(this);
														}
													}
												}
											})
										
									}
									
								}

								else {
									sliderToggler.reset();
									slides_active = false;
									return 0;
								}
							
						},

						find_div_for_focus: function(active_slide){
							try{
								simulatedClick(active_slide.querySelector('.div-for-focus')); 
							} catch (e) {
								null;
							}
						},

						animating: false,
				}

				sliderToggler.check();
				
























		document.addEventListener('DOMContentLoaded', ()=>{

			scroll_to_top();


			function scroll_to_top(){
				$(function() {
					$('html, body').animate({
					  scrollTop: 0
					}, 0);
				 });
				 window.scrollTo(0, 0);
			}

			function enable_scroll(){
				content_container.classList.remove('disable-scroll');
				introImage.style.opacity = 0;
			}



			function add_0s_to_start(value){
				value_str = String(value);
				for (let i = 0; i < (String(imagesEndWith).length - String(value).length); i++){
					value_str = '0' + value_str;
				}
				return value_str;
			}

			// ф-я, которая удаляет preloader
			function deletePreloader(){
				var preloader = document.querySelector(".preloader");
				preloader.parentNode.removeChild(preloader);
			}


			// ф-я предзагрузки всех изображений фона (удаляет preloader после того как все изображения загружены) и запускает основную анимацию
			function preload(arrayOfImages) {
    			$(arrayOfImages).each(function(){
				let photo = new Image();
        		photo.src = this;
				photo.onload = ()=>{
					if (preloadImagesCounter < countOfImages){
						imagesList.push(photo); //для того чтобы фото оставались в памяти
						preloadImagesCounter++;
						preloader_app?preloader_app.downloadedImages = preloadImagesCounter:null;
					}
					else {
							deletePreloader();
							enable_scroll();
							main();
							return 0;
					}
					
				}
    			});
			}

			// формирует список с url изображений для их дальнейшей предзагрузки. Работает
			// с константой imageSRC и подставляет вместо заглушки число от 0 до количества изображений
			function createPreloaderList() {
				let preload_list = [];
    			for (let i = imagesStartsWith; i < imagesEndWith; i++){
					let replace_value = i;
					replace_value = add_0s_to_start(replace_value);
					let preload_src = imageURL.replace('<number_of_image>', replace_value);
					preload_list.push(preload_src);
				}
				return preload_list;
				
			}


			preload(createPreloaderList());


			function main(){

			// ф-я создающая объект для работы с анимацией
			function sprite (options) {
				var that = {};
				that.context = options.context;
				that.width = options.width;
				that.height = options.height;
				that.image = options.image;
				
				// ф-я отрисовывает новое фото фона
				that.render = function () {

				that.context.clearRect(0, 0, canvas.width, canvas.height);

				// Draw the animation
				let scaleW = that.width/window.innerWidth;
				let scaleY = that.height/window.innerHeight;
				that.context.drawImage(
					that.image,
					0,
					0,
					that.width,
					that.height,
					0,
					0,
					that.width/scaleW,
					that.height/scaleY);
				};
				
				return that;
			}

			function check_changes(){
				if (exScrollValue != Math.floor(window.scrollY)){
					changeImage();
					exScrollValue = Math.floor(window.scrollY);
				}

				if (contentBlock.getBoundingClientRect().top <= 0){
					canvas_conteiner.classList.add('hidden');
				}
				else {
					canvas_conteiner.classList.remove('hidden');
				}
			}

			// ф-я, которая меняет задний фон в зависимости от прокрутки страницы
			function changeImage(){
				if (window.scrollY <= content_container.scrollHeight - window.innerHeight){
				let numberOfImage = String(imagesStartsWith + Math.floor(window.scrollY/((content_container.scrollHeight - window.innerHeight)/countOfImages)));
				numberOfImage = add_0s_to_start(numberOfImage)
				bg.image.src = imageURL.replace('<number_of_image>', numberOfImage);
				bg.image.onload = ()=>{
				bg.render();
				}
				}
			}



			var bgImage = new Image();
			bgImage.src = imageURL.replace('<number_of_image>', add_0s_to_start(imagesStartsWith));
			

			var canvas = document.getElementById("bgAnimation");
			canvas.width = innerWidth;
			canvas.height = innerHeight;

			var bg = sprite({
    		context: canvas.getContext("2d"),
    		width: 1920,
    		height: 1080,
    		image: bgImage
			});


			bg.image.onload = ()=>{
				bg.render();
				check_changes()
			}


			let exScrollValue = 0;
			window.addEventListener('scroll', ()=>{
				check_changes();
				if(sliderToggler.animating == false){
					sliderToggler.check();
				}		
			})

			window.addEventListener('resize', ()=>{
				changeImage();
				canvas.width = innerWidth;
				canvas.height = innerHeight;
			})

			block_nav_list.addEventListener('click', (event)=>{
				let target_class = event.target.getAttribute('data-block');
				target = document.querySelector(`.${target_class}`);

				sliderToggler.animating = true;
				$('html, body').animate( {scrollTop: $(target).offset().top},1000,function(){
					sliderToggler.animating = false; 
					sliderToggler.reset();
					target.active = true;
					slides_active = true;
					console.log(target);
					console.log(slides_active);
					console.log($('.block'));
				});
			})




		}

		})




		const preloader_app = new Vue({
		  				el: '#preloader',
		  				data: {
			 				downloadedImages: preloadImagesCounter,
			 				allImages: countOfImages,
		  				},
				})
