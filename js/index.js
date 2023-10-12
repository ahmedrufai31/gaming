let loginBtn = document.querySelector(".login-btn");
let dropLogin = document.querySelector(".drop-login");

loginBtn.onclick = () => {
  dropLogin.classList.toggle("drop-login-open");
};

// menu icon close

let menu = document.querySelector(".menu-icon");
// let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("move");
};

// header bacground
let header = document.querySelector("header");

window.addEventListener('scroll',() => {
  header.classList.toggle('shadow', window.scrollY > 0);
})

// Home swiper

var swiper = new Swiper(".home", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// accordion
const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((item) => {
 const accordionHeader = item.querySelector(".accordion-header");

 accordionHeader.addEventListener('click', () => {
  const openItem = document.querySelector(".accordion-open");

  toggleItem(item);

  if(openItem && openItem !== item){
    toggleItem(openItem);
  }
 });
})


const toggleItem = (item) => {
  const accordionContent = item.querySelector(".accordion-content");

  if(item.classList.contains("accordion-open")) {
    accordionContent.removeAttribute("style");
    item.classList.remove("accordion-open");
  } else{
    accordionContent.style.height = accordionContent.scrollHeight + "px";
    item.classList.add("accordion-open");
  }
};

// control swiper

var swiper = new Swiper(".control-images", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});





// const accordionItems = document.querySelectorAll(".accordion-item");

// accordionItems.forEach((item) => {
//   const accordionHeader = item.querySelector(".accordion-header");

//   accordionHeader.addEventListener("click", () => {
//     const isOpen = item.classList.contains("accordion-open");
//     toggleItem(item, isOpen);

//     // Close other open items
//     if (!isOpen) {
//       accordionItems.forEach((otherItem) => {
//         if (
//           otherItem !== item &&
//           otherItem.classList.contains("accordion-open")
//         ) {
//           toggleItem(otherItem, true);
//         }
//       });
//     }
//   });
// });

// const toggleItem = (item, isOpen) => {
//   const accordionContent = item.querySelector(".accordion-content");

//   if (!isOpen) {
//     accordionContent.style.height = accordionContent.scrollHeight + "px";
//     item.classList.add("accordion-open");
//   } else {
//     accordionContent.style.height = "0";
//     item.classList.remove("accordion-open");
//   }
// };
