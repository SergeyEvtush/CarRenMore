/*!создаю разметку для фильтров */
const createFilters = (filtersArray,where,carArr) =>
{
	const ul = document.createElement('ul');
	ul.classList.add('list-fiter');
	filtersArray.forEach((el) => { 
		ul.insertAdjacentHTML('afterbegin', `<li class="list-filter__li"><div class="checked__image"></div><input type="checkbox" name="type" id="${el}" class="check" data-type="${el}"><label>${el}</label><span class="metriks">(${quantityElements(carArr,el)})</span></li>`);
	});
	where.appendChild(ul);
};