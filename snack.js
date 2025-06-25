// (SNACK 1)
function getInitials(nomeCompleto) {
   const [nome, cognome] = nomeCompleto.split(" "); // LE VIRGOLETTE CON LO SPAZIO MI CREANO UN'ARRAY DI TUTTO CIO' CHE C'E' PRIMA E DOPO LO SPAZIO DI ("Stiven Hoxha"), QUNIDI MI CREA UN ARRAY DI STIVEN E UN ARRAY DI HOXHA 
   return `${nome.charAt(0)}.${cognome.charAt(0)}.`;
}

// ---------------------------------------------------------------------------------------------------------

// (SNACK 2)
function createSlug(stringa){
    return stringa.toLowerCase().replaceAll(" ", "-");
}

// ---------------------------------------------------------------------------------------------------------

//  (SNACK 3)
function average(numeri) {
    let somma = 0;
    numeri.forEach(numero => {
        somma += numero;
    });
    return somma / numeri.length;
}

// ---------------------------------------------------------------------------------------------------------

//  (SNACK 5)
function isPalindrome(parola) {
    const parolaInversa = parola.split('').reverse().join('');
    return parola === parolaInversa;
}










module.exports = {
    getInitials,
    createSlug,
    average,
    isPalindrome
};