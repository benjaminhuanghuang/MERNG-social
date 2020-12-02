
```
import {useQuery} from '@apllo/react-hooks'
import gql from 'graphql'


const FERCH_DAT_QUERY = gql `  
{
  getPosts {
    id body createAt likes{
      userName
    }
  }
}
`
```