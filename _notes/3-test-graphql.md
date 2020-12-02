
## Postman
Url: http://localhost:8964
Method : POST
body:
```
{
	"query": "mutation { login (username: \"ben\", password:\"123456\") { token}}"
}
```

## Graphql Playground
add auth header
```
"Authorization":"Bearer ..."
```