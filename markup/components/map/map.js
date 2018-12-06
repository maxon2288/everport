$(document).ready(function () {

    if ($("#mapa").length > 0) {
        var x = $('#mapa').attr('data-x');
        var y = $('#mapa').attr('data-y');

        var myMap;

        ymaps.ready(init);

        function init () {
            myMap = new ymaps.Map('mapa', {
                center: [x , y],
                zoom: 14
            }, {
                searchControlProvider: 'yandex#search'
            });

            var myPlacemark = new ymaps.Placemark([x, y], {
            });

            myMap.geoObjects.add(myPlacemark);
        }
    }

    if ($("#mapa2").length > 0) {
        ymaps.ready(init);
        function init () {
            var x = +$('.mapa2place:first-child').data('mapx');
            var y = +$('.mapa2place:first-child').data('mapy');
            myMap = new ymaps.Map('mapa2', {
                center: [x , y],
                zoom: 15
            }, {
                searchControlProvider: 'yandex#search'
            });

            $(".mapa2place").each(function () {
                var it = $(this);
                var x = +$(this).data('mapx');
                var y = +$(this).data('mapy');
                var myPlacemark = new ymaps.Placemark([x, y], {

                }, {
                    // Опции.
                    // Необходимо указать данный тип макета.
                    iconLayout: 'default#imageWithContent',
                    // Своё изображение иконки метки.
                    iconImageHref: '../../static/img/content/ball.png',
                    // Размеры метки.
                    iconImageSize: [30, 30],
                });
                myMap.geoObjects.add(myPlacemark);
            })
            $('.mapa2place').click(function() {
                var datamapx = +$(this).data('mapx');
                var datamapy = +$(this).data('mapy');
                myMap.setCenter([datamapx, datamapy], 15);
            });
        }

    }

    if ($("#mapRus").length > 0) {
        ymaps.ready(init);
        function init () {
            var x = +$('.map-data:first-child').data('x');
            var y = +$('.map-data:first-child').data('y');
            myMap = new ymaps.Map('mapRus', {
                center: [x , y],
                zoom: 15
            }, {
                searchControlProvider: 'yandex#search'
            });

            $(".map-data").each(function () {
                var it = $(this);
                var x = +$(this).data('x');
                var y = +$(this).data('y');

            })
            $('.map-data').click(function() {
                var datamapx = +$(this).data('x');
                var datamapy = +$(this).data('y');
                myMap.setCenter([datamapx, datamapy], 15);
            });
        }

    }
    if ($("#mapCount").length > 0) {
        ymaps.ready(init);
        function init () {
            var y = +$('.map-data:nth-child(1)').data('y');
            var x = +$('.map-data:nth-child(1)').data('x');
            myMap = new ymaps.Map('mapCount', {
                center: [x , y],
                zoom: 10
            }, {
                searchControlProvider: 'yandex#search'
            });

            var myPlacemark = new ymaps.Placemark([x, y], {

            }, {
                iconLayout: 'default#imageWithContent',
                iconImageHref: '../../static/img/content/ball.png',
                iconImageSize: [30, 30],
            });
            myMap.geoObjects.add(myPlacemark);

            $('.map-data').click(function() {
                $('.map-data').removeClass('active');
                $(this).addClass('active');
                var x = +$(this).data('x');
                var y = +$(this).data('y');
                myMap.setCenter([x, y], 10);
                myPlacemark.geometry.setCoordinates([x, y]);


            });
        }

    }

});

