import view from "./view";


//получение данных из файла
const carsData = fetch('assets/data/dataCars.json')
	.then(data => {
		return data.json();
	})
	.then(data => {
		view.renderPage(data,'.cars__fotos');
		

		return data;
		
	});