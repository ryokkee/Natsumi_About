const targetElement = document.querySelectorAll('.animationTarget');
document.addEventListener('scroll', function () {
	for (let i = 0; i < targetElement.length; i++) {
		const getElementDistance =
			targetElement[i].getBoundingClientRect().top +
			targetElement[i].clientHeight * 0.8; //６割くらい見えたらshow 0.6
		//二つ目が見えたらshowというクラスを足す
		if (window.innerHeight > getElementDistance) {
			targetElement[i].classList.add('show');
		}
		if (window.innerHeight < getElementDistance) {
			targetElement[i].classList.remove('show');
			$('.js-modal').fadeOut();
			$('.mask').fadeOut();
		}
	}
});

$(function () {
	$('.modalOpen').each(function () {
		$(this).on('click', function () {
			var target = $(this).data('target');
			var modal = document.getElementById(target);
			$(modal).fadeIn();
			$('.mask').fadeIn();
			//document.getElementById('mask').classList.add('active');
			return false;
		});
	});
	$('.modalClose').on('click', function () {
		$('.js-modal').fadeOut();
		$('.mask').fadeOut();
		//document.getElementById('modal').classList.remove('active');
		//document.getElementById('mask').classList.remove('active');
		return false;
	});
	document.getElementById('mask').addEventListener('click', function () {
		$('.js-modal').fadeOut();
		$('.mask').fadeOut();
		//document.getElementById('mask').classList.remove('active');
		return false;
	});
});
