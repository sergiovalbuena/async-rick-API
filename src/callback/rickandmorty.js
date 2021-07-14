//instalar en el proyecto  npm install xmlhttprequest --save

let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let URL = 'https://rickandmortyapi.com/api/character/';

function fetchData(url_api, callback) {
    let request = new XMLHttpRequest();
    //abrir un llamado (accion/peticion, lugar, async)
    request.open('GET', url_api, true);
    request.onreadystatechange = function (event) {
        if(request.readyState === 4) {
            if(request.status === 200) {
                callback(null, JSON.parse(request.responseText));
            } else {
                let error = new Error('Error ' + url_api);
                return callback(error, null)
            }
        }
    }
    request.send();
}

fetchData(URL, (error1, data1) => {
    if (error1) return console.error(error1);
    fetchData(URL + data1.results[1].id, (error2, data2) =>{
        if (error2) return console.error(error2);
        fetchData(data2.origin.url, (error3, data3) => {
            if (error3) return console.error(error3);
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
        });
    })
})