const FETCH_URL = "https://script.google.com/macros/s/AKfycbzWI6_zEsqcqI4hlvuew3cDTukeA8Tt59kP45lPQiVUZ7mSTaBLa8tyTKcjwsCmM0Ah/exec";

window.onload = async function() {
    const url = FETCH_URL;
    const fetchs = await fetch(url)
        .then(res => res.json())
        .then(data => {
            return data;
        });
    
    const datas = fetchs.datas;

    const searched = document.getElementById("searched");

    if (datas) {
        for (let i = 0; i < datas.length; i++) {
            var div = document.createElement("div");
    
            div.className = "max-w-sm md:max-w-md container mx-auto my-6";
    
            div.innerHTML = `
    <div class="flex justify-start items-center m-2">
    <span class="rounded-full border border-pink-500 p-3 bg-gradient-to-r from-yellow-500 to-pink-500 bg-clip-text text-transparent">
        Pic
    </span>
    <h3 class="font-bold p-4">${ datas[i].title }</h3>
    </div>
    <img src="${ datas[i].img }" class="w-full bg-white my-2" >
    <div class="">
    
    <div>
    <p class="m-2">${ datas[i].description }</p>
    <div class="m-2">
        ${ datas[i].license }
    </div>
            `
            searched.appendChild(div);
        }
        const searching = document.getElementById("searching");
        searching.classList.add("hidden");
    } else {
        const searching = document.getElementById("searching");
        searching.innerHTML = "申し訳ありません。読み込みに失敗しました。"

    }

};