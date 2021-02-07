# GraphQL API with Node.js, MongoDB

> A Basic Node.js project

## Build Setup

```bash
# install dependencies
npm install

# serve at http://localhost:4000/graphql
npm start
```

## Prerequisites

- Nodejs
- MongoDB

**Request:**

```gql
mutation {
  createUser(firstName: "Elon", lastName: "Musk", email: "elon@tesla.com") {
    email
    id
  }
}

query {
  users {
    id
    firstName
    lastName
    email
  }
}
```
