import RestaurantSource from '../../data/restaurant-source';
import "../templates/restaurant-item";

const Catalog = {
  async render() {
    return `
      <section id="catalog">
        <h2 tabindex="0">Restaurant List</h2>
        <div id="restaurantList" class="list">

        </div>
      </section>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.restaurantCatalog();
    const restaurantContainer = document.querySelector('#restaurantList');
    restaurants.forEach((restaurant) => {
      const restaurantElement = document.createElement("restaurant-item");
      restaurantElement.setVal(restaurant);
      restaurantContainer.appendChild(restaurantElement);
    });
  },
};

export default Catalog;
