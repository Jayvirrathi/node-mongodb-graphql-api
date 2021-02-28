const { gql } = require('apollo-server-express');

module.exports = gql`
  type Comment {
    _id: String!
    content: String!
    userId: User!
    postId: Post!
    createdAt: String
  }

  extend type Mutation {
    createComment(content: String!, postId: String!): CreateCommentResponse
  }

  type CreateCommentResponse {
    _id: String!
    content: String!
    createdAt: String!
  }
`;
