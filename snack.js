// (SNACK 1)
function getInitials(nomeCompleto) {
    const [nome, cognome] = nomeCompleto.split(" "); // LE VIRGOLETTE CON LO SPAZIO MI CREANO UN'ARRAY DI TUTTO CIO' CHE C'E' PRIMA E DOPO LO SPAZIO DI ("Stiven Hoxha"), QUNIDI MI CREA UN ARRAY DI STIVEN E UN ARRAY DI HOXHA 
    return `${nome.charAt(0)}.${cognome.charAt(0)}.`;
}

// ---------------------------------------------------------------------------------------------------------

// (SNACK 2)
function createSlug(stringa) {
    if (!stringa) {
        throw new Error('Titolo non valido');
    }
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

//  ---------------------------------------------------------------------------------------------------------

//  (SNACK 7)
function findPostById(posts, id) {
    if (isNaN(id)) {
        throw new Error(`"${id}" non è un id`);
    }
    posts.forEach(p => {
        if (p.id === undefined ||
            p.title === undefined ||
            p.slug === undefined
        ) {
            throw new Error('L\'array posts non è nel formato corretto');
        }
    })
    return posts.find(p => p.id === id) || null;
}








module.exports = {
    getInitials,
    createSlug,
    average,
    isPalindrome,
    findPostById
};