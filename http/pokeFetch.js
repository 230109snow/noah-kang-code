//workbook example to work on - Random Pokemon Pulled by Type
function getRandomPokemon(){
    let typeStringArr = new Array('', 'normal', 'fighting', 'flying', 'poison', 'ground', 'rock', 'bug', 'ghost', 'steel', 'fire', 'water', 'grass', 'electric', 'psychic', 'ice', 'dragon', 'dark', 'fairy');
    let randomIndex = 0;
    const typeToLookUp = document.getElementById("type-pokemon").value;
    fetch(`https://pokeapi.co/api/v2/type/${typeToLookUp}`).then((res) => res.json()).then((data) =>{
        console.log(data.pokemon);
        const typeCount = data.pokemon.length;

        randomIndex = Math.round(Math.random()*typeCount);

        let div = document.createElement('div');
        const pokeID = data.pokemon[randomIndex].pokemon.name;
        const typeString = typeStringArr[typeToLookUp];
        div.id = pokeID
        const imgTag2 = document.createElement('img');
        console.log("The type that was input is : " + typeString + " pokeID: " + pokeID)
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokeID}`).then((res2) => res2.json()).then((data2) => {
            imgTag2.src = data2.sprites.front_default;
        })
        imgTag2.width = 200
        div.appendChild(imgTag2);
        document.getElementById('pokeapi-fetch').appendChild(div);
    })
}
