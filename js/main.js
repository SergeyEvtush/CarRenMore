"use strict"

const burger = document.querySelector('.menu-burger');
const orderList = document.querySelector('.cars__fotos');

//list-fiter
 const fiterList=document.querySelector('.filter1'); 
 const fiterList1=document.querySelector('.filter2'); 

/*примеры машин */
const mersedes = {
	model: "Mersedes",
	type: "Sport",
	transmission: "Authomatic",
	fuelType: "Gasoline",
	capasity: "2 person",
	year: "2021",
	price: "100$",
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
	price: "110$",
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
	price: "100$",
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
	price: "100$",
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
	price: "100$",
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
	price: "100$",
	rating: 5,
	bluetooth: true,
	foto: "Assets/img/car3.jpg"
};
/*массив объектов машин */
const cars = [
	mersedes, porshe, honda, rush,rush1,rush2
];

/*событие на иконку бургера */
burger.addEventListener('click', () => {
	burger.classList.toggle('active');
});
/*!получение ключей из массива объектов*/
const getData = (carsArr,typeKey) => { 
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
console.log(getData(cars,'type'));
/*!создаю разметку для фильтров */
const createFilters = (filtersArray,where) =>
{
	const ul = document.createElement('ul');
	ul.classList.add('list-fiter');
	filtersArray.forEach((el) => { 
		
		ul.insertAdjacentHTML('afterbegin',`<li class="list-filter__li"><div class="checked__image"></div><input type="checkbox" name="type" id=""${el}"" class="check" data-type="${el}"><label>${el}</label><span class="metriks">(14)</span></li>`);
	});
	where.appendChild(ul);
};
createFilters(getData(cars, 'type'), fiterList);
createFilters(getData(cars,'capasity'),fiterList1);
const checkboxFilter=document.querySelectorAll('.check');
const checkedImage = document.querySelector('.checked__image');


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
const filterList = (arrElements, filterName) => {
	
	const newArr = arrElements.filter((element) => { 
		for (const key in element) {
			if (element[key]==filterName) {
				return element;
			}
		}		
	})
	return newArr;
}

/*метод рисующий карточки */
const renderList = (arrElements, where) => { 
	arrElements.forEach(element => {
		where.insertAdjacentHTML('afterbegin', renderCard(element));
	});
}
/*Метод фильтрации с пом checkbox */
const getDataCheckbox = (arr) => {
	arr.forEach((element) => {
		element.addEventListener('click', (e) => { 
			e.preventDefault();
			element.classList.toggle('active');
			checkedImage.classList.toggle('active');
			if (checkedImage.classList.contains('active')) {
				orderList.innerHTML = "";
				renderList(filterList(cars, element.getAttribute('data-type')), orderList);
				console.log(filterList(cars, element.getAttribute('data-type')));
			} else { 
				orderList.innerHTML = "";
				renderList(cars, orderList);
			}
		});
	});
};

 	getDataCheckbox(checkboxFilter);
	renderList(cars, orderList);

