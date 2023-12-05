const accessKey = "iJae1yhFpCouFmMI2CJQ3HlGT_Q2gICMVRQ2e9Aw63s"

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreButton = document.getElementById("show-more-button");

let keyword = "";
let page = 1;

async function searchImages(){
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}`

    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;

    results.map((result) =>{
        const image = document.createElement("img");
        image.src = result
    })
}

searchForm.addEventListener("submit",(e) =>{
    e.preventDefault();
    page = 1;
    searchImages();
})