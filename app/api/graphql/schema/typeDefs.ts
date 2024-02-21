const typeDefs = `
  type Game {
    _id: ID!
    title: String!
    description: String!
    price: int!
    discounts: [Discount]
    regions: [Region]
    editions: [Edition]
    rating: [Rating]
    tags: [Tag]
    Reviews: [Review]
  }
  
  type Discount {
    _id: ID!
    discount: int!
    date: Date!
    game: [Game]
  }

  type Region {
    _id: ID!
    region: String!
  }

  type Edition {
    _id: ID!
    edition: String!
  }

  type Rating {
    _id: ID!
    rating: int!
  }

  type Tag {
    _id: ID!
    tag: String!
  }

  type Review {
    _id: ID!
    review: String!
  }

  type Query {
    games: [Games]
  }

  type Mutation {
    addGame(title: String!, description: String!, price: int! ): Game
    editGame(id: ID!, title: String, description: String, price: int ): Game
    deleteGame(id: ID!): Game
    addDiscount(discount: int!, date: Date! ): Discount
    editDiscount(id: ID!, discount: int, date: Date ): Discount
    deleteDiscount(id: ID!): Discount
    addRegion(region: String! ): Region
    editRegion(id: ID!, region: String ): Region
    deleteRegion(id: ID!): Region
    addEdition(edition: String! ): Edition
    editEdition(id: ID!, edition: String ): Edition
    deleteEdition(id: ID!): Edition
    addRating(rating: int! ): Rating
    addTag(tag: String! ): Tag
    addReview(review: String! ): Review



  }

  `

export default typeDefs
