import getHash from '../utils/getHash';
import getAPI from '../utils/getAPI';

const Character = async () => {
  const id = getHash();
  const character = await getAPI(id);
  const view = `
    <section class="Character-inner">
      <figure class="Characters-card">
        <img src="${character.sprites.front_default}" alt="${character.name}">
        <img src="${character.sprites.back_shiny}" alt="${character.name}">
        <img src="${character.sprites.front_shiny}" alt="${character.name}">
        <img src="${character.sprites.back_default}" alt="${character.name}">
        <figcaption>${character.name}</figcaption>
      </figure>
      <article class="Character-card">
        <h3>Moves:</h3>
        <ul>
          ${character.moves.map(item => `
            <li>${item.move.name}</li>
          `)}
        </ul>
        <h3>Types:</h3>
        <ul>
          ${character.types.map(item => `
            <li>${item.type.name}</li>
          `)}
        </ul>
        <h3>Species:<span>
          ${character.species.name}
        </span></h3>
        <h3>Weight: <span>${character.weight}kg</span></h3>
        <h3>Abilities:</h3>
        <ul>
          ${character.abilities.map(item => `
            <li>${item.ability.name}</li>
          `)}
        </ul>
      </article>
    </section>
  `;
  return view;
}

export default Character;
