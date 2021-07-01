function poke(){
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=100`)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        appendData(data);
    })
}


function appendData(data){
    var x = Math.floor(Math.random()*100)+1;
    var y = Math.floor(Math.random()*100)+1;
    fetch(`https://pokeapi.co/api/v2/pokemon/${x}`)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        stat1 = data.base_experience;
    })
    fetch(`https://pokeapi.co/api/v2/pokemon/${y}`)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        stat2 = data.base_experience;
    })
    if(x === y){
        poke();
        return false;
    }
    var poke1Name= document.getElementById('poke1-name');
    var poke2Name= document.getElementById('poke2-name');
    var poke1Stat = document.getElementById('poke1-stat');
    var poke2Stat = document.getElementById('poke2-stat');
    var poke1Img = document.getElementById('poke1-img');
    var poke2Img = document.getElementById('poke2-img');
    var result = document.getElementById('result');
    
    
    poke1Name.innerHTML = `${data.results[x].name}`;
    poke1Img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${x}.svg`;

    poke2Name.innerHTML = `${data.results[y].name}`;
    poke2Img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${y}.svg`;
    
    poke1Stat.innerHTML = `STATUS : ${stat1}`;
    poke2Stat.innerHTML = `STATUS : ${stat2}`;

    if(stat1 > stat2)
    {
        result.innerHTML = `${data.results[x].name} is the WINNER`;
    }
    if(stat2 > stat1)
    {
        result.innerHTML = `${data.results[y].name} is the WINNER`;
    }
    if(stat1 === stat2){
        result.innerHTML = "DRAW";
    }

}

