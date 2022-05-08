const assert = require('assert');
const { async } = require('regenerator-runtime');

Feature('Liking Restaurant');

Before(({I}) => {
  I.amOnPage('/#/favorite');
});

Scenario('show an empty restaurant', ({I}) => {
  I.seeElement('.favorite');
  I.see('You don\'t have any Favorite Restaurant', '.message_empty');
});

Scenario('Like a restaurant', async ({ I }) => {
  I.see('You don\'t have any Favorite Restaurant', '.message_empty');

  I.amOnPage('/');
  I.seeElement('.card__text .card__title a');
  const firstResto = locate('card__text .card__title a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.card');
  const firstLikedResto = await I.grabTextFrom('.card__text .card__title');

  assert.strictEqual(firstRestoTitle, firstLikedResto);
});
