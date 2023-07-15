// defining the api's url
let url = "https://meme-api.com/gimme";

// setting up variables
let title  = document.getElementById('title');
let author = document.getElementById('author');
let memeImg= document.getElementById('memeImg');
let ups    = document.getElementById('upVotes');

// function to fetch meme data
function meme() {
    // code for fetching meme data
    fetch(url).then((data) => {
        // parse JSON response into native JavaScript objects
        return data.json();
    }).then((data) => {
        title.innerHTML  = "Title: " + data.title;
        author.innerHTML = "Author: " + data.author;
        memeImg.setAttribute("src", data.url);
        ups.innerHTML += data.ups;

        // for debugging purpose
        // console.log("Meme:", data);
    });

    // on loading of the document calling the function
    window.onload= function() { meme(); };
}