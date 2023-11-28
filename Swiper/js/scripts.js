new Swiper('.image-slider', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	pagination: {
		// el: '.swiper-pagination',
		// clickable: true,

		// динамічні булети
		// dynamicBullets: true,

		//кастомні булети (номер слайда)
		// renderBullet: function (index, className) {
		// 	return '<span class="' + className + '">' + (index + 1) + '</span>';
		// }

		// Фракція 1 / 9
		// type: 'fraction',

		// кастомний вивід фракції
		// renderFraction: function (currentClass, totalClass) {
		// 	return 'Фото <span class="' + currentClass + '"></span>' + ' з ' + '<span class="' + totalClass + '"></span>';
		// }

		// Прогрессбар
		// type: 'progressbar'



	},

	//управління за допомогою клавіатури 
	keyboard: {
		enabled: true,
		onlyInViewport: true,
		pageUpDown: true
	},

	// //скролл 
	scrollbar: {
		el: '.swiper-scrollbar',
		//можливість перетягувати скрол
		draggable: true
	},

	//управління колесом миші 
	mousewheel: {
		sensitivity: 1,

		// коли декілька слайдерів то краще залишати по дефолту
		// eventsTraget: ".image-slider"
	},

	//автовисота
	// autoHeight: true

	slidesPerView: 2

});