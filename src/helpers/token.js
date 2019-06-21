import fs from 'fs';
import jwt from 'jsonwebtoken';
import uuidv4 from 'uuid/v4';

const privateKey = fs.readFileSync('../jwtcert/private.txt');
const publicKey = fs.readFileSync('../jwtcert/public.txt');


export const generateAccessToken = (user, sign) => {
  const payload = { ...user, sign };

  return jwt.sign(payload, privateKey, { algorithm: 'RS256' });
}

export const generateToken = (user) => {
  const sign = uuidv4();
  return {
    refresh_token: sign,
    access_token: generateAccessToken(user, sign),
  };
}