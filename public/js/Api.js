class Api {
    constructor(latitude, longitude) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.initializeGoogleMap();
    }

    initializeGoogleMap() {
        let coordinates = new google.maps.LatLng(this.latitude, this.longitude);

        let map = new google.maps.Map(document.getElementById('map'), {
            center: coordinates,
            zoom: 11 // update this to fit all of Atlanta
        });


        this.request = {
            location: coordinates,
            radius: '500', // update this to fit all of Atlanta
            query: 'breweries'
        };

        this.service = new google.maps.places.PlacesService(map);
    }


    searchForBreweries() {
        let breweryList = [];
        let tempRequest = this.request; //FIX THIS (bind?)
        let tempService = this.service; //FIX THIS 

        return new Promise(function(resolve, reject) {
            tempService.textSearch(tempRequest, function(results, status) {
                if (status == google.maps.places.PlacesServiceStatus.OK) {
                    breweryList = results.map(function(result) {
                        let brewery = {};
                        brewery.name = result.name;
                        brewery.latitude = result.geometry.location.lat();
                        brewery.longitude = result.geometry.location.lng();
                        brewery.googlePlaceID = result.place_id;
                        return brewery;
                    });
                    resolve(breweryList);
                }
                else {
                    reject(new Error("Unable to retrieve brewery list."));
                }
            });
        });
    }

    getBeersForBrewery(brewery) {
        return new Promise(function(resolve, reject) {
            $.ajax({
                //url: 'http://localhost:3000/beers',
                url: 'https://afternoon-mountain-22774.herokuapp.com/beers',
                data: {search: brewery},
            })
            .done(function(data) {
                let beerList = JSON.parse(data);
                
                // Clean up the list by making sure the brewery search string
                // matches the name of the brewery returned with each beer object
                // and that the beer is currently available
                beerList = beerList.filter(function(beerObj) {
                    return (beerObj.brewery_name === brewery) && (beerObj.retired === false);
                });
                resolve(beerList);
            })
            .fail(function() {
                reject(new Error("Unable to retrieve beer list from brewery"));
            })
        });
    }


}