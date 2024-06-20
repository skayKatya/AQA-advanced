let filmResponse = await fetch(`https://swapi.dev/api/films/3/`);
let filmData = await filmResponse.json();
let planetsUrls = filmData.planets;

for (let i = 1; i < planetsUrls.length; i++) {
	let data1 = await fetch(`https://swapi.dev/api/planets/${i}`)
	let response = await data1.json();
    let residentsUrls = response.residents;
    let planetsNames = response.name
    
let residentsNames = [] 
let residentsObj 

for (let j = 1; j < residentsUrls.length; j++){
    let data2 = await fetch(`https://swapi.dev/api/people/${j}`)
    let people = await data2.json();
    residentsNames.push(people.name)

    residentsObj = {
        planetsName: planetsNames,
        residentsName: residentsNames
    }
}

console.log(residentsObj)
}


// const filmResponse = await fetch('https://swapi.dev/api/films/3')
// const filmData = await filmResponse.json()
// const planets = filmData.planets
// planets.map(async (planet) => {
//     const planetResponse = await fetch(planet)
//     const planetData = await planetResponse.json()
//     const residents = planetData.residents
//     const residentNames = []
//     residents.map(async (resident) => {
//         const residentResponse = await fetch(resident)
//         const residentData = await residentResponse.json()
//         residentNames.push(residentData.name)
//         if(residentNames.length === planetData.residents.length){
//             console.log({planetData: planetData.name, residentNames: residentNames})
//         }
//     })  
// })