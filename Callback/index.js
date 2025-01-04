// function fetchUser(userId, callback) {
//   setTimeout(() => {
//     console.log("Fetch user");
//     callback(null, { id: userId, name: "Jhon" });
//   }, 1000);
// }
// function fetchOrders(userId, callback) {
//   setTimeout(() => {
//     console.log("Fetch orders");
//     callback(null, ["Order1", "Orders2"]);
//   }, 1000);
// }
// function fetchDetails(orderId, callback) {
//   setTimeout(() => {
//     console.log("Fetch order details");
//     callback(null, { id: orderId, status: "Delivered" });
//   }, 1000);
// }

// fetchUser(1, (error, user) => {
//   if (error) {
//     return console.log(error);
//   }
//   fetchOrders(user.id, (error, orders) => {
//     if (error) {
//       console.log(error);
//     }
//     fetchDetails(orders[0], (error, details) => {
//       if (error) {
//         return console.log(error);
//       } else {
//         console.log(JSON.stringify(details));
//       }
//     });
//   });
// });
