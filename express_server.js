const express = require("express");
const app = express();
const PORT = 8080; // default port 8080
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

const urlDatabase = {
  "b2xVn2": "http://www.lighthouselabs.ca",
  "9sm5xK": "http://www.google.com"
};

function generateRandomString() { 
  // random 6 digit, a-z 1-0
  // limit string to 6 characters 
  // place in array 
  // 
let outputString = ""

  const characters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0" ]
 //generate 6 random characters
// assignment; condition; incremient 
 for ( let i=0; i<6; i++) {
  let randomIndex = Math.floor(Math.random() * characters.length)
  let randomCharacter = characters[randomIndex] 
  outputString += randomCharacter 
 //console.log(randomCharacter)
 }
 return outputString;
}

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
app.get("/urls.json", (req, res) => {
  res.json(urlDatabase);
});
app.get("/hello", (req, res) => {
  res.send("<html><body>Hello <b>World</b></body></html>\n");
});
app.get("/urls", (req, res) => {
  const templateVars = { urls: urlDatabase };
  res.render("urls_index", templateVars);
});
app.get("/urls/new", (req, res) => {
  res.render("urls_new");
});
app.get("/urls/:id", (req, res) => {
  const templateVars = { id: req.params.id, longURL: urlDatabase[req.params.id]/* What goes here? */ };
  res.render("urls_show", templateVars);
});
app.post("/urls", (req, res) => {
  console.log(req.body); // Log the POST request body to the console
  // Need the LongUrl as a variable 
  // Need ID as a variable
  // Need to create object  the follows the formate id:URL 
  // Add this object into URL database 
  res.send("Ok"); // Respond with 'Ok' (we will replace this)
});