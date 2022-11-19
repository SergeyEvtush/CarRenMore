"use strict"



/*примеры машин */
const mersedes = {
	id: "car1",
	model: "Mersedes",
	type: "Sport",
	transmission: "Authomatic",
	fuelType: "Gasoline",
	capasity: "2 person",
	year: "2021",
	price: "3000",
	rating: "five",
	bluetooth: true,
	foto: "Assets/img/car.jpg"
};
const porshe = {
	id: "car2",
	model: "Porshe",
	type: "Sport",
	transmission: "Authomatic",
	fuelType: "Gasoline",
	capasity: "2 person",
	year: "2022",
	price: "2500",
	rating: 4,
	bluetooth: true,
	foto: "Assets/img/car1.jpg"
};
const honda = {
	id: "car3",
	model: "Honda",
	type: "Mpv",
	transmission: "Authomatic",
	fuelType: "Gasoline",
	capasity: "4 person",
	year: "2020",
	price: "2000",
	rating: 5,
	bluetooth: true,
	foto: "Assets/img/car2.jpg"
};
const rush = {
	id: "car4",
	model: "Suv",
	type: "Coup",
	transmission: "Authomatic",
	fuelType: "Gasoline",
	capasity: "4 person",
	year: "2020",
	price: "2000",
	rating: 5,
	bluetooth: true,
	foto: "Assets/img/car3.jpg"
};
const rush2 = {
	id: "car5",
	model: "Suv",
	type: "Sedan",
	transmission: "Authomatic",
	fuelType: "Gasoline",
	capasity: "6 person",
	year: "2020",
	price: "2500",
	rating: 5,
	bluetooth: true,
	foto: "Assets/img/car3.jpg"
};
const rush1 = {
	id: "car6",
	model: "Suv",
	type: "Hatchback",
	transmission: "Authomatic",
	fuelType: "Gasoline",
	capasity: "8 person",
	year: "2020",
	price: "3000",
	rating: 5,
	bluetooth: true,
	foto: "Assets/img/car3.jpg"
};
const MersGl = {
	id: "car7",
	model: "Mersedes Gl",
	type: "OffRoad",
	transmission: "Authomatic",
	fuelType: "Gasoline",
	capasity: "8 person",
	year: "2020",
	price: "3000",
	rating: 5,
	bluetooth: true,
	foto: "Assets/img/car3.jpg"
};
/*массив объектов машин */
const cars = [
	mersedes, porshe, honda, rush, rush1, rush2,MersGl
];


/*!получение ключей из массива объектов*/
const getKey = (carsArr, typeKey) => {
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
};

/*получение количества машин по заданным фильтрам  для отображения в колонке фильтров*/
const quantityElements = (objArr, dataType) => {
	let count = 0;
	objArr.forEach((element) => {
		for (const key in element) {
			if (element[key] == dataType) {
				count++;

			}
		}
	});
	return count;
};

const createPopup = (car) => { 
	return `<div class="popupp-wraper _container">
	<div class="popup-body" id="rental-popup">
		<div class="popup-close">
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
	</div>
</div>`;
};




/*!создаю разметку для фильтров */
const createFilters = (filtersArray, conatinerFiltersClass, carArr) => {
	const containerFilters = document.querySelector(conatinerFiltersClass);
	const ul = document.createElement('ul');
	ul.classList.add('list-fiter');
	filtersArray.forEach((el) => {
		ul.insertAdjacentHTML('afterbegin', `<li class="list-filter__li"><div class="checked__image"></div><input type="checkbox" name="type" id="${el}" class="check" data-type="${el}"><label>${el}</label><span class="metriks">(${quantityElements(carArr, el)})</span></li>`);
	});
	containerFilters.appendChild(ul);
};



/*разметка для карточек */
const renderCard = (car) => {

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
		<img src="${car.foto}" alt="car">
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
</div>`
};
/*метод возвращающий отфильтрованные машины по буквенному значению,или id,или цене */
const renderfilterList = (arrCars, filterName='',idCar='',price='') => {
	if (filterName != '') {
		const newArr = arrCars.filter((element) => {
			for (const key in element) {
					if (element[key] ==filterName[0].toUpperCase()+filterName.slice(1)){
						return element;
				}
				
			}
		});
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
		})
	
		return newArrPrice;
	 }
	else { 
		return;
	}	
}

/*метод рисующий карточки */
const renderList = (arrElements, containerInViewport) => {
	
		arrElements.forEach(element => {
			containerInViewport.insertAdjacentHTML('afterbegin', renderCard(element));
		});
	
	
	
}


const renderSlider = () => {
	return `<div class="price-item">
	<div class="slidecontainer">
		<input type="range" min="1000" max="6000" value="500" class="price-slider" id="price" data-type="1000">
		<div class="slidecontainer__text">
			<h4 class="title-car price-value"></h4>
		</div>
	</div>
</div>`
};

/*Метод рисующий ползунок цен */
const renderPriceSlider = (containerSelector, inputSelector, textSelector) => {

	const container = document.querySelector(containerSelector);//контайнер для ползунка цен
	container.insertAdjacentHTML("afterbegin", renderSlider());//вставляю разметку для ползунка цен
	const inputPrice = container.querySelector(inputSelector);//инпут в разметке
	const textPrice = container.querySelector(textSelector);//тект на экране

	textPrice.innerHTML = inputPrice.value;//рисуем цену 
	inputPrice.addEventListener('input', () => {
		priceValueS('#price', '.price-value')
	});//обновляем цеену по инпуту
};

//функция получения цены и отображения ее на экране
function priceValueS(filterSliderClass, priceValueSelector) {
	const filterSlider = document.querySelector(filterSliderClass);//получаем элемент инпут по переданному селектору
	const priceValue = document.querySelector(priceValueSelector);//получаем элемент куду будем выводить значение из инпута
	let val = getDataValue(filterSliderClass);//получем значения из инпута
	priceValue.innerHTML = val;//записываем эти значения в тектовый элемент на экране
	SetDataAtribute(filterSlider, val, 'data-type');
	return val;
}

//назначаю в атрибут элемента данные
function SetDataAtribute(where, data, dataType) {
	where.setAttribute(dataType, data);
};

//получаю значение элемента и возвращаю его
function getDataValue(elementClass) {
	const element = document.querySelector(elementClass)
	return element.value;
}
//функция установки стартового значения по цене
function setStartValue(elemClass, val) {
	const elem = document.querySelector(elemClass);
	return elem.value = val;
}
//функция вписания стартового значения цены для фильтров по цене
function innerStartValue(elemClass, val) {
	const elem = document.querySelector(elemClass);
	elem.innerHTML = val;
}


//создаю ul в контейнере
const createUl = (containerClass) => {
	const container = document.querySelector(containerClass);
	const ul = document.createElement('ul');
	ul.classList.add('elementsList');
	container.appendChild(ul);
}
function blurThePage(containerClass) {
	const container = document.querySelector(containerClass);
	container.classList.add('active-blur');
 }


//получаем то что введено в инпуте
const getDataInputSerch = (containerClass,inputSerchClass) => {
	const container = document.querySelector(containerClass);
	const inputSerch = container.querySelector(inputSerchClass);
	return inputSerch.value;
}
 
function createDescription(containerClass,car,liClass,ulClass) {
	const descriptionContainer = document.querySelector(containerClass);
	const ul = document.createElement('ul');
	ul.classList.add(ulClass)
	descriptionContainer.appendChild(ul);
	for (const key in car) {
			if(key!='id'&&key!='foto'){
			const li = document.createElement('li');
		li.classList.add(liClass);
		li.innerText = `${key} :  ${car[key]}`;
		ul.appendChild(li);
		}
	}
 } 





/*функция вывода элемента под инпутом*/
function showElement(str, carsArray, ulClass, inputClass,liClass) {
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
			elem.style.display = "none"
			renderFrash('.searching-input', '.cars__fotos')
			
	
		});
	});
}

//функция показа всего массива машин по ключу
function showArray(carsArray, ulClass) { 
	const elem = document.querySelector(ulClass);
	carsArray.forEach((car) => { 
		elem.insertAdjacentHTML('afterbegin', `<li class="ul-item"><a href="#" class="title-car">${car}</a></li>`);
	});
}
//функция отнимания класса по клику на элемент
function closePopup(containerClass, closeBtnClass,removingClass) { 
	const container=document.querySelector(containerClass);
	const closeBtn = container.querySelector(closeBtnClass);
	closeBtn.addEventListener('click', () => { 
		if (container.classList.contains(removingClass)) {
			container.classList.remove(removingClass);
		 }
		if (closeBtn.classList.contains(removingClass)) {
			closeBtn.classList.remove(removingClass);
		 }
		
	});
}



//функция очистки инпута и фильтра
function clearInput(classInput, ulClass) { 	
	const clearingInput = document.querySelector(classInput);
	const ul = document.querySelector(ulClass);
	if (clearingInput.value) { 
		clearingInput.value = '';
		ul.innerHTML = '';
	}
	const orderList = document.querySelector('.cars__fotos');
	orderList.innerHTML = '';
	renderList(cars, orderList);
}
function clearLi(classInput, ulClass) { 	
	const clearingInput = document.querySelector(classInput);
	const ul = document.querySelector(ulClass);
		ul.innerHTML = '';
}



 //метод перерисовки странички с фото для инпута поиска
function renderFrash(inputSelector,containerSelector) { 

	const inp = document.querySelector(inputSelector);//
	if (inp.value) {
		const container = document.querySelector(containerSelector)//
		container.innerHTML = "";
		renderList(renderfilterList(cars, inp.value), container);
	 }
}


/*Метод фильтрации с пом checkbox */
const setFiltr = (arrayOfElementsPage, arrayObjects, containerInViewport, inputPriceSliderClass, textInputPriceClass) => {

	const inputPriceSlider = document.querySelector(inputPriceSliderClass);
	const textInputPrice = document.querySelector(textInputPriceClass);
	arrayOfElementsPage.forEach((element) => {
		element.addEventListener('click', (e) => {

			e.preventDefault();
			inputPriceSlider.value = 6000;
			textInputPrice.innerHTML = ""
			arrayOfElementsPage.forEach((el) => {

				containerInViewport.innerHTML = "";
				renderList(renderfilterList(arrayObjects, el.getAttribute('data-type')), containerInViewport);

				el.classList.remove('active');
				el.previousElementSibling.classList.remove('active');

			});

			element.classList.toggle('active');
			element.previousElementSibling.classList.toggle('active');

			if (element.classList.contains('active')) {

				containerInViewport.innerHTML = "";
				renderList(renderfilterList(arrayObjects, element.getAttribute('data-type')), containerInViewport);

			} else {
				containerInViewport.innerHTML = "";
				renderList(arrayObjects, containerInViewport);
			}
		});
	});
};


/*метод удаления классов с элемента */
const clearAllClasses = (arrayFilters) => {

	arrayFilters.forEach((element) => {
		element.classList.remove('active');
	});
};
/*создание кнопки -ссылки */
const createLinkButtonInContainer = (classButton, containerClass, textInButton, hrefText = "#") => {
	const container = document.querySelector(containerClass);
	container.insertAdjacentHTML("afterbegin", `<a href="${hrefText}" class="rent-btn ${classButton} btn-rent-link" >${textInButton}</a>`);

}

/*функция рисующая страничку */
const renderPage = () => {

	const burger = document.querySelector('.menu-burger');
	const orderList = document.querySelector('.cars__fotos');
	createLinkButtonInContainer(`rent-btn price-filter btn-rent-link`, '.button-filter-container', 'Price Filter');
	createLinkButtonInContainer(`rent-btn clear-filters btn-rent-link`, '.button-container', 'Clear-filter');
	renderPriceSlider('.price', '#price', '.price-value');
	//создаю ul в контейнере
	createUl( '.searching-form__input');
	const priceFilterButton = document.querySelector('.price-filter');
	priceFilterButton.addEventListener('click', (e) => {
		clearAllClasses(checkboxFilter);
		clearAllClasses(checkedImage);
		orderList.innerHTML = "";
		renderList(renderfilterList(cars,'','',getDataValue('#price')), orderList); 
		
	});
	createFilters(getKey(cars, 'type'), '.filter1', cars);
	createFilters(getKey(cars, 'capasity'), '.filter2', cars);

	const checkboxFilter = document.querySelectorAll('.check');
	const checkedImage = document.querySelectorAll('.checked__image');
	setFiltr(checkboxFilter, cars, orderList, '#price', '.price-value');
	renderList(cars, orderList);
	burger.addEventListener('click', () => {
		burger.classList.toggle('active');
	});
	//клик по кнопке поиск
	const serchClick = document.querySelector('#serch-btn').addEventListener('click', () => {
		renderFrash('.searching-input', '.cars__fotos')
		clearLi('.searching-input', '.elementsList')
	});
	//функция клика по кнопке очистки инпута
	const clearBtn = document.querySelector('.clear-filter-btn').addEventListener('click', (e) => { 
	const form = document.querySelector('#form');
	form.reset();
	clearInput('.searching-input','.elementsList')
	});
	 //прослушиваем инпут на нажатие кнопки del
	 const keyDown=document.querySelector('#serch').addEventListener("keydown", (e) => {	
		if (e.code == 'Backspace') { 
			clearInput('.searching-input', '.elementsList');
		}
	});
 //прослушиваем инпут на ввод
 	const inp= document.querySelector('#serch').addEventListener('input', (e) => {
		e.preventDefault();
		clearInput('.searching-form__input', '.elementsList');
		showElement(getDataInputSerch('.searching-form__input', '#serch'),
		getKey(cars, 'model'), '.elementsList', '.searching-input','.ul-item'); 
	});

	const clearFilters = document.querySelector('.clear-filters');
	clearFilters.addEventListener('click', (e) => {
		e.preventDefault();
		setStartValue('#price', 1000);
		innerStartValue('.price-value', '1000')
		clearAllClasses(checkboxFilter);
		clearAllClasses(checkedImage);
		orderList.innerHTML = "";
		renderList(cars, orderList);
	});
	//слушаем события клика на кнопку и клика на фотку машины
	const clickRentNow = orderList.addEventListener('click', (e) => { 
		const fotoContainer = orderList.querySelectorAll('.cars-item__foto');
		const popup = document.querySelector('.popupp');
		fotoContainer.forEach((elem) => { 
			if (e.target == elem) { 
				popup.classList.add('active');
				popup.innerHTML = createPopup(renderfilterList(cars, '', elem.id, ''));
				/* console.log(renderfilterList(cars, '', elem.id, '')); */
				
				createDescription('.popup-body__description', renderfilterList(cars, '', elem.id, ''), 'description-list__item', 'description-list');
				closePopup('.popupp', '.close-link', 'active');
				
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
				blurThePage('.rental-page__container-background');
				cars.forEach((car) => { 
					if (car.model == el.getAttribute("data-name")) { 
						for (const key in car) {
							if(key!="foto")
								console.log(`${key}: `,car[key]);
						}
					}
				});
				
			}
		});
		
		
	}); 
}
renderPage();





