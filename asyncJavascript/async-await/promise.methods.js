function promise1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("promise 1");
    }, 2000);
  });
}

function promise2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("promise 2");
    }, 5000);
  });
}

function promise3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // reject("promise 3 rejected");
      resolve("promise 3");
    }, 3000);
  });
}

async function promiseAll() {
  try {
    const response = await Promise.all([promise1(), promise2(), promise3()]);
    console.log("promise.all:", response);
  } catch (error) {
    console.log("error:", error);
  }
}

async function promiseAllSettled() {
  try {
    const response = await Promise.allSettled([promise1(), promise2(), promise3()]);
    console.log("Promise.allSettled", response);
  } catch (error) {
    console.log("error:", error);
  }
}

async function promiseRace() {
  try {
    const response = await Promise.race([promise1(), promise2(), promise3()]);
    console.log("Promise.race", response);
  } catch (error) {
    console.log("error:", error);
  }
}

async function promiseAny() {
  try {
    const response = await Promise.any([promise1(), promise2(), promise3()]);
    console.log("Promise.any", response);
  } catch (error) {
    console.log("error:", error);
  }
}

promiseAll();
promiseAllSettled();
promiseAny();
promiseRace();

// 5 apis
