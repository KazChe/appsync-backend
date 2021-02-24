const AWS = require('aws-sdk')


const user_exists_in_UsersTable = async (username) => {
    const DynamoDB = new AWS.DynamoDB.DocumentClient()

    console.log(`Looking for user [${id}] in table [${process.env.USERS_TABLE}]`)
    const resp = await DynamoDB.get({
        TableName: process.env.USERS_TABLE,
        Key: {
            id
        }
    }).promise()

    expect(resp.item).toBeTruthy()

    return resp.item
}
module.exports = {
    user_exists_in_UsersTable
}