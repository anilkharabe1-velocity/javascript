function login(user) {
  return new Promise((resolve, reject) => {
    if ((user.email = "vishal@gmail.com" && user.password === "password")) {
      resolve({
        status: true,
        id: 1,
        name: "Vishal",
        email: "vishal@gmail.com",
      });
    } else {
      reject({
        status: false,
        message: "email or password is wrong",
      });
    }
  });
}

function orderList(userId) {
  return new Promise((resolve, reject) => {
    if (userId === 1) {
      resolve([
        {
          orderId: 1,
          item: "Laptop",
        },
        {
          orderId: 2,
          item: "Mobile",
        },
      ]);
    } else {
      reject({
        status: false,
        message: `orders not found for user: ${userId}`,
      });
    }
  });
}

let user = {
  email: "vishal@gmail.com",
  password: "password",
};

async function getOrders(user) {
  try {
    const response1 = await login(user);
    console.log("response1:", response1);

    const response2 = await orderList(response1.id);
    console.log("response2:", response2);
  } catch (error) {
    console.log("error:", error)
  }
}

getOrders(user);
