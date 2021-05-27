const resetButton = document.querySelector('#getReset');
const jokeButton = document.querySelector('#getJoke');
const jokeText = document.querySelector('.container p');
const buttonContainer = document.querySelector('.container')
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
//const data = []
document.addEventListener('DOMContentLoaded', function(){})

  
jokeButton.addEventListener('click', function (e) {
  fetch('https://official-joke-api.appspot.com/jokes/random', {
    header: {
      'Accept': 'application/json'
    }

  })
    .then(res => res.json())
    .then(jokeList => renderJoke(jokeList))

  function renderJoke(haha) {

    const jokeSetup = document.createElement('p')
    jokeSetup.innerText = haha.setup

    const jokePunchline = document.createElement('p')
    jokePunchline.innerText = haha.punchline
    jokeText.append(jokeSetup, jokePunchline)

  }

})

resetButton.addEventListener('click', function pageReload(){
  location.reload()
})

//this is the like button

  
  //renderPunchline(jokeList)
  


   

