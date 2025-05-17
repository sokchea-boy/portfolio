// Vanilla js fon image animation
VanillaTilt.init(document.querySelector(".img"), {
  max: 14,
  speed: 400,
});

// Disabled right click on website
document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});

//text change
window.onblur = function () {
  document.title = "Please Come back ";
};
window.onfocus = function () {
  document.title = "Abhishek Jariwala | Portfolio";
};

// Navbar
let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".nav-item");

menu.onclick = () => {
  navbar.classList.toggle("open-menu");
  menu.classList.toggle("move");
};

window.onscroll = () => {
  navbar.classList.remove("open-menu");
  menu.classList.remove("move");
};

// For Type animation
var typed = new Typed("#element", {
  strings: ["Web Development", "Front-End Development", " Nodejs Development"],
  typeSpeed: 80,
  loop: true,
});

//Email js intigration
function validation() {
  let name = document.querySelector(".name");
  let email = document.querySelector(".email");
  let msg = document.querySelector(".message");
  let submit = document.querySelector(".submit");

  submit.addEventListener("click", (e) => {
    e.preventDefault();

    if (name.value == "" || email.value == "" || msg.value == "") {
      errorEmpty();
    } else {
      sendMail(name.value, email.value, msg.value);
      success();
      (name.value = ""), (email.value = ""), (msg.value = "");
    }
  });
}
validation();

function sendMail(name, email, msg) {
  emailjs.send("service_xgkx11t", "template_k5ttt35", {
    name: name,
    email: email,
    message: msg,
  });
}

function errorEmpty() {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Filed can not be empty",
  });
}

function success() {
  Swal.fire({
    icon: "success",
    title: "Messag sent Successfully!",
    showConfirmButton: false,
    timer: 1500,
  });
}

//Mic button
const button = document.querySelector("#speak");
const text = document.querySelector("#text-box");

button.addEventListener("click", (e) => {
  e.preventDefault();

  if (text.value == "") {
    const errorSpeach = new SpeechSynthesisUtterance(
      "Please Write Your Message First"
    );
    speechSynthesis.speak(errorSpeach);
  } else {
    const speach = new SpeechSynthesisUtterance(text.value);

    speechSynthesis.speak(speach);
  }
});
