"use strict"

const burger = document.querySelector('.menu-burger');
const orderList = document.querySelector('.cars__fotos');
const checkboxFilter=document.querySelectorAll('.check');
const checkedImage = document.querySelector('.checked__image');
const mersedes = {
	model: "Mersedes",
	type: "Sport",
	transmission: "Authomatic",
	fuelType: "Gasoline",
	capasity: "4 person",
	year: "2021",
	price: "100$",
	rating: "five",
	bluetooth: true,
	foto: "Assets/img/car.jpg"
};
const porshe = {
	model: "Porshe",
	type: "Hatchback",
	transmission: "Authomatic",
	fuelType: "Gasoline",
	capasity: "4 person",
	year: "2022",
	price: "110$",
	rating: 4,
	bluetooth: true,
	foto: "Assets/img/car1.jpg"
};
const honda = {
	model: "Honda",
	type: "Hatchback",
	transmission: "Authomatic",
	fuelType: "Gasoline",
	capasity: "6 person",
	year: "2020",
	price: "100$",
	rating: 5,
	bluetooth: true,
	foto: "Assets/img/car2.jpg"
};
const rush = {
	model: "Suv",
	type: "Sport",
	transmission: "Authomatic",
	fuelType: "Gasoline",
	capasity: "6 person",
	year: "2020",
	price: "100$",
	rating: 5,
	bluetooth: true,
	foto: "Assets/img/car3.jpg"
};
const cars = [
	mersedes, porshe, honda, rush
];
/*событие на иконку бургера */
burger.addEventListener('click', () => {
	burger.classList.toggle('active');
});

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
const cl = () => { 
	return '';
}
const clearList = (arrElements, where) => {
	arrElements = [];
	return arrElements
 }


const getDataCheckbox = (arr) => {
	arr.forEach((element) => {
		element.addEventListener('click', (e) => { 
			e.preventDefault();
			element.classList.toggle('active');
			checkedImage.classList.toggle('active');
			if (checkedImage.classList.contains('active')) {
				orderList.innerHTML = '';
				renderList(filterList(cars, element.getAttribute('data-type')), orderList);
				console.log(filterList(cars, element.getAttribute('data-type')));
				console.log(orderList);
			} else { 
				renderList(cars, orderList);
			}
		});
	});
};

 getDataCheckbox(checkboxFilter);

renderList(cars, orderList);

