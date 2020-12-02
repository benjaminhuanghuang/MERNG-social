

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


Create Post
```
mutation createPost{
  createPost(body:"new post"){
    id
    body
    craeteAt
    username
  }
}
```