import axios from "../axios";
export default class DbHandler {
  constructor(username, password) {}
  verifyLogin(email, password) {
    axios
      .post("/api/user/login", { email: email, password: password })
      .then((response) => {
        if (response.statusText === "OK") {
          sessionStorage.setItem("EMAIL", email);
          window.location.replace("http://localhost:3000/Dashboard");
        } else {
          alert("Login Failed");
        }
      })
      .catch((error) => {
        alert("Login Failed");
      });
  }
  addUser(email, password, confirmPassword) {
    axios
      .post("/api/user/register", { email: email, password: password })
      .then((response) => {
        if (response.statusText === "OK") {
          sessionStorage.setItem("EMAIL", email);
          window.location.replace("http://localhost:3000/Dashboard");
        } else {
          alert("Registration Failed");
        }
      })
      .catch((error) => {
        alert("Registration Failed");
      });
  }
  changePassword(id, email, password, confirmPassword) {
    axios
      .put("/api/user/" + id, { email: email, password: password })
      .then((response) => {
        if (response.statusText === "OK") {
          sessionStorage.removeItem("EMAIL");
          window.location.replace("http://localhost:3000/Login");
        } else {
          alert("Failed to Change Password");
        }
      });
  }
  async getLightData() {
    let result = await axios.get("/api/ldr/610f85171c3273000450d213");
    return result.data;
  }

  setBuzzerData(status) {
    axios
      .put("/api/buzzer/610ecfd9948a660004840f10", {
        status: status,
      })
      .then((response) => {
        if (response.status === 200) {
          window.location.replace("http://localhost:3000/showdevices");
        } else {
          alert("Unable to Turn On/Off Light");
        }
      });
  }
  setLdrSensorData(status) {
    axios
      .put("/api/ldr/610f85171c3273000450d213", {
        status: status,
      })
      .then((response) => {
        if (response.status === 200) {
          window.location.replace("http://localhost:3000/showdevices");
        } else {
          alert("Unable to Turn On/Off Light");
        }
      });
  }
  async getTemperatureData() {
    let result = await axios.get(
      "/api/temphumidsensor/610e50ec4a368a0004f8cef7"
    );
    return result.data;
  }
  async getMotionData() {
    let result = await axios.get("/api/motionsensor/610e516c4a368a0004f8cef8");
    return result.data;
  }
  async getBuzzerData() {
    let result = await axios.get("/api/buzzer/610ecfd9948a660004840f10");
    return result.data;
  }
}
