const fetchData = require('../utils/fetch');
const API = 'https://rickandmortyapi.com/api/character/';

const anotherFunction = async (url_api) => {
    try{
        const data = await fetchData(url_api)
        const character = await fetchData (`${API}${data.results[8].id}`);
        const origin = await fetchData(character.origin.url);

        //console.log(data.info.count);
        console.log(character.name);
        console.log(origin.dimension);
        console.log(character.species);

    }catch (error){
        console.error(error);
    }
}
const otroPersonaje = async (url_api) => {
    try{
        const data = await fetchData(url_api)
        const personaje = await fetchData (`${API}${data.results[0].id}`);
        console.log(personaje.name);
        console.log(personaje.status);

    } catch (error){
        console.error(error);

    }

}


console.log('Before');
anotherFunction(API);
console.log('After');
otroPersonaje(API);