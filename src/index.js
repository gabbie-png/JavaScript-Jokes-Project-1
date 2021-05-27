
const jokeButton = document.querySelector('#getJoke');
const jokeText = document.querySelector('.container p');
const resetButton = document.querySelector('#getReset');
const whiteHeart = '\u2661';
const blackHeart = '\u2665';
const heartBtn = document.querySelector('#button');


document.addEventListener('DOMContentLoaded', function(){})

// This fetches data from the API to POST to the page
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

heartBtn.addEventListener('click', toggle);

function toggle() {
  const like = heartBtn.innerHTML;
  if(like===whiteHeart) {
    heartBtn.innerHTML = blackHeart;
  } else {
    heartBtn.innerHTML = whiteHeart;
  }
}
  
  
  


   

