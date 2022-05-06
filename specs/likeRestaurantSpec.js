import FavoriteRestoIdb from '../src/scripts/data/favorite-resto-idb';
import * as TestFactories from './helpers/testFactories';

const addLikeBtnContainer = () => {
  document.body.innerHTML = '<div id="likeBtn"></div>';
};
describe('Like a restaurant', () => {
  beforeEach(() => {
    addLikeBtnContainer();
  });

  it('should show like button when the restaurant has not been liked', async () => {
    await TestFactories.createLikeBtnPresenterWithResto({id: 1});
    expect(document.querySelector('[aria-label="like this movie"]'))
      .toBeTruthy();
  });

  it('should not show inlike button when the restaurant has not been liked', async () => {
    await TestFactories.createLikeBtnPresenterWithResto({id: 1});
    expect(document.querySelector('[aria-label="unlike this restaurant"]'))
      .toBeFalsy();
  });

  it('should be able to like the current restaurant', async () => {
    await TestFactories.createLikeBtnPresenterWithResto({id: 1});
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const resto = await FavoriteRestoIdb.getRestoById(1);
    expect(resto).toEqual({id: 1});
    FavoriteRestoIdb.deleteResto(1);
  });
  it('should not add a like for a restaurant when it is already liked', async () => {
    await TestFactories.createLikeBtnPresenterWithResto({id: 1});
    await FavoriteRestoIdb.putResto({id: 1});
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavoriteRestoIdb.getAllResto()).toEqual([{id: 1}]);
    FavoriteRestoIdb.deleteResto(1);
  });
  it('should not add a like for a restaurant when it has no id', async () => {
    await TestFactories.createLikeBtnPresenterWithResto({});
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavoriteRestoIdb.getAllResto()).toEqual([]);
  });
});
