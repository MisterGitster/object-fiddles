//Create an object called me. Give it a key of name with the value being your name, and another key of age with the value being your age. Then alert your name using dot notation.

//code here
var me = {
    name: 'Josh',
    age: 'age',
}

alert(me.name);


//Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday. Have the values to those keys be your favorite thing in that category. 

var favoriteThings = {
    band: "Collective Soul",
    food: "Wings",
    person: "Dad",
    book: "DaVinci Code",
    movie: "Saving Private Ryan",
    holiday: "Christmas"
};


//After you've made your object, add another key named 'car' with the value being your favorite car and then another key named 'brand' with the value being your favorite brand.

favoriteThings.car = "Corolla";
favoriteThings.brand = "Toyota";


//Now change the food key in your favoriteThings object to be 'Lettuce' and change the book key in your favoriteThings object to be '50 Shades of Gray'. 

favoriteThings.food = "Lettuce";
favoriteThings.book = "50 Shades of Gray";


//Now, alert your favorite person, then alert your favorite book.

alert(favoriteThings.person);
alert(favoriteThings.book);

//Create an empty Object called backPack. Now, create a variable called 'item' and set it equal to firstPocket. Now, using bracket notation, add whatever 'item' represents as a property (or key) on the backPack object and set it's value equal to 'chapstick'. Now using dot notation add a key (or property) to your backPack object that is named color, with the value being the color of your backpack. 

var backPack = {
}
var item = "firstPocket";

backPack[item] = "chapstick";
backPack.color = "blue";


//After you do the above, alert your entire backPack object.

alert(backPack);


//You probably noticed that it just alerted [Object Object]. Alerting to see the data in your Object doesn't work so well. Instead, console.log your whole backPack object and then check out the console.

var backPack = {
}
var item = "firstPocket";

backPack[item] = "chapstick";
backPack.color = "blue";

console.log(backPack);

//Create another 'me' object with the following properties name, age, height, gender, married, eyeColor, hairColor. Fill those properties in with the appropriate values.

var me = {
    name: "josh",
    age: 31,
    height: "6'1",
    gender: "male",
    married: "no",
    eyeColor: "hazel",
    hairColor: "brown"
}


//Now, loop through your object and alert every value. *Tyler --> 24 --> 6'0 --> Male, etc etc

for (var key in me) {
    alert(me[key]);
}