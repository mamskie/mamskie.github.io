var formMenu = document.getElementById("input-form");
formMenu.style.display = "none";

function editForm() {
  if (formMenu.style.display === "none") {
    formMenu.style.display = "block";
  } else {
    formMenu.style.display = "none";
  }

  var name = document.getElementById("pName").innerHTML;
  var role = document.getElementById("pRole").innerHTML;
  var available = document.getElementById("pAvailable").innerHTML;
  var usia = document.getElementById("pAge").innerHTML;
  var lokasi = document.getElementById("pLocation").innerHTML;
  var experience = document.getElementById("pExperience").innerHTML;
  var email = document.getElementById("pEmail").innerHTML;

  document.getElementById("inpName").value = name;
  document.getElementById("inpRole").value = role;
  document.getElementById("inpAvailability").value = available;
  document.getElementById("inpUsia").value = usia;
  document.getElementById("inpLokasi").value = lokasi;
  document.getElementById("pExperience").value = experience;
  document.getElementById("inpEmail").value = email;
}

function simpanForm() {
  var newName = document.getElementById("inpName").value;
  var newRole = document.getElementById("inpRole").value;
  var newAvailability = document.getElementById("inpAvailability").value;
  var newUsia = document.getElementById("inpUsia").value;
  var newLokasi = document.getElementById("inpLokasi").value;
  var newExperience = document.getElementById("pExperience").value;
  var newEmail = document.getElementById("inpEmail").value;

  document.getElementById("pName").innerHTML = newName;
  document.getElementById("pRole").innerHTML = newRole;
  document.getElementById("pAvailable").innerHTML = newAvailability;
  document.getElementById("pAge").innerHTML = newUsia;
  document.getElementById("pLocation").innerHTML = newLokasi;
  document.getElementById("pExperience").innerHTML = newExperience;
  document.getElementById("pEmail").innerHTML = newEmail;

  formMenu.style.display = "none";
}

function showMenu() {
  var menu = document.getElementById("menu");
  var box = document.getElementById("box-profile");

  if (menu.style.display === "block") {
    menu.style.display = "none";
    box.style.paddingTop = "0px";
  } else {
    menu.style.display = "block";
    box.style.paddingTop = "125px";
  }
}