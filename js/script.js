window.addEventListener('DOMContentLoaded', function(){
    document.querySelector('#btn-realism').addEventListener('click', function() {
      document.querySelector('#hidden-menu').classList.toggle('hidden-menu--active');
      document.querySelector('.header__svg').classList.toggle('header--svg');
    });

    
    document.querySelector('#events-btn').addEventListener('click', function() {
      document.querySelector('#events_hidden-block1').classList.toggle('events_active');
      document.querySelector('#events_hidden-block2').classList.toggle('events_active');
    })

    // document.querySelectorAll('.katalog__btn').forEach(function(tabsLang){
    //   tabsLang.addEventListener('click', function(event){
    //     const path = event.currentTarget.dataset.path
    //     document.querySelectorAll('.katalog-painter__information').forEach(function(tabContent){
    //       tabContent.classList.remove('katalog-painter_active')
    //     })
    //     document.querySelector('[data-target = "${path}"]').classList.add('katalog-painter_active')
    //   })
    // })



    // VALIDATION

    var selector = document.querySelector('input[type="tel"]');
    var im = new Inputmask("+7 (999) 999-99-99");

    im.mask(selector);

    
    new JustValidate('.callback-contacts',{
    colorWrong: '#ff3300',
    rules: {
      name: {
        required: true,
        minLength:2,
        maxLength:10
      },
      tel: {
        required: true,
        function: (name, value) => {
            const phone = selector.inputmask.unmaskedvalue()
            return Number(phone) && phone.length === 10
        }
      },
    },
    messages: {
      name: {
        required:"Введите Имя",
        minLength: 'Введите больше двух символов',
        maxLength: 'Слишком большое имя'
      },
      tel: {
        required:"Введите Телефон",
        function:"Введите больше цифр" 
        }
      },
     
});


// acardeon

$( "#accordion" ).accordion({
  collapsible:true,
  animate: 500
});


// Свипер для вкладки проэкты

const mySwiper = new Swiper(".partners-projects__swiper-container", {
  loop: true,
  effect: 'fade',
  fadeEffect: {
  crossFade: true
  },
  navigation: {
  nextEl: '.partners-projects__prev',
  prevEl: '.partners-projects__next',
  },
});
// Свипер для вкладки Издания

const publicationsbookSwiper = new Swiper(".publications-book", {
  loop: true,
  effect: 'fade',
  fadeEffect: {
  crossFade: true
  },
  navigation: {
  nextEl: '.gallery-photo__btn-next',
  prevEl: '.gallery-photo__btn-prew',
  },
  pagination:{
    el: '.editions__pagination',
    type: 'fraction'
  }
});

// Свипер для вкладки Галерея

var gallerySwiper = new Swiper(".gallery__swiper-container", {
  //Optional parameters
  loop: true,
  effect: 'fade',
  fadeEffect: {
  crossFade: true
  },
  navigation: {
  nextEl: '.gallery__btn-next',
  prevEl: '.gallery__btn-prev',
  },
  pagination:{
    el: '.gallery__pagination',
    type: 'fraction'
  }
});

// Свипер для вкладки hero

var heroSwiper = new Swiper(".swiper-hero", {
  //Optional parameters
  loop: true,
  autoplay: {
  delay: 6000,
  },
  effect: 'fade',
  fadeEffect: {
  crossFade: true
  },
});

// инпут для вкладки галерея

const element = document.querySelector('.gallery-menu__select');
      const choices = new Choices(element, {
        itemSelectText: "",
        searchEnabled: false,
        shouldSort: false,
      });
  });
