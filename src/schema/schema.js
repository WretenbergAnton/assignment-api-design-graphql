export const typeDefs = `#graphql
  type Movie {
    id: ID!
    title: String!
    genre: [String!]!
    rating: Float!
    year: Int!
    director: String!
    reviews: [Review!]
  }

  type Review {
    id: ID!
    rating: Int!
    content: String!
    movie: Movie!
    author: Author!
  }

  type Author {
    id: ID!
    name: String!
    verified: Boolean!
    reviews: [Review!]
  }

  type Query {
    movies: [Movie]
    movie(id: ID!): Movie
    reviews: [Review]
    review(id: ID!): Review
    authors: [Author]
    author(id: ID!): Author
  }

  type Mutation {
    addMovie(movie: AddMovieInput!): Movie
    deleteMovie(id: ID!): [Movie]
    updateMovie(id: ID!, edits: EditMovieInput!): Movie
    addReview(review: AddReviewInput!): Review
  }

  input AddMovieInput {
    title: String!
    genre: [String!]!
    rating: Float!
    year: Int!
    director: String!
  }

  input EditMovieInput {
    title: String
    genre: [String!]
    rating: Float
    director: String
  }

  input AddReviewInput {
    rating: Int!
    content: String!
    movie_id: ID!
    author_id: ID!
  }
`