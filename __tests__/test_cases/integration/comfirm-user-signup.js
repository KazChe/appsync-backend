const given = require()
const when = require()
const then = require()
const chance = require('chance').Chance()

describe("when a confirmUserSignup runs", () => {
    it("should save user profile in DynamoDB", async () => {
        const { name, email } = given.a_random_user()
        const username = chance.guid()

        await when.we_invoke_confirmUserSignup(username, name, email)

        const ddbUser = await then.user_exists_in_UsersTable(username)
        expect(ddbUser).toEqual({

        })
    })
})