// ---Update footer--- //

var currentYear = new Date().getFullYear();

if (currentYear === 2023) {
  document.getElementById("footer").innerHTML =
    "WM Contractors, Copyright &copy; 2023";
} else {
  document.getElementById("footer").innerHTML =
    "WM Contractors, Copyright &copy; 2023 - " + currentYear;
}
