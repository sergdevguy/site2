$( document ).ready(function() {




    // ----------
    // YANDEX MAP
    // ----------

    var myMap;
    var marker;

    ymaps.ready(init); // Waiting loading API from Yandex server

    function init () {
        myMap = new ymaps.Map("map", {
            center: [55.76, 37.64], // Сoordinate center of map
            zoom: 16 // Map zoom
        });
        marker = new ymaps.Placemark([55.76, 37.64], {
            hintContent: 'Расположение', // text when cursor on marker
            balloonContent: 'Вход за поворотом' // text when click on marker
        });
        myMap.geoObjects.add(marker);
    }




    /* Добавляем анимацию, когда элемент в области видимости экрана
    большие блоки и меню nav
    _________________________________________________________
    _________________________________________________________
    _________________________________________________________
    */

   jQuery.fn.extend({
    onAppearanceAddClass: function(class_to_add) {
      var $window = $( window ),
          window_height = $window.height(),
          array_of_$elements = [];
      this.each(function(i,el) {
        array_of_$elements.push($( el ));
      })
      scrollHandler();
          if (array_of_$elements.length) {
        $window.on('resize', resizeHandler).on('resize', scrollHandler).on('scroll', scrollHandler);
      }
      function resizeHandler() {
        window_height = $window.height();
      }
      function watchProcessedElements(array_of_indexes) {
          var l, i;
        for (l = array_of_indexes.length, i = l - 1; i > -1; --i) {
          array_of_$elements.splice(array_of_indexes[i], 1);
        }
        if (!array_of_$elements.length) {
          $window.off('resize', resizeHandler).off('scroll', scrollHandler).off('resize', scrollHandler);
        }
      }
      function scrollHandler() {
        var i, l, processed = [];
        for ( l = array_of_$elements.length, i = 0; i < l; ++i ) {
          if ($window.scrollTop() + window_height > array_of_$elements[i].offset().top) {
            array_of_$elements[i].addClass(class_to_add);
            processed.push(i); 
          }
        }
        if (processed.length) {
          watchProcessedElements(processed);
        }
      }
      return this;
    }
  })
  
  $('.slideAnimated').onAppearanceAddClass('animated slideInLeft showSlide');




  /* Кнопка навигации по сайту
  _________________________________________________________
  _________________________________________________________
  _________________________________________________________
  */

  // Открываем и закрываем меню по нажатию на кнопку меню
  $(".nav-button").click(function(){
    if($(".toggle-menu").css('display') == 'none'){
      $(".toggle-menu").css("display", "flex");
      $(".toggle-menu").css("opacity", "1");
      $(".toggle-menu").addClass('animated slideInDown');
      $(".bottom-hidder").css("display", "block");
      $(".bottom-hidder").css("opacity", "1");
      $(".bottom-hidder").addClass('animated slideInUp');
    } else{
      $(".toggle-menu, .bottom-hidder").animate({
        opacity: 0,
      }, 500, function() {
        $(".toggle-menu, .bottom-hidder").css("display", "none");
      });
    }
  });

  // Отображаем кнопку "меню" если она скрыта после изменения размера окна
  $(window).resize(function(){
    var w = $(window).width();
    if(w > 850 && $(".toggle-menu").css("display") == "none") {
      $(".toggle-menu").css("display", "flex");
      $(".toggle-menu").css("opacity", "1");
    }
  });
    



  // SMOOTH-SCROLL
  // -------------
  // All animations will take exactly 500ms

  var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 500,
    speedAsDuration: true
  });




  // VIDEO PLAY AND BUTTON

  var overlay = document.getElementById('video-button');
  var vid = document.getElementById('video');

  if(overlay.addEventListener){
      overlay.addEventListener("click", play, false)
    }else if(overlay.attachEvent){
      overlay.attachEvent("onclick", play)
    }

  function play() { 
      if (vid.paused){
          vid.play(); 
          overlay.style.opacity = "0";
          overlay.style.display = "none";
          vid.setAttribute("controls", "controls");

      }else {
          vid.pause();
      }
  }




  // АПАРТМЕНТ

  // Показываем/скрываем картинку этажа апартмента
  $(".appartments .block").click(function(){
    if($(this).children(".appart-container").css("display") == "flex"){
      $(this).children(".appart-container").css("display", "none");
    } else{
      $(this).children(".appart-container").css("display", "flex");
    }
  });




});