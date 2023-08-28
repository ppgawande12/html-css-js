const batteryLevel = document.querySelector(".batteryLevel");
const batteryIsCharging = document.querySelector(".batteryIsCharging");
const getBatteryDetail = document.querySelector(".getBatteryDetails");

const battery = () => {
  if ("getBattery" in navigator) {
    navigator.getBattery().then((battery) => {
      batteryLevel.innerHTML = battery.level * 100;
      batteryIsCharging.innerHTML = battery.charging ? "Yes" : "No";
      battery.addEventListener("chargingchange", () => {
        batteryLevel.innerHTML = battery.level * 100;
        batteryIsCharging.innerHTML = battery.charging ? "Yes" : "No";
      });
    });
  }
};
battery();
