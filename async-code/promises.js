const axios = require('axios')
const goGetSomethingFromAnApi = require('axios') // This (axios) is a library to make requests on the backend. 'fetch' can be used on the front end.
let urlEndpoint = 'https://www.boredapi.com/api/activity/' // this is a free api to use and it returns a random object that represents a suggested task that you can do


// What is a promise
// let hasIssue = false;

// let myPromise = new Promise((resolve, reject) => {
//     if(hasIssue){
//         let error = new Error("Some horrible stuff just went on.")
//         reject(error)
//     } else {
//         resolve("Hey this has been resolved.")
//     }
// })


// ASYNC AWAIT
let funcToGetAsyncData = async () => {
    // await some data
    try{
        let dataFromApi1 = await axios.get(urlEndpoint)
        //let dataFromApi2 = await axios.get(AnotherEndpoint)

        //throw new Error("This is my error")
        console.log(data)
    } catch(err){
        // Where we handle the error
        console.log(err)
    }
}


// Without try catch but still works
let funcToGetAsyncData = async () => {
    // await some data
 
        let {writable} = await axios.get(urlEndpoint)
        //throw new Error("This is my error")

        if(data){
            // everything is good and do some stuff
            console.log(data)
        } else {
            let err = new Error
            console.log(err)
        }
}



// .Then .catch (OLDER WAY)
// axios.get(urlEndpoint).then((res)=>{
//     // We can do some stuff
//     // console.log(res)
//     // we could possible update the DOM with a new node with this data in it.
//     return res.data
// }).then((data)=>{
//     console.log(data)

// })
// .catch((error) => {
//     // This is where we handle the error
// })

funcToGetAsyncData()


/* ASYNC CODE
    1) What is a promise?
    2) How do we make a promise?
    3) what are ways of handing a promise?
        - .then().catch
        - async await in a "try catch"?
    4) When would we use this?

    Take away:
    - Async code and how to handle it.
        - Promises
        - .then().catch()
        - async/await keywords
        -try and catch blocks of code

    -What you should do to practice:
        - rewrite a new promise.
        - rewrite a function that gets data asynchronously
            - use the async/await way and then the .then.catch way.
        - Destructure that object coming back from the axios call!!!!!
        
*/
