'use strict';

// TODO: Incluir los paquetes necesarios para esta aplicación

const inquirer = require('inquirer');
const fs = require('fs');
const geneMkd = require('./utils/generateMarkdown.js');
const file = 'README.md';

// TODO: Crear una serie de preguntas para la entrada de usuario
//https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba#attribution-40-international
//https://javascript.plainenglish.io/how-to-inquirer-js-c10a4e05ef1f
const questions = [
	'Cúal es el nombre de tu proyecto:',
	'Describe tu proyecto:',
	'Agrega instrucciones de instalación:',
	'Agrega información de uso:',
	'Agrega instrucciones sobre las contribuciones:',
	'Agrega las instrucciones para probar:',
	'Cúal es tu usuario de Github:',
	'Cúal es tu correo electrónico:',
	'Agrega instrucciones para que te contacten:',
];

inquirer
	.prompt([
		{
			type: 'input',
			name: 'nombre_proyecto',
			message: questions[0],
		},
		{
			type: 'input',
			name: 'descripcion',
			message: questions[1],
		},
		{
			type: 'input',
			name: 'instrucciones_instalacion',
			message: questions[2],
		},
		{
			type: 'input',
			name: 'informacion_uso',
			message: questions[3],
		},
		{
			type: 'input',
			name: 'instrucciones_contribuciones',
			message: questions[4],
		},
		{
			type: 'input',
			name: 'instrucciones_probar',
			message: questions[5],
		},

		{
			type: 'input',
			name: 'github',
			message: questions[6],
		},
		{
			type: 'input',
			name: 'email',
			message: questions[7],
		},
		{
			type: 'input',
			name: 'preguntas_sugerencias',
			message: questions[8],
		},
		{
			type: 'rawlist',
			name: 'licencia',
			message: 'Elige una licencia para tu proyecto:',
			choices: [
				'None',
				'Apache 2.0 License',
				'Boost Software License 1.0',
				'BSD 3-Clause License',
				'MIT License',
				'Mozilla Public License 2.0',
				'ISC License (ISC)',
				'IBM Public License Version 1.0',
				'GNU GPL v3',
				'Eclipse Public License 1.0',
				'CC0',
			],
		},
	])
	.then((data) => {
		console.log(data);
		geneMkd(
			data.nombre_proyecto,
			data.licencia,
			data.descripcion,
			data.instrucciones_instalacion,
			data.informacion_uso,
			data.instrucciones_contribuciones,
			data.instrucciones_probar,
			data.github,
			data.email,
			data.preguntas_sugerencias
		);
	});

// TODO: Crear una función para escribir el archivo README
// function writeToFile(file) {}

// TODO: Crear una función para inicializar la aplicación
// function init() {}

// Llamada de función para inicializar la aplicación
// init();
