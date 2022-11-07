/*метод рисующий карточки */
const renderList = (arrElements, containerInViewport) => {
	
	arrElements.forEach(element => {
		containerInViewport.insertAdjacentHTML('afterbegin', renderCard(element));
	});
}