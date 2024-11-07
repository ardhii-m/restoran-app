import CONFIG from "../../globals/config";

class RestaurantItem extends HTMLElement {
  constructor() {
    super();

    this._resto = {
      id: 0,
      name: 'NEED_NAME',
      description: 'NEED_DESC',
      rating: 0,
      city: 'NEED_CITY'
    };

    this._style = document.createElement('style');
  }

  _updateStyle() {
    this._style.textContent = `
      host:: {
      font-family: 'Lora', sans-serif;
      }
      article[resto-id] {
        height: 100%;
        border: 1px solid black;
        border-radius: 8px;
        padding: 1.25em;
        display: flex;
        flex-direction: column;
        gap: 0.5em;
        background-color: white;
        box-shadow: 10px 1px 16px -4px rgba(0,0,0,0.43);
      }

      img {
      height: 280px;
      width: 100%;}

      h3 {
        font-size: 1.5rem;
        margin-top: 0.5em;
      }

      h3 > a {
      color: black;
      text-decoration: none;
      }

      h3 > a:hover {
        color: red;
      }

      article[resto-id] > p {
        font-size: 14px;
      }

      @media screen and (min-width : 990px) {
        .list {
          grid-template-columns: repeat(3, minmax(260px, 1fr));
          gap: 1.5em;
        }
        article[resto-id] > p {
          font-size: 1.2em;
        }
      }
    `;
  }

  setVal(value) {
    this._resto['id'] = value.id;
    this._resto['name'] = value.name;
    this._resto['description'] = value.description;
    this._resto['pictureId'] = value.pictureId;
    this._resto['city'] = value.city;
    this._resto['rating'] = value.rating;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this._updateStyle();

    this.appendChild(this._style);
    this.innerHTML += `
      <article tabIndex="0" resto-id="${this._resto.id}">
      <img src="https://restaurant-api.dicoding.dev/images/medium/${this._resto.pictureId}" alt="${this._resto.name}" class="restaurant-img">
      <h3><a href="/#/detail/${this._resto.id}">${this._resto.name}</a></h3>
      <p>Rating: ${this._resto.rating}</p>
      <p>City: ${this._resto.city}</p>
      <p>${this._resto.description}</p>
      </article>
    `;
  }
}

customElements.define('restaurant-item', RestaurantItem);