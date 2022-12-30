
export default{



/*функция рисующая страничку */
 renderPage : (cars,orderListClass) => {

	/* const burger = document.querySelector(); */
	const orderList = document.querySelector(orderListClass);

	//создание кнопок для сброса фильтров и для фильтрации по цене
	createLinkButtonInContainer(`rent-btn price-filter btn-rent-link`, '.button-filter-container', 'Price Filter');
	createLinkButtonInContainer(`rent-btn clear-filters btn-rent-link`, '.button-container', 'Clear-filter');

	//кнопка для показа еще машин show more
	createLinkButtonInContainer(`btn-show`,`.show-more-btn__link`,'Show-more-car');

	//отрисовка ползунка цен
	renderPriceSlider('.price', '#price', '.price-value');

	//отрисовка карточек авто
	renderList(cars, orderList);
	const showMoreCars=document.querySelector('.show-more-btn__link').addEventListener('click',(e)=>{
		e.preventDefault();
		
		let count=orderList.children.length;
		if(orderList.children.length>=cars.length){
			orderList.innerHTML="";
			renderList(cars, orderList,cars.length);
		}else if(orderList.children.length<=cars.length){
			orderList.innerHTML="";
			renderList(cars, orderList,count+count);
		}
		

	});
	
	//создаю ul в контейнере в котором выпадают подсказки при наборе 
	createUl( '.searching-form__input');
	const priceFilterButton = document.querySelector('.price-filter');
	//событие клика кнопке фильтрации по цене
	priceFilterButton.addEventListener('click', (e) => {
		clearAllClasses(checkboxFilter);
		clearAllClasses(checkedImage);
		orderList.innerHTML = "";
		renderList(renderfilterList(cars,'','',getDataValue('#price')), orderList); 
		
	});

	//создаю чекбоксы для фильтов по различным данным авто
	createFilters(getKey(cars, 'type'), '.filter1', cars);
	createFilters(getKey(cars, 'capasity'), '.filter2', cars);

	const checkboxFilter = document.querySelectorAll('.check');
	const checkedImage = document.querySelectorAll('.checked__image');

	//вывод отфильтрованных фильтров по цене
	setFiltr(checkboxFilter, cars, orderList, '#price', '.price-value','.checked__image','active');

	//клик по бургеру
	const burger=document.querySelector('.menu-burger').addEventListener('click', () => {
		document.querySelector('.menu-burger').classList.toggle('active');
		document.querySelector('.menu-wraper').classList.toggle('active');
		document.querySelector('.menu-wraper__body').classList.toggle('active');
		document.querySelector('body').classList.toggle('lock');
	});

	//клик по кнопке поиск
	const serchClick = document.querySelector('#serch-btn').addEventListener('click', () => {
		renderFrash('.searching-input', '.cars__fotos',cars);
		clearLi('.searching-input', '.elementsList');
	});
	
	//функция клика по кнопке очистки инпута
	const clearBtn = document.querySelector('.clear-filter-btn').addEventListener('click', (e) => { 
	const form = document.querySelector('#form');
	form.reset();
	clearInput('.searching-input','.elementsList',cars);
	});

	 //прослушиваем инпут на нажатие кнопки del
	 const keyDown=document.querySelector('#serch').addEventListener("keydown", (e) => {	
		if (e.code == 'Backspace') { 
			clearInput('.searching-input', '.elementsList',cars);
		}
	});

 //прослушиваем инпут на ввод
 	const inp= document.querySelector('#serch').addEventListener('input', (e) => {
		e.preventDefault();
		clearInput('.searching-form__input', '.elementsList',cars);
		showElement(getDataInputSerch('.searching-form__input', '#serch'),
		getKey(cars, 'model'), '.elementsList', '.searching-input','.ul-item');
		
		const liArray=document.querySelectorAll('.ul-item').forEach((li)=>{
				li.addEventListener('click',()=>{
				renderFrash('.searching-input', '.cars__fotos',cars);
				clearLi('.searching-input', '.elementsList');
				});
			});
	});

	//очищаю инпут по клику на него
const inpClick=document.querySelector('#serch').addEventListener('click',()=>{
	document.querySelector('#serch').value='';
	orderList.innerHTML = "";
	renderList(cars, orderList);
});

//сбрасываем все установленные фильтры
	const clearFilters = document.querySelector('.clear-filters');
	clearFilters.addEventListener('click', (e) => {
		e.preventDefault();
		setStartValue('#price', 1000);
		innerStartValue('.price-value', '1000');
		clearAllClasses(checkboxFilter);
		clearAllClasses(checkedImage);
		orderList.innerHTML = "";
		renderList(cars, orderList);
	});

	//слушаем события клика на кнопку и клика на фотку машины
	const clickRentNow = orderList.addEventListener('click', (e) => { 
		const fotoContainer = orderList.querySelectorAll('.cars-item__foto');
		const popupOrder = document.querySelector('.order-popup');
		const popup = document.querySelector('#description-popup');
		fotoContainer.forEach((elem) => { 
			const foto=elem.querySelector('.foto');
			if (e.target == elem||e.target==foto) { 
				popup.classList.toggle('active');
				popup.innerHTML = createPopup(renderfilterList(cars, '', elem.id, ''));
				createDescription('.popup-body__description', renderfilterList(cars, '', elem.id, ''),
				 'description-list__item', 'description-list');
				createLinkButtonInContainer(`btn-rent-link rent-btn popup-btn`, '.popup-body__buttons', 'Rent Now');
				createLinkButtonInContainer(`phone-link rent-btn`, '.popup-body__buttons', 'Phone Now');
				document.querySelector('body').classList.toggle('lock');
					
				//клик по кнопке внутри попапа
				const orderBtn = popup.querySelector('.popup-btn');
				orderBtn.addEventListener('click', (e) => { 
					orderBtn.classList.toggle('active');
					e.preventDefault();
					popup.classList.remove('active');
					popupOrder.classList.toggle('active');
					popupOrder.innerHTML = createPopupOrderBy(renderfilterList(cars, '', elem.id, ''));
					closePopup('.order-popup', '#close-order', 'active','lock');
					
					//раскоментировать для появления первого модалки при закрытии 
					/* popup.classList.toggle('active'); */
				});
				closePopup('.popupp', '#close-popup', 'active','lock');
				
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
						popupOrder.innerHTML = createPopupOrderBy(renderfilterList(cars, '', car.id, ''));
						const dateTimePicker = document.querySelectorAll('.date-order');
						dateTimePicker.forEach((item) => { 
							item.addEventListener('click', (ev) => { 
								ev.preventDefault();
							});
						});
						
						closePopup('.order-popup', '#close-order', 'active','lock');
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
};

