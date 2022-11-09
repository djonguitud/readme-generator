'use strict';
const badges = require('./utils/badges');
const geneMkd = {
	renderLicenseBadge: (license) => {
			return `${badges[license]['badge']} ${badges[license]['link']}`
	},
	renderLicenseSection: (license) => {
		if (license) {
			return `## Licencia ${license}\n 
			${this.renderLicenseBadge(license)}`
		}
	},
	renderTitleSection: (title) => {
		if (title) {
			return `## Título: ${title}\n`
		}
	},

	renderInstallationSection: (install) => {
		if (installl) {
			return `## Instalación\n
			${install}`
		}
	},

	renderUsageSection: (use) => {
		if (use) {
			return `## Uso de app\n
			${use}`
		}
	},
	renderContributeSection: (contr) => {
		if (contr) {
			return `## Cómo Contribuir\n
			${contr}`
		}
	},
	renderTestAppSection: (test) => {
		if (test) {
			return `## Cómo probar la app\n
			${test}`
		}
	},
	renderQuestionsAndAnswersSection: (query) => {
		if (query) {
			return `##  Preguntas y sugerencias\n
			${query}\n
			${this.renderGitHub()}\n
			${this.renderEmail()}\n`
		}
	},
	
	renderGitHub: (github) => {
		if (github) {
			return `${github}`
		}
	},

	renderEmail: (email) => {
		return `${email}`
	},

	markDownTemplate: () => {
		const template = `${this.renderTitle()}\n${this.renderInstallation()}\n${this.renderUsage()}\n${this.renderContribute()}\n${this.renderTestApp()}\n${this.renderQuestionsAndAnswers()}`
		return template;
	},
	generateMarkdown: (data) => {
		return this.markDownTemplate();
	},
};

/* // TODO: Crear una función que devuelva una credencial de licencia según la licencia en la que se pasa
// Si no hay licencia, devuelva una cadena vacía
function renderLicenseBadge(license) {}

// TODO: Crear una función que devuelva el enlace de licencia
// Si no hay licencia, devuelva una cadena vacía
function renderLicenseLink(license) {}

// TODO: Crear una función que devuelva la sección de licencia de README
// Si no hay licencia, devuelva una cadena vacía
function renderLicenseSection(license) {}

// TODO: Crear una función para generar un markdown para README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}
 */
module.exports = geneMkd;
