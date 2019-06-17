import UserModel, { user } from './model';
import Database from '../../database';

const userData = new Database('tbl_user', user);

const getUser = (req, res) => {
  userData.selectAll().then((data) => {
    res.json(data)
  }).catch((err) => {
    res.json(err);
  });
};

const getUserById = ({ params: { id } }, res) => {
  userData.selectByClause({
    selectList: '*',
    conditions: `id=+${id}`
  }).then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });
}

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

const updateUser = ({ body, params: { id } }, res) => {
  userData.updating(id, body).then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });
};

const userRoutes = (router) => {
  router.route('/user').get(getUser).post(addUser);
  router.route('/user/:id').get(getUserById).put(updateUser);
};


export default userRoutes;
