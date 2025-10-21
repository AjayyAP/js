async function getNumber() {
  try {
    let result = await Promise.resolve(20); //  success
    console.log("output:", result);

    let errorResult = await Promise.reject("Something went wrong"); // failure
    console.log(errorResult);
  } catch (err) {
    console.log("Caught error:", err);
  }
}

getNumber();