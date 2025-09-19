const {getInitials} = require("./functionsToTest.js")



test("GetInitials restituisce le iniziali di un nome completo", ()=>{
    expect(getInitials("Simone Burrai")).toBe("S B");
    expect(getInitials("Andrea Antonio Gonzalo")).toBe("A A G");
     expect(getInitials("Andrea antonio Gonzalo")).toBe("A A G");
})

