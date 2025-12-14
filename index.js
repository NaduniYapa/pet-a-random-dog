import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const url="https://dog.ceo/api/breeds/image/random";
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});
app.post("/submit", async (req, res)=>{
  const image=await axios.get(url);
  res.render("page.ejs",{image:image.data.message,quote:cuteQuotes[Math.floor(Math.random()*cuteQuotes.length)]});

});
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
const cuteQuotes = [
  "You deserve soft moments today 💛",
  "Someone is wagging their tail just for you 🐾",
  "Tiny reminder: you’re doing great 🌼",
  "Here’s a little sunshine for your heart ☀️",
  "Even on tough days, gentle things find you 🤍",
  "This dog thinks you’re pretty amazing 🐶",
  "Pause for a second… breathe… you’re okay 💫",
  "The world feels warmer with you in it 🌞",
  "Sending you puppy-level comfort 🧡",
  "You are allowed to rest and still be enough 🌷",
  "An animal would 100% choose you 💕",
  "Not everything has to be figured out today 🌼",
  "You bring a soft kind of magic ✨",
  "This is your sign to smile a little 😊",
  "Kindness looks really good on you 🤍",
  "You’re doing better than you think 🌈",
  "Even dogs can feel your good energy 🐾",
  "Today doesn’t need perfection, just you 🌤️",
  "You matter. Like, a lot 💛",
  "Let this moment be gentle on you 🍃"
];

