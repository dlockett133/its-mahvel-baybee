
const key = `ts=8&apikey=1f2c8ca0a08a1f8caa7f0cab071dca30&hash=09ef186eb114f844ac8698e059ea9181`;

let latestComicsurl = `https://gateway.marvel.com/v1/public/comics?${key}&format=comic&formatType=comic&noVariants=true&dateDescriptor=thisWeek&orderBy=-onsaleDate&limit=3`

function lastestComics(url) {

    let comicsEl = document.querySelectorAll("#comics")
    let captionTitle = document.querySelectorAll(".caption-title")
    let captionBody = document.querySelectorAll(".caption-body")

    fetch(url)
    .then(response => response.json())
    .then(data => {
        let comics = data.data.results;
        for(let i=0; i < comics.length; i++){
            let title = comics[i].title
            let date = comics[i].dates[0].date
            let path = comics[i].images[0].path
            let ext = comics[i].images[0].extension;
            let img = `${path}.${ext}`

            // Sets the image(s) for the carousel
            comicsEl[i].setAttribute("src", img)
            comicsEl[i].setAttribute("alt", title)

            captionTitle[i].textContent = title;

            let formatDate = moment(date).format(`MMMM D, YYYY`);
            captionBody[i].innerHTML = `Published: ${formatDate}`
        }
        
    })
}

lastestComics(latestComicsurl);

let heroesEl = document.querySelectorAll(".heroes")
let heroName = document.querySelectorAll(".hero-name")
let heroImage = document.querySelectorAll(".hero-image")
function heroSearch (hero) {

    let heroSearchUrl = `https://gateway.marvel.com/v1/public/characters?${key}&nameStartsWith=${hero}&orderBy=name&limit=8`

    fetch(heroSearchUrl)
    .then(response => response.json())
    .then(data => {
        let hero = data.data.results;
        for (let i=0; i < hero.length; i++){
            console.log(hero[i])
            let name = hero[i].name
            let path = hero[i].thumbnail.path
            let ext = hero[i].thumbnail.extension
            let img = `${path}/portrait_incredible.${ext}`
            console.log(img)

            // Sets the image(s) for the carousel
            heroImage[i].setAttribute("src", img)
            heroImage[i].setAttribute("alt", `Portrait of ${name}`);
 
            heroName[i].textContent = name
        }
    })
}

heroSearch("hulk");
// Insert Image of comic in background for carousel URGENT