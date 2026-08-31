const buyCadbury = () => {
  return new Promise((resolve, reject) => {
    isCadburyAvailable = false;

    if (isCadburyAvailable) {
      resolve("this is your cadbury");
    } else {
      reject("sorry, we do not have cadbury right now");
    }
  });
};

async function normalFunction() {
    try {
        const resp = await buyCadbury()
        console.log("resp", resp)
    } catch (error) {
        console.log("error:", error)
    }
}

normalFunction()
