import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const authen = {
  email: String,
  password: String,
}

export default mongoose.model('authen', Schema(authen));
