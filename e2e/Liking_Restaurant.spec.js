const assert = require('assert');

Feature('Liking Restaurant');

Before(({I}) => {
  I.amOnPage('/#/favorite');
});

Scenario('show an empty restaurant', ({I}) => {
  I.seeElement('.favorite');
  I.see('You don\'t have any Favorite Restaurant', '.message_empty');
});

Scenario('Like and dislike a restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.wait(1);
  I.seeElement('.content__list .resto-item');
  const firstResto = locate('.card__title .resto__name').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.wait(1);
  I.click(firstResto);
  I.seeElement('#likeButton');
  I.wait(1);
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.seeElement('.favorite .restoes .resto-item');
  const likedRestoName = await I.grabTextFrom('.card__title');
  assert.strictEqual(firstRestoTitle, likedRestoName);
  I.wait(1);
  I.click(firstResto);
  I.seeElement('#likeButton');
  I.wait(1);
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.dontSeeElement(firstResto);
  I.see('You don\'t have any Favorite Restaurant', '.message_empty');
});
