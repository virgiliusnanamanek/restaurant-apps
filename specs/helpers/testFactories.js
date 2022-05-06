import LikeBtnPresenter from '../../src/scripts/utils/like-btn-presenter';

const createLikeBtnPresenterWithResto = async (resto) => {
  await LikeBtnPresenter.init({
    likeBtnContainer: document.querySelector('#likeBtnContainer'),
    resto,
  });
};
export { createLikeBtnPresenterWithResto };
