import RestaurantSource from '../../data/restaurant-source';
import { restaurantItemTemplate } from '../../utils/template-creator';

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
      restaurantContainer.innerHTML += restaurantItemTemplate(restaurant);
    });
  },
};

export default Catalog;
