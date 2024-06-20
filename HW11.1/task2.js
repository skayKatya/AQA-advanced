//2.1

// let starships = [];

// fetch(`https://swapi.dev/api/people/14/`)
//     .then((res) => res.json())
//     .then((json) => {
//         starships = json.starships;
        
//         starships.forEach((starship) => {
//             fetch(starship)
//                 .then((res) => res.json())
//                 .then((json) => console.log(json.name))
//         });
//     })


2.2


    let data = await fetch(`https://swapi.dev/api/people/14/`);
    let person = await data.json();

    let starships = person.starships;

    for (let starship of starships) {
        let starshipData = await fetch (starship);
        let starshipName = await starshipData.json();

        console.log(starshipName.name);
    }
  


