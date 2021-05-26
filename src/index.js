
const button = document.querySelector('.container button');
const jokeText = document.querySelector('.container p');

button.addEventListener('click', getJoke);

async function getJoke(){
  const jokeData = await fetch('https://official-joke-api.appspot.com/jokes/random', {
    headers: {
      'Accept': 'application/json'
    }
  });
  const jokeObj = await jokeData.json();
  console.log(jokeObj)
  //jokeText.innerHTML = jokeObj.joke;
}
  
 
