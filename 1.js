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
const refs = {
    start: document.querySelector('[data-action="start"]'),
    stop: document.querySelector('[data-action="stop"]'),
    bodyColor: document.body.style.backgroundColor
}

const starter = () => {
    timerID = setInterval(() => document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)], 1000);
    refs.stop.addEventListener('click', stopper);
    refs.start.removeEventListener('click', starter);
    
}
const stopper = () => {
    clearInterval(timerID);
    refs.start.addEventListener('click', starter);
}
refs.start.addEventListener('click', starter);
