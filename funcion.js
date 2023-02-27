const boton1 = document.querySelectorAll('.boton1');
const textElements = document.querySelectorAll('.hideText');


boton1.forEach((boton1, index) => {
  boton1.addEventListener('click', () => {
    const textElement = textElements[index];
    textElement.classList.toggle('showText');
  });
});

var typed = new Typed('.typed', {
	strings: [
		'<i class="maquina">Me gustaría integrarme en el Departamento Financiero de su empresa, ya que estoy capacitado y tengo las habilidades para desarrollar diferentes tareas, especialmente en las áreas de finanzas y contabilidad.Recientemente he finalizado mis estudios en Administración y Dirección de Empresas en la Universidad de Madrid. La metodología aplicada en el centro, orientada a la acción y resultados, me ha permitido desarrollar una gran capacidad de resolución y  adquirir una perspectiva global de todas las áreas de la empresa. A lo largo de mi formación, he potenciado mi espíritu de trabajo en equipo, iniciativa e implicación en las tareas, así como mi conocimiento de idiomas, inglés y francés, mediante estancias y cursos intensivos en Inglaterra y Francia.</i>',
		
		
	],
	stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	 // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});