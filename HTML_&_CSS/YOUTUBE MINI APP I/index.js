let api_key = `AIzaSyAXTydqrSseo0qa-XbFoxg1TtOIxKW4rnI`;
let url = `https://youtube.googleapis.com/youtube/v3/search?q=brahmastra&key=[YOUR_API_KEY]`;
let container = document.getElementById("search_results");

let getData = async ()=>{
    try{
        let query = document.getElementById("query").value;
        let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${query}&key=${api_key}&part=snippet&maxResults=20`);
        let {items} = await res.json();
        let array_of_vedios = items;
        //console.log(array_of_vedios);
        appendVideos(array_of_vedios);

    }catch(err){
        // console.log("error");
    }
}


let appendVideos = (data) =>{

    container.innerHTML = null;

    data.forEach(({snippet:{title},id:{videoId}}) => {

        let div = document.createElement("div");

        div.onclick = ()=>{
            // openVideoFunc(data);
        localStorage.setItem("onclicked_video", JSON.stringify(data));

        };

        let iframe = document.createElement("iframe");

        iframe.src = `https://www.youtube.com/embed/${videoId}`;
        iframe.width = `100%`;
        iframe.height = `100%`;
        iframe.allow = `fullscreen`;

        let name = document.createElement('h5');
        name.innerText = title;

        div.append(iframe, name);
        container.append(div);
        console.log(title,videoId);
        
        
        
       
    });

    function openVideoFunc(data){
    }
}