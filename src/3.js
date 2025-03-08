function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getRandomColor() {
  const colors = ["red", "blue", "green", "yellow"];
  const randomIndex = getRandomInt(colors.length);
  return colors[randomIndex];
}
