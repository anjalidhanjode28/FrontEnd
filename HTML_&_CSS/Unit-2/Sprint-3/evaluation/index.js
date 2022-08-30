// Write all the Javascript here
document.querySelector("form").addEventListener("submit", inventory);

let array = [];

function inventory(event){

    event.preventDefault();

    let name = document.querySelector("#name").value;
    let category = document.querySelector("#category").value;
    let brand = document.querySelector("#brand").value;
    let price = document.querySelector("#price").value;
    let deliveredBy = document.querySelector("#deliveredBy").value;

    console.log(name,category,brand,price, deliveredBy);

    let object = {
        name: name,
        category: category,
        brand: brand,
        price: price,
        deliveredBy: deliveredBy
    };
    
    array.push(object);
    displayTable(array);
}


function displayTable(array){

    document.querySelector("tbody").innerHTML="";
    let sum=0;
    
    //console.log(array.length);

    array.forEach(function(elem){
        

        let row = document.createElement("tr");

        let col1 = document.createElement("td");
        col1.innerText = elem.name;
       

        let col2 = document.createElement("td");
        col2.innerText = elem.category;
        

        let col3 = document.createElement("td");
        col3.innerText = elem.brand;
        

        let col4 = document.createElement("td");
        col4.innerText = elem.price;
        
        sum=sum+Number(elem.price);

        let col5 = document.createElement("td");
        col5.innerText = elem.deliveredBy;
       

        let col6 = document.createElement("td");
        col6.innerText = "Price Segment";
        if(elem.price > 1000){
            col6.innerText = "Expensive";
            
        }else{
            col6.innerText="Not-Expensive";
        }
        
        let col7 = document.createElement("td");
        col7.innerText = "Delete";
        col7.addEventListener("click", function(event){
            event.target.parentNode.remove();
        });

            row.append(col1,col2,col3,col4,col5,col6,col7);
            document.querySelector("tbody").append(row);
    
    });
    document.getElementById("total-price").innerText="Total Price"+":-"+sum;
    console.log(sum);
}