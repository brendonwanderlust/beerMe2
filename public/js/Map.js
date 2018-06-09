class Map { 
    
    constructor (breweryArray) {
        this.breweryArray = breweryArray
    };
    
    render(breweryArray) {
        function initMap() {
            let mapLatLng = { lat: 33.90, lng: -84.392 };
            let myLatLng = {};
            var map;
            var marker;
            var markers = [];
            var dropPins = [];
            var breweryNames = [];

            
            map = new google.maps.Map(document.getElementById('map'), {
                center: mapLatLng,
                zoom: 11
            });

            breweryArray.forEach(function (currentBrewery) {
                dropPins.push({ lat: currentBrewery.latitude, lng: currentBrewery.longitude });
                breweryNames.push(currentBrewery.name)
            });

            function drop() {
                clearMarkers();
                for (var i = 0; i < dropPins.length; i++) {
                    addMarkerWithTimeout(dropPins[i], i * 200, breweryNames[i]);
                }
            }
            
            function addMarkerWithTimeout(position, timeout, name) {
                window.setTimeout(function () {
                    markers.push(new google.maps.Marker({
                        position: position,
                        map: map,
                        title: name,
                        animation: google.maps.Animation.DROP
                    }));
                }, timeout);
            }    

            function clearMarkers() {
                for (var i = 0; i < markers.length; i++) {
                    markers[i].setMap(null);
                }
                markers = [];
            };
            
            drop();
                
        };
        initMap();            
    };
};