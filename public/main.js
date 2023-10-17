let myButton = document.querySelector('button')
let myDiv = document.querySelector('div')

myButton.addEventListener('click', () => {
    axios.get('/meme')
    .then((response) => {
        let memeName = response.data
        myDiv.innerHTML = ''
        
        let newM = document.createElement('p')
        newM.innerHTML = memeName
        myDiv.appendChild(newM)
    })
    .catch((err) => {
        console.log(err)
    })
})