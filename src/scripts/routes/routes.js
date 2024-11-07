import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';
import Catalog from '../views/pages/catalog';

const routes = {
  '/': Catalog,
  '/favorite': Favorite,
  '/detail/:id': Detail,
};

export default routes;