
let datas = JSON.parse(localStorage.getItem("addDtainnewformate"));

let box2 = document.getElementById("box2");

  datas.forEach(({snippet:{title},id:{videoId}}) => {

      let div = document.createElement("div");
      
      let iframe = document.createElement("iframe");

      iframe.src = `https://www.youtube.com/embed/${videoId}`;
      iframe.width = `100%`;
      iframe.height = `100%`;

      iframe.allow = `fullscreen`;

      let name = document.createElement('h5');
      name.innerText = title;

      div.append(iframe, name);
      box2.append(div);
      console.log(title,videoId);
  });


