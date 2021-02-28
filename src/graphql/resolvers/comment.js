const { Comment } = require('../../models/comment');
const { Post } = require('../../models/post');

const { AuthenticationError, ApolloError } = require('apollo-server-express');

module.exports = {
  Mutation: {
    async createComment(_, { content, postId }, { user = null }) {
      if (!user) {
        throw new AuthenticationError('You must login to create a comment');
      }

      const post = await Post.findById(postId);

      if (post) {
        return Comment.create({ content, userId: user.id, postId: postId });
      }

      throw new ApolloError('Unable to create a comment');
    }
  }
};
