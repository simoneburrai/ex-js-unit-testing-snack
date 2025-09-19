const {getInitials, createSlug, average} = require("./functionsToTest.js")


//GET INITIALS
test("GetInitials restituisce le iniziali di un nome completo", ()=>{
    expect(getInitials("Simone Burrai")).toBe("S B");
    expect(getInitials("Andrea Antonio Gonzalo")).toBe("A A G");
     expect(getInitials("Andrea antonio Gonzalo")).toBe("A A G");
})


//CREATE SLUG
test("CreateSlug restituisce una stringa in lowercase senza spazi", ()=>{
    expect(createSlug("ciao sono Simone")).toBe("ciaosonosimone");
    expect(createSlug("ciao sono Simone")).toBe("ciaosonosimone");
    expect(createSlug("ciao ma Da Dove VIeni?")).toBe("ciaomadadovevieni?");
})


//AVERAGE FROM ARRAY
test("Average calcola la media aritmetica dato un array di numeri", ()=>{
    expect(average([1, 2, 3, 6])).toBe(3);
})
