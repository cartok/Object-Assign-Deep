require("chai").should()

describe("test description", () => {
    describe("test part", () => {
        const foo = "foo"
        it("should be fine", () => {
            foo.should.be.a("string")
            foo.should.equal("foo")
        })
    })
})