const given = require('../../steps/given')
const when = require('../../steps/when')

describe('Given an authenticated user', () => {
    let user
    beforeAll(async () => {
        user = await given.an_authenticated_user()
    })

    it('Should be able to fetch their user profile using getMyProfile request', async () => {
        const profile = await when.a_user_calls_getMyProfile(user)
        expect(profile).toMatchObject({
            id: user.username,
            name: user.name
        })
    })
})