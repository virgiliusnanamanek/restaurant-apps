import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createDetailResto } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-btn-initiator';

const Detail = {
  async render() {
    return `
    <div id="resto" class="resto"></div>
    <div id="likeBtn"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await RestaurantSource.detailRestaurantListById(url.id);
    const restoContainer = document.querySelector('#resto');
    restoContainer.innerHTML = createDetailResto(resto);

    LikeButtonInitiator.init({
      likeBtn: document.querySelector('#likeBtn'),
      resto: {
        id: resto.id,
        address: resto.address,
        name: resto.name,
        description: resto.description,
        foods: resto.menus.foods,
        drinks: resto.menus.drinks,
        customerReviws: resto.customerReviews,
        city: resto.city,
        pictureId: resto.pictureId,
        rating: resto.rating,
      },
    });
  },
};

export default Detail;
