import { User } from './models/User';

export const resolvers = {
  Query: {
    hello: () => 'hi',
    users: () => User.find()
  },
  Mutation: {
    createUser: async (_, { firstName, lastName, email }) => {
      const user = new User({ firstName, lastName, email });
      await user.save();
      return user;
    }
  }
};
