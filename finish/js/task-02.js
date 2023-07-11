// Task 2

// JSON объект со списком данных (data), и условием для обработки (condition):

let myObject = [{ "user": "mitrofanov.322@gmail.com", "rating": 10, "disabled": false },
{"user": "madaradayada@gmail.com", "rating": 25, "disabled": false},
{"user": "groover@gmail.com", "rating": 40, "disabled": true},
{"user": "kryshitel@gmail.com", "rating": 38, "disabled": true}]

console.log(typeof myObject)

let json = JSON.stringify(myObject)

console.log(typeof json)

let rating = JSON.parse(json).sort(function(a, b) {
    return a.rating - b.rating;
}); 
console.log(rating)
// Сортировка по rating

let user = JSON.parse(json).sort(function(a, b) {
    return ((a.user === b.user) ? 0 : ((a.user > b.user) ? 1 : -1));
});
console.log(user);
// Сортировка по user
