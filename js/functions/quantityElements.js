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