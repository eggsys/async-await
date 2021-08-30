const getFruit = async(para) => {
    const fruits = {
        pineapple: '🍍',
        peach: '🍑x',
        strawberry :'🍓',
        test:'test'  
    }
    return fruits[para];
}


/*getFruit('test').then(console.log())
console.log(fruits)
*/



const makeSmoothie = async () => {
    const a = await getFruit('pineapple');
    const b = await getFruit('strawberry');

    return [a, b];
}

makeSmoothie().then(console.log)
