//Translating pokeFetch.js to TypeScript
function getRandomPokemon(){
    let typeStringArr : string[] = new Array('', 'normal', 'fighting', 'flying', 'poison', 'ground', 'rock', 'bug', 'ghost', 'steel', 'fire', 'water', 'grass', 'electric', 'psychic', 'ice', 'dragon', 'dark', 'fairy');
    let randomIndex : number = 0;
    const typeToLookUp : unknown = (document.getElementById("type-pokemon") as HTMLInputElement).value;
    fetch(`https://pokeapi.co/api/v2/type/${typeToLookUp}`).then((res) => res.json()).then((data) =>{
        console.log(data.pokemon);
        const typeCount : number = data.pokemon.length;

        randomIndex = Math.round(Math.random()*typeCount);

        let div : HTMLElement = document.createElement('div');
        const pokeID = data.pokemon[randomIndex].pokemon.name;
        const typeString : string = typeStringArr[typeToLookUp as number];
        div.id = pokeID
        const imgTag2 : HTMLImageElement = document.createElement('img');
        console.log("The type that was input is : " + typeString + " pokeID: " + pokeID)
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokeID}`).then((res2) => res2.json()).then((data2) => {
            imgTag2.src = data2.sprites.front_default;
        })
        imgTag2.width = 200;
        div.appendChild(imgTag2);
        let mainDiv : HTMLElement = (document.getElementById('pokeapi-fetch') as HTMLInputElement);
        mainDiv.appendChild(div);
    })
}
