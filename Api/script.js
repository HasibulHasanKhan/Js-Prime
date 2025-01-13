/*
   using .then() and .catch().
*/

// const apiBaseUrl = "https://api.example.com/users";
// function createUser(userData) {
//   fetch(apiBaseUrl, {
//     method: "POST",
//     headers: {
//       "Content-type": "application/json",
//     },
//     body: JSON.stringify(userData),
//   })
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Failed to create user");
//       }
//       return response.json();
//     })
//     .then((user) => console.log("User created:", user))
//     .catch((error) => console.error(`Error creating user:`, error.message));
//   // read (fetch) all users
//   function getUsers() {
//     fetch(apiBaseUrl)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to fecth users");
//         }
//         return response.json();
//       })
//       .then((users) => console.log("Fetch users:", users))
//       .catch((error) => console.error("Error fetching users:", error.message));
//   }

//   // Update the user.
//   function updateUser(userId, updateData) {
//     fetch(`${apiBaseUrl}/${updateData}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "appication/json",
//       },
//       body: JSON.stringify(updateData),
//     });
//     then((response) => {
//       if (!response.ok) {
//         throw new Error("Failed to update user");
//       }
//       return response.json();
//     })
//       .then((updatedUser) => console.log("User updated:", updatedUser))
//       .catch((error) => console.error("Error updating user:", error.message));
//   }

//   // Delete the data
//   function deleteUser(userId) {
//     fetch(`${apiBaseUrl}/${userId}`, {
//       method: "DELETE",
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to delete user");
//         }
//         console.log(`User with ID ${userId} deleted`);
//       })
//       .catch((error) => console.error("Error deleting uer:", error.message));
//   }
// }

// createUser({
//   name: "Jhon Doe",
//   email: "john.doe@example.com",
//   age: 30,
// });
// getUsers();

// updateUser(1, {
//   name: "John smith",
//   email: "john.smith@example",
// });
// deleteUser(1);

/*  
 Using async/await ---> try - catch.
*/
const apiBaseUrl = "https://api.example.com/users";

async function createUser(userData) {
  try {
    const response = await fetch(apiBaseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    if (!response.ok) {
      throw new Error("Failed to create user");
    }
    const user = await response.json();
    console.log("User creating user:", user);
  } catch (error) {
    console.error("Error creating user:", error.message);
  }
}

/* 
Read (fetch) all users
*/
async function getUsers() {
  try {
    const response = await fetch(apiBaseUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }
    const users = await response.json();
    console.log("Fetched users:", users);
  } catch (errpr) {
    console.error("Error fetching users :", errpr.message);
  }
}
/**
 * Update a user
 * @param {number} userId - ID of the user to update
 * @param {Object} updateData - An object containing the fields to update
 */
async function updateUser(userId, updateData) {
  try {
    const response = await fetch(`${apiBaseUrl}/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateData),
    });
    if (!response.ok) {
      throw new Error("Failed to update user");
    }
    const updatedUser = await response.json();
    console.log("User updated:", updatedUser);
  } catch (error) {
    console.error("Error updating user:", error.message);
  }
}
/**
 * Delete a user
 */
async function deleteUser(userId) {
  try {
    const response = await fetch(`${apiBaseUrl}/${userId}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Failed to delete user");
    }
    console.log(`User with ID ${userId} deleted`);
  } catch (error) {
    console.error("Error deleting user:", error.message);
  }
}
createUser({
  name: "John Doe",
  email: "john.doe@example.com",
  age: 30,
});

// 2. Get all users
getUsers();

// 3. Update a user with ID 1
updateUser(1, {
  name: "John Smith",
  email: "john.smith@example.com",
});

// 4. Delete a user with ID 1
deleteUser(1);
