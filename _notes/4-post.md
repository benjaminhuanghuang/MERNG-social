

Add typeDefs for post
```
  type Query {
    getPosts: [Post]
    getPost(postId: ID!): Post
  }
  type Mutation {
    createPost(body: String!): Post!
    deletePost(postId: ID!): String!
  }
```

Add resolver for post
```

```