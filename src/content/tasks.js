/* 
  Note: For hosting this application on gh-pages and using this approach of a .js file for the content, 
  we have to import resources like images here, so that they get found in the production build.
*/
import referencedArticleThumbnail from "/src/content/article-nutzerverhalten-thumbnail-80x80.webp";

import task1Do from "/src/content/taskADo.png";
import task1Dont from "/src/content/taskADont.png";

import task2Do from "/src/content/taskBDo.png";
import task2Dont from "/src/content/taskBDont.png";

import task3Do from "/src/content/taskCDo.png";
import task3Dont from "/src/content/taskCDont.png";

/*
  Enter an entry for each task.

  The following properties are optional: 
    id, referencedArticle, alt1, alt2, wordDefinitions
*/
export const tasks = [
	{
		id: 1, 
		taskDescription: "Wähle die App aus, die der folgenden Richtlinie folgt:",
		guidelineText: "Bewusste Interaktion mit KI-Systemen",
		referencedArticle: {
			title: "KI verdeutlichen",
			thumbnail: referencedArticleThumbnail,
		},
    option1: task1Do,
    option2: task1Dont,
		alt1: "Ein Chatbot, der verdeutlicht, dass er durch eine KI gesteuert wird.", 
		alt2: "Ein Chatbot, der mit den Nutzenden natürlichsprachlich interagiert.",
		answer: 1,
		explanation: "Bei der Interaktion mit Nutzenden muss klar gemacht werden, dass hier kein Mensch agiert. Insofern sollte man z.B. nicht 'schreibt' als Animation einsetzen, wenn der Bot antwortet. Das wäre täuschend und deutet auf einen wirklichen Menschen hin. Eine Alternative wäre der Einsatz von eher technischen Begriffen wie 'Antwort wird berechnet', die auf die maschinelle Natur des Gesprächspartners hinweisen.",
		wordDefinitions: {
		},
		compactDescription1: "Verwende Animationen wie 'Antwort wird berechnet' oder andere technische Begriffe während der Nutzer auf eine Antwort durch das System wartet.",
		compactDescription2: "Vermeide Animationen, die Nutzenden suggerieren, sie würden mit einem Menschen kommunizieren.",
		tip: "Es ist wichtig, dass Nutzende bei der Interaktion mit einem KI-Chatbot wissen, dass sie mit einer KI kommunizieren.", 
	},
	{
		id: 2,
		taskDescription: "Wähle die App aus, die der folgenden Richtlinie folgt:",
		guidelineText: "Bereitstellung von Informationen",
		referencedArticle: {
			title: "Informieren",
			thumbnail: referencedArticleThumbnail,
		},
		option1: task2Dont,
		option2: task2Do,
		alt1: "Ein Chatbot, der keine Informationen zu seinen Quellen oder seiner Funktionsweise gibt.",
		alt2: "Ein Chatbot, der seine Quellen offenlegt.",
		answer: 2,
		explanation:
			"Ein Chatbot sollte den Nutzenden möglichst viele Informationen zu seiner Funktionsweise geben und vor allem Quellen offenlegen, die in die Entscheidungsfindung miteinbezogen wurden.",
		wordDefinitions: {
			
		},
		compactDescription1: "Vermeide es, den Nutzer durch unreflektierte oder unklare Informationen unbewusster Beeinflussung auszusetzen.",
		compactDescription2: "Gib dem Nutzer die Möglichkeit, kritisch über dargebotene Informationen zu urteilen, indem der Chatbot Quellen und Erklärungen dazu anbietet.",
		tip: "Welches der beiden Systeme ist transparenter?",
	},{
		id: 3,
		taskDescription: "Wähle die App aus, die der folgenden Richtlinie folgt:",
		guidelineText: "Hohe menschliche Kontrollfähigkeit",
		referencedArticle: {
			title: "Kontrolle durch Menschen",
			thumbnail: referencedArticleThumbnail,
		},
		option1: task3Do,
		option2: task3Dont,
		answer: 1,
		alt1: "Ein Chatbot, der Nutzende vor der Formulierung und dem Absenden einer E-Mail um eine Bestätigung bittet.",
		alt2: "Ein Chatbot, der für Nutzende eine E-Mail konzipiert und sie abschickt.",
		explanation: "Während der Interaktion mit Nutzenden sollte der Chatbot stets Möglichkeiten bieten, die Interaktion oder die momentan ausgeführte Aktion abzubrechen. Außerdem sollte der Nutzer regelmäßig und während kritischer Punkte um Feedback gebeten werden, bevor Aktionen ausgeführt werden.",
		wordDefinitions: {
			
		},
		compactDescription1: "Integriere möglichst viele Wege für Nutzende, die momentane Konversation oder einzelne Aktionen abzubrechen.",
		compactDescription2: "Vermeide es, Nutzende uninteressanten Konversationen auszusetzen oder keinen Ausweg zu bieten.",
		tip: "Welche Interaktion wäre dir lieber? Was denkst du passiert in beiden Fällen, bei Fehlern seitens des Nutzenden?",
	}
];
