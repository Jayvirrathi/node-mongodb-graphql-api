const { gql } = require('apollo-server-express');

module.exports = gql`
  type Post {
    _id: String!
    title: String!
    content: String!
    userId: User!
    createdAt: String
  }

  extend type Query {
    getAllPosts: [Post!]
    getSinglePost(_id: String!): Post
  }
  extend type Mutation {
    createPost(title: String!, content: String!): CreatePostResponse
  }

  type CreatePostResponse {
    _id: String!
    title: String!
    content: String!
    createdAt: String!
  }
`;
