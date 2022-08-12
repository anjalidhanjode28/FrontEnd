let data = JSON.parse(localStorage.getItem("onclicked_video"));
let box = document.getElementById("box");

console.log(data);

   data.forEach(({snippet:{title},id:{videoId}}) => {
    let div = document.createElement("div");

    let iframe = document.createElement("iframe");

    iframe.src = `https://www.youtube.com/embed/${videoId}`;
    iframe.width = `200%`;
    iframe.height = `170%`;
    iframe.allow = `fullscreen`;

    let name = document.createElement("h5");
    name.innerText = title;

    div.append(iframe, name);
    box.append(div);

    console.log(title,videoId);
  });




  