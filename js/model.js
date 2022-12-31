export default{
/*!получение ключей из массива объектов*/
    getKey:(carsArr, typeKey) => {
      const dataCars = [];
      carsArr.forEach((element) => {
         for (const key in element) {
            if (key == typeKey) {
               const el = element[key];
               dataCars.push(el);
            }
         }
      });
      return Array.from(new Set(dataCars));
   },
	/*получение количества машин по заданным фильтрам  для отображения в колонке фильтров*/
	quantityElements:(objArr, dataType) => {
		let count = 0;
		objArr.forEach((element) => {
			for (const key in element) {
				if (element[key] == dataType) {
					count++;
				}
			}
		});
		return count;
	},
	/*метод возвращающий отфильтрованные машины по буквенному значению,или id,или цене */
	renderfilterList:(arrCars, filterName='',idCar='',price='') => {
		if (filterName != '') {
			const newArr = arrCars.filter((element) => {
				for (const key in element) {
						if (element[key] ==filterName[0].toUpperCase()+filterName.slice(1)){
							console.log(element);
							return element;
					}
					
				}
			});
			console.log(newArr);
			return newArr;
		}
		if (idCar != '') { 
			const car = arrCars.find(carId => carId.id == idCar);
			return car;
		}
		if (price != '') {
			const newArrPrice = arrCars.filter((element) => {

				for (const key in element) {
		
					if (key === 'price' && element[key] <= price) {
		
						return element;
					}
		
		
				}
			});
		
			return newArrPrice;
		}
		else { 
			return;
		}	
	},
		//назначаю в атрибут элемента данные
	SetDataAtribute:(where, data, dataType)=> {
		where.setAttribute(dataType, data);
	},
	//получаю значение элемента и возвращаю его
	getDataValue:(elementClass)=> {
		const element = document.querySelector(elementClass);
		return element.value;
	},
	//функция установки стартового значения по цене
	setStartValue:(elemClass, val)=> {
		const elem = document.querySelector(elemClass);
		elem.value = val;
		return elem.value;
	},
	//функция вписания стартового значения цены для фильтров по цене
	innerStartValue:(elemClass, val)=> {
		const elem = document.querySelector(elemClass);
		elem.innerHTML = val;
	},
	//получаем то что введено в инпуте
	getDataInputSerch : (containerClass,inputSerchClass) => {
		const container = document.querySelector(containerClass);
		const inputSerch = container.querySelector(inputSerchClass);
		return inputSerch.value;
	},
	//функция отнимания класса по клику на элемент
	closePopup:(containerClass, closeBtnClass,removingClass,bodyClass)=> { 
		const container=document.querySelector(containerClass);
		const closeBtn = container.querySelector(closeBtnClass);
		const body=document.querySelector('body');
		closeBtn.addEventListener('click', () => { 
			if (container.classList.contains(removingClass)) {
				container.classList.remove(removingClass);
				

			}
			if (closeBtn.classList.contains(removingClass)) {
				closeBtn.classList.remove(removingClass);
			}
			if(body.classList.contains(bodyClass)){
				body.classList.remove(bodyClass);
			}
			
		});
	},
	//функция очистки инпута и фильтра
	clearInput:(classInput, ulClass,array)=> { 	
		const clearingInput = document.querySelector(classInput);
		const ul = document.querySelector(ulClass);
		if (clearingInput.value) { 
			clearingInput.value = '';
			clearingInput.innerText = '';
			ul.innerHTML = '';
		}
	},
	clearLi:(classInput, ulClass)=> { 	
		const clearingInput = document.querySelector(classInput);
		const ul = document.querySelector(ulClass);
			ul.innerHTML = '';
	},
	/*метод удаления классов с элемента */
	clearAllClasses :(arrayFilters) => {

		arrayFilters.forEach((element) => {
			element.classList.remove('active');
		});
	},
	/*разметка для карточки */
	renderCard : (car) => {

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
};