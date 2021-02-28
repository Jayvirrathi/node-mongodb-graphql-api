const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { AuthenticationError } = require('apollo-server-express');

const { User } = require('../../models/user');

module.exports = {
  Mutation: {
    async register(root, args, context) {
      const { name, email, password } = args.input;
      return User.create({ name, email, password });
    },

    async login(root, { input }, context) {
      const { email, password } = input;
      const user = await User.findOne({ email });

      // if (user && bcrypt.compareSync(password, user.password)) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      return { ...user.toJSON(), token };
      // }
      // throw new AuthenticationError('Invalid credentials');
    }
  }
};