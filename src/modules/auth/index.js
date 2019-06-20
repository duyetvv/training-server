import AuthModel, { entity } from './model';
import { PATH } from './constants';
import Database from '../../database';

const authData = new Database('tbl_user', entity);

const loggin = ({ body }, res) => {
  const auth = new AuthModel(body);
  const validRes = auth.validate();

  if (!validRes.isValid) {
    res.json(validRes);
    return;
  }

  authData.selectByClause({
    selectList: '*',
    conditions: `username='${body.username}' AND password='${body.password}'`
  }).then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });
}


const authRoutes = (router) => {
  router.route(PATH.LOGIN).post(loggin)
};


export default authRoutes;