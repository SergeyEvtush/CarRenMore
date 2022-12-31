import view from "./view.js";
import model from "./model.js";
	/*функция рисующая страничку */
	
function	renderPage  (cars,orderListClass)  {
	const orderList = document.querySelector(orderListClass);
	view.createUl( '.searching-form__input');
	view.renderList(cars, orderList);
	const popupOrder = document.querySelector('.order-popup');
	const popup = document.querySelector('#description-popup');
	const fotoContainer = orderList.querySelectorAll('.cars-item__foto');
	const input=document.querySelector('.searching-input');
	view.createLinkButtonInContainer(`rent-btn price-filter btn-rent-link`, '.button-filter-container', 'Price Filter');
	view.createLinkButtonInContainer(`rent-btn clear-filters btn-rent-link`, '.button-container', 'Clear-filter');	
	view.createLinkButtonInContainer(`btn-show`,`.show-more-btn__link`,'Show-more-car'); 
	view.renderPriceSlider('.price', '#price', '.price-value');
		const container = document.querySelector('.price');//контайнер для ползунка цен
		const inputPrice = container.querySelector('#price');//инпут в разметке
		const textInputPrice=container.querySelector('.price-value');
		const clearFilters = document.querySelector('.clear-filters');
		inputPrice.addEventListener('input', () => {
			view.priceValueS('#price', '.price-value');
		});//обновляем цеену по инпуту
		
	view.createFilters(model.getKey(cars, 'type'), '.filter1', cars);
	view.createFilters(model.getKey(cars, 'capasity'), '.filter2', cars);
	const checkboxFilter = document.querySelectorAll('.check');

	const checkedImage = document.querySelectorAll('.checked__image');
		checkboxFilter.forEach((el)=>{
		el.addEventListener('click',(checkbox)=>{
			checkbox.preventDefault();
			checkedImage.forEach((el)=>{
				if(el.classList.contains('active')){
					el.classList.remove('active');
				}
			});
			inputPrice.value = 6000;
			textInputPrice.innerHTML = "";
			el.classList.toggle('active');
			el.previousElementSibling.classList.toggle('active');
			orderList.innerHTML = "";
			const arr=model.renderfilterList(cars, el.getAttribute('data-type'),orderList);
			view.renderList(arr,orderList,arr.length);
		});
		});
	const priceFilterButton = document.querySelector('.price-filter');

		priceFilterButton.addEventListener('click', (e) => {
		model.clearAllClasses(checkboxFilter);
		model.clearAllClasses(checkedImage);
		orderList.innerHTML = "";
		const arr=model.renderfilterList(cars,'','',model.getDataValue('#price'));
		view.renderList(arr, orderList); 
		});
		document.querySelector('.show-more-btn__link').addEventListener('click',(e)=>{
		e.preventDefault();
		let count=orderList.children.length;
		if(orderList.children.length>=cars.length){
			orderList.innerHTML="";
			view.renderList(cars, orderList,cars.length);
		}else if(orderList.children.length<=cars.length){
			orderList.innerHTML="";
			view.renderList(cars, orderList,count+count);
		}
		});
		document.querySelector('#serch-btn').addEventListener('click', () => {
				orderList.innerHTML='';
		const arr=model.renderfilterList(cars, input.value);
			view.renderList(arr,orderList,arr.length);
		model.clearLi('.searching-input', '.elementsList');	
		});
		document.querySelector('.menu-burger').addEventListener('click', () => {
		document.querySelector('.menu-burger').classList.toggle('active');
		document.querySelector('.menu-wraper').classList.toggle('active');
		document.querySelector('.menu-wraper__body').classList.toggle('active');
		document.querySelector('body').classList.toggle('lock');
		});
		document.querySelector('.clear-filter-btn').addEventListener('click', (e) => { 
		const form = document.querySelector('#form');
		form.reset();
		model.clearInput('.searching-input','.elementsList',cars);
		});
		input.addEventListener("keydown", (e) => {	
			if (e.code == 'Backspace') { 
				model.clearInput('.searching-input', '.elementsList',cars);
				orderList.innerHTML = '';
				view.renderList(cars, orderList);
			}
		});
	   input.addEventListener('input',(e)=>{
				e.preventDefault();
				model.clearInput('.searching-form__input', '.elementsList',cars);
				view.showElement(model.getDataInputSerch('.searching-form__input', '#serch'),
			model.getKey(cars, 'model'), '.elementsList', '.searching-input','.ul-item');
			const liArray=document.querySelectorAll('.ul-item').forEach((li)=>{
				li.addEventListener('click',()=>{
					orderList.innerHTML='';
					const arr=model.renderfilterList(cars, input.value);
						view.renderList(arr,orderList,arr.length);
						model.clearLi('.searching-input', '.elementsList');
				});
			});
		});   
		input.addEventListener('click',(e)=>{
			e.preventDefault();
			input.value='';
			orderList.innerHTML = "";
			view.renderList(cars, orderList);
		});
		clearFilters.addEventListener('click', (e) => {
			e.preventDefault();
			model.setStartValue('#price', 1000);
			model.innerStartValue('.price-value', '1000');
			model.clearAllClasses(checkboxFilter);
			model.clearAllClasses(checkedImage);
			orderList.innerHTML = "";
			view.renderList(cars, orderList);
		});
		 orderList.addEventListener('click', (e) => { 

			fotoContainer.forEach((elem) => { 
				const foto=elem.querySelector('.foto');
				if (e.target == elem||e.target==foto) { 
					popup.classList.toggle('active');
					popup.innerHTML = view.createPopup(model.renderfilterList(cars, '', elem.id, ''));
					view.createDescription('.popup-body__description', model.renderfilterList(cars, '', elem.id, ''),
					'description-list__item', 'description-list');
					view.createLinkButtonInContainer(`btn-rent-link rent-btn popup-btn`, '.popup-body__buttons', 'Rent Now');
					view.createLinkButtonInContainer(`phone-link rent-btn`, '.popup-body__buttons', 'Phone Now');
					document.querySelector('body').classList.toggle('lock');
						
					//клик по кнопке внутри попапа
					const orderBtn = popup.querySelector('.popup-btn');
					orderBtn.addEventListener('click', (e) => { 
						orderBtn.classList.toggle('active');
						e.preventDefault();
						popup.classList.remove('active');
						popupOrder.classList.toggle('active');
						popupOrder.innerHTML = view.createPopupOrderBy(model.renderfilterList(cars, '', elem.id, ''));
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
							popupOrder.innerHTML = view.createPopupOrderBy(model.renderfilterList(cars, '', car.id, ''));
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

	}

//получение данных из файла
const carsData = fetch('assets/data/dataCars.json')
	.then(data => {
		return data.json();
	})
	.then(data => {
		renderPage(data,'.cars__fotos');
		/* view.renderList(data, orderList); */
		

		return data;
		
	});