
/*метод рисующий отфильтрованные карточки */
const renderfilterList = (arrElements, filterName) => {
	
	const newArr = arrElements.filter((element) => { 
		for (const key in element) {
			if (element[key]==filterName) {
				return element;
			}
		}		
	})
	return newArr;
}