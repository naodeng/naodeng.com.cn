async function getMod() {
						return import('./QA-Glossary-Wiki-availability-testing_CinPQ_Y3.mjs');
					}
					const collectedLinks = [];
					const collectedStyles = [];
					const defaultMod = { __astroPropagation: true, getMod, collectedLinks, collectedStyles, collectedScripts: [] };

export { defaultMod as default };
