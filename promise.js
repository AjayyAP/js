// a promise in js is an object that represent the eventual completion or failure of an asynchronous operations and its resulting value

// resolve- called when the operation is sucessful
//reject- called when the operation is failed



//.then- execute if the promise is resolved
//.catch- execute when promise is rejected
//.finally- execute regardless of wheater the promise is resolved/rejected



//creating promise
let mypromise = new Promise((resolve, reject) => {

    let sucess = false;

    setTimeout(() => {
        if (sucess) {
            resolve("promise resolved sucessfully!")

        } else {
            reject("promise rejected")

        }

    }, 2000);

});
     mypromise
     .then(result => console.log(result))
     .catch(error =>console.log(error))
     .finally(()=>console.log("promise execution is finished"));
     



