function Greetings() {
  let input = document.querySelector("input");
  let name = input.value;
  return {
    visited: "Welcome back " + name + "." + " Enjoy your stay!",
    postedName: "Welcome " + name + "!" + " there's no turning back now!",
    didNotPost: "This seems like thin air to me, try put some letters in."
  };
}

function randomImage() {
  let images = [
    "https://ruinmyweek.com/wp-content/uploads/2020/01/mr-succ-memes-21.png",
    "https://ruinmyweek.com/wp-content/uploads/2020/01/mr-succ-memes-7.jpg.webp",
    "https://ruinmyweek.com/wp-content/uploads/2020/01/mr-succ-memes-5.png.webp",
    "https://ruinmyweek.com/wp-content/uploads/2020/01/mr-succ-memes-15.png.webp"
  ];
  let random = images[Math.floor(Math.random() * images.length)];
  return random;
}

function switchBg() {
  body.style.backgroundImage = 'url("' + randomImage() + '")';
}

let body = document.querySelector("body");
if (localStorage.length === 0) {
  let earlierUsers = ["Hejpa", "Dejpa"];
  let stringUsers = JSON.stringify(earlierUsers);
  localStorage.setItem("names", stringUsers);
}

function parseUsers() {
  let stringNames = localStorage.getItem("names");
  let parsedNames = JSON.parse(stringNames);
  return parsedNames;
}

let button = document.querySelector("button");

button.addEventListener("click", () => {
  let users = parseUsers();
  let text = document.querySelector("p");
  let input = document.querySelector("input");
  let controls = document.querySelector(".console");

  if (users.includes(input.value)) {
    let text = document.querySelector("p");
    text.innerText = Greetings().visited;
    controls.classList.toggle("hide");
    setTimeout(() => reveal(), 3000);
    setInterval(() => switchBg(), 3000);
  } else if (input.value == "") {
    text.innerText = Greetings().didNotPost;
  } else {
    users.push(input.value);
    let newUsers = JSON.stringify(users);
    localStorage.setItem("names", newUsers);
    text.innerText = Greetings().postedName;
    setTimeout(() => reveal(), 3000);
    setInterval(() => switchBg(), 3000);
  }
});

function reveal() {
  let wall = document.querySelector(".wrapper");
  wall.style.opacity = "0";
}
