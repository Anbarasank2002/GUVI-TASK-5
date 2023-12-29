//QUESTION 1:

// RESUME DATA IN JSON FARMAT

let resume = {
  Name: "Anbarasank",
  DOB: "06.07.2002",
  gender: "male",
  nationality: "INDIAN",
  maried_status: "single",
  languages_known: ["tamil", "english"],
  degree: "B.E ELECTRONICS AND COMMUNICATION",
  College: "SAVEETHA ENGINERRING CLG",
  percentage_CGPA: "7.83",
  year_of_passing: "2023",
  Skills: ["html", "css", "JavaScript", "sql"],
};
console.log(resume);

// QUESTION 2:
// JSON ITERATE USING FOR LOOP
console.log("JSON ITERATE USING FOR LOOP");
let keys = ["car", "bike", "bicycle", "jeep", "van"];
let values = [1, 2, 3, 4, 5];
let data = {};
for (let i = 0; i < keys.length; i++) {
  data[keys[i]] = values[i];
}
console.log(data);

//JSON ITERATE USING FOR IN
console.log("JSON ITERATE USING FOR IN");
const info = {
  car: "jeep",
  model: "21FE23",
  FUEL: "Petrol",
};
for (let keys in info) {
  console.log(keys + ":", info[keys]);
}

//JSON ITERATE USING FOREACH
console.log("JSON ITERATE USING FOREACH");
let GAME = ["GTA3", "GTA4", "GTA5", "GTA6"];
let items = ["1", "2", "4", "5"];
let DAY = {};
GAME.forEach((GAME, i) => {
  DAY[GAME] = items[i];
});
console.log(DAY);

//JSON ITERAITON USING FOR OF

console.log("JSON ITERAITON USING FOR OF");

let cars = { ford: 1, toyota: 2, honda: 3, volkswagen: "fav" };
let k = Object.keys(cars);
for (let i of k) {
  console.log(`${i} : ${cars[i]}`);
}
