$(document).ready(function() {
	var mustang = function(son) {
		var slide = $(son),
			total = slide.length,
			translate = 0,
			time = 3000,
			counter = 0;

		function move() {
			translate += 100;
			counter++;

			if (counter < total) {
				var final = "translateX(-" + translate + "%)";
			} else {
				var final = "translateX(0%)";
				counter = 0;
				translate = 0;
			}

			slide.css("transform", final);
		}
		
		if (total > 0) {
			var interval = setInterval(move, time);
		}
	}

	mustang(".banner");

	$(".icon-menu").click(function() {
		$(".nav ul").toggle('fast');
		$(".nav span").toggle('fast');
	});
});

var icon = document.querySelector('#menu-icon'),
	first_icon = document.querySelector('.first-icon'),
	second_icon = document.querySelector('.second-icon'),
	third_icon = document.querySelector('.third-icon');

var items = document.querySelector('.menu-items'),
	first_item = document.querySelector('.first-item'),
	second_item = document.querySelector('.second-item'),
	third_item = document.querySelector('.third-item');

var socials = document.querySelector('.menu-social'),
	first_social = document.querySelector('.first-social'),
	second_social = document.querySelector('.second-social'),
	third_social = document.querySelector('.third-social');

var width = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

if (width > 1024) {
	function itemsDisplay() {
		
		setTimeout(function(){
			items.style.display = 'block';
		}, 100);

		setTimeout(function(){
			items.style.left = '20px';
			second_item.style.transform = 'translateX(0)';
			third_item.style.transform = 'translateX(0)';
		}, 300);
	}

	function socialDisplay() {		
		setTimeout(function(){
			socials.style.display = 'block';
		}, 100);

		setTimeout(function(){
			socials.style.top = '50px';
			second_social.style.transform = 'translateY(0)';
			third_social.style.transform = 'translateY(0)';
		}, 300);
	}

	function undoItems() {
		setTimeout(function(){
			third_item.style.transform = 'translateX(-97px)';
			second_item.style.transform = 'translateX(-47px)';
		}, 100);
		
		setTimeout(function(){
			items.style.left = '-20px';
			items.style.display = 'none';
		}, 300);
	}

	function undoSocial() {
		setTimeout(function(){
			second_social.style.transform = 'translateY(-24px)';
			third_social.style.transform = 'translateY(-50px)';
		}, 100);

		setTimeout(function(){
			socials.style.top = '10px';
			socials.style.display = 'none';
		}, 300);
	}

	icon.onclick = function () {
		if (this.classList.contains('active')) {
			undoItems();
			undoSocial();
			this.style.transform = 'rotate(90deg)';

			setTimeout(function(){
				second_icon.classList.remove('a');
				first_icon.classList.remove('b');
				third_icon.classList.remove('b');
			}, 100);

			this.classList.remove('active');
		} else {
			this.style.transform = 'rotate(180deg)';

			setTimeout(function(){
				second_icon.classList.add('a');
				first_icon.classList.add('b');
				third_icon.classList.add('b');
			}, 100);

			itemsDisplay();
			socialDisplay();		

			this.classList.add('active');
		}

	}
}