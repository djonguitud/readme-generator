'use strict';
const badges = require('./badges');

const renderLicenseBadge = (license) => {
	if (license !== 'None' || license !== undefined) {
		return `
		${badges[license]['badge']} ${badges[license]['link']}\n
		${badges[license]['info']}`;
	}
};

const renderLicenseSection = (license) => {
	if (license !== 'None') {
		return `## Licencia ${license}\n 
			${renderLicenseBadge(license)}`;
	} else if (license === 'None') {
		return `## Sin Licencia\n`;
	}
};

const renderTitleSection = (title) => {
	if (title !== undefined) {
		return `# Título: ${title}\n`;
	} else {
		return;
	}
};

/* const renderTitleSection = (title) => {
	return `### Table de Contenido: 
	1. [Licencia](#)\n
	2. [Información](#example2)\n
	3. [Cómo instalar](#third-example)\n
	4. [Cómo usar](#fourth-examplehttpwwwfourthexamplecom)\n
	5. [Cómo contribuir](#)\n
	6. [Cómo probar](#)`;
}; */

/* const renderContents = (content) => {
	return;
}; */

const renderInfoSection = (info) => {
	if (info !== undefined) {
		return `## Información del proyecto\n
			${info}`;
	} else {
		return;
	}
};

const renderInstallationSection = (install) => {
	if (install !== undefined) {
		return `## Instalación\n
			${install}`;
	} else {
		return;
	}
};

const renderUsageSection = (use) => {
	if (use !== undefined) {
		return `## Uso de app\n
			${use}`;
	} else {
		return;
	}
};

const renderContributeSection = (contr) => {
	if (contr !== undefined) {
		return `## Cómo Contribuir\n
			${contr}`;
	} else {
		return;
	}
};

const renderTestAppSection = (test) => {
	if (test !== undefined) {
		return `## Cómo probar la app\n
			${test}`;
	} else {
		return;
	}
};

const renderQuestionsAndAnswersSection = (github, email, info) => {
	return `## Preguntas y sugerencias\n
	- ${github}\n	
	- ${email}\n	
	- ${info}\n`;
};

const renderContactInfo = (info) => {
	if (info) {
		return `${info}`;
	} else if (info === undefined) {
		return 'No further info';
	}
};

const renderGitHub = (github) => {
	if (github === undefined) {
		return 'No github account';
	} else {
		return `- [@${github}](https://github.com/${github})`;
	}
};

const renderEmail = (email) => {
	if (email === undefined) {
		return 'No email account';
	} else {
		return `- ${email}`;
	}
};

const markDownTemplate = (title, lic, info, install, use, contr, test, github, email, query) => {
	const template = `
	${renderTitleSection(title)}\n
	${renderLicenseSection(lic)}\n
	${renderInfoSection(info)}\n
	${renderInstallationSection(install)}\n
	${renderUsageSection(use)}\n
	${renderContributeSection(contr)}\n
	${renderTestAppSection(test)}\n
	${renderQuestionsAndAnswersSection(github, email, query)}
	`;
	console.log(template);
	return template;
};

/* const generateMarkdown = (data) => {
	return this.markDownTemplate();
}; */

module.exports = markDownTemplate;

//! TODO Resolve undefined properties
