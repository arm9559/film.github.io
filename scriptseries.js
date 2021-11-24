let request = 'https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json'

let main = document.querySelector('.series-section')
const xhr = new XMLHttpRequest()
xhr.open('GET', request)

xhr.onload = () => {
    let users = JSON.parse(xhr.response)
    let array = users.entries
    let arrayMovie = array.filter(element => element.programType == 'series' && element.releaseYear>=2010)
    let seriesSort  = arrayMovie.sort((a,b)=>{
        if(a.title<b.title){
            return -1
        }if(a.title > b.title){
            return 1
        }
        return 0
      })
seriesSort.forEach(element => {
    let movieBlock = document.createElement('div')
    movieBlock.setAttribute('class','style-block')
    movieBlock.classList.add('movies-block')
    main.append(movieBlock)
    movieBlock.innerHTML = ` <a href="#"><img src="${element.images['Poster Art'].url}" /></a>
<p>${element.title}</p> <h5>${element.releaseYear}</h5>`
});
}
xhr.send()