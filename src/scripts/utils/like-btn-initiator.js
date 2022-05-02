import FavoriteRestoIdb from '../data/favorite-resto-idb';
import {
  createLikeButton,
  createLikedButton,
} from '../views/templates/template-creator';

const LikeButtonInitiator = {
  async init({ likeBtn, resto }) {
    this._likeBtn = likeBtn;
    this._resto = resto;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._resto;

    if (await this._isRestoExist(id)) {
      this._renderLiked();
    } else {
      return this._renderLike();
    }
  },

  async _isRestoExist(id) {
    const resto = await FavoriteRestoIdb.getRestoById(id);
    return !!resto;
  },

  _renderLike() {
    this._likeBtn.innerHTML = createLikeButton();

    const likeButton = document.querySelector('#likeBtn');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestoIdb.putResto(this._resto);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeBtn.innerHTML = createLikedButton();

    const likeButton = document.querySelector('#likeBtn');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestoIdb.deleteResto(this._resto.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
