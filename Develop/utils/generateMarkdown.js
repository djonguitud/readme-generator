'use strict';
const badges = require('./badges');

const renderTableSection = () => {
	return `### Table de Contenido:\n1. [Licencia](#licencia)\n2. [Información](#información-del-proyecto)\n3. [Cómo instalar](#instalación)\n4. [Cómo usar](#uso-de-app)\n5. [Cómo contribuir](#cómo-contribuir)\n6. [Cómo probar](#cómo-probar-la-app)\n7. [Preguntas y sugerencias](#preguntas-y-sugerencias)\n`;
};

const renderLicenseBadge = (license) => {
	if (license !== 'None' || license !== undefined) {
		return `${badges[license]['badge']}${badges[license]['link']}\n
${badges[license]['info']}`;
	}
};

const renderLicenseSection = (license) => {
	if (license !== 'None') {
		return `## Licencia ${license}\n${renderLicenseBadge(license)}`;
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

const renderInfoSection = (info) => {
	if (info !== undefined) {
		return `## Información del proyecto\n${info}
		`;
	} else {
		return;
	}
};

const renderInstallationSection = (install) => {
	if (install !== undefined) {
		return `## Instalación\n${install}
		`;
	} else {
		return;
	}
};

const renderUsageSection = (use) => {
	if (use !== undefined) {
		return `## Uso de app\n${use}`;
	} else {
		return;
	}
};

const renderContributeSection = (contr) => {
	if (contr !== undefined) {
		return `## Cómo Contribuir\n${contr}`;
	} else {
		return;
	}
};

const renderTestAppSection = (test) => {
	if (test !== undefined) {
		return `## Cómo probar la app\n${test}
	`;
	} else {
		return;
	}
};

const renderQuestionsAndAnswersSection = (github, email, info) => {
	return `## Preguntas y sugerencias\n- Github: ${github}\n- Email: ${email}\n
Información de cómo contactarme: ${info}`;
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
		return `- ![@${github}](https://github.com/${github})`;
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
${renderTableSection()}\n
${renderLicenseSection(lic)}\n
${renderInfoSection(info)}\n
${renderInstallationSection(install)}\n
${renderUsageSection(use)}\n
${renderContributeSection(contr)}\n
${renderTestAppSection(test)}\n
${renderQuestionsAndAnswersSection(github, email, query)}
	`;
	return template;
};

module.exports = markDownTemplate;
