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
	     	return ({validNifNiePassport: true});
	    } else {
			var nie = str.replace(/^[X]/, '0').replace(/^[Y]/, '1').replace(/^[Z]/, '2');
			var letter = str.substr(-1);
			var charIndex = parseInt(nie.substr(0, 8)) % 23;

			if (validChars.charAt(charIndex) === letter){
				return ({validNifNiePassport: false});
			} else{
				return ({validNifNiePassport: true});
			}
	    }
	} else{ 
		//Si no hemos introducido nada en el campo que no salte el error, ya está el required
		return (null);
	}
  }
}