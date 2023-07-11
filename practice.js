// // PAIR PROGRAMMING PRACTICE // //
// wait until groups have been assigned before you attempt these challenges!
// fork and clone this repo and follow the instructions in this file
// if you've already forked and cloned then feel free to create your own practice.js
// file and copy these intructions into your file


// // GETTING STARTED // //
// To get started, add this line of code to the index.html somewhere in the <head> tag:
// <script defer src="practice.js" charset="utf-8"></script>
// this will allow you to write in this file and see changes on the DOM

// for all the instructions below work in this file, don't amend the html to get your results

// create a new div with an id of .movie-posters and append it to the body
const moviePosters = document.createElement('div');
moviePosters.id = 'movie-posters';
const body = document.getElementsByTagName('body')[0];
body.appendChild(moviePosters);


// do this three times:
// find a movie poster you like and add it as an <img> inside the .movie-poster div
const bugsLife = document.createElement('img');
bugsLife.src = `https://lumiere-a.akamaihd.net/v1/images/p_abugslife_19869_f035d6d4.jpeg?region=0%2C0%2C540%2C810`;
moviePosters.appendChild(bugsLife);

const princessBride = document.createElement('img');
princessBride.src = `https://m.media-amazon.com/images/I/7116Aa2ZkRL._AC_UF894,1000_QL80_.jpg`;
moviePosters.appendChild(princessBride);

const cinderella = document.createElement('img');
cinderella.src = `https://lumiere-a.akamaihd.net/v1/images/p_cinderella_20490_a7c83808.jpeg`;
moviePosters.appendChild(cinderella);

// beneath each <img> add the movie title as an <h2>
const bugsLifeTitle = document.createElement('h2');
bugsLifeTitle.innerText = `A Bug's Life`;
moviePosters.insertBefore(bugsLifeTitle, princessBride);

const princessBrideTitle = document.createElement('h2');
princessBrideTitle.innerText = 'Princess Bride';
moviePosters.insertBefore(princessBrideTitle, cinderella);

const cinderellaTitle = document.createElement('h2');
cinderellaTitle.innerText = 'Cinderella';
moviePosters.appendChild(cinderellaTitle);

// further refine the movie posters:
// each movie poster gets its own <div> which includes the poster <img>, the title <h2>
// and a short description <p>
body.removeChild(moviePosters);
const bugDiv = document.createElement(`div`);
const princessDiv = document.createElement(`div`);
const cinderellaDiv = document.createElement(`div`);

const bugD = document.createElement('p');
const princessD = document.createElement('p');
const cinderellaD = document.createElement('p');

bugD.innerText = "Blah!";
princessD.innerText = "Bleh!";
cinderellaD.innerText = "Boo!";

bugDiv.appendChild(bugsLife); // image
bugDiv.appendChild(bugsLifeTitle); // title
bugDiv.appendChild(bugD); // description
body.appendChild(bugDiv); // now append div to body so we can see it

princessDiv.appendChild(princessBride);
princessDiv.appendChild(princessBrideTitle);
princessDiv.appendChild(princessD);
body.appendChild(princessDiv);

cinderellaDiv.appendChild(cinderella);
cinderellaDiv.appendChild(cinderellaTitle);
cinderellaDiv.appendChild(cinderellaD);
body.appendChild(cinderellaDiv);


// once you have the movie posters can you...

// console.log the title and description for the first movie poster?
console.log(bugsLifeTitle);
console.log(bugD);

// change the <img> src, title text, and description text for the second movie poster?
princessBride.src = "https://m.media-amazon.com/images/I/712n+hhjX3L._AC_UF1000,1000_QL80_.jpg";
princessBrideTitle.innerText = "Alt Princess Bride";
princessD.innerText = "This image shows Buttercup in a red dress";


// delete the last movie poster?
body.removeChild(cinderellaDiv);


// // HINTS // //

// given that adding movie posters is a repetetive task, it may be easier to build
// a function that takes in certain arguments and does the work for you...

// Function takes img, title, and description and inserts a new div containing those elements
function createMovieDiv(img, title, desc) {
    // img is a src url; we want a node!
    const movieImg = document.createElement('img'); // this creates the image node ...
    movieImg.src = img; // ... and this sets the content


    // now title ...
    const movieTitle = document.createElement('h2'); // this creates the title node ...
    movieTitle.innerText = title; // and this sets the content

    // now description ...
    const movieDescription = document.createElement('p');
    movieDescription.innerText = desc;

    // create div
    const movieDiv = document.createElement('div');


    // append img, title, and description (in that order!)
    movieDiv.appendChild(movieImg); // image node
    movieDiv.appendChild(movieTitle); // title node
    movieDiv.appendChild(movieDescription); // description node
    body.appendChild(movieDiv); // now append div to body so we can see it
}

const twilightImg = 'https://m.media-amazon.com/images/M/MV5BNDMwNjAzNzYwOF5BMl5BanBnXkFtZTcwMDY5NzcyMw@@._V1_FMjpg_UX1000_.jpg';
createMovieDiv(twilightImg, 'Twilight', 'Some description');

// remember that you need a few steps in order to finally see a dom element on the page:
// create the element
// change attributes like text or src
// append the element
