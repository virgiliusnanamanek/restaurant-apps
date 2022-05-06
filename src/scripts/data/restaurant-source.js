import API_ENDPOINT from '../globals/api-enpoint';

class RestaurantSource {
  static async restaurantLists() {
    const resp = await fetch(API_ENDPOINT.LISTS);
    const respJson = await resp.json();
    return respJson.restaurants;
  }

  static async detailRestaurantListById(id) {
    const resp = await fetch(API_ENDPOINT.DETAILS(id));
    const respJson = await resp.json();
    return respJson.restaurant;
  }
}
export default RestaurantSource;
