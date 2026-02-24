import { ApolloServer } from "@apollo/server";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import { typeDefs } from './schema/schema.js'
import { resolvers } from './resolvers/resolvers.js'

dotenv.config()

const server = ApolloServer({
  typeDefs,
  resolvers
})

mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log('Connected to MongoDB');
  return server.listen({ port: 4000 })
}).then((res) => {
  console.log(`Server is running at ${res.url}`);
}).catch((err) => {
  console.error('Error', err);
})