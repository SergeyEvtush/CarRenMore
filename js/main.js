"use strict"

const burger = document.querySelector('.menu-burger');

const orderList = document.querySelector('.cars__fotos');

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
	type: "Sport",
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
	type: "Suv",
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

burger.addEventListener('click', () => {

	burger.classList.toggle('active');
});


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
}
const renderList = (arrElements,where) => {
	arrElements.forEach(element => {
		where.insertAdjacentHTML('afterbegin',renderCard (element));
	});
 }
renderList(cars,orderList);


