import CONFIG from "../../globals/config.js";

const restaurantDetailTemplate = (restaurant) => `
  <section>
  <h2 class="restaurant_name">${restaurant.restaurant.name}</h2>

  <div class="restaurant_profile">
      <img class="restaurant_image" src="${CONFIG.BASE_IMAGE_URL}/${restaurant.restaurant.pictureId}"/>
      <div class="restaurant_info">
        <h3>Information</h3>
        <p>Rating: ${restaurant.restaurant.rating}</p>
        <p>Categories: ${restaurant.restaurant.categories}</p>
        <p>City: ${restaurant.restaurant.city}</p>
        <p>Address: ${restaurant.restaurant.address}</p>
      </div>

      <div class="restaurant_desc">
        <h4>Description</h4>
        <p>${restaurant.restaurant.description}</p>
        <p>Menu: ${restaurant.restaurant.menus}</p>
      </div>

      <div class="reviews">
        <h4>Reviews</h4>
        <p>${restaurant.restaurant.customerReviews}</p>
      </div>
  </div>
  </section>
`;

export { restaurantDetailTemplate };
