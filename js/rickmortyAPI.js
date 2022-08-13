const spinner = document.querySelector("#spinner");
const nav_pagination = document.getElementById("nav-pagination");
const url = 'https://rickandmortyapi.com/api/character';
const characterList = async (url) => {

  const response = await fetch(url);
  const characters = await response.json();
  spinner.style.display = "none";
  paginationCharacters(characters.info);
  console.log(characters);
  
  let cardsBody = ``;
  characters.results.forEach((character, index)=>{
    console.log(character);
    cardsBody += `<div class="flip-card">
    <div class="card-container">
    <div class="character-block">
    <div class="img-container">
    <img src="${character.image}" alt="${character.name}">
    </div>
    <p>#${character.id}</p>
    <p class="name">${character.name}</p>
    </div>
    <div class="character-block-back">
    <div class="info-container">
    <p>Origin: ${character.origin.name}</p>
    <p>Species: ${character.species}</p>
    <p>Gender: ${character.gender}</p>
    </div>
    </div>
    </div>
    </div>`;
  });
  document.getElementById("cardsBody").innerHTML = cardsBody;
}

const paginationCharacters = (info) => {
  
  let preDisable = info.prev == null ? 'disabled' : '';
  let nextDisable = info.next == null ? 'disabled' : '';
    let paginationBody = ``;
  paginationBody += `
  <ul class="pagination">
        <li class="page-item ${preDisable}" id="previous">
          <a class="page-link" href="#" tabindex="-1" onClick="characterList('${info.prev}')">Previous</a>
        </li>
        <li class="page-item ${nextDisable}" id="next">
          <a class="page-link" href="#" onClick="characterList('${info.next}')">Next</a>
        </li>
      </ul>`;

      nav_pagination.innerHTML = paginationBody;
}

characterList(url);