const getInitials = (name) => {
    const separatedNames = name.split(" ");
    let initialString = "";
    separatedNames.forEach(name =>{
        const currentIndexName = separatedNames.indexOf(name);
        if(currentIndexName === separatedNames.length - 1){
            initialString += `${name[0].toUpperCase()}`
        }else{
            initialString += `${name[0].toUpperCase()} `
        }
    })
    return initialString;
}

const createSlug = str => {
    let lowerCaseString = str.toLowerCase();
    const spacedRemovedString =  lowerCaseString.split("").filter(char => char !== " ");
    let currentString = "";
    spacedRemovedString.forEach(char => {
        currentString += char
    })
    return currentString;
}


const average = (arr)=>{
    return (arr.reduce((acc, num) => acc + num, 0))/arr.length;
}

const createSlugHyphen= str =>{
    const invalidSymbols = "!@#$%^&*()_+={}[]|:;'<>,.?/`~".split("");
    const notTitleValid = str.split("").some(char=> invalidSymbols.includes(char));
    if(!str || notTitleValid){
        throw new Error("Inserire un titolo non vuoto e valido");
    }
   return str.toLowerCase().trim().split(" ").join("-");
}

const isPalindrome = str => {
    return str.toLowerCase() === str.split("").reverse().join("").toLowerCase()
}

const findPostById= (posts, id)=>{
    if (typeof id !== "number") {
            throw new Error("L'id deve essere un numero");
        }
    return posts.find(post => post.id === id)
}

const posts =[
    {
    id: 1,
    title: "post brutto",
    slug: "post-brutto"
}, 
{
    id: 2,
    title: "post bello",
    slug: "post-bello"
},
 {
    id: 3,
    title: "post strano",
    slug: "post-strano"
}];


module.exports = {
    posts,
    getInitials,
    createSlug,
    average,
    createSlugHyphen,
    isPalindrome,
    findPostById
}