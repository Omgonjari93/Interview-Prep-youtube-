var mix = [1, "d", "e", 2, 3];
var numbers = [];
var characters = [];
mix.forEach((element) => {
  if (typeof element === "string") {
    characters.push(element);
  } else {
    numbers.push(element);
  }
});

console.log(numbers);
console.log(characters);