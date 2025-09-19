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


module.exports = {
    getInitials
}