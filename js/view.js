import model from "./model.js";
export default{
	//разметка popupp
	createPopup : (car) => { 
		return `<div class="popupp-wraper _container">
		<div class="popup-body" id="rental-popup">
			<div class="popup-close" id="close-popup">
				<a href="#" class="close-link"></a>
			</div>
			<div class="popup-body__title">
				<h2 class="item-title">${car.model}</h2>
			</div>
			<div class="popup-body__foto">
				<div class="popup-slider">
					<img src="${car.foto}" alt="car">
				</div>
			</div>
			<div class="popup-body__description">
			</div>
			<div class="popup-body__buttons">
				
			</div>

		</div>
	</div>`;
	},
	//разметка popupp
	createPopupOrderBy:(car) => { 
		return `<div class="popupp-wraper _container">
		<div class="popup-body order">
		<div class="popup-close" id="close-order">
			<a href="#" class="close-link"></a>
		</div>
		<div class="popup-body__title">
			<h2 class="item-title">${car.model}</h2>
		</div>
		<div class="popup-body__description">
		</div>
		<div class="popup-body__buttons">
		</div>
		<div class="popup-body__form">
			<div class="form-body">
				<form action="" class="order-form">
						<div class="order-form__item form-input">
							<input type="text" class="input-order" id="Name">
						</div>  
						<div class="order-form__item form-input">
							<input type="text" class="input-order" id="car">
						</div>  
						<div class="order-form__item form-input">
							<input type="date" class="input-order date-order" id="take">
							<input type="date" class="input-order date-order" id="back">
						</div>  
						<div class="order-form__item form-input">
							<input type="checkbox" class="input-order check-input" id="buster">
						</div>  
						<div class="order-form__item button-form">
							<button type="submit" id="submit" title="submit" class="rent-btn btn-rent-link order-btn">Order</button>
						</div>
						<div class="order-form__item form-input"></div>  
				</form>
			</div>
		</div>
		</div>
	</div>`;
	},
	/*!создаю разметку для фильтров */
	createFilters : (filtersArray, conatinerFiltersClass, carArr) => {

		const containerFilters = document.querySelector(conatinerFiltersClass);
		const ul = document.createElement('ul');
		ul.classList.add('list-fiter');
		filtersArray.forEach((el) => {
			ul.insertAdjacentHTML('afterbegin', `
			<li class="list-filter__li">
				<div class="checked__image"></div>
				<input type="checkbox" name="type" id="${el}" class="check" data-type="${el}">
					<label>${el}</label>
					<span class="metriks">(${model.quantityElements(carArr, el)})</span>
			</li>`);
		});
		containerFilters.appendChild(ul);
	},
	/*разметка для карточки */
	/* renderCard : (car) => {

		return `<div class="cars-item">
	<div class="car-item__wraper cars-conteiner">
		<div class="cars-item__title">
			<h4 class="title-car">${car.model}</h4>
			<h6 class="type-car">${car.type}</h6>
			<div class="car-reiting">
				<img src="assets/img/heart.svg" alt="heart">
				<img src="assets/img/heart.svg" alt="heart">
				<img src="assets/img/heart.svg" alt="heart">
				<img src="assets/img/heart.svg" alt="heart">
				<img src="assets/img/heart.svg" alt="heart">
				<img src="assets/img/heart.svg" alt="heart">
			</div>
		</div>
		<div class="cars-item__foto" id="${car.id}">
			<img src="${car.foto}" alt="car" class="foto">
		</div>
		<div class="cars-item__description">
			<ul class="description-car">
				<li>Fuel type:<span>${car.fuelType}</span></li>
				<li>Transmission:<span>${car.transmission}</span></li>
				<li>Size:<span>${car.capasity}</span></li>
				<li>Year:<span>${car.year}</span></li>
			</ul>
		</div>
		<div class="cars-item__to-order">
			<div class="order-price cars-item__price">
				<p class="price-order">
					${car.price}/
				</p>
				<p class="price-order _grey">day</p>
			</div>
			<div class="order-button cars-item__button">
				<div class="rent-btn">
					<a href="#" class="btn-rent-link" data-name="${car.model}">
						Rent Now
					</a>
				</div>
			</div>
		</div>
	</div>
	</div>`;
	}, */
	/*метод рисующий карточки */
	renderList : (arrElements, containerInViewport,count=6) => {
		let count1=0;
			arrElements.forEach(element => {
					count1++;
				if(count1<=count){
					containerInViewport.insertAdjacentHTML('afterbegin', /* this.renderCard(element) */ `<div class="cars-item">
					<div class="car-item__wraper cars-conteiner">
						<div class="cars-item__title">
							<h4 class="title-car">${element.model}</h4>
							<h6 class="type-car">${element.type}</h6>
							<div class="car-reiting">
								<img src="assets/img/heart.svg" alt="heart">
								<img src="assets/img/heart.svg" alt="heart">
								<img src="assets/img/heart.svg" alt="heart">
								<img src="assets/img/heart.svg" alt="heart">
								<img src="assets/img/heart.svg" alt="heart">
								<img src="assets/img/heart.svg" alt="heart">
							</div>
						</div>
						<div class="cars-item__foto" id="${element.id}">
							<img src="${element.foto}" alt="car" class="foto">
						</div>
						<div class="cars-item__description">
							<ul class="description-car">
								<li>Fuel type:<span>${element.fuelType}</span></li>
								<li>Transmission:<span>${element.transmission}</span></li>
								<li>Size:<span>${element.capasity}</span></li>
								<li>Year:<span>${element.year}</span></li>
							</ul>
						</div>
						<div class="cars-item__to-order">
							<div class="order-price cars-item__price">
								<p class="price-order">
									${element.price}/
								</p>
								<p class="price-order _grey">day</p>
							</div>
							<div class="order-button cars-item__button">
								<div class="rent-btn">
									<a href="#" class="btn-rent-link" data-name="${element.model}">
										Rent Now
									</a>
								</div>
							</div>
						</div>
					</div>
					</div>`);
				}
					
			});
	},
	/*разметка ползунка */
	renderSlider : () => {
		return `<div class="price-item">
		<div class="slidecontainer">
			<input type="range" min="1000" max="6000" value="500" class="price-slider" id="price" data-type="1000">
			<div class="slidecontainer__text">
				<h4 class="title-car price-value"></h4>
			</div>
		</div>
	</div>`;
	},
	/*Метод рисующий ползунок цен */
	renderPriceSlider : (containerSelector, inputSelector, textSelector) => {

		const container = document.querySelector(containerSelector);//контайнер для ползунка цен
		container.insertAdjacentHTML("afterbegin", /* this.renderSlider() */`<div class="price-item">
		<div class="slidecontainer">
			<input type="range" min="1000" max="6000" value="500" class="price-slider" id="price" data-type="1000">
			<div class="slidecontainer__text">
				<h4 class="title-car price-value"></h4>
			</div>
		</div>
	</div>`);//вставляю разметку для ползунка цен
		const inputPrice = container.querySelector(inputSelector);//инпут в разметке
		const textPrice = container.querySelector(textSelector);//тект на экране
		textPrice.innerHTML = inputPrice.value;//рисуем цену 	
	},
	//функция получения цены и отображения ее на экране
	priceValueS:(filterSliderClass, priceValueSelector)=> {
		//получаем элемент инпут по переданному селектору
		const filterSlider = document.querySelector(filterSliderClass);
		//получаем элемент куду будем выводить значение из инпута
		const priceValue = document.querySelector(priceValueSelector);
		let val = model.getDataValue(filterSliderClass);//получем значения из инпута
		priceValue.innerHTML = val;//записываем эти значения в тектовый элемент на экране
		model.SetDataAtribute(filterSlider, val, 'data-type');
		return val;
		},
		//создаю ul в контейнере
	createUl : (containerClass) => {
			const container = document.querySelector(containerClass);
			const ul = document.createElement('ul');
			ul.classList.add('elementsList');
			container.appendChild(ul);
		},
		//создаю описание авто из переданной машины,создаю их в ul li
	createDescription:(containerClass,car,liClass,ulClass)=> {
			const descriptionContainer = document.querySelector(containerClass);
			const ul = document.createElement('ul');
			ul.classList.add(ulClass);
			descriptionContainer.appendChild(ul);
			for (const key in car) {
					if(key!='id'&&key!='foto'){
					const li = document.createElement('li');
				li.classList.add(liClass);
				li.innerText = `${key} :  ${car[key]}`;
				ul.appendChild(li);
				}
			}
		},
	/*функция вывода элемента под инпутом*/
	showElement:(str, carsArray, ulClass, inputClass,liClass)=> {
		const elem = document.querySelector(ulClass);
		const serchInput = document.querySelector(inputClass);
		carsArray.map((car) => { 
			
			if (str.toUpperCase() == car.substring(0, 3).toUpperCase()||str.toUpperCase() == car.toUpperCase()) {
			
				elem.insertAdjacentHTML('afterbegin', `<li class="ul-item"><a href="#" class="title-car">${car}</a></li>`);
				
			} 
			if (str.toUpperCase() == car.toUpperCase()) { 
				elem.innerHTML='';
				serchInput.value = car;
				elem.insertAdjacentHTML('afterbegin', `<li class="ul-item"><a href="#" class="title-car">${car}</a></li>`);
			}
		});
		const ulItem = elem.querySelectorAll(liClass);
		ulItem.forEach((element) => { 
			element.addEventListener('click', () => {
				serchInput.value =element.firstChild.innerText ; 
				elem.style.display = "none";
				this.renderFrash('.searching-input', '.cars__fotos',carsArray);
				
		
			});
		});
	},
	//функция показа всего массива машин по ключу
	showArray:(carsArray, ulClass)=> { 
		const elem = document.querySelector(ulClass);
		carsArray.forEach((car) => { 
			elem.insertAdjacentHTML('afterbegin', `<li class="ul-item"><a href="#" class="title-car">${car}</a></li>`);
		});
	},

	/*создание кнопки -ссылки */
	createLinkButtonInContainer : (classButton, containerClass, textInButton, hrefText = "#") => {
		const container = document.querySelector(containerClass);
		return container.insertAdjacentHTML("afterbegin",
		`<a href="${hrefText}" class="${classButton}" >${textInButton}</a>`);

	}

	
};

