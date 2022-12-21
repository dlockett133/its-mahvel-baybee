
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
        for(i=0; i < comics.length; i++){
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
            captionBody[i].innerHTML = `<strong>Published:</strong> ${formatDate}`
        }
        
    })
}

lastestComics(latestComicsurl);