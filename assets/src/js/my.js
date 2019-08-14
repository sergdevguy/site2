$( document ).ready(function() {

    // Яндекс карта
    var myMap;
    var marker;
    ymaps.ready(init); // Ожидание загрузки API с сервера Яндекса
    function init () {
        myMap = new ymaps.Map("map", {
            center: [55.76, 37.64], // Координаты центра карты
            zoom: 16 // Zoom
        });
        marker = new ymaps.Placemark([55.76, 37.64], {
            hintContent: 'Расположение',
            balloonContent: 'Вход за поворотом'
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
          $(".toggle-menu").addClass('animated slideInDown');
        } else{
          $(".toggle-menu").css("display", "none");
        }
      });




  // SMOOTH-SCROLL
  // -------------
  // All animations will take exactly 500ms
  var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 500,
    speedAsDuration: true
  });




});