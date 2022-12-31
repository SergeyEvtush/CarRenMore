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
};