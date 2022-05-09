import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import { createRestoList } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <div class="favorite">
      <h2 class="favorite__heading">Your Favorite Restaurants</h2>
      <div id="restoes" class="restoes">

      </div>
    </div>
        `;
  },

  async afterRender() {
    const restoes = await FavoriteRestoIdb.getAllResto();
    const restoContainer = document.querySelector('#restoes');
    try {
      if (restoes.length === 0) {
        restoContainer.innerHTML = '<div class="message_empty">You don\'t have any Favorite Restaurant</div>';
      }
      restoes.forEach((resto) => {
        restoContainer.innerHTML += createRestoList(resto);
      });
    // eslint-disable-next-line no-empty
    } catch (err) {
      restoContainer.innerHTML = `Error: ${err}`;
    }
  },
};
export default Favorite;
