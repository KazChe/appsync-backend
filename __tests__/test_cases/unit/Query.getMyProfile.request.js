const given = require('../../steps/given')
const when = require('../../steps/then')
const chance = require('chance').Chance()

describe('Query.getMyProfile.request template', () => {
    it("Should use username as 'id'", () => {
        const username = chance.guid()
        const result = when.we_invoke_an_appsync_template()
    })
})