const assert = require('assert');
const { async } = require('regenerator-runtime');

Feature('Liking Restaurant');

Before(({I}) => {
  I.amOnPage('/#/favorite');
});

Scenario('show an empty restaurant', ({I}) => {
  I.seeElement('.favorite');
  I.see('', '.restoes');
});

Scenario('Like a restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.seeElement('.card__title a');
  const firstLikeResto = locate('.card__title a').first();
  const firstRestoTitle = await I.grabTextFrom(firstLikeResto);
  I.click(firstLikeResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.card');
  const likedResto = await I.grabTextFrom('.card__title');
  assert.strictEqual(firstRestoTitle, likedResto);
});
