const https = require("https");
const fs = require("fs");
// address
const request = https.request(
  "https://jsonplaceholder.typicode.com/users",
  function(res) {
    let users = "";
    res.on("data", function(data) {
      users = users + data;
    });
    res.on("end", function() {
      fs.writeFileSync("users.json", users);

      // String=> object
      const usersJSON = JSON.parse(users);
      createUsers(usersJSON);
      // console.log("Data saved user.json");
    });
  }
);

function createUsers(users) {
  for (let i = 0; i < users.length; i++) {
    // let user = users[i];
    // let userData = "";
    // for (let key in user) {
    //   userData += key + " : " + user[key];
    // }
    fs.writeFileSync(users[i]["username"] + ".json", JSON.stringify(users[i]));
  }
}
request.end();
