"use strict"



/*примеры машин */
const mersedes = {
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
	model: "Porshe",
	type: "Suv",
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
	model: "Mersedes Gl",
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
	<div class="cars-item__foto">
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
				<a href="#" class="btn-rent-link">
					Rent Now
				</a>
			</div>
		</div>
	</div>
</div>
</div>`
};
/*метод рисующий отфильтрованные карточки */
const renderfilterList = (arrCars, filterName) => {

	const newArr = arrCars.filter((element) => {

		for (const key in element) {

			if (element[key] === filterName) {

				return element;
			}


		}
	})

	return newArr;
}
const filterListPrice = (arrCars, price) => {

	const newArr = arrCars.filter((element) => {

		for (const key in element) {

			if (key === 'price' && element[key] <= price) {

				return element;
			}


		}
	})

	return newArr;
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

function setStartValue(elemClass, val) {
	const elem = document.querySelector(elemClass);
	return elem.value = val;
}

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



createUl( '.searching-form__input');
//получаем то что введено в инпуте
const getDataInputSerch = (containerClass,inputSerchClass) => {
	const container = document.querySelector(containerClass);
	const inputSerch = container.querySelector(inputSerchClass);

	return inputSerch.value;
}
 
 
const inp=document.getElementById('serch')
 //прослушиваем инпут на ввод
inp.addEventListener('input', () => {
	showElement(getDataInputSerch('.searching-form__input', '#serch').toUpperCase(), getKey(cars, 'model'), '.elementsList','.searching-input')
});
 //прослушиваем инпут на нажатие кнопки del
inp.addEventListener("keydown", (e) => {
	e.code == 'Backspace' && e.key == 'Backspace' && inp.value.length >= 3 ?
		clearInput('.searching-input', '.elementsList') : console.log('enter letter');
	
});
/*функция вывода элемента под инпутом*/
function showElement(str, carsArray, ulClass,inputClass) {
	const elem = document.querySelector(ulClass);
	const serchInput = document.querySelector(inputClass);
	carsArray.map((car) => { 
		
		if (str.toUpperCase() == car.substring(0, 3).toUpperCase()) {
			
			elem.insertAdjacentHTML('afterbegin', `<li class="ul-item"><h3 class="title-car">${car}</h3></li>`);
			
		} 
		if (str.toUpperCase() == car.toUpperCase()) { 
			elem.innerHTML='';
			serchInput.value = car;
			elem.insertAdjacentHTML('afterbegin', `<li class="ul-item"><h3 class="title-car">${car}</h3></li>`);
		}

	});
}

//функция клика по кнопке очистки инпута
const clearBtn = document.querySelector('.clear-filter-btn').addEventListener('click', () => { 
	clearInput('.searching-input','.elementsList')
});
//функция очистки инпута
function clearInput(classInput,ulClass) { 
	const clearingInput = document.querySelector(classInput);
	const ul = document.querySelector(ulClass);
	if (clearingInput.value) { 
		clearingInput.value = '';
		ul.innerHTML='';
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
const clearAllClasses = (arrayFilters, inputPriceSliderClass, textInputPriceClass) => {

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

	const priceFilterButton = document.querySelector('.price-filter');
	priceFilterButton.addEventListener('click', (e) => {
		clearAllClasses(checkboxFilter);
		clearAllClasses(checkedImage);
		orderList.innerHTML = "";
		renderList(filterListPrice(cars, getDataValue('#price')), orderList);
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

}
renderPage();