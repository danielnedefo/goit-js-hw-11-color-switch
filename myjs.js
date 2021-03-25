const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const start = document.querySelector('[data-action="start"]')
const stop = document.querySelector('[data-action="stop"]')

function changeColor(arr) {
  let number = randomIntegerFromInterval(0, 5)
  for (let i = 0; i < arr.length; i++){
    if (arr.indexOf(arr[i]) === number) {
    document.body.style.backgroundColor = arr[i]
    }
  }
}
let change = null;
start.addEventListener('click', function () {
  change = setInterval(changeColor, 1000, colors)
  start.disabled = true
  stop.disabled = false
})
stop.addEventListener('click', function () {
  clearInterval(change)
  stop.disabled = true
  start.disabled = false
})


