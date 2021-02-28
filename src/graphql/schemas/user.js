const { gql } = require('apollo-server-express');

module.exports = gql`
  type User {
    _id: String!
    name: String!
    email: String!
    password: String!
    posts: [Post!]
  }

  extend type Mutation {
    register(input: RegisterInput!): RegisterResponse
    login(input: LoginInput!): LoginResponse
  }

  type RegisterResponse {
    _id: String!
    name: String!
    email: String!
  }

  input RegisterInput {
    name: String!
    email: String!
    password: String!
  }

  input LoginInput {
    email: String!
    password: String!
  }

  type LoginResponse {
    _id: String!
    name: String!
    email: String!
    token: String!
  }
`;
