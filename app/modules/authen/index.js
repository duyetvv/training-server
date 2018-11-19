import { login, logout } from './controller';

const authen = (router) => {
  router.route('/login').post(login);
  router.route('/logout').put(logout);
}

export default authen;
