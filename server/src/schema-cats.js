//TODO
const { gql } = require("apollo-server");

const typeDefs = gql`
type Query {
  "Get tracks array for homepage grid"
  spaceCats: [SpaceCat]
}
"A track is a group of Modules that teaches about a specific topic"
type SpaceCat {
  id: ID!
  "The track's title"
  name: String!
  "The track's main author"
  age: Int
  "The track's main illustration to display in track card or track page detail"
  missions: [Mission]
  "The track's approximate length to complete, in minutes"
  length: Int
  "The number of modules this track contains"
  modulesCount: Int
}
"Author of a complete Track"
type Mission {
  id: ID!
  "Author's first and last name"
  name: String!
  "Author's profile picture url"
  description: String!
}
`;
module.exports = typeDefs;
