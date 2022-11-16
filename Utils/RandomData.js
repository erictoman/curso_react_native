//Return 100 random names
const getRandomNames = () => {
    let names = [];
    for (let i = 0; i < 100; i++) {
        names.push({id:i,nombre:getRandomName()});
    }
    return names;
}

//Return a random name
const getRandomName = () => {
    let names = ["Eric", "Raul", "Jose", "Pablo"];
    return names[Math.floor(Math.random() * names.length)];
}


export {getRandomNames}