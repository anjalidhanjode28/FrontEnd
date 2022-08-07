// https://swapi.dev/api/people/?search={your_search_term}

let id;

async function getData(){
    let itemSearched = document.getElementById("itemSearched").value;
    let url = `https://swapi.dev/api/people/?search=${itemSearched}`;

    let result = await fetch(url);
    let data = await result.json();

    console.log(data);
    return data.results;
}

function append(data){
    let container = document.getElementById("results");
    container.innerHTML = null;

    data.forEach(function(elem){
        let name = document.createElement("p");
        name.innerText=elem.name;
        container.append(name);
    });
}



async function main(){
    let data = await getData();
    append(data);
}

function debouncing(func,delay){
    if(id){
        clearTimeout(id);
    }
    id = setTimeout(function(){
        func();
    },delay);
}