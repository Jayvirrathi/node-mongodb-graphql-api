import { ApolloServer, gql } from 'apollo-server-express';
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';

// import { resolvers } from './resolvers';
// import { typeDefs } from './typeDefs';

const { createServer } = require('http');
const typeDefs = require('./graphql/schemas');
const resolvers = require('./graphql/resolvers');
const context = require('./graphql/context');

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context,
  introspection: true,
  playground: {
    settings: {
      'schema.polling.enable': false,
      'editor.fontSize': 18
    }
  }
});

const port = process.env.PORT || 4000;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  bufferCommands: false,
  bufferMaxEntries: 0,
  useFindAndModify: false
};

const startServer = async () => {
  const app = express();
  app.use(cors());
  app.use(express.json());

  app.get('/', (req, res) => {
    res.json({
      message: 'Hello World'
    });
  });

  apolloServer.applyMiddleware({ app, path: '/graphql' });

  const server = createServer(app);

  // const server = new ApolloServer({
  //   typeDefs,
  //   resolvers
  // });

  // server.applyMiddleware({ app });

  await mongoose.connect(process.env.MONGO_URI, options);

  app.listen({ port }, () =>
    console.log(`🚀 Server ready at http://localhost:${port}`)
  );
};

startServer();
