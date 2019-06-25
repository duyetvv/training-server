import AuthModel, { entity } from './model';
import TokenModel, { tokenEntity } from './tokenModel';
import { PATH } from './constants';
import Database from '../../database';
import { generateToken } from '../../helpers/token';

const authData = new Database('tbl_user', entity);
const tokenData = new Database('tbl_token', tokenEntity);

tokenData.creating();

const insertToken = (body) => {
  const token = new TokenModel(body);
  const validRes = token.validate();

  if (!validRes.isValid) {
    res.json(validRes);
    return;
  }

  tokenData.selectByClause({
    selectList: '*',
    conditions: `username='${body.username}' AND client_ip='${body.client_ip}'`
  }).then((data) => {
    !data.length ? tokenData.inserting(body) : tokenData.updating(data[0].id, body);
  });
}

const login = ({ body, clientIp }, res) => {
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
    const token = generateToken(data);
    
    insertToken({ ...token, username: body.username, client_ip: clientIp, alive: '1' });
    res.json({ ...data[0], ...token });
  }).catch((err) => {
    res.json(err);
  });
}


const getSelf = (req, res) => {
  console.log(req);

  res.json({ demo: 1})
} 

const authRoutes = (router) => {
  router.route(PATH.LOGIN).post(login);
  router.route(PATH.SELF).post(getSelf);
};


export default authRoutes;