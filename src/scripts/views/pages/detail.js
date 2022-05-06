import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createDetailResto } from '../templates/template-creator';
import LikeBtnPresenter from '../../utils/like-btn-presenter';

const Detail = {
  async render() {
    return `
    <div id="resto" class="resto"></div>
    <div id="likeBtn"></div>
      `;
  },

  async afterRender() {
    const restoContainer = document.querySelector('#resto');

    try {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const resto = await RestaurantSource.detailRestaurantListById(url.id);
      restoContainer.innerHTML = createDetailResto(resto);
      LikeBtnPresenter.init({
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
    } catch (err) {
      restoContainer.innerHTML = `Error : ${err}`;
    }
  },
};

export default Detail;
