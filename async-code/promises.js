/*

Commment out some code to "clean up" the console.

*/
const goGetSomethingFromAnApi = require('axios') // This (axios) is a library to make requests on the backend. 'fetch' can be used on the front end.
let isResolved = false;

let urlEndpoint = 'https://www.boredapi.com/api/activity/' // this is a free api to use and it returns a random object that represents a suggested task that you can do
// promises have await associated with them, value to resolve and possibly reject
let promiseToGetRandomActivity = new Promise(async (resolve, reject) => {
    let dataFromApi = await goGetSomethingFromAnApi.get(urlEndpoint)

    if(dataFromApi.data.activity){
        // we have something to send as a valuen to this promise
        resolve(dataFromApi)
    } else {
        // This would be a better place to log out the error to give more info than just "nononono". You could log what was returned from the api call.
        reject("NONONONONONONON")
    }
})

// WE build out a new promise. This simulates the logic to reject or resolve and show that sometimes it could take a lpng time, say 3 seconds even. 
let promiseUsingSetTimeout= new Promise(async (resolve, reject) => {
    setTimeout(() => {
        // Our code will run so we will set isResolved to true, this is arbitrary to illustrate what other libraries would be deciding on whether to rejects or resolves within the promise
        isResolved = true;
        // This is a ternary expression to replace if/else logic if this is resolved it will send on this object of {msg: Hey ....}
        isResolved ? resolve({msg: "Hey this promise was resolved"}) : reject("This was rejected")

    }, 3000)


})

// Here we are using this promise and accessing its resolved value. Notice how long this takes to show up in the console.

promiseUsingSetTimeout.then((res) => {
    console.log("This is from the .then off of promiseUsingSetTimeout: ", res)
}).catch((err) => {
    console.log(err)
})



// *** Lets write async code using .then syntax, The olde way but still used so know it. OLD WAY OF DEALING WITH PROMISES

promiseToGetRandomActivity.then((res) => {
    return res.data
}).then((data) => {
    //console.log("RES FROM PROMISE: ", data.activity);
}).catch((err) => {
    console.log("handling the error: ", err)
})




// *** lets use the newer try catch along with async/await to deal with this promise
let getActivityFuncFromPromise = async () => {
    try {
        let {data} = await promiseToGetRandomActivity
        console.log(data)
    } catch (error){
        console.log(error)
    }
}

getActivityFuncFromPromise()


/* ASYNC CODE
    1) What is a promise?
    2) How do we make a promise?
    3) what are ways of handing a promise?
        - .then().catch
        - async await in a "try catch"?
    4) When would we use this?

*/
