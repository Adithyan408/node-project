// --> MULTIPLE USERS VALIDATION <---//
// function validation(req, res, next) {
//   const { username, password } = req.body
//   let users={
//     "admin" : "1234",
//     "Manu Krishna": "Manu123", 
//     "Sreenish": "sreenish###",
//     "Adithyan":"adithyan123"
//   }
//   if (Object.keys(users).includes(username) && users[username]===password) {
//     req.session.user = username;
//     next();
//   } else {
//     res.render("login" , {msg : "Invalid Credentials"});
//   }
// }