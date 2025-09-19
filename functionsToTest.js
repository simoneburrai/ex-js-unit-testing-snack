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


module.exports = {
    getInitials,
    createSlug,
    average
}