<?php
function check_mobile_device()
{
	$mobile_agent_array = array('ipad', 'iphone', 'android', 'pocket', 'palm', 'windows ce', 'windowsce', 'cellphone', 'opera mobi', 'ipod', 'small', 'sharp', 'sonyericsson', 'symbian', 'opera mini', 'nokia', 'htc_', 'samsung', 'motorola', 'smartphone', 'blackberry', 'playstation portable', 'tablet browser');
	$agent = strtolower($_SERVER['HTTP_USER_AGENT']);
	foreach ($mobile_agent_array as $value) {
		if (strpos($agent, $value) !== false) return true;
	}
	return false;
}

// пример использования
$is_mobile_device = check_mobile_device();
if ($is_mobile_device) { ?>
	<!DOCTYPE html>
	<html lang="en">

	<head>
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="stylesheet" href="style/style.css">
		<title>Main</title>
		<style>

		</style>
	</head>

	<body>
		<div class="preloader" id="preloader">
			<div>
				<p style="font-size: 30px;">Загрузка...</p>
			</div><br>
			<div>{{ downloadedImages }}/{{ allImages }}</div>
		</div>


		<div class="background" id="background">
			<img class="image-intro" src="bg_images/Comp_babina_00000.jpg" alt="error">
			<canvas id="bgAnimation"></canvas>
		</div>

		<div class="container disable-scroll" id="container">
			<div class="animation-back">
				<ul class="blocks-navigate-menu">
					<li data-block="block1">первый</li>
					<li data-block="block2">второй</li>
					<li data-block="block3">третий</li>
					<li data-block="block4">четвертый</li>
					<li data-block="block5">пятый</li>
				</ul>
			</div>
			<div class="site-content">
				<div class="block block1 " id="block1">
					<video class="video-block1" autoplay loop muted preload>
						<source src="slides/slide_1.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>
					</video>
				</div>
				<div class="block block2">
					<div class="block2__machine-content" id="block2">
						<h1 style="color: red;">--Машина-контент--</h1>
					</div>
					<div class="block2__description div-for-focus">
						<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium ea corporis quasi quam dignissimos corrupti. Natus assumenda voluptate voluptatum omnis rerum placeat, cum dolor animi asperiores eum totam ratione a rem adipisci magnam, fugit accusamus nulla. Vel fuga voluptatem veritatis fugiat ipsa voluptatibus, saepe molestias odit provident consequuntur obcaecati. Corrupti repellat unde asperiores explicabo aspernatur itaque fugiat et mollitia consequatur laborum delectus non architecto, enim similique minima. Ad consectetur cupiditate eius odit tempore aspernatur aut provident. Numquam iure culpa ullam, unde, consectetur voluptatem delectus vitae natus asperiores velit accusantium libero totam veritatis magnam maxime? Saepe repudiandae inventore necessitatibus laudantium enim.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium ea corporis quasi quam dignissimos corrupti. Natus assumenda voluptate voluptatum omnis rerum placeat, cum dolor animi asperiores eum totam ratione a rem adipisci magnam, fugit accusamus nulla. Vel fuga voluptatem veritatis fugiat ipsa voluptatibus, saepe molestias odit provident consequuntur obcaecati. Corrupti repellat unde asperiores explicabo aspernatur itaque fugiat et mollitia consequatur laborum delectus non architecto, enim similique minima. Ad consectetur cupiditate eius odit tempore aspernatur aut provident. Numquam iure culpa ullam, unde, consectetur voluptatem delectus vitae natus asperiores velit accusantium libero totam veritatis magnam maxime? Saepe repudiandae inventore necessitatibus laudantium enim.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium ea corporis quasi quam dignissimos corrupti. Natus assumenda voluptate voluptatum omnis rerum placeat, cum dolor animi asperiores eum totam ratione a rem adipisci magnam, fugit accusamus nulla. Vel fuga voluptatem veritatis fugiat ipsa voluptatibus, saepe molestias odit provident consequuntur obcaecati. Corrupti repellat unde asperiores explicabo aspernatur itaque fugiat et mollitia consequatur laborum delectus non architecto, enim similique minima. Ad consectetur cupiditate eius odit tempore aspernatur aut provident. Numquam iure culpa ullam, unde, consectetur voluptatem delectus vitae natus asperiores velit accusantium libero totam veritatis magnam maxime? Saepe repudiandae inventore necessitatibus laudantium enim.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium ea corporis quasi quam dignissimos corrupti. Natus assumenda voluptate voluptatum omnis rerum placeat, cum dolor animi asperiores eum totam ratione a rem adipisci magnam, fugit accusamus nulla. Vel fuga voluptatem veritatis fugiat ipsa voluptatibus, saepe molestias odit provident consequuntur obcaecati. Corrupti repellat unde asperiores explicabo aspernatur itaque fugiat et mollitia consequatur laborum delectus non architecto, enim similique minima. Ad consectetur cupiditate eius odit tempore aspernatur aut provident. Numquam iure culpa ullam, unde, consectetur voluptatem delectus vitae natus asperiores velit accusantium libero totam veritatis magnam maxime? Saepe repudiandae inventore necessitatibus laudantium enim.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium ea corporis quasi quam dignissimos corrupti. Natus assumenda voluptate voluptatum omnis rerum placeat, cum dolor animi asperiores eum totam ratione a rem adipisci magnam, fugit accusamus nulla. Vel fuga voluptatem veritatis fugiat ipsa voluptatibus, saepe molestias odit provident consequuntur obcaecati. Corrupti repellat unde asperiores explicabo aspernatur itaque fugiat et mollitia consequatur laborum delectus non architecto, enim similique minima. Ad consectetur cupiditate eius odit tempore aspernatur aut provident. Numquam iure culpa ullam, unde, consectetur voluptatem delectus vitae natus asperiores velit accusantium libero totam veritatis magnam maxime? Saepe repudiandae inventore necessitatibus laudantium enim.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium ea corporis quasi quam dignissimos corrupti. Natus assumenda voluptate voluptatum omnis rerum placeat, cum dolor animi asperiores eum totam ratione a rem adipisci magnam, fugit accusamus nulla. Vel fuga voluptatem veritatis fugiat ipsa voluptatibus, saepe molestias odit provident consequuntur obcaecati. Corrupti repellat unde asperiores explicabo aspernatur itaque fugiat et mollitia consequatur laborum delectus non architecto, enim similique minima. Ad consectetur cupiditate eius odit tempore aspernatur aut provident. Numquam iure culpa ullam, unde, consectetur voluptatem delectus vitae natus asperiores velit accusantium libero totam veritatis magnam maxime? Saepe repudiandae inventore necessitatibus laudantium enim.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium ea corporis quasi quam dignissimos corrupti. Natus assumenda voluptate voluptatum omnis rerum placeat, cum dolor animi asperiores eum totam ratione a rem adipisci magnam, fugit accusamus nulla. Vel fuga voluptatem veritatis fugiat ipsa voluptatibus, saepe molestias odit provident consequuntur obcaecati. Corrupti repellat unde asperiores explicabo aspernatur itaque fugiat et mollitia consequatur laborum delectus non architecto, enim similique minima. Ad consectetur cupiditate eius odit tempore aspernatur aut provident. Numquam iure culpa ullam, unde, consectetur voluptatem delectus vitae natus asperiores velit accusantium libero totam veritatis magnam maxime? Saepe repudiandae inventore necessitatibus laudantium enim.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium ea corporis quasi quam dignissimos corrupti. Natus assumenda voluptate voluptatum omnis rerum placeat, cum dolor animi asperiores eum totam ratione a rem adipisci magnam, fugit accusamus nulla. Vel fuga voluptatem veritatis fugiat ipsa voluptatibus, saepe molestias odit provident consequuntur obcaecati. Corrupti repellat unde asperiores explicabo aspernatur itaque fugiat et mollitia consequatur laborum delectus non architecto, enim similique minima. Ad consectetur cupiditate eius odit tempore aspernatur aut provident. Numquam iure culpa ullam, unde, consectetur voluptatem delectus vitae natus asperiores velit accusantium libero totam veritatis magnam maxime? Saepe repudiandae inventore necessitatibus laudantium enim.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium ea corporis quasi quam dignissimos corrupti. Natus assumenda voluptate voluptatum omnis rerum placeat, cum dolor animi asperiores eum totam ratione a rem adipisci magnam, fugit accusamus nulla. Vel fuga voluptatem veritatis fugiat ipsa voluptatibus, saepe molestias odit provident consequuntur obcaecati. Corrupti repellat unde asperiores explicabo aspernatur itaque fugiat et mollitia consequatur laborum delectus non architecto, enim similique minima. Ad consectetur cupiditate eius odit tempore aspernatur aut provident. Numquam iure culpa ullam, unde, consectetur voluptatem delectus vitae natus asperiores velit accusantium libero totam veritatis magnam maxime? Saepe repudiandae inventore necessitatibus laudantium enim.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium ea corporis quasi quam dignissimos corrupti. Natus assumenda voluptate voluptatum omnis rerum placeat, cum dolor animi asperiores eum totam ratione a rem adipisci magnam, fugit accusamus nulla. Vel fuga voluptatem veritatis fugiat ipsa voluptatibus, saepe molestias odit provident consequuntur obcaecati. Corrupti repellat unde asperiores explicabo aspernatur itaque fugiat et mollitia consequatur laborum delectus non architecto, enim similique minima. Ad consectetur cupiditate eius odit tempore aspernatur aut provident. Numquam iure culpa ullam, unde, consectetur voluptatem delectus vitae natus asperiores velit accusantium libero totam veritatis magnam maxime? Saepe repudiandae inventore necessitatibus laudantium enim.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium ea corporis quasi quam dignissimos corrupti. Natus assumenda voluptate voluptatum omnis rerum placeat, cum dolor animi asperiores eum totam ratione a rem adipisci magnam, fugit accusamus nulla. Vel fuga voluptatem veritatis fugiat ipsa voluptatibus, saepe molestias odit provident consequuntur obcaecati. Corrupti repellat unde asperiores explicabo aspernatur itaque fugiat et mollitia consequatur laborum delectus non architecto, enim similique minima. Ad consectetur cupiditate eius odit tempore aspernatur aut provident. Numquam iure culpa ullam, unde, consectetur voluptatem delectus vitae natus asperiores velit accusantium libero totam veritatis magnam maxime? Saepe repudiandae inventore necessitatibus laudantium enim.</p>
					</div>
				</div>
				<div class="block block3 drag" id="block3">
					<div class="block3__content div-for-focus x-mandatory-scroll-snapping">
						<div class="el"> </div>
						<div class="el"> </div>
						<div class="el"> </div>
					</div>
				</div>
				<div class="block block4 drag" id="block4">
					<div class="block4__content">
					</div>
				</div>
				<div class="block block5" id="block5"></div>
				<div class="block block6">
					<div class="scheme">
						<img src="slides/image_2022-07-24_12-43-07.png" alt="scheme" width="100%">
					</div>
				</div>
			</div>
		</div>

		<script type="text/javascript" src="scripts/jquery.min.js"></script>
		<script type="text/javascript" src="scripts/vue.min.js"></script>
		<script type="text/javascript" src="scripts/drag.js"></script>
		<script type="text/javascript" src="scripts/script.js"></script>
		<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.9.7/jquery.fullpage.min.css" />
		<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.9.7/vendors/jquery.easings.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.9.7/jquery.fullpage.extensions.min.js"></script>
	</body>

	</html>
<?php } else {
	echo "Вы зашли с PC";
}
