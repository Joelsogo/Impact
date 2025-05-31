"use stricts";

const body = document.querySelector("body");
const mySwiper = document.querySelector(".mySwiper");
mySwiper.setAttribute("slides-per-view", 3);

function reduceSwiperSize() {
  if (body.clientWidth <= 600) {
    mySwiper.setAttribute("slides-per-view", 1);
  } else {
    mySwiper.setAttribute("pagination-colour", red);
  }
}
window.addEventListener("resize", reduceSwiperSize);


const tabButtons = document.querySelectorAll(".tab-button");


tabButtons.forEach((tab, index) => {
  tab.addEventListener("click", function () {
    document.querySelectorAll(".tab-content").forEach((tabContent) => {
      tabContent.classList.remove("show");
    });
    document.querySelectorAll(".tab-button").forEach((tabButton) => {
      tabButton.classList.remove("show");
    });

    document.querySelector(`.tab-content-${index + 1}`).classList.add("show");
    document.querySelector(`.tab-button-${index + 1}`).classList.add("show");
  });
});

const tapButtons = document.querySelectorAll(".tabs-btn");
tapButtons.forEach((tap, num) => {
  tap.addEventListener("click", function () {
    document.querySelectorAll(".tabs-content").forEach((tabsContent) => {
      tabsContent.classList.remove("reveal");
    });
    document.querySelectorAll(".tabs-btn").forEach((tapButton) => {
      tapButton.classList.remove("reveal");
    });

    document.querySelector(`.tabi-content-${num + 1}`).classList.add("reveal");
    document.querySelector(`.taBtn-${num + 1}`).classList.add("reveal");
  });
});

const names = document.querySelector("#names");
const emails = document.querySelector("#emails");
const subjects = document.querySelector("#subjects");
const image = document.querySelector(".fonto");
const images = document.querySelector(".image");

const messages = document.querySelector("#messages");
const btnm = document.querySelector("#btnm");

btnm.addEventListener("click", function (e) {
  e.preventDefault();
  const detail = {
    yourname: names.value,
    youremail: emails.value,
    subject: subjects.value,
    message: messages.value,
  };
  if (
    !detail.yourname ||
    !detail.youremail ||
    !detail.subject ||
    !detail.message
  ) {
    alert("Please fill out this field.");
  } else {
    alert("Message submitted");
    // btnm.textContent = `my name is ${detail.yourname} , and my email is ${detail.youremail}`;
  }
});

// NAV //

const nav = document.querySelector(".nav");
const navBtn = document.querySelector(".navToggle");
navBtn.addEventListener("click", function () {
  nav.classList.toggle("stick");
});

// NAV STICK REMOVER //
const navs = document.querySelectorAll(".navs");

navs.forEach((button) => {
  button.addEventListener("click", function () {
    nav.classList.remove("stick");
  });
});

// STICKY NAV //
const headerSection = document.querySelector(".nav");

const navObserver = new IntersectionObserver(
  function (entries) {
    const [entry] = entries;
    if (!entry.isIntersecting) {
      document.body.classList.add("sticky");
    } else {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-100px",
  }
);

navObserver.observe(headerSection);

// MODAL //

const modal = document.querySelector(".login-modal");
const modalBtn = document.querySelector(".btn");
const modalCloser = document.querySelector(".close-btn");
const togo = document.querySelector(".logged");
const email = document.querySelector(".email");
const pass = document.querySelector(".password");
const passTwo = document.querySelector(".password-two");

modalBtn.addEventListener("click", function () {
  modal.style.display = "block";
});

const closeModal = () => {
  modal.style.display = "none";
};

modalCloser.addEventListener("click", closeModal);

window.addEventListener("click", function (e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
});

togo.addEventListener("click", function () {
  if (!email.value || !pass.value || !passTwo.value) {
    alert("please fill the input fields");
    return;
  }
  if (pass.value !== passTwo.value) {
    alert("password does not match");
    return;
  } else {
    alert("account created succesfully");
  }
  email.value = " ";
  pass.value = " ";
  passTwo.value = " ";
  closeModal();
});

// const modal = document.querySelector(".login-modal");
// const modalBtn = document.querySelectorAll(".btn");
// const modalCloser = document.querySelector(".close-btn");
// const togo = document.querySelector(".logged");
// const email = document.querySelector(".email");
// const pass = document.querySelector(".password");
// const passTwo = document.querySelector(".password-two");

// modalBtn.forEach((btv) =>{

//   btv.addEventListener("click", function () {
//     modal.style.display = "block";
//   });

//   const closeModal = () => {
//     modal.style.display = "none";
//   };

//   modalCloser.addEventListener("click", closeModal);

//   window.addEventListener("click", function (e) {
//     if (e.target == modal) {
//       modal.style.display = "none";
//     }
//   });

//   togo.addEventListener("click", function () {
//     if (!email.value || !pass.value || !passTwo.value) {
//       alert("please fill the input fields");
//       return;
//     }
//     if (pass.value !== passTwo.value) {
//       alert("password does not match");
//       return;
//     } else {
//       alert("account created succesfully");
//     }
//     email.value = " ";
//     pass.value = " ";
//     passTwo.value = " ";
//     closeModal();
//   });
// })

// let scrollTop = document.querySelector('.scroll-top');

//   function toggleScrollTop() {
//     if (scrollTop) {
//       window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
//     }
//   }
//   scrollTop.addEventListener('click', (e) => {
//     e.preventDefault();
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth'
//     });
//   });

//   window.addEventListener('load', toggleScrollTop);
//   document.addEventListener('scroll', toggleScrollTop);
