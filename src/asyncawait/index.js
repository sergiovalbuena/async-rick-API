const doSomethingAsync = () => {
    return new Promise ((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Doing something Async'), 3000)
        : reject(new Error('Test Error'))
    });
}

const doSomethingElse = async () => {
    const something =await doSomethingAsync();
    console.log(something);
}

console.log('before');
doSomethingElse();
console.log('After');

const anotherFx = async () => {
    try {
        const something = await doSomethingAsync();
        console.log(something)
    } catch (error) {
        console.error(error)
    }
}

console.log('before 1');
anotherFx();
console.log('After 1');