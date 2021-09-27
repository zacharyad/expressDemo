
const goGetSomethingFromAnApi = require('axios') // This (axios) is a library to make requests on the backend. 'fetch' can be used on the front end.

let urlEndpoint = 'https://www.boredapi.com/api/activity/' // this is a free api to use and it returns a random object that represents a suggested task that you can do


let promiseToGetRandomActivity = new Promise((resolve, reject) => {

})

// *** Lets write async code using .then syntax, The olde way but still used so know it.




// *** lets use the newer try catch along with async/await to deal with this promise
getActivityFunc = async () => {

}

getActivityFunc()

/* ASYNC CODE
    1) What is a promise?
    2) How do we make a promise?
    3) what are ways of handing a promise?
        - .then().catch
        - async await in a "try catch"?
    4) When would we use this?

*/
