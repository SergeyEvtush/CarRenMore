import view from "./view";
import model from "./model";

//получение данных из файла
const carsData = fetch('assets/data/dataCars.json')
	.then(data => {
		return data.json();
	})
	.then(data => {
		renderPage(data,'.cars__fotos');
		

		return data;
		
	});