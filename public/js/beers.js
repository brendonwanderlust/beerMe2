class Beers {
    constructor(beer) {
        this.beer = beer;
    }


    renderBeers() {
        let beerHTML = "";
        
        beerHTML += '<div class="beer card">';
        beerHTML += '<div class="card-body">';
        beerHTML += '<h4 class="card-title td">'+ this.beer.beer_name +'  <img data-id="' + this.beer.beer_name +'" src="/img/beer-icon.png" id="craft-beer"/></h4>';
        beerHTML += '<h5 class="card-subtitle td">'+ this.beer.brewery_name +'<img data-id="' + this.beer.brewery_name +'" src="/img/location-icon.png" id="craft-brewery"/></h5>';
        beerHTML += '<a href="https://www.beeradvocate.com' + this.beer.beer_url + '" target="_blank">View on BeerAdvocate</a>';
        beerHTML += '</div>';
        beerHTML += '</div>';

        return beerHTML;
    
    }
}