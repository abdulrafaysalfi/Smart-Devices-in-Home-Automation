import DbHandler from "./DbHandler";
export default class DevicesController {
  constructor(buzzerStatus, temperature, humidity, lightStatus, motionStatus) {
    this.buzzerStatus = buzzerStatus;
    this.temperature = temperature;
    this.humidity = humidity;
    this.lightStatus = lightStatus;
    this.motionStatus = motionStatus;
  }
  async getSensorsData() {
    let db = new DbHandler();
    var light = await db.getLightData();
    var temp = await db.getTemperatureData();
    var motion = await db.getMotionData();
    var buzzer = await db.getBuzzerData();
    let data = [light, temp, motion, buzzer];
    return data;
  }
  turnOnBuzzer() {
    let db = new DbHandler();
    db.setBuzzerData("on");
  }
  turnOffBuzzer() {
    let db = new DbHandler();
    db.setBuzzerData("off");
  }
  turnOnLight() {
    let db = new DbHandler();
    db.setLdrSensorData("on");
  }
  turnOffLight() {
    let db = new DbHandler();
    db.setLdrSensorData("off");
  }
}
