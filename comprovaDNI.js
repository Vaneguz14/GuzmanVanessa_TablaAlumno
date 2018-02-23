function comprovaDNI(inputDni){
        var letrasPosibles = 'TRWAGMYFPDXBNJZSQVHLCKET'; // estas son las letras que puede contener un DNI
        var dniPatron = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/i; // este es el patrón que sigue cualquier DNI
     
        var DNIString = inputDni.toString().toUpperCase(); // con esto nos facilitamos la comprobación del DNI
    
        if (!dniPatron.test(DNIString)) return false; // Si la variable DNString NO contiene los patrones del DNI devolverá false
    
        var DNI = DNIString
        var letra = DNIString.substr(-1);
        var posicionLetra = parseInt(DNI.substr(0, 8)) % 23;
    
        if (letrasPosibles.charAt(posicionLetra) === letra) return true; // Esto nos sirve para comprobar que la letra insertada corresponde a los números del DNI
    
        return false;
    
}