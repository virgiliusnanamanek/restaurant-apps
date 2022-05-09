import CONFIG from '../../globals/config';

const createDetailResto = (resto) => `
<div class="detail-resto">
    <h3 class="resto_header">Details</h3>
<div class="main_card">
    <div class="card_left">
        <img src="${CONFIG.MEDIUM_BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name}" class="resto_image">
        <div class="desk-resto">
            <h3 class="desk_judul">Deskripsi</h3>
            <p class="isi_deskripsi">${resto.description}</p>
        </div>
    </div>
    <div class="card_right card">
        <h3 class="info">Informasi</h3>
        <h4 class="nama_resto">Nama Restoran:</h4>
        <p class="nama_res">${resto.name}</p>
        <h4 class="kota_resto">Kota:</h4>
        <p class="kota_res">${resto.city}</p>
        <h4 class="alamat_resto">Alamat:</h4>
        <p class="alamat_res">${resto.address}</p>
        <h4 class="makanan_resto">Menu Makanan: </h4>
        <p class="makanan_res">
            <ul class="menu_list">
            ${resto.menus.foods.map((food) => `<li class="menu_item">${food.name}</li>`).join(' ')}
            </ul>
        </p>
        <h4 class="minuman_resto">Menu minuman: </h4>
        <p class="minuman_res">
            <ul class="menu_list">
            ${resto.menus.drinks.map((drink) => `<li class="menu_item">${drink.name}</li>`).join(' ')}
            </ul>
        </p>
    </div>
</div>
<div class="review-resto">
    <h3 class="review_judul">Review</h3>
    <div class="review_card">
    ${resto.customerReviews.map((review) => `
    <div class="review-container card">
        <div class="review_photo">
        <i class="fas fa-user"></i>
        </div>
            <div class="review_body">
                <h3 class="review_consumer">${review.name}</h3>
                <small class="review_date">${review.date}</small>
                <p class="review_content">${review.review}</p>
            </div>
    </div>`).join('')}
    </div>
</div>
</div>
`;

const createRestoList = (resto) => `
    <article class="card resto-item">
    <img class="card__img" src="${CONFIG.SMALL_BASE_IMAGE_URL + resto.pictureId}" alt="gambar untuk kota ${resto.name}" title="${resto.name}">
    <div class="card__city">${resto.city}</div>
    <div class="card__text">
        <p class="card__rating">
            Rating : 
            <small class="card__rating__value">${resto.rating}</small>
        </p>
        <h1 class="card__title"><a href="${`/#/detail/${resto.id}`}" class="resto__name">${resto.name}</a></h1>
        <slice class="card__desc">${resto.description.slice(0, 150)}...</div>
    </div>
    </article>
`;
const createLikeButton = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButton = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;
export {
  createDetailResto, createRestoList, createLikedButton, createLikeButton,
};
