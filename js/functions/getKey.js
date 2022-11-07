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