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

**Request:**

```gql
mutation register {
  register(
    input: { email: "elon@tesla.com", password: "test@1234", name: "Elon Musk" }
  ) {
    _id
    name
    email
  }
}

mutation login {
  login(input: { email: "elon@tesla.com", password: "test@1234" }) {
    _id
    name
    email
    token
  }
}

mutation createPost {
  createPost(title: "Graphql", content: "Graphql API with MongoDB") {
    _id
    title
    content
    createdAt
  }
}

query allPosts {
  getAllPosts {
    _id
    title
    content
    userId {
      _id
      name
    }
  }
}

query singlePost {
  getSinglePost(_id: "603bad66431ec20858a3f760") {
    _id
    title
    content
    userId {
      _id
      name
    }
  }
}

mutation createComment {
  createComment(content: "Great Work Man", postId: "603bad66431ec20858a3f760") {
    _id
    content
    createdAt
  }
}
```

**Authorization:**

```
{
  "Authorization": "Bearer token"
}

```
