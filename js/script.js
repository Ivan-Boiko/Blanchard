window.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('.genrel-menu__btn').forEach(function(tabsMenu){
      tabsMenu.addEventListener('click', function(ev){
        const href = ev.currentTarget.dataset.href;
        document.querySelector(`[data-targets="${href}"]`).classList.toggle('hidden-menu--active');
        const rotate = ev.currentTarget.dataset.rotate;
        document.querySelector(`[data-rotate="${href}"]`).classList.toggle('genrel-menu__svg_rotate');
      })
    });



    document.querySelector('#events-btn').addEventListener('click', function() {
      document.querySelector('#events_hidden-block1').classList.toggle('events_active');
      document.querySelector('#events_hidden-block2').classList.toggle('events_active');
    })

    document.querySelectorAll('.katalog__btn').forEach(function(tabsLang){
      tabsLang.addEventListener('click', function(event){
        const path = event.currentTarget.dataset.path;
        document.querySelectorAll('.katalog__subtitle').forEach(function(tabContent){
          tabContent.classList.remove('katalog_active')
        })
        document.querySelector(`[data-target="${path}"]`).classList.add('katalog_active')
      })
    });
    document.querySelectorAll('.katalog__btn').forEach(function(tabsLang){
      tabsLang.addEventListener('click', function(event){
        const path = event.currentTarget.dataset.path;
        document.querySelectorAll('.tab__content').forEach(function(tabContent){
          tabContent.classList.remove('acardion_active')
        })
        document.querySelectorAll('.tab__content').forEach(function(tabContent){
          tabContent.classList.remove('acardion_active')
        })
        document.querySelector(`[data-country="${path}"]`).classList.add('tab__content-acardion_active')
      })

    });


    document.querySelectorAll('.acordion__persons').forEach(function(tabsAcardion){
      tabsAcardion.addEventListener('click', function(event){
        const path = event.currentTarget.dataset.path;
        document.querySelectorAll('.katalog-painter__information').forEach(function(tabContent){
          tabContent.classList.remove('katalog-painter_active')

        })
        document.querySelector(`[data-target="${path}"]`).classList.add('katalog-painter_active')
      })
    });


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

$( ".acardion" ).accordion({
  collapsible: true,
  animate: 300,
  active:0,
  heightStyle: "content",
});
$ ('.acardion').accordion("refresh");

// Свипер для вкладки проэкты
const swiper = new Swiper(".gallery__swiper-container", {
  navigation: {
  nextEl: '.gallery__btn-next',
  prevEl: '.gallery__btn-prev',
  },
  pagination:{
    el: '.gallery__pagination',
    type: 'fraction',
  },
  breakpoints: {
    320:{

    },
    480:{

    },
    768:{

    },
    1024:{
      slidesPerColumn:2,
      slidesPerGroup:2,
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1300:{
      slidesPerColumn:2,
      slidesPerGroup:2,
      slidesPerView: 2,
      spaceBetween: 50,
    },
    1650:{
      slidesPerColumn:2,
      slidesPerGroup:7,
      slidesPerView: 3,
      spaceBetween: 50,
    }
  },

  observer:true,
  observeParents:true,
  observeSlideChildren:true,
});



new Swiper(".partners-projects__swiper-container", {
  slidesPerView: 3,
  spaceBetween: 10,
  slidesPerGroup:3,
  breakpoints: {
    320:{

    },
    480:{

    },
    768:{

    },
    1024:{
      slidesPerView: 2,
      slidesPerGroup:2,
      spaceBetween: 30,
    },
    1300:{
      slidesPerView: 2,
      spaceBetween: 10,
      slidesPerGroup:2,

    },
    1650:{
      slidesPerView: 3,
  spaceBetween: 10,
  slidesPerGroup:3,
    }
  },
  navigation: {
  nextEl: '.partners-projects__next',
  prevEl: '.partners-projects__prev',
  },
  observer:true,
  observeParents:true,
  observeSlideChildren:true,

});

// Свипер для вкладки Издания

new Swiper(".publications-book", {
  slidesPerView: 3,
  spaceBetween: 50,
  slidesPerGroup:2,
  navigation: {
  nextEl: '.editions__btn-next',
  prevEl: '.editions__btn-prew',
  },
  pagination:{
    el: '.editions__pagination',
    type: 'fraction'
  },
  breakpoints: {
    320:{

    },
    480:{

    },
    768:{

    },
    1024:{

      slidesPerGroup:2,
      slidesPerView: 2,
      spaceBetween: 25,
    },
    1300:{

      slidesPerGroup:2,
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1650:{

      slidesPerGroup:3,
      slidesPerView: 3,
      spaceBetween: 50,
    }
  },
  observer:true,
  observeParents:true,
  observeSlideChildren:true,
});



// Свипер для вкладки hero

 new Swiper(".swiper-hero ", {
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
      new Choices(element, {
        itemSelectText: "",
        searchEnabled: false,
        shouldSort: false,
      });
  });
