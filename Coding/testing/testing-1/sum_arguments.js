

function sum(...args){

    if(arguments.length === 0){
        return "Sum function should be invoked with atleast 2 arguments";
    }
    else if(arguments.length === 1){
        return "Sum function needs one more argument";
    }

    // a = Number(a);
    // b = Number(b);
    // return a+b;

    const sumValue = [...args].reduce((a, c) => a + Number(c), 0);
    return Number(sumValue);
}

module.exports = sum;