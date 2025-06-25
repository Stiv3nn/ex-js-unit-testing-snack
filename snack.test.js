const { getInitials, createSlug, average } = require("./snack.js")

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