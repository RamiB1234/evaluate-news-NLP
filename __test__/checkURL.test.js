import {checkURL} from '../src/client//js/urlChecker'
  
describe("Testing the URL check functionality", () => {
    test("Testing the checkURL() function", () => {
        expect(checkURL('https://jamesclear.com/2018-annual-review')).toBeTruthy();
})});