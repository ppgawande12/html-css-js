const batteryPer = document.querySelector(".battery-percentage");
const isCharge = document.querySelector(".battery-is-charge");
const chargeTime = document.querySelector(".charging-time");
const batteryFill = document.querySelector(".battery-fill");

const battery = () => {
  if ("getBattery" in navigator) {
    navigator.getBattery().then((battery) => {
      batteryPer.innerHTML = battery.level * 100 + "%";
      batteryFill.innerHTML = battery.level * 100 + "%";
      batteryFill.style.width = `${battery.level * 100}%`;
      chargeTime.innerHTML = battery.dischargingTime + " Seconds";
      isCharge.innerHTML = battery.charging ? "Yes" : "No";

      battery.addEventListener("chargingchange", () => {
        batteryPer.innerHTML = battery.level * 100 + "%";
        isCharge.innerHTML = battery.charging ? "Yes" : "No";
        chargeTime.innerHTML = battery.dischargingTime + " Seconds";
      });
    });
  }
};

battery();
