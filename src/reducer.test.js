const reducer = require("./reducer")
// @ponicode
describe("reducer.getBasketTotal", () => {
    test("0", () => {
        let callFunction = () => {
            reducer.getBasketTotal("http://placeimg.com/640/480/fashion")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            reducer.getBasketTotal(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
