//Implement a series of functions using Promises that simulate fetching
fetchUserData()
  .then((userinfo) => fetchOrders(userinfo))
  .then((orders) => fetchShippingDetails(orders))
  .then((details) => console.log("Shipping details:", details));

  fetchUserData()
  .then((userinfo) => {
    return fetchOrders(userinfo); // Correctly returning the Promise
  })
  .then((orders) => {
    console.log("Fetched orders:", orders); // Orders will be fetched correctly
  });