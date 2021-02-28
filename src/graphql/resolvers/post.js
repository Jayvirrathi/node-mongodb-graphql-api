const { Post } = require('../../models/post');

const { AuthenticationError } = require('apollo-server-express');

module.exports = {
  Mutation: {
    async createPost(_, { content, title }, { user = null }) {
      if (!user) {
        throw new AuthenticationError('You must login to create a post');
      }
      return Post.create({
        userId: user._id,
        content,
        title
      });
    }
  },

  Query: {
    async getAllPosts(root, args, context) {
      return Post.find().populate({
        path: 'userId',
        model: 'user',
        select: {
          _id: 1,
          name: 1,
          email: 1
        }
      });
    },

    async getSinglePost(_, { _id }, context) {
      return Post.findOne({ _id: _id }).populate({
        path: 'userId',
        model: 'user',
        select: {
          _id: 1,
          name: 1,
          email: 1
        }
      });
    }
  }
};
