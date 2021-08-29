import DbHandler from "./DbHandler";
export default class UserController {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  login(email, password) {
    let db = new DbHandler();
    db.verifyLogin(email, password);
  }
  register(email, password, confirmPassword) {
    if (password === confirmPassword) {
      let db = new DbHandler();
      db.addUser(email, password, confirmPassword);
    } else {
      alert("Password and Confirm Password Must Be Same.");
    }
  }
  changePassword(id, email, password, confirmPassword) {
    if (password === confirmPassword) {
      let db = new DbHandler();
      db.changePassword(id, email, password, confirmPassword);
    } else {
      alert("Password and Confirm Password Must Be Same.");
    }
  }
  logout() {
    sessionStorage.removeItem("EMAIL");
    window.location.replace("http://localhost:3000/Login");
  }
}
