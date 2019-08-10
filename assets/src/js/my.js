$( document ).ready(function() {

    var myMap;
    ymaps.ready(init); // Ожидание загрузки API с сервера Яндекса
    function init () {
        myMap = new ymaps.Map("map", {
            center: [55.76, 37.64], // Координаты центра карты
            zoom: 10 // Zoom
        });
    }

});