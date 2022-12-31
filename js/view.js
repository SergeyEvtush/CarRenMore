import model from "./model.js";
export default{
	
	
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
	
	/*метод рисующий карточки */
	renderList : (arrElements, containerInViewport,count=6) => {
		let count1=0;
			arrElements.forEach(element => {
					count1++;
				if(count1<=count){
					containerInViewport.insertAdjacentHTML('afterbegin', model.renderCard(element));
				}
					
			});
	},
	
	/*Метод рисующий ползунок цен */
	renderPriceSlider : (containerSelector, inputSelector, textSelector) => {

		const container = document.querySelector(containerSelector);//контайнер для ползунка цен
		container.insertAdjacentHTML("afterbegin", model.renderSlider());//вставляю разметку для ползунка цен
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
	/*создание кнопки -ссылки */
	createLinkButtonInContainer : (classButton, containerClass, textInButton, hrefText = "#") => {
		const container = document.querySelector(containerClass);
		return container.insertAdjacentHTML("afterbegin",
		`<a href="${hrefText}" class="${classButton}" >${textInButton}</a>`);

	}
};

