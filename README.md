# appsync-backend

### Modeling twitter API in GraphQL schema

- Work in progress
- Will utilize AWS Appsync, Lambda functions, Amplify with Vue.js


#### Build
Note that for [serverless-export-env](https://www.npmjs.com/package/serverless-export-env) to generate the `.env` make sure to execute (and add to .gitignore)
```
npm run sls export-env
```

aws cli for creating a user

```
aws cognito-idp --region us-east-1 sign-up  --client-id <add_value_from_env_WEB_COGNITO_USER_POOL_CLIENT_ID>> --username "add_email_address"  --password "add_password" --user-attributes Name=name,Value=kaz
```

