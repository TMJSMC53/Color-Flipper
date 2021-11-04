const colors = [
  "#fec5bb",
  "#fcd5ce",
  "#fae1dd",
  "#f8edeb",
  "#e8e8e4",
  "#d8e2dc",
  "#ece4db",
  "#ffe5d9",
  "#ffd7ba",
  "#fec89a",
  "#ffadad",
  "#ffd6a5",
  "#fdffb6",
  "#caffbf",
  "#9bf6ff",
  "#a0c4ff",
  "#bdb2ff",
  "#ffc6ff",
  "#fffffc",
  "#005f73",
  "#0a9396",
  "#94d2bd",
  "#e9d8a6",
  "#ee9b00",
  "#ca6702",
  "#bb3e03",
  "#ae2012",
  "#9b2226",
  "#f6bd60",
  "#f7ede2",
  "#f5cac3",
  "#84a59d",
  "#f28482",
];

const colorDisplay = document.querySelector("#color-display");
const btn = document.querySelector("#btn");

const generatedRandNumber = () => {
  return Math.floor(Math.random() * colors.length);
};

const displayChange = () => {
  const randomNum = generatedRandNumber();

  document.body.style.backgroundColor = colors[randomNum];

  colorDisplay.textContent = colors[randomNum];
};

btn.addEventListener("click", displayChange);
