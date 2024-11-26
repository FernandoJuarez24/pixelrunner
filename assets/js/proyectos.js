const grid = new Muuri('.grid', {
	layout: {
		rounding: false
	}
});

window.addEventListener('load', () => {
	grid.refreshItems().layout();
	document.getElementById('grid').classList.add('imagenes-cargadas');

	// Agregamos los listener de los enlaces para filtrar por categoria.
	const enlaces = document.querySelectorAll('#categorias a');
	enlaces.forEach((elemento) => {
		elemento.addEventListener('click', (evento) => {
			evento.preventDefault();
			enlaces.forEach((enlace) => enlace.classList.remove('activo'));
			evento.target.classList.add('activo');

			// Minusculas
			const categoria = evento.target.innerHTML.toLowerCase();
			// Elimina todos los espacios
			const categoria_final = categoria.replace(/\s+/g, ''); 
			categoria_final === 'todos' ? grid.filter('[data-categoria]') : grid.filter(`[data-categoria="${categoria_final}"]`);
		});
	});
});