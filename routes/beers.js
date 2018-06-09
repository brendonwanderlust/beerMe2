class Beers {
    constructor(beer) {
        this.beer = beer;
    }


    renderBeers() {
        let beerHTML = "";
        
        beerHTML += '<div class="beer card">';
        beerHTML += '<div class="card-body">';
        beerHTML += '<h5  class="card-title td">'+ this.beer.beer_name +'</h5>';
        beerHTML += '<h6 class="card-subtitle mb-2 text-muted td">'+ this.beer.brewery_name +'</h6>';
        beerHTML += '<a href="https://www.beeradvocate.com' + this.beer.beer_url + '" target="_blank">View on BeerAdvocate</a>';
        beerHTML += '</div>';
        beerHTML += '</div>';

        return beerHTML;
    
    }
}