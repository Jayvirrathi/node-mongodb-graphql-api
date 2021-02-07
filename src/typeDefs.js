import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Query {
    hello: String!
    users: [User!]!
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
  }

  type Mutation {
    createUser(firstName: String!, lastName: String!, email: String!): User!
  }
`;
