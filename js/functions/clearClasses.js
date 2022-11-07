/*метод удаления классов с элемента */
const clearAllClasses = (arrayFilters) => {
	arrayFilters.forEach((element) => { 
		element.classList.remove('active');
	});
};