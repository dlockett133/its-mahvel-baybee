
const key = `ts=8&apikey=1f2c8ca0a08a1f8caa7f0cab071dca30&hash=09ef186eb114f844ac8698e059ea9181`;

let latestComicsurl = `https://gateway.marvel.com/v1/public/comics?${key}&format=comic&formatType=comic&noVariants=true&dateDescriptor=thisWeek&orderBy=-onsaleDate&limit=3`

function lastestComics(url) {

    fetch(url)
    .then(response => response.json())
    .then(data => {
        let comics = data.data.results;
    })

}

lastestComics(latestComicsurl);