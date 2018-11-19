import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const account = {
  email: String,
  userName: String,
  password: String,
  fullName: String,
  address: String,
  phone: String,
  adminFlg: String,
  enableFlg: String,
}

export default mongoose.model('account', Schema(account));
