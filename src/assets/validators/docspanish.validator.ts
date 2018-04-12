import { FormControl } from '@angular/forms';

export class DocSpanishValidator {
  //metodo que comprueba si es un documento válido (nie / nif / pasaporte)	
  static notValidNifNiePassport(fc: FormControl){

  	var validChars = 'TRWAGMYFPDXBNJZSQVHLCKET';
	var nifRexp = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/i;
	var nieRexp = /^[XYZ]{1}[0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/i;
	var passportRexp = /^[a-z]{3}[0-9]{6}[a-z]?$/i;
	var str = fc.value.toString().toUpperCase();

    if(str){
	    if(!nifRexp.test(str) && !nieRexp.test(str) && !passportRexp.test(str)){
	     	return ({notValidNifNiePassport: true});
	    } else {
			var nie = str.replace(/^[X]/, '0').replace(/^[Y]/, '1').replace(/^[Z]/, '2');
			var letter = str.substr(-1);
			var charIndex = parseInt(nie.substr(0, 8)) % 23;

			if (validChars.charAt(charIndex) === letter){
				return (null);
			} else{
				return ({notValidNifNiePassport: true});
			}
	    }
	} else{ 
		//Si no hemos introducido nada en el campo que no salte el error, ya está el required
		return (null);
	}
  }

  //metodo que comprueba si es un email válido
  static notValidEmail(fc: FormControl){

	//var emailRexp = /^[\w]+@{1}[\w]+\.+[a-z]{2,3}$/i;
	var emailRexp = /^(?=[^@]{4,}@)([\w\.-]*[a-zA-Z0-9_]@(?=.{4,}\.[^.]*$)[\w\.-]*[a-zA-Z0-9]\.[a-zA-Z][a-zA-Z\.]*[a-zA-Z])$/i;
	var str = fc.value.toString().toUpperCase();

    if(str){
	    if(!emailRexp.test(str)){
	     	return ({notValidEmail: true});
	    } else {
			return (null);
	    }
	} else{ 
		//Si no hemos introducido nada en el campo que no salte el error, ya está el required
		return (null);
	}
  }  
}