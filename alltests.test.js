const {
    posts,
    getInitials, 
    createSlug,
    average, 
    createSlugHyphen,
    isPalindrome,
findPostById} = require("./functionsToTest.js")


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


//CREATE SLUG WITH - INSTEAD OF SPACES
test("La funzione createSlugHyphen sostituisce gli spazi con il trattino '-' ", ()=>{
    expect(createSlugHyphen(" Ciao sono simone")).toBe("ciao-sono-simone");
})


//ISPALINDROME
test("La funzione isPalindrome verifica se una determinata stringa sia palindroma o no", ()=>{
    expect(isPalindrome("Anna")).toBeTruthy();
    expect(isPalindrome("simone")).toBeFalsy();
})

test("La funzione createSlug lancia un errore se il titolo è vuoto o non valido.", ()=>{
    expect(()=>createSlugHyphen("Questo è il titolo da controllare!!!")).toThrow()
})





test(" La funzione findPostById restituisce il post corretto dato l’array di post e l’id.", ()=>{
    expect(findPostById(posts, 3)).toEqual({
    id: 3,
    title: "post strano",
    slug: "post-strano"
})
});

test("Ogni post ha le proprietà id, title e slug", () => {
    posts.forEach(post => {
        expect(post).toHaveProperty("id");
        expect(post).toHaveProperty("title");
        expect(post).toHaveProperty("slug");
    });
});


test("La funzione lancia un errore se l'id non è un numero", () => {
    expect(() => findPostById(posts, "4")).toThrow();
    expect(() => findPostById(posts, null)).toThrow();
});