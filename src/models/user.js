import mongoose from 'mongoose';

export const User = mongoose.model('user', {
  name: String,
  email: String,
  password: String
});
