# appsync-backend

### Modeling twitter API in GraphQL schema

- Work in progress
- Will utilize AWS Appsync, Lambda functions, Amplify with Vue.js


#### Build
Note that for [serverless-export-env](https://www.npmjs.com/package/serverless-export-env) to generate the `.env` make sure to execute (and add to .gitignore)
```
npm run sls export-env
```

aws cli for creating a user - getMyProfile query

```
aws cognito-idp --region us-east-1 sign-up  --client-id <add_value_from_env_WEB_COGNITO_USER_POOL_CLIENT_ID>> --username "add_email_address"  --password "add_password" --user-attributes Name=name,Value=kaz
```

Then login to aws console > coginto and make sure the user is created.
Confirm the user in cognito user pool.
Go to appsync > queries and login with that user
Select fields from `getMyProfile` and see results returned.

```{
     "data": {
       "getMyProfile": {
         "bio": null,
         "birthdate": null,
         "createdAt": "2021-03-05T19:35:18.384Z",
         "followersCount": 0,
         "followingCount": 0,
         "id": "d1ca0d-d7df-4d06-aed4-15f0af7a",
         "imageUrl": null,
         "likesCounts": 0,
         "location": null,
         "name": "kaz",
         "screenName": "kaz7EB6TUP3"
       }
     }
   }
```

