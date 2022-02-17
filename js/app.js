const jokes = document.getElementById('dad-jokes');
const jokesText = document.getElementById('joke-text');


let gotJokes= false;




// getting a dad joke
async function getDadJoke(){
    const response = await fetch("https://icanhazdadjoke.com", {
        headers: {
            Accept: "application/json",
        },
    });
    const result = await response.json();
    
    const {joke} = result;
    return joke;
}

async function displayJoke(){
    //jokes.style.visibility="visible";
    const text = await getDadJoke();
    jokesText.innerHTML = text;
}

const hide = function hideJoke(){
    if(gotJokes){
        jokes.style.visibility="hidden";
        gotJokes = false;
    } else{
        jokes.style.visibility="visible";
        gotJokes = true;
    }
    
}


displayJoke();
setInterval(function(){ displayJoke()}, 7000)

//document.addEventListener('onClick', hide)

window.addEventListener("click", () => {
    hide();
  });
