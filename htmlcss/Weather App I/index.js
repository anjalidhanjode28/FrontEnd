
function borderNone(){
    console.log("yes");
    document.getElementById("city").style.borderColor = "red";
}
let key = `0c0ea16d5295d828347a735e5188b21f`;

let data;

async function getWeather(){
    try{
        let city = document.getElementById("city").value;
        let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`);

        data = await res.json();
        console.log("data",data);

        addData(data);

    }catch(err){
        console.log(err);
    }
}


function addData(data){

    document.getElementById("container").innerHTML=null;

    let div = document.createElement("div");
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    let div3 = document.createElement("div");
    let div4 = document.createElement("div");
    let div5 = document.createElement("div");
    let div6 = document.createElement("div");


    let time = document.createElement("p");
    time.innerText = `Aug 4, 11:51am`;

    let name = document.createElement("h1");
    name.innerText = `${data.name}, GB`;
 
    let temp = document.createElement("h1");
    temp.innerText = `⛅${data.main.temp} °C`;

    let feels_like = document.createElement("h4");
    feels_like.innerText = `Feels like ${data.main.feels_like}°C Scattered clouds. Gentel Breeze`;

    let humidity = document.createElement("p");
    humidity.innerText = `Humidity - ${data.main.humidity} %`;


    let devpoint = document.createElement("p");
    devpoint.innerText = "Dev point = 13 °C";

    let uv = document.createElement("p");
    uv.innerText = `UV: 4`;

    let pressure = document.createElement("p");
    pressure.innerText = `⟲ Pressure - ${data.main.pressure} hPa`;


    let windSpeed = document.createElement("p");
    windSpeed.innerText = `➤${data.wind.speed} m/s WNW`;

    
    let visibility = document.createElement("p");
    visibility.innerText = `Visibility ${data.visibility/1000}`;


    div5.append(windSpeed,humidity,devpoint);
    div6.append(pressure,uv,visibility);
    div3.append(time,name,temp,feels_like);
    div4.append(div5,div6);
    div1.append(div3,div4);
    div.append(div1,div2);

    document.getElementById("container").append(div);
    
    let map = document.getElementById("gmap_canvas");
    map.src = `https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`
}