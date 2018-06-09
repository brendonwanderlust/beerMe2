class beerApi {
    
    searchForBreweries() {
        let breweryList = [];
        let tempRequest = this.request; //FIX THIS (bind?)
        let tempService = this.service; //FIX THIS 

        return new Promise(function (resolve, reject) {
            tempService.textSearch(tempRequest, function (results, status) {
                if (status == google.maps.places.PlacesServiceStatus.OK) {
                    breweryList = results.map(function (result) {
                        let brewery = {};
                        brewery.name = result.name;
                        brewery.latitude = result.geometry.location.lat();
                        brewery.longitude = result.geometry.location.lng();
                        brewery.googlePlaceID = result.place_id;
                        return brewery;
                    });
                    resolve(breweryList);
                } else {
                    reject(new Error("Unable to retrieve brewery list."));
                }
            });
        });
    }

    getBeersForBrewery(brewery) {
        return new Promise(function (resolve, reject) {
            $.ajax({
                    //url: 'http://localhost:3000/beers',
                    url: 'http://afternoon-mountain-22774.herokuapp.com/beers',
                    data: {
                        search: brewery
                    },
                })
                .done(function (data) {
                    let beerList = JSON.parse(data);

                    // Clean up the list by making sure the brewery search string
                    // matches the name of the brewery returned with each beer object
                    // and that the beer is currently available
                    beerList = beerList.filter(function (beerObj) {
                        return (beerObj.brewery_name === brewery) && (beerObj.retired === false);
                    });
                    resolve(beerList);
                })
                .catch(function (err) {
                    console.log(err);
                })
                .fail(function () {
                    reject(new Error("Unable to retrieve beer list from brewery"));
                })
        });
    }
}
