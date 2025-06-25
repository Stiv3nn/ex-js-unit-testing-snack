const { getInitial, createSlug } = require("./snack.js")

// 🏆 Snack 1 --> Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione getInitials restituisce le iniziali di un nome completo."

test('La funzione "getInitials" restituisce le iniziali di un nome completo', () => {
    expect(getInitials('Stiven Hoxha')).toBe("S.H.");
});

// ---------------------------------------------------------------------------------------------------------

// 🏆 Snack 2 --> Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione createSlug restituisce una stringa in lowercase."

test('La funzione "createSlug" restituisce una stringa in lowercase', () => {
    expect(createSlug('BOOLEAN')).toBe
});