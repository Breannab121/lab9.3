//pokeapi GET Method
 /*fetch("https://pokeapi.co/api/v2/pokemon/ditto")
  .then(response => response.json())
  .then(data => console.log("Fetched data:", data))
  .catch(error => console.error("Fetch error:", error));*/


  //Art Inst of Chicago GET
/*fetch("https://api.artic.edu/api/v1/artworks/62735")
  .then(response => response.json())
  .then(data => console.log("Fetched data:", data))
  .catch(error => console.error("Fetch error:", error));*/

//Art Inst of Chicago POST
fetch("https://api.artic.edu/api/v1/artworks/62735", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    title: "Still Life with Car",
    body: "Drawing and Watercolor",
    userId: 1
  })
})
  .then(response => response.json())
  .then(data => console.log("Created post:", data))
  .catch(error => console.error("Error:", error));

  console.log()