function getData(data) {
    return data;
}

let myPromise = new Promise(function(resolve,reject){

    setTimeout(function () {
        data = getData();
        if(typeof(data) == "number"){
            if(data%2 === 0){
                resolve ("even");
            }else{
                resolve ("odd");
            }
        }else{
            reject ("error")
        }
    }, 2000);
   
});


myPromise.then(function (res) {
    console.log(res);
});

myPromise.catch(function (error) {
    console.log(error);
});

export default getData
