var dkvExpressJson = {
	
	"language": {
		"thankyou": {
            "de": "Vielen Dank für die Bereitstellung der zusätzlichen Informationen.",
            "en": "Thank you for providing the Additional Information.",
            "it": "Grazie per aver fornito le informazioni aggiuntive."
		},
		"sharedDoc": {
            "de": "Bitte klicken Sie auf das Symbol, um zum freigegebenen Dokument zu gelangen und Ihr Ticket zu verfolgen.",
            "en": "Please Click on the Icon to go to the Shared Document and Track your ticket.",
            "it": "Fai clic sull'icona per andare al documento condiviso e tracciare il tuo biglietto."
		},
		"licensePlate": {
            "de": "Nummernschildnummer : M AN 440",
            "en": "License Plate Number : M AN 440",
            "it": "Numero di targa : M AN 440"
		},
		"selectTire":{
            "de": "Bitte wählen Sie den platten Reifen aus.",
            "en": "Please select the flat tire.",
            "it": "Si prega di selezionare la gomma a terra."
        },
		"truckMake": {
            "de": "Truck Make : MAN",
            "en": "Truck Make : MAN",
            "it": "Truck Make : MAN"
		},
		"truckModel": {
            "de": "Modell : D 20 26.430 XXL Jumbo 6x2 chassis 2005 ",
            "en": "Model : D 20 26.430 XXL Jumbo 6x2 chassis 2005 ",
            "it": "Modello di Camion : D 20 26.430 XXL Jumbo 6x2 chassis 2005  "
		},
		"NumberOfAxis": {
            "de": "Anzahl der Axel : 2",
            "en": "Number of Axis : 2",
            "it": "Numero di assi : 2"
        },
		"issue": {
            "de": "Was ist das Problem?",
            "en": "What is the issue?",
            "it": "Qual'è il problema?"
        },
		"describe": {
            "de": "Oder beschreibe das Problem",
            "en": "Or describe the Problem",
            "it": "O escrivi il problema"
        },
        "flattire": {
            "de": "Platter Reifen",
            "en": "Flat tire",
            "it": "Pneumatico piatto"
        },
        "lowbattery": {
            "de": "Batterie leer",
            "en": "Low battery",
            "it": "Batteria scarica\n"
        },
        "trailersocket": {
            "de": "Anhängersteckdose beschädigt",
            "en": "Broken trailer socket",
            "it": "Presa del rimorchio rotta"
        },
        "photo": {
            "de": "Machen Sie ein Foto von der Vorderseite des LKWs",
            "en": "Take a photo of the front of the truck",
            "it": "Scatta una foto della parte anteriore del camion"
        },
        "location": {
            "de": "Bitte teilen Sie Ihren Standort",
            "en": "Please share your location",
            "it": "Si prega di condividere la tua posizione"
        },
        "created": {
            "de": "Vielen Dank. Ihr Ticket wurde erstellt.",
            "en": "Thank you. Your ticket has been created. ",
            "it": "Grazie. Il tuo biglietto è stato creato."
		},
		"AdditionalInfo1": {
            "de": "Wir sind auf dem Weg, dir zu helfen. Lehne Dich zurück und entspanne",
            "en": "We are on our way to help you. Sit back and Relax",
            "it": "Siamo sulla buona strada per aiutarti.Siediti e rilassati"
		},
		"AdditionalInfo2": {
            "de": "In der Zwischenzeit klicken Sie bitte auf Weiter, um uns weitere Details zu geben, die uns helfen, Ihnen besser zu dienen",
            "en": "Meanwhile, Please click next to provide us Additional details, which will  help us to serve you better",
            "it": "Nel frattempo, fai clic su Avanti per fornirci ulteriori dettagli per aiutarci a servirti meglio"
        },
        "flatTire":{
            "de": "Platter Reifen",
            "en": "Flat Tyre",
            "it": "Pneumatico piatto"
        },
        "LowBattery":{
            "de": "Niedriger Batteriestatus",
            "en": "Low Battery",
            "it": "Stato di batteria scarica"
        },
        "TrailerSocket":{
            "de": "Anhänger Steckdose",
            "en": "Trailer Socket",
            "it": "Presa per rimorchio"
        },
		"sparepart":{
			"de": "Bitte geben Sie Details zum Ersatzteil an.",
            "en": "Please define the details of the spare part.",
            "it": "Si prega di definire i dettagli del pezzo di ricambio."
		},
		"tyreBrand":{
			"de": "Bitte wählen Sie die Marke des Reifens.",
            "en": "Please select the Brand of the tyre.",
            "it": "Si prega di scegliere la marca del pneumatico."
		},
    }
};

(function () {
	this.I18n = function (defaultLang) {
		var lang = defaultLang || 'en';
		this.language = lang;

		(function (i18n) {
			i18n.contents = dkvExpressJson;
			i18n.contents.prop = function (key) {
				var result = this;
				var keyArr = key.split('.');
				for (var index = 0; index < keyArr.length; index++) {
					var prop = keyArr[index];
					result = result[prop];
				}
				return result;
			};
			i18n.localize();
		})(this);
	};

	this.I18n.prototype.hasCachedContents = function () {
		return this.contents !== undefined;
	};

	this.I18n.prototype.lang = function (lang) {
		if (typeof lang === 'string') {
			this.language = lang;
		}
		this.localize();
		return this.language;
	};

	this.I18n.prototype.localize = function () {
		var contents = this.contents;
		if (!this.hasCachedContents()) {
			return;
		}
		var dfs = function (node, keys, results) {
			var isLeaf = function (node) {
				for (var prop in node) {
					if (node.hasOwnProperty(prop)) {
						if (typeof node[prop] === 'string') {
							return true;
						}
					}
				}
			}
			for (var prop in node) {
				if (node.hasOwnProperty(prop) && typeof node[prop] === 'object') {
					var myKey = keys.slice();
					myKey.push(prop);
					if (isLeaf(node[prop])) {
						//results.push(myKey.reduce((prev, current) => prev + '.' + current));	//not supported in older mobile broweser
						results.push(myKey.reduce( function (previousValue, currentValue, currentIndex, array) {
							return previousValue + '.' + currentValue;
						}));
					} else {
						dfs(node[prop], myKey, results);
					}
				}
			}
			return results;
		};
		var keys = dfs(contents, [], []);
		for (var index = 0; index < keys.length; index++) {
			var key = keys[index];
			if (contents.prop(key).hasOwnProperty(this.language)) {
				$('[data-i18n="'+key+'"]').text(contents.prop(key)[this.language]);
				$('[data-i18n-placeholder="'+key+'"]').attr('placeholder', contents.prop(key)[this.language]);
				$('[data-i18n-value="'+key+'"]').attr('value', contents.prop(key)[this.language]);
			} else {
				$('[data-i18n="'+key+'"]').text(contents.prop(key)['en']);
				$('[data-i18n-placeholder="'+key+'"]').attr('placeholder', contents.prop(key)['en']);
				$('[data-i18n-value="'+key+'"]').attr('value', contents.prop(key)['en']);
			}
		}
	};

}).apply(window);

function language(ln){
	var img = document.getElementById("languageImage");
	var i18n = new I18n();
	lang_code = ln;
	i18n.localize();
	console.log("REaching here")
	i18n.lang(ln);
	modal.style.display = "none";
	if(ln == 'en'){
		img.src = "images/Language/English.svg"
	}else if(ln == 'it'){
		img.src = "images/Language/Italy.svg"
	}else{
		img.src = "images/Language/germany.png"
	}
	
}
$( document ).ready( function () {

	var i18n = new I18n();
	i18n.localize();
	i18n.lang('en');

});