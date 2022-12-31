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
	//метод перерисовки странички с фото для инпута поиска
	renderFrash:(inputSelector,container,carsArray)=> { 
		const inp = document.querySelector(inputSelector);//
		if (inp.value) {
			container.innerHTML = "";
			/* this.renderList(model.renderfilterList(carsArray, this.inp.value), container); *///!
		}
	},


	/*создание кнопки -ссылки */
	createLinkButtonInContainer : (classButton, containerClass, textInButton, hrefText = "#") => {
		const container = document.querySelector(containerClass);
		return container.insertAdjacentHTML("afterbegin",
		`<a href="${hrefText}" class="${classButton}" >${textInButton}</a>`);

	},
	/*функция рисующая страничку */
	/* renderPage : (cars,orderListClass) => {

		//const burger = document.querySelector('.menu-burger');
		const orderList = document.querySelector(orderListClass);

		//создание кнопок для сброса фильтров и для фильтрации по цене
		this.createLinkButtonInContainer(`rent-btn price-filter btn-rent-link`, '.button-filter-container', 'Price Filter');
		this.createLinkButtonInContainer(`rent-btn clear-filters btn-rent-link`, '.button-container', 'Clear-filter');

		//кнопка для показа еще машин show more
		this.createLinkButtonInContainer(`btn-show`,`.show-more-btn__link`,'Show-more-car');

		//отрисовка ползунка цен
		this.renderPriceSlider('.price', '#price', '.price-value');

		//отрисовка карточек авто
		this.renderList(cars, orderList);
		const showMoreCars=document.querySelector('.show-more-btn__link').addEventListener('click',(e)=>{
			e.preventDefault();
			
			let count=orderList.children.length;
			if(orderList.children.length>=cars.length){
				orderList.innerHTML="";
				this.renderList(cars, orderList,cars.length);
			}else if(orderList.children.length<=cars.length){
				orderList.innerHTML="";
				this.renderList(cars, orderList,count+count);
			}
			

		});
		
		//создаю ul в контейнере в котором выпадают подсказки при наборе 
		this.createUl( '.searching-form__input');
		const priceFilterButton = document.querySelector('.price-filter');
		//событие клика кнопке фильтрации по цене
		priceFilterButton.addEventListener('click', (e) => {
			model.clearAllClasses(checkboxFilter);
			model.clearAllClasses(checkedImage);
			orderList.innerHTML = "";
			this.renderList(this.renderfilterList(cars,'','',getDataValue('#price')), orderList); 
			
		});

		//создаю чекбоксы для фильтов по различным данным авто
		this.createFilters(getKey(cars, 'type'), '.filter1', cars);
		this.createFilters(getKey(cars, 'capasity'), '.filter2', cars);

		const checkboxFilter = document.querySelectorAll('.check');
		const checkedImage = document.querySelectorAll('.checked__image');

		//вывод отфильтрованных фильтров по цене
		this.setFiltr(checkboxFilter, cars, orderList, '#price', '.price-value','.checked__image','active');

		//клик по бургеру
		const burger=document.querySelector('.menu-burger').addEventListener('click', () => {
			document.querySelector('.menu-burger').classList.toggle('active');
			document.querySelector('.menu-wraper').classList.toggle('active');
			document.querySelector('.menu-wraper__body').classList.toggle('active');
			document.querySelector('body').classList.toggle('lock');
		});

		//клик по кнопке поиск
		const serchClick = document.querySelector('#serch-btn').addEventListener('click', () => {
			this.renderFrash('.searching-input', '.cars__fotos',cars);
			model.clearLi('.searching-input', '.elementsList');
		});
		
		//функция клика по кнопке очистки инпута
		const clearBtn = document.querySelector('.clear-filter-btn').addEventListener('click', (e) => { 
		const form = document.querySelector('#form');
		form.reset();
		this.clearInput('.searching-input','.elementsList',cars);
		});

		//прослушиваем инпут на нажатие кнопки del
		const keyDown=document.querySelector('#serch').addEventListener("keydown", (e) => {	
			if (e.code == 'Backspace') { 
				this.clearInput('.searching-input', '.elementsList',cars);
			}
		});//!

	//прослушиваем инпут на ввод
		const inp= document.querySelector('#serch').addEventListener('input', (e) => {
			e.preventDefault();
			this.clearInput('.searching-form__input', '.elementsList',cars);
			this.showElement(getDataInputSerch('.searching-form__input', '#serch'),
			model.getKey(cars, 'model'), '.elementsList', '.searching-input','.ul-item');
			
			const liArray=document.querySelectorAll('.ul-item').forEach((li)=>{
					li.addEventListener('click',()=>{
					this.renderFrash('.searching-input', '.cars__fotos',cars);
					model.clearLi('.searching-input', '.elementsList');
					});
				});
		});

		//очищаю инпут по клику на него
	const inpClick=document.querySelector('#serch').addEventListener('click',()=>{
		document.querySelector('#serch').value='';
		orderList.innerHTML = "";
		this.renderList(cars, orderList);
	});

	//сбрасываем все установленные фильтры
		const clearFilters = document.querySelector('.clear-filters');
		clearFilters.addEventListener('click', (e) => {
			e.preventDefault();
			model.setStartValue('#price', 1000);
			model.innerStartValue('.price-value', '1000');
			model.clearAllClasses(checkboxFilter);
			model.clearAllClasses(checkedImage);
			orderList.innerHTML = "";
			this.renderList(cars, orderList);
		});

		//слушаем события клика на кнопку и клика на фотку машины
		const clickRentNow = orderList.addEventListener('click', (e) => { 

			

			fotoContainer.forEach((elem) => { 
				const foto=elem.querySelector('.foto');
				if (e.target == elem||e.target==foto) { 
					popup.classList.toggle('active');
					popup.innerHTML = this.createPopup(this.renderfilterList(cars, '', elem.id, ''));
					this.createDescription('.popup-body__description', renderfilterList(cars, '', elem.id, ''),
					'description-list__item', 'description-list');
					this.createLinkButtonInContainer(`btn-rent-link rent-btn popup-btn`, '.popup-body__buttons', 'Rent Now');
					this.createLinkButtonInContainer(`phone-link rent-btn`, '.popup-body__buttons', 'Phone Now');
					document.querySelector('body').classList.toggle('lock');
						
					//клик по кнопке внутри попапа
					const orderBtn = popup.querySelector('.popup-btn');
					orderBtn.addEventListener('click', (e) => { 
						orderBtn.classList.toggle('active');
						e.preventDefault();
						popup.classList.remove('active');
						popupOrder.classList.toggle('active');
						popupOrder.innerHTML = this.createPopupOrderBy(this.renderfilterList(cars, '', elem.id, ''));
						model.closePopup('.order-popup', '#close-order', 'active','lock');
						
						//раскоментировать для появления первого модалки при закрытии 
						//popup.classList.toggle('active');
					});
					model.closePopup('.popupp', '#close-popup', 'active','lock');
					
				}
			});
			orderList.querySelectorAll('.btn-rent-link').forEach((el) => { 
				
				if (e.target != el) {
					e.preventDefault();
					el.classList.remove('active');
				}
				if (e.target == el) {
					e.preventDefault();
					el.classList.toggle('active');
					document.querySelector('body').classList.toggle('lock');
					cars.forEach((car) => { 
						if (car.model == el.getAttribute("data-name")) { 
							popupOrder.classList.add('active');
							popupOrder.innerHTML = this.createPopupOrderBy(this.renderfilterList(cars, '', car.id, ''));
							const dateTimePicker = document.querySelectorAll('.date-order');
							dateTimePicker.forEach((item) => { 
								item.addEventListener('click', (ev) => { 
									ev.preventDefault();
								});
							});
							
							model.closePopup('.order-popup', '#close-order', 'active','lock');
							for (const key in car) {
								if(key!="foto")
									console.log(`${key}: `,car[key]);
							}
						}
					});
				}
			});
		}); 
		
	} */
};

