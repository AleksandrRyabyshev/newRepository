//"use scrict";

class Snackbar {

	constructor() {}

	firstSnackbar() {
		let snackbar = document.getElementById("snackbar");
  		snackbar.className = "show";
		setTimeout(function(){ snackbar.className = snackbar.className.replace("show", ""); }, 3000);
	}

	secondSnackbarText() {
		let text = document.getElementById("input_form").value;
		let snackbarText = document.getElementById("snackbarText");
  		snackbarText.className = "show";
		setTimeout(function(){ snackbarText.className = snackbarText.className.replace("show", ""); }, 3000);
			
			if (text === ""){
				text = "«Input не должен быть пустой»";
				document.getElementById("snackbarText").innerHTML = text;
		
			}else{
				document.getElementById("snackbarText").innerHTML = text;
			}
	}

}


function clickFirstButton() {  // как иначе вызвать через onClick я не придумал:)
	let snackbar = new Snackbar();
	snackbar.firstSnackbar();
}

function getValue(){
	let snackbarText = new Snackbar();
	snackbarText.secondSnackbarText();
}
