import '../components/content-section';
import RestaurantSource from '../../data/restaurant-source';
import { createRestoList } from '../templates/template-creator';

const Home = {
  async render() {
    return `
        <content-section></content-section>
        `;
  },

  async afterRender() {
    const restoes = await RestaurantSource.restaurantLists();
    const restoList = document.querySelector('#contentlist');
    restoes.forEach((resto) => {
      restoList.innerHTML += createRestoList(resto);
    });
  },
};
export default Home;
