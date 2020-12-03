Install dependencies
```
  npm i bcryptjs jsonwebtoken
```


```
  // hash password and create an auth token
  password = await bcrypt.hash(password, 12);
```      

```
function generateToken(user) {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      username: user.username
    },
    SECRET_KEY,
    { expiresIn: '1h' }
  );
}
```


Create user 
```
mutation {
  register(registerInput:{
    username: ""
    password:""
    confirmPassword:""
    email:""
  })
  {
    id
    email
    token
    username
    createdAt
  }
}
```

Login
```
mutation {
  login(username:"ben", password:"123456")
  {
    id
    email
    token
    username
    createdAt
  }
}
```