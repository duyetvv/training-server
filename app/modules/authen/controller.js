import db from '../../helpers/connection';
import { LOGIN_FAILURE } from '../../constants/errorcode';

export const login = ({ body: { email, password } }, res) => {
  db.getOne('account', { email, password })
  .then((data) => {
    res.json(data);
  })
  .catch((error) => {
    res.json(error);
  })
}

export const logout = ({ bearer }, res) => {
  let result = { status: 0, msg: 'Logout failure' };

  if (bearer) {
    result = { status: 1, msg: 'Logout success' };
  }

  res.json(result);
}
