const characterList = async () => {
  
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const characters = await response.json();
    console.log(characters);

let cardsBody = ``;
characters.forEach((character, index) => {
    console.log(character);
    cardsBody += `<div class="col mt-5">
    <div class="card" style="width: 13rem;">
    <img src="${character.image}" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">${character.name}</h5>
    <p class="card-text">Gender: ${character.gender}</p>
    <p class="card-text">Species: ${character.species}</p>
    </div>
    </div>
    </div>`;
});
document.getElementById("tableUsers").innerHTML = cardsBody;
}

const paginationCharacters = () => {
    let paginationBody = `<li class="page-item"><span class="page-link">Previous</span></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>`;
    document.getElementById("pagination").innerHTML = paginationBody;
}

listUsers();