import CONFIG from './config';

const API_ENDPOINT = {
  LISTS: `${CONFIG.BASE_URL}/list`,
  REVIEWS: `${CONFIG.BASE_URL}/review`,
  DETAILS: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
};

export default API_ENDPOINT;
