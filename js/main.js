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
/*массив объектов машин */
const cars = [
	mersedes, porshe, honda, rush,rush1,rush2
];


/*!получение ключей из массива объектов*/
const getKey = (carsArr,typeKey) => { 
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
const createFilters = (filtersArray,where,carArr) =>
{
	const ul = document.createElement('ul');
	ul.classList.add('list-fiter');
	filtersArray.forEach((el) => { 
		ul.insertAdjacentHTML('afterbegin', `<li class="list-filter__li"><div class="checked__image"></div><input type="checkbox" name="type" id="${el}" class="check" data-type="${el}"><label>${el}</label><span class="metriks">(${quantityElements(carArr,el)})</span></li>`);
	});
	where.appendChild(ul);
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
			
			if (key === 'price'&&element[key]<=price) {

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
/*Метод рисующий ползунок цен */
const renderPriceSlider = (priCe) => { 

	const renderSlider=()=> { 
		return `<div class="price-item">
		<div class="slidecontainer">
			<input type="range" min="1000" max="6000" value="500" class="price-slider" id="price" data-type="1000">
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
	const inputSlider = document.querySelector('.price-slider');
	

	function priceValueS() { 
		priceValue.innerHTML = filterSlider.value;
		
		SetDataAtribute(filterSlider, filterSlider.value, 'data-type');
		return filterSlider.value
	}

		priceValue.innerHTML = filterSlider.value;
	filterSlider.addEventListener('input', priceValueS);
	
};
function SetDataAtribute(where, data,dataType) {
	where.setAttribute(dataType, data);
 };


/*Метод фильтрации с пом checkbox */
const setFiltr = (arrayOfElementsPage, arrayObjects, containerInViewport) => {
	 
	 
	arrayOfElementsPage.forEach((element) => {
		element.addEventListener('click', (e) => { 

			e.preventDefault();

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
const createLinkButtonInContainer = (classButton, container, textInButton,hrefText="#") => {
	
	container.insertAdjacentHTML("afterbegin", `<a href="${hrefText}" class="rent-btn ${classButton} btn-rent-link" >${textInButton}</a>`);

 }


const renderPage = () => { 
	const buttonContainer = document.querySelector('.button-container');
	const buttonFilterPriceContainer = document.querySelector('.button-filter-container');
	const burger = document.querySelector('.menu-burger');
	const orderList = document.querySelector('.cars__fotos');
	createLinkButtonInContainer(`rent-btn price-filter btn-rent-link`,buttonFilterPriceContainer,'Price Filter');
	createLinkButtonInContainer(`rent-btn clear-filters btn-rent-link`, buttonContainer, 'Clear-filter');
	renderPriceSlider();
	const priceSliderInput = document.querySelector('#price');
	const priceFilterButton = document.querySelector('.price-filter');
	priceFilterButton.addEventListener('click', (e) => {
		e.preventDefault()
		orderList.innerHTML = "";
		renderList(filterListPrice(cars, 2000), orderList)
		
	 });
	const clearFilters = document.querySelector('.clear-filters');
	 const fiterList=document.querySelector('.filter1'); 
	const fiterList1 = document.querySelector('.filter2');
	
	 createFilters(getKey(cars, 'type'), fiterList,cars);
	 createFilters(getKey(cars,'capasity'),fiterList1,cars);
	 const checkboxFilter=document.querySelectorAll('.check');
	 const checkedImage = document.querySelectorAll('.checked__image');
	 
	setFiltr(checkboxFilter, cars, orderList);
	
	renderList(cars, orderList);
	burger.addEventListener('click', () => {
	burger.classList.toggle('active');
	});
	



	clearFilters.addEventListener('click', (e) => {
		e.preventDefault();
		clearAllClasses(checkboxFilter);
		clearAllClasses(checkedImage);
		orderList.innerHTML = "";
		renderList(cars, orderList);
	});

} 
renderPage();