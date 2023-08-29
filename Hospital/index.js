const appointmentForm = document.getElementById("appointment-form");
const appointmentDetails = document.getElementById("appointment-details");
const bookAppointment = document.getElementById("book-appointment");
const showAppointment = document.getElementsByClassName("showAppointment");
const conformbtn = document.getElementById("conformbtn");
bookAppointment.addEventListener("click", function (e) {
  e.preventDefault();
  showDetails();
});

conformbtn.addEventListener("click", () => {
  alert(`Your Appointment is Fixed.  Thank You....!`);
});

function showDetails(e) {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const date = document.getElementById("a-date").value;
  const time = document.getElementById("a-time").value;
  const doctor = document.getElementById("doctor").value;

  document.getElementById("showName").innerHTML = ":  " + name;
  document.getElementById("showTime").innerHTML = ":  " + time;
  document.getElementById("showDate").innerHTML = ":  " + date;
  document.getElementById("showEmail").innerHTML = ":  " + email;
  document.getElementById("showPhone").innerHTML = ":  " + phone;
  document.getElementById("showDoctor").innerHTML = ":  " + doctor;
}
