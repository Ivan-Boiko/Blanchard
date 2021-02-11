window.addEventListener('DOMContentLoaded', function(){
    document.querySelector('.btn-realism').addEventListener('click', function() {
      document.querySelector('.hidden-menu__realism').classList.toggle('hidden-menu--active');
      document.querySelector('.hidden-menu__realism').classList.toggle('realism-menu');
    });
    document.querySelector('.btn-imperesizm').addEventListener('click', function() {
      document.querySelector('.hidden-menu__imperesizm').classList.toggle('hidden-menu--active');
      document.querySelector('.hidden-menu__imperesizm').classList.toggle('imperesizm-menu');
      
    });
    document.querySelector('.btn-postimperesizm').addEventListener('click', function() {
      document.querySelector('.hidden-menu__postimperesizm').classList.toggle('hidden-menu--active');
      document.querySelector('.hidden-menu__postimperesizm').classList.toggle('postimperesizm-menu');
      
    });
    document.querySelector('.btn-avangard').addEventListener('click', function() {
      document.querySelector('.hidden-menu__avangard').classList.toggle('hidden-menu--active');
      document.querySelector('.hidden-menu__avangard').classList.toggle('avangard-menu');
      
    });
    document.querySelector('.btn-footorizm').addEventListener('click', function() {
      document.querySelector('.hidden-menu__footorizm').classList.toggle('hidden-menu--active');
      document.querySelector('.hidden-menu__footorizm').classList.toggle('footorizm-menu');
     
    });
  

    document.querySelectorAll('.genrel-menu__btn').forEach(function(tabsGenrelMenu){
      tabsGenrelMenu.addEventListener('click', function(event){
        const path = event.currentTarget.dataset.path
        document.querySelector('.genrel-menu__svg')
        document.querySelector(`[data-target="${path}"]`).classList.toggle('genrel-menu__svg_rotate');
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
      tabsLang.addEventListener('click', function(ev){
        const target = ev.currentTarget.getAttribute('href')
        document.querySelectorAll('.tab__content').forEach(function(tabContent){
          tabContent.classList.remove('acardion_active')
        })
        document.querySelector(target).classList.add('acardion_active')

        $('.acardion').accordion("refresh");
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
});

// Свипер для вкладки проэкты
new Swiper(".gallery__swiper-container", {
  //Optional parameters
  navigation: {
  nextEl: '.gallery__btn-next',
  prevEl: '.gallery__btn-prev',
  },
  pagination:{
    el: '.gallery__pagination',
    type: 'fraction',
  },
  slidesPerView: 3,
  spaceBetween: 50,
  slidesPerColumn: 2,
  observer:true,
  observeParents:true,
  observeSlideChildren:true
});



new Swiper(".partners-projects__swiper-container", {
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

new Swiper(".publications-book", {
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

 
// Свипер для вкладки hero

 new Swiper(".swiper-hero", {
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
