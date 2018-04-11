require("chai").should()
const objectAssignDeep = require("../objectAssignDeep.js")

describe("Test merging with a object member that is a class.", () => {
    describe("Change a class instance value and compare the referenced instances value.", () => {
        class X {
            constructor(){
                this.value = "change me after merge."
            }
        }
        const x = new X()
        const obj = objectAssignDeep({}, { reference: undefined }, { a: 1, b: { two: 2 }, c: 3 }, { reference: x }) 
        x.value = "changed!"
        it("should be fine", () => {
            obj.reference.__proto__.constructor.name.should.equal("X")
            obj.reference.value.should.equal("changed!")
        })
    })
})