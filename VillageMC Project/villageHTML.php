<!DOCTYPE html>
<html>
	<head>
		<title>VillageMC Магазин</title>
		<meta charset="utf-8">
		<link rel="icon" type="image" href="image/title.png">
		<link rel="stylesheet" type="text/css" href="villageCSS.css">
	</head>
	<body class='bodyShop'>
		<!-- Шапка сайта -->
		<header class="headerShop">
			<div class='gradient-headerShop'>
				<div align="center"
					 class="alignFon"
					 style='padding: 3% 0 3% 0'>
				 	<a href='villageHTML.html'>
						<img class='headerImage'
							 src="image/title.png" 
							 width="153px" 
							 height="153px">
				 	</a>	
				</div>
				<p class="text-serverOnline"
					style="margin: 0 auto;">PLAY.VILLAGEMC.NET ОНЛАЙН:</p>
				<!-- Раздел с донатом -->
				<div class='donate'>
					<table align="center">
						<td class="donateSite status">Статусы</td>
						<td class="donateSite valute">Валюты</td>
						<td class="donateSite key">Ключи</td>
						<td class="donateSite vk"><a href="https://vk.com/villagemc" class="site_vk">ВКонтакте</a></td>
					</table>
				</div>	
			</div>
		</header>
		<section>
			<!-- Статусы -->
			<div class="privilege">
				<h2 style="margin: 35px;
						   font-family: 'Minecraft Title Cyrillic';
						   text-align: center;
						   text-shadow: 1px 1px 5px #A5A5A5;
					 	   color: sienna;
					 	   font-size: 36px;">Статусы</h2>
				<div style="text-align: center;">
					<!-- WHEAT -->
					<div class='all_status'>
						<div class="name_status" style="color: orange">WHEAT</div>
						<div class="img_status" style="background-image: url(image/wheat.png);"></div>
						<div class="align_status">
							<div class="buy_status">Купить</div>
							<div class="rub_status">69 ₽</div>
						</div>
					</div>
					<!-- GOLD -->
					<div class='all_status'>
						<div class="name_status" style="color: yellow">GOLD</div>
						<div class="img_status" style="background-image: url(image/gold.png);"></div>
						<div class="align_status">
							<div class="buy_status">Купить</div>
							<div class="rub_status">169 ₽</div>
						</div>
					</div>
					<!-- DIAMOND -->
					<div class='all_status'>
						<div class="name_status" style="color: aqua">DIAMOND</div>
						<div class="img_status" style="background-image: url(image/diamond.png);"></div>
						<div class="align_status">
							<div class="buy_status">Купить</div>
							<div class="rub_status">299 ₽</div>
						</div>
					</div>
					<!-- EMERALD -->
					<div class='all_status'>
						<div class="name_status" style="color: lime">EMERALD</div>
						<div class="img_status" style="background-image: url(image/emerald.png);"></div>
						<div class="align_status">
							<div class="buy_status">Купить</div>
							<div class="rub_status">399 ₽</div>
						</div>
					</div>
					<!-- SPONGE -->
					<div class='all_status'>
						<div class="name_status sponge" style="color: gray">SPONGE</div>
						<div class="img_status" style="background-image: url(image/sponge.png);"></div>
						<div class="align_status">
							<div class="buy_status">Купить</div>
							<div class="rub_status">859 ₽</div>
						</div>
					</div>
					<!-- VILLAGER -->
					<div class='all_status'>
						<div class="name_status sponge" style="color: #ff2d15">VILLAGER</div>
						<div class="img_status" style="background-image: url(image/villager.png);"></div>
						<div class="align_status">
							<div class="buy_status">Купить</div>
							<div class="rub_status">1399 ₽</div>
						</div>
					</div>
					<!-- DEFENDER -->
					<div class='all_status'>
						<div class="name_status sponge" style="color: springgreen">DEFENDER</div>
						<div class="img_status" style="background-image: url(image/defender.png);"></div>
						<div class="align_status">
							<div class="buy_status">Купить</div>
							<div class="rub_status">2999 ₽</div>
						</div>
					</div>
				</div>
			</div>
			<?php include "tenven.html"; ?>
		</section>
		<script type="text/javascript" src="villageJS.js"></script>
	</body>
</html>