import UserModel from './model';
import Database from '../../database';


const userData = {
  username: '',
  password: '123456',
  email: 'duytevovan.99@gmail.com',
  phone: '111111',
  address: 'Cao Phong, Xuan Lam, Song Cau, Phu Yen',
  numberOrders: '1111111',
};

const userRoutes = (router) => {
  router.route('/user')
  .get((req, res) => {
    const user = new UserModel(userData);
    const validRes = user.validate();
    
    console.log('validRes ', validRes);
    res.json(validRes);
  });
}


export default userRoutes;
