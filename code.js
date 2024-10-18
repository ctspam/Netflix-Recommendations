// variables
var titles = getColumn("Netflix Content", "Title");
var type = getColumn("Netflix Content", "Type");
var inputType = "Movie";
var rating = getColumn("Netflix Content", "Rating");
var inputRating = "R";
var releaseYear = getColumn("Netflix Content", "Release Year");
var inputYear = 2020;
var movshowOutput1 = [];

//screens
onEvent("chooseButton", "click", function( ) {
  setScreen("chooseScreen");
});

//grabs the info from what the user chooses
onEvent("searchButton", "click", function( ) {
  inputType = getText("typeOptions");
  inputRating = getText("ratingOptions"); 
  inputYear = (getText("releaseOptions"));
  setScreen("resultScreen");
  // runs filters
  filterList();
  filterResults();
});

onEvent("restartButton", "click", function( ) {
  setScreen("startScreen");
});

//creates a new list and filter the lists
function filterList() {
  movshowOutput1 = [];
  for (var i = 0; i < type.length; i++) {
    if (inputType == type[i]){
      if (inputRating == rating[i] && inputYear == releaseYear[i]) {
        appendItem(movshowOutput1, titles[i]);
        }
      }
    }
}
  

//filter the results
function filterResults() {
  var results = "";
  for (var i = 0; i < movshowOutput1.length; i++) {
    results = (results + movshowOutput1[i]) + "\n";
  }
  if (movshowOutput1.length == 0){
    setText("movshowOutput2","There are no movies that cater to your choices.");
  }
  else {
    setText("movshowOutput2", "Here is a personalized list of things to watch: " + "\n\n" + results);
  }
}

//random list DONE
onEvent("randomButton", "click", function( ) {
  setScreen("resultScreen");
  randomizer();
});
var id = getColumn("Netflix Content", "id");
var movieshow = getColumn("Netflix Content", "Title"); 
var filteredmovieshow = [];
for (var i = 0; i < id.length; i++) {
    appendItem(filteredmovieshow, movieshow[i]);
}

function randomizer() {
  var movie1 = filteredmovieshow[randomNumber(0, id.length - 1)];
  var movie2 = filteredmovieshow[randomNumber(0, id.length - 1)];
  var movie3 = filteredmovieshow[randomNumber(0, id.length - 1)];
  var movie4 = filteredmovieshow[randomNumber(0, id.length - 1)];
  var movie5 = filteredmovieshow[randomNumber(0, id.length - 1)];
  var text = "\n\n- " + movie1 + "\n\n- " + movie2 + "\n\n- " + movie3 + "\n\n- " 
  + movie4 + "\n\n- " + movie5;
  setText("movshowOutput2", "Here is a list of random things to watch on Netflix: " + text);
}

// inputType != type[i] && inputRating != rating[i] && inputYear != releaseYear[i]
