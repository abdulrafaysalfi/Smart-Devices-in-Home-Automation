import "./App.css";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Dashboard from "./screens/Dashboard";
import PasswordReset from "./screens/PasswordReset";
import AddDevice from "./screens/AddDevice";
import DeviceItem from "./screens/DeviceItem";
import DeviceModal from "./screens/DeviceModal";
import NoDevice from "./components/NoDevice";
import ShowDevices from "./screens/ShowDevices";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/resetpassword" component={PasswordReset} />

        <Route exact path="/addDevice" component={AddDevice} />
        <Route exact path="/devices" component={DeviceItem} />
        <Route exact path="/modal" component={DeviceModal} />
        <Route exact path="/nodevice" component={NoDevice} />
        <Route exact path="/passwordreset" component={PasswordReset} />
        <Route exact path="/showdevices" component={ShowDevices} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
