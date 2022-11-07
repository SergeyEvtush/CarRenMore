/*Метод рисующий ползунок цен */
const renderPriceSlider = () => { 

	const renderSlider = () => { 
		return `<div class="price-item">
		<div class="slidecontainer">
			<input type="range" min="1000" max="6000" value="500" class="price-slider" id="price">
			<div class="slidecontainer__text">
				<h4 class="title-car price-value"></h4>
			</div>
		</div>
	</div>`
	};

	const priceSliderContainer = document.querySelector('.price');
	priceSliderContainer.insertAdjacentHTML("afterbegin", renderSlider());
	const filterSlider = document.querySelector('#price');
	const priceValue = document.querySelector('.price-value');

	function priceValueS() { 
		priceValue.innerHTML = filterSlider.value;
		return filterSlider.value
	}

		priceValue.innerHTML = filterSlider.value;
		filterSlider.addEventListener('input', priceValueS);
};