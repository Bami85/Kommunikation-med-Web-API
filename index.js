import express from "express";
import axios from "axios";
import { nanoid } from "nanoid";
const app = express()
const port = 4000

app.use(express.json())
app.use("/", express.static("client"))



app.get("/api/book", async (req, res) => {

  try {

    const options = {
      method: 'GET',
      url: 'https://the-cocktail-db.p.rapidapi.com/filter.php',
      params: {i: 'Gin'},
      headers: {
        'X-RapidAPI-Key': 'c798b74540mshb9c1504c7fa626ap1fa30djsn152472b498ed',
        'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
      }
    };

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

  } catch(err) {
    res.status(400).json(err.message)
  }
})


// Lista 
let cocktail = [
  {
    id: nanoid(),
    Name: "Mojito",
    Ingredient: "Rom, Mynt, Lime, Suger, Soda", 
  },
  {
    id: nanoid(),
    Name: "Cosmopolitan",
    Ingredient: "Vodka, Countrau, Lime, Straberry Juice"
  },
  {
    id: nanoid(),
    Name: "Candy Crush",
    Ingredient: "Baccardi Razz, Straberry Liquor, Fanta, Vanilj Monin"
  }
]


app.get("/cocktail", (req, res) => {
  
  try {
    res.json(cocktail)
  } catch (err) {
    res.status(500).json(err.message)
  }
})

//  POST
app.post("/cocktail", (req, res) => {
  
  try {
    if (!req.body || (!req.body.Name || !req.body.Ingredient)) {
      throw new Error("Data was not provided correctly!")
    }

    cocktail.push({...req.body, ...{id: nanoid()}})
    res.json({status: "New cockteil added!"}) 

  } catch (err) {
    res.status(400).json(err.message)
  }

})


app.use((err, req, res, next) => {
  console.log(err.status)
  console.log(err.message)
  res.status(500).json(err)
})

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
})



