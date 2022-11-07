/*Метод фильтрации с пом checkbox */
const setFiltr = (arrayOfElementsPage, arrayObjects, containerInViewport) => {
	 
	arrayOfElementsPage.forEach((element) => {
		element.addEventListener('click', (e) => { 

			e.preventDefault();

			arrayOfElementsPage.forEach((el) => {

				containerInViewport.innerHTML = "";
				renderList(filterList(arrayObjects, el.getAttribute('data-type')), containerInViewport);
				el.classList.remove('active');
				el.previousElementSibling.classList.remove('active');

			});

			element.classList.toggle('active');
			element.previousElementSibling.classList.toggle('active');
			
			if (element.classList.contains('active')) {

				containerInViewport.innerHTML = "";
				renderList(filterList(arrayObjects, element.getAttribute('data-type')), containerInViewport);

			} else { 
				containerInViewport.innerHTML = "";
				renderList(arrayObjects, containerInViewport);
			}
		});
	});
};