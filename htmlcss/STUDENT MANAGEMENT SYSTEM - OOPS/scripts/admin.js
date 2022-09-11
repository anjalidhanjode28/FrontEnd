
let Data = JSON.parse(localStorage.getItem("personInformation")) || [];

Data.forEach(element => {
    let div = document.createElement("div");

    let h2 = document.createElement("h2");
    h2.innerText = element.username;

    let remove = document.createElement("button");
    remove.innerText="Remove";
    div.append(h2,remove);
    document.getElementById("container").append(div);
});