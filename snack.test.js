const { getInitials, createSlug, average, isPalindrome } = require("./snack.js")

// 🏆 Snack 1 --> Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione getInitials restituisce le iniziali di un nome completo."

test('La funzione "getInitials" restituisce le iniziali di un nome completo', () => {
    expect(getInitials('Stiven Hoxha')).toBe("S.H.");
});

// ---------------------------------------------------------------------------------------------------------

// 🏆 Snack 2 --> Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione createSlug restituisce una stringa in lowercase."

test('La funzione "createSlug" restituisce una stringa in lowercase', () => {
    expect(createSlug('BoolEan')).toBe("boolean");
});

// ---------------------------------------------------------------------------------------------------------

// 🏆 Snack 3 Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione average calcola la media aritmetica di un array di numeri."

test('La funzione "average" calcola la media aritmetica di un array di numeri', () => {
    expect(average([5, 15])).toBe(10);
});

// ---------------------------------------------------------------------------------------------------------

// 🏆 Snack 4 --> Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione createSlug sostituisce gli spazi con -."
// 📌 Esempi: createSlug("Questo è un test") → "questo-e-un-test"
test('La funzione createSlug sostituisce gli spazi con -', () => {
    expect(createSlug("Titolo del TESTO")).toBe("titolo-del-testo");
});

// ---------------------------------------------------------------------------------------------------------

// 🏆 Snack 5 --> Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione isPalindrome verifica se una stringa è un palindromo."
// 📌 Nota: una stringa palindroma è una sequenza di caratteri che si legge uguale sia da sinistra a destra che da destra a sinistra.
test('La funzione isPalindrome verifica se una stringa è un palindromo', () => {
    expect(isPalindrome("anna")).toBeTruthy();
    expect(isPalindrome("Boolean")).toBeFalsy();
});

// ---------------------------------------------------------------------------------------------------------

// 🏆 Snack 6 --> Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione createSlug lancia un errore se il titolo è vuoto o non valido."
test('La funzione "createSlug" lancia un errore se il titolo è vuoto o non valido', () => {
    expect(() => createSlug("")).toThrow('Titolo non valido');
    expect(() => createSlug(null)).toThrow('Titolo non valido');
});

