import Header from '../templates/Header';
import Home from '../pages/Home';
import Characters from '../pages/Character';
import Error404 from '../pages/Error404';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';

const routes = {
  '/': Home,
  '/:id': Characters,
  '/contact': 'Contact'
}

const router = async () => {
  const header = null || document.getElementById('header');
  const data = null || document.querySelector('#data');

  header.innerHTML = await Header();
  data.innerHTML = await Error404();
  let hash = getHash();
  let route = await resolveRoutes(hash);
  let render = routes[route] ? routes[route] : Error404;// routes.'/'
  console.log(routes[route]);
  data.innerHTML = await render();
}

export default router;
