const messages = {
	en: {
	},
    de: {
		"stat": {
			"physique": {
				"name": "Statur",
				"abbr": "STA",
				"desc": "Statur",
			},
			"reflexes": {
				"name": "Reflexe",
				"abbr": "REF",
				"desc": "Reflexe",
			},
			"wits": {
				"name": "Verstand",
				"abbr": "VER",
				"desc": "Verstand",
			},
			"sense": {
				"name": "Sinne",
				"abbr": "SIN",
				"desc": "Sinne",
			},
			"empathy": {
				"name": "Empathie",
				"abbr": "EMP",
				"desc": "Empathie",
			},
		},

		"talentgroup": {
			"daredevil": {
				"name": "Draufgänger",
				"description": "Draufgänger",
			},
			"theorist": {
				"name": "Theoretiker",
				"description": "Theoretiker",
			},
			"visionary": {
				"name": "Visionär",
				"description": "Visionär",
			},
			"trickster": {
				"name": "Trickser",
				"description": "Trickser",
			},
			"agent": {
				"name": "Vermittler",
				"description": "Vermittler",
			},
			"leader": {
				"name": "Anführer",
				"description": "Anführer",
			},
		},

		"talent": {
			"melee": {
				"name": "Nahkampf",
				"description": "Krass nahkampf alter",
			},
			"shield": {
				"name": "Schild",
				"description": "a",
			},
			"sidearm": {
				"name": "Faustfeuerwaffe",
				"description": "a",
			},
			"assaultrifle": {
				"name": "Sturmgewehr",
				"description": "a",
			},
			"sniperrifle": {
				"name": "Präzisionsgewehr",
				"description": "a",
			},
			"heavygun": {
				"name": "Schwere Waffe",
				"description": "a",
			},
			"willpower": {
				"name": "Willenskraft",
				"description": "a",
			},
			"constitution": {
				"name": "Konstitution",
				"description": "a",
			},
			"observe": {
				"name": "Observieren",
				"description": "a",
			},
			"dodge": {
				"name": "Ausweichen",
				"description": "a",
			},
			"survival": {
				"name": "Überleben",
				"description": "a",
			},
			"mechanics": {
				"name": "Mechanik",
				"description": "a",
			},
			"electronics": {
				"name": "Elektronik",
				"description": "a",
			},
			"medicin": {
				"name": "Medizin",
				"description": "a",
			},
			"power": {
				"name": "Stärke",
				"description": "a",
			},
			"tech": {
				"name": "Technik",
				"description": "a",
			},
			"infiltrate": {
				"name": "Infiltrieren",
				"description": "a",
			},
			"mechpilot": {
				"name": "Mechpilot",
				"description": "a",
			},
			"shippilot": {
				"name": "Schiffpilot",
				"description": "a",
			},
			"vehicle": {
				"name": "Schiffpilot",
				"description": "a",
			},
			"manipulate": {
				"name": "Manipulieren",
				"description": "a",
			},
			"command": {
				"name": "Kommandieren",
				"description": "a",
			},
			"zerog": {
				"name": "Null-G",
				"description": "a",
			},
			"hack": {
				"name": "Hacken",
				"description": "a",
			},
		},

		"job": {
			"ranger": {
				"name": "Waldi",
				"description": "Der waldi mit dem bogen und seinem pet. wie immer...",
			},
			"fighter": {
				"name": "Krieger",
				"description": "Der Krieger, ein experte mit allen Waffen",
			},
		},

		"trait": {
			"shieldstuff": {
				"name": "Schildzeug",
				"description": "Dein Umgang mit dem Schild ist supi",
			},
			"bowskill": {
				"name": "Bogenskills",
				"description": "Jeder schuss ein treffer schwesti",
			},
		},

        "range": {
			"self": "Selbst",
			"close": "Nah",
			"ranged": "Fernkampf",
			"selfclose": "Selbst, Nah",
			"selfranged": "Selbst, Fernkampf",
			"closeranged": "Nah, Fernkampf",
			"cloud": "Wolke",
			"far": "Weit",
		},
    },
};

let locale = "de";

function setLocale(newLocale) {
	locale = newLocale;
};

export { setLocale };
export default function translate(key) {
    let keys = key.split('.');
	let obj = messages[locale][keys[0]];

	for (let i = 1; i < keys.length; i++) {
		if (obj === undefined) break;
		obj = obj[keys[i]];
	}
	if (obj === undefined) return '(T)' + key;
    return obj;
}
