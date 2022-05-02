import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import { createRestoList } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <div class="favotite">
    <h2 class="favotite__heading">Your Favorite Restaurants</h2>
    <div id="restoes" class="restoes">

    </div>
  </div>
        `;
  },

  async afterRender() {
    const restoes = await FavoriteRestoIdb.getAllResto();
    const restoContainer = document.querySelector('#restoes');
    restoes.forEach((resto) => {
      restoContainer.innerHTML += createRestoList(resto);
    });
  },
};
export default Favorite;
