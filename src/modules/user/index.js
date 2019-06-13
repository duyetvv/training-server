import UserModel, { user } from './model';
import Database from '../../database';

const userData = new Database('tbl_user', user);

const userTmp = {
  username: 'duyetvv',
  password: '123456',
  email: 'duytevovan.99@gmail.com',
  phone: '111111',
  address: 'Cao Phong, Xuan Lam, Song Cau, Phu Yen',
  numberOrders: '1111111',
};


const getUser = (req, res) => {
  res.json(userTmp)
};

const addUser = ({ body }, res) => {
  const user = new UserModel(body);
  const validRes = user.validate();

  if (!validRes.isValid) {
    res.json(validRes);
    return;
  }

  userData.inserting(body).then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });
};

const userRoutes = (router) => {
  router.route('/user').get(getUser).post(addUser);
}


export default userRoutes;
