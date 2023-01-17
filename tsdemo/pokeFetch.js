//Translating pokeFetch.js to TypeScript
function getRandomPokemon() {
    var typeStringArr = new Array('', 'normal', 'fighting', 'flying', 'poison', 'ground', 'rock', 'bug', 'ghost', 'steel', 'fire', 'water', 'grass', 'electric', 'psychic', 'ice', 'dragon', 'dark', 'fairy');
    var randomIndex = 0;
    var typeToLookUp = document.getElementById("type-pokemon").value;
    fetch("https://pokeapi.co/api/v2/type/".concat(typeToLookUp)).then(function (res) { return res.json(); }).then(function (data) {
        console.log(data.pokemon);
        var typeCount = data.pokemon.length;
        randomIndex = Math.round(Math.random() * typeCount);
        var div = document.createElement('div');
        var pokeID = data.pokemon[randomIndex].pokemon.name;
        var typeString = typeStringArr[typeToLookUp];
        div.id = pokeID;
        var imgTag2 = document.createElement('img');
        console.log("The type that was input is : " + typeString + " pokeID: " + pokeID);
        fetch("https://pokeapi.co/api/v2/pokemon/".concat(pokeID)).then(function (res2) { return res2.json(); }).then(function (data2) {
            imgTag2.src = data2.sprites.front_default;
        });
        imgTag2.width = 200;
        div.appendChild(imgTag2);
        var mainDiv = document.getElementById('pokeapi-fetch');
        mainDiv.appendChild(div);
    });
}
