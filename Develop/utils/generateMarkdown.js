'use strict';
const badges = require('./badges');

const renderLicenseBadge = (license) => {
	if (license !== 'None') {
		return `${badges[license]['badge']} ${badges[license]['link']}\n
						${badges[license]['info']}`;
	} else {
		return;
	}
};

const renderLicenseSection = (license) => {
	if (license !== 'None') {
		return `## Licencia ${license}\n 
			${renderLicenseBadge(license)}`;
	} else if (license === 'None') {
		return;
	}
};

const renderTitleSection = (title) => {
	if (title) {
		return `# Título: ${title}\n`;
	} else {
		return;
	}
};

const renderInfoSection = (info) => {
	if (info) {
		return `## Información del proyecto\n
			${info}`;
	} else {
		return;
	}
};

const renderInstallationSection = (install) => {
	if (install) {
		return `## Instalación\n
			${install}`;
	} else {
		return;
	}
};

const renderUsageSection = (use) => {
	if (use) {
		return `## Uso de app\n
			${use}`;
	} else {
		return;
	}
};

const renderContributeSection = (contr) => {
	if (contr) {
		return `## Cómo Contribuir\n
			${contr}`;
	} else {
		return;
	}
};

const renderTestAppSection = (test) => {
	if (test) {
		return `## Cómo probar la app\n
			${test}`;
	} else {
		return;
	}
};

const renderQuestionsAndAnswersSection = (query) => {
	if (query) {
		return `##  Preguntas y sugerencias\n
			${query}\n
			${renderGitHub()}\n
			${renderEmail()}\n`;
	}
};

const renderGitHub = (github) => {
	if (github) {
		return `${github}`;
	} else {
		return;
	}
};

const renderEmail = (email) => {
	if (email) {
		return `${email}`;
	} else {
		return;
	}
};

const markDownTemplate = (
	title,
	lic,
	info,
	install,
	use,
	contr,
	test,
	git,
	email,
	query
) => {
	const template = `
	${renderTitleSection(title)}\n
	${renderLicenseSection(lic)}\n
	${renderInfoSection(info)}\n
	${renderInstallationSection(install)}\n
	${renderUsageSection(use)}\n
	${renderContributeSection(contr)}\n
	${renderTestAppSection(test)}\n
	${renderGitHub(git)}\n
	${renderEmail(email)}\n
	${renderQuestionsAndAnswersSection(query)}
	`;
	console.log(template);
	return template;
};

/* const generateMarkdown = (data) => {
	return this.markDownTemplate();
}; */

module.exports = markDownTemplate;

//! TODO Resolve undefined properties
