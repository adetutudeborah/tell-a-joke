let setup = document.getElementById("setup");
let punchlinebtn = document.getElementById("punchlinebtn");
let resetbtn = document.getElementById("resetbtn");
let punchline = document.getElementsByClassName("punchline")[0];
let jokeimg = document.getElementById("joke-img");

const tellAJoke = () => {
   fetch("https://official-joke-api.appspot.com/random_joke")
    .then(res => res.json())
    .then(data => (
        (setup.innerHTML = data.setup), 
        (punchlinebtn.style.display ="inline"), 
        (resetbtn.style.display ="inline"),
        (punchline.innerHTML = data.punchline),
        (jokeimg.src = "https://w7.pngwing.com/pngs/299/815/png-transparent-smiley-laughing-face-happy-laugh-expression-funny-isolated-cute-emotion.png")
                 )
        )
    .catch(err => console.log(err));
};
