document.addEventListener('DOMContentLoaded', function () {
   document.querySelectorAll('.tabs-nav__btn').forEach(function (tabsBtn) {
      tabsBtn.addEventListener('click', function (event) {
         const path = event.currentTarget.dataset.path

         document.querySelectorAll(".tabs-item").forEach(function (tabContent) {
            tabContent.classList.remove("tabs-item--active")
         })
         document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active')
      })
   })
});

document.addEventListener('DOMContentLoaded', function () {
   document.querySelectorAll('.scenarios-nav__btn').forEach(function (tabsBtn) {
      tabsBtn.addEventListener('click', function (event) {
         const path = event.currentTarget.dataset.path

         document.querySelectorAll(".scenarios-item").forEach(function (tabContent) {
            tabContent.classList.remove("scenarios-item--active")
         })
         document.querySelector(`[data-target="${path}"]`).classList.add('scenarios-item--active')
      })
   })
});

const mySwiper = new Swiper('.swiper', {
   // Optional parameters
   direction: 'horizontal',
   loop: true,

   // Navigation arrows
   navigation: {
      nextEl: '.howwework-btn-next',
      prevEl: '.howwework-btn-prev',
   },
});

const eqSwiper = new Swiper('.swiper', {
   // Optional parameters
   direction: 'horizontal',
   loop: true,

   // Navigation arrows
   navigation: {
      nextEl: '.equipment__swiper-button-next',
      prevEl: '.equipment__swiper-button-prev',
   },

   pagination: {
      el: '.equipment__swiper-pagination',
      type: 'bullets',
   },
});

window.addEventListener('DOMContentLoaded', function () {
   document.querySelector('#burger').addEventListener('click', function () {
      document.querySelector('#burger').classList.toggle('active'),
         document.querySelector('#burger-menu').classList.toggle('is-active')
   })
});