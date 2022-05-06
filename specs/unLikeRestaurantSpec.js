import FavoriteRestoIdb from '../src/scripts/data/favorite-resto-idb';
import * as TestFactories from './helpers/testFactories';

const addLikeBtnContainer = () => {
  document.body.innerHTML = '<div id="likeBtn"></div>';
};
describe('unlike a restaurant', () => {
  beforeEach(async () => {
    addLikeBtnContainer();
    await FavoriteRestoIdb.putResto({id: 1});
  });
  afterEach(async () => {
    await FavoriteRestoIdb.deleteResto(1);
  });
  it('should display unlike widget when the restaurant has been liked', async () => {
    await TestFactories.createLikeBtnPresenterWithResto({id: 1});
    expect(document.querySelector('[aria-label="unlike this restaurant"]'))
      .toBeTruthy();
  });
  it('should not display like widget when the restaurant has been liked', async () => {
    await TestFactories.createLikeBtnPresenterWithResto({id: 1});
    expect(document.querySelector('[aria-label="like this restaurant"]'))
      .toBeFalsy();
  });
  it('should be able to remove liked restaurant from the list', async () => {
    await TestFactories.createLikeBtnPresenterWithResto({ id: 1 });
    document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));
    expect(await FavoriteRestoIdb.getAllResto()).toEqual([]);
  });
  it('should not throw error if the unliked restaurant is not in the list', async () => {
    await TestFactories.createLikeBtnPresenterWithResto({ id: 1 });
    await FavoriteRestoIdb.deleteResto(1);
    document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));
    expect(await FavoriteRestoIdb.getAllResto()).toEqual([]);
  });
});
