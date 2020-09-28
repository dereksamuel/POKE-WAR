import getAPI from '../utils/getAPI';

const Home = async () => {
  const characters = [];
  for (let i = 1; i <= 62; i++) {
    const item = await getAPI(i);
    characters.push(item);
  }

  const view = `
    <div class="Characters">
      <ul>
        ${characters.map(character => `
          <li class="Character-item">
            <a href="#/${character.id}/">
              <img src="${character.sprites.front_default}" alt="${character.name}">
              <h2>${character.name}</h2>
            </a>
          </li>
        `).join()}
      </ul>
    </div>
  `;
  return view;
}

export default Home;
