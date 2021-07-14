const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!');
        } else {
            reject('Whooops!');
        }
    });
};

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));


const someWillHappen = () => {
    return new Promise((resolve, reject) => {
        if(true) {
            setTimeout(()=>{
                resolve('True');
            }, 2000)
        } else {
            const error = new Error('Whoooops!');
            reject(error);
        }
    });
}

someWillHappen()
.then(response => console.log(response))
.catch(err => console.log(err));

Promise.all([somethingWillHappen(), someWillHappen()])
.then(response => {
    console.log('array of results', response);
})
.catch(err => {
    console.error(err);
})