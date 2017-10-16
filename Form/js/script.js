
function veriform() {
		var isMale = document.getElementById("monsieur").checked;
		var isFemale = document.getElementById("madame").checked;
		console.log(isMale);

	if (!isMale && !isFemale) {

		alert("Vous devez renseigner votre civilité");
		return false;
	}

	if(document.formulaire.nom.value == "") {
		alert("Merci de renseigner le champs \n\n - Nom \n ");
		return false;
	}

	if(document.formulaire.prenom.value == "") {
		alert("Merci de renseigner le champs \n\n - prénom \n ");
		return false;
	}

	if (!regex.test(document.formul.MailAddress)) {
		alert('Not a valid regex')
	}
		var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-_])+\.)+([a-zA-z]{2,10})$/;
}