
 AOS.init({
    duration: 1000,  
    once: true       
  });

// Menu Icon

 const navbarMenu=document.querySelector(".navbar-menu");
 const nabarToggle=document.querySelector(".navbar-toggle");

function toggleMenu() {
 nabarToggle.classList.toggle("active");
  navbarMenu.classList.toggle("active");
  document.body.classList.toggle("no-scroll");
}


  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    item.querySelector(".faq-question").addEventListener("click", () => {
      faqItems.forEach(el => {
        if (el !== item) {
          el.classList.remove("active");
        }
      });

      item.classList.toggle("active");
    });
  });


 


