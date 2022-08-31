

async function onLoad() {
    await getCocktail()
 
}

const getCocktail = async (event) => {

    try {
        
        const response = await fetch("http://localhost:4000/cocktail")
        const data = await response.json()
        console.log(data)

        for (let i = 0; i < data.length; i++) {
            const cocktail = data[i]
            console.log(cocktail.Name)

        const container = document.getElementById("cockteil")
        let cocktailContainer = document.createElement("div")
        cocktailContainer.classList.add("cockteilDiv")
        let title = document.createElement("a")
        title.innerHTML = cocktail.Name + cocktail.Ingredient
        container.append(cocktailContainer)
        cocktailContainer.append(title) 
        
        }

    } catch(err) {
        console.error(err)
    }
}

const addCocktail = async (event) => {
    
    try {
        
        const newCocktail = {
            Name: "Wisky Souer",
            Ingredient: "Wisky, Lime, Suger, Agg"
        }

        
        const response = await fetch("http://localhost:4000/cocktail", {
            method: "POST", 
            headers: { "Content-Type": "application/json"}, 
            body: JSON.stringify(newCocktail)

        }) 
        
        const data = await response.json()
            console.log(data)

        } catch(err) {
            console.error(err)
        }
    }


    const getOneCockteil =  async (event) => {
        const cockteilId = req.params.id
        
        const cockteil = cockteil.find(function(cockteil) {
            return cockteil.id === cockteilId
        })
    
        res.json(cockteil)
    }

    
document.getElementById("createBtn").addEventListener("click", getCocktail)
document.getElementById("collectBtn").addEventListener("click", addCocktail)
window.addEventListener('load', onLoad) 


    