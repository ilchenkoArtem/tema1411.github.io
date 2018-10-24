var slider = document.getElementById('range');

// активация range
noUiSlider.create(slider, {
    start: 700,
    connect: [true, false],
    tooltips: [true],
    range: {
        'min': 100,
        'max': 1000
    },
    format: wNumb({
        decimals: 0,
        suffix: ' m<sup>2<sup>'
    })
});

//работа range при помощи клавиатуры
var noUiHandle = slider.querySelector('.noUi-handle');
noUiHandle.addEventListener('keydown', function (e) {
    var value = slider.noUiSlider.get();
    var number = '';
    for (var i = 0; i < value.length; i++) {
        if (value[i] == ' ') {
            break
        } else {
            number += value[i];
        }
    }

    if (e.which === 37) {
        slider.noUiSlider.set(Number(number) - 1);
    }

    if (e.which === 39) {
        slider.noUiSlider.set(Number(number) + 1);
    }
});
//установка min значения при клике на левый кружок
document.querySelector('.range__circle--left').addEventListener('click', function () {
    slider.noUiSlider.set(100);
});

//установка max значения при клике на правый кружок
document.querySelector('.range__circle--right').addEventListener('click', function () {
    slider.noUiSlider.set(1000);
});


//google maps api

// This example adds a search box to a map, using the Google Place Autocomplete
// feature. People can enter geographical searches. The search box will return a
// pick list containing a mix of places and predicted search terms.

// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

function initAutocomplete() {
    var map = new google.maps.Map(document.querySelector('.map__container'), {
        center: {
            lat: -33.8688,
            lng: 151.2195
        },
        zoom: 13,
        mapTypeId: 'roadmap',
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl:false,
        zoomControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            position: google.maps.ControlPosition.RIGHT_TOP
        },
        styles: [
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "administrative.country",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.country",
                "elementType": "labels",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "color": "#00ff00"
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#bdbdbd"
                    }
                ]
            },
            {
                "featureType": "administrative.locality",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "administrative.province",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#0000a0"
                    },
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dadada"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#929fe7"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#c9c9c9"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#929fe7"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            }
        ]
    });

    // Create the search box and link it to the UI element.
    var input = document.querySelector('.address__input');
    var searchBox = new google.maps.places.SearchBox(input);

    // Bias the SearchBox results towards current map's viewport.
    /*     map.addListener('bounds_changed', function() {
          searchBox.setBounds(map.getBounds());
        }); */

    var markers = [];
    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener('places_changed', function () {
        var places = searchBox.getPlaces();
        console.log(input.value)
        console.log(places[0].geometry.location)

        if (places.length == 0) {
            return;
        }

        // Clear out the old markers.
        markers.forEach(function (marker) {
            marker.setMap(null);
        });
        markers = [];

        // For each place, get the icon, name and location.
        var bounds = new google.maps.LatLngBounds();
        places.forEach(function (place) {
            if (!place.geometry) {
                console.log("Returned place contains no geometry");
                return;
            }

            // Create a marker for each place.
            markers.push(new google.maps.Marker({
                map: map,
                icon: '../img/map-orange.svg',
                title: place.name,
                position: place.geometry.location,
                draggable: true

            }));

            if (place.geometry.viewport) {
                // Only geocodes have viewport.
                bounds.union(place.geometry.viewport);
            } else {
                bounds.extend(place.geometry.location);
            }
        });
        map.fitBounds(bounds);
    });
}

//управление попапом карты
var addressButtonOpen = document.querySelector('.address__button');
var mapPopup = document.querySelector('.map');
var closeButton = document.querySelector('.map__close');
var bgPopup = document.querySelector('.map__bg');
//функция закрытие попапа
function hiddenPopup() {
    mapPopup.classList.remove('map--active');
    window.removeEventListener('keydown', hiddenPopupESC);
    closeButton.removeEventListener('click', hiddenPopup);
    bgPopup.removeEventListener('click', hiddenPopup);
}
//закрытие попапа по ESC
function hiddenPopupESC(e) {
    if(e.keyCode == 27) {
        hiddenPopup();
    }

}

addressButtonOpen.addEventListener('click', function () {
    mapPopup.classList.add('map--active');
    window.addEventListener('keydown', hiddenPopupESC);
    closeButton.addEventListener('click', hiddenPopup);
    bgPopup.addEventListener('click', hiddenPopup);
});