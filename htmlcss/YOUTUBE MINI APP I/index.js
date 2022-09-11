let addToNewPage=[];

let api_key = `AIzaSyAXTydqrSseo0qa-XbFoxg1TtOIxKW4rnI`;
let url = `https://youtube.googleapis.com/youtube/v3/search?q=brahmastra&key=[YOUR_API_KEY]`;


let container = document.getElementById("search_results");

let getData = async ()=>{
    try{
        let query = document.getElementById("query").value;
        let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${query}&key=${api_key}&part=snippet&maxResults=50`);
        let {items} = await res.json();
        let array_of_vedios = items;
        console.log(array_of_vedios);
        appendVideos(array_of_vedios);

    }catch(err){
        // console.log("error");
    }

}

getData();

// https://i.ytimg.com/vi/raA2yxwKetE/default.jpg

let appendVideos = (data) =>{

    container.innerHTML = null;

    data.forEach(({snippet:{title},id:{videoId}}) => {

        let div = document.createElement("div");
        div.addEventListener("click",function(){
            addToNew({snippet:{title},id:{videoId}});
        })
        let iframe = document.createElement("iframe");

        iframe.src = `https://www.youtube.com/embed/${videoId}`;
        // iframe.src = `https://i.ytimg.com/vi/${videoId}/default.jpg`;
        iframe.width = `100%`;
        //  iframe.height = `120%`;
        iframe.allow = `fullscreen`;

        let name = document.createElement('h5');
        name.innerText = title;

        div.append(iframe, name);
        container.append(div);
        console.log(title,videoId);
    });

    localStorage.setItem("addDtainnewformate",JSON.stringify(data));


    function addToNew({snippet:{title},id:{videoId}}){
        addToNewPage.push({snippet:{title},id:{videoId}});
        console.log(addToNewPage);
        localStorage.setItem("onclicked_video", JSON.stringify(addToNewPage));
        window.location.href="videoPage.html";
    }
}
