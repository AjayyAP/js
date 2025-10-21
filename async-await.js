// async marks a function that will return a promise

// async function Hello() {

// }
// const saybye = async function () {

// }
// const sayhello = async () => {

// }



// await posses the function execution until a promise is resolved( or rejected)
// it make asynchronous code look and beheve like synchrous code.







function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("data loaded")
        }, 2000)
    })
}

async function getdata() {
    console.log("start");
    const result = await fetchData();
    console.log(result);
    console.log("END");
}

getdata()