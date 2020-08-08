import {getApiKey} from '../src/client//js/formHandler'
  
describe("Testing the API key fetching functionality", () => {
  test("Testing the getApiKey() function to get a defined object of data.key", () => {
    getApiKey('http://localhost:8081/getapikey')
    .then(function(data){
      expect(data.key).toBeDefined()
    })
})});