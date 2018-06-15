class Beers {
    constructor(beer) {
        this.beer = beer;
    }


    renderBeers() {
        let beerHTML = "";
        
        beerHTML += '<div class="beer card">';
        beerHTML += '<div class="card-body">';
        beerHTML += '<div>'
        beerHTML += '<h4 class="card-title td">'+ this.beer.beer_name +'</h4>';
        beerHTML += ' <i class="fas fa-beer"></i>';
        beerHTML += '</div>';
        beerHTML += '<div>';
        beerHTML += '<h5 class="card-subtitle td">'+ this.beer.brewery_name +'</h5>';
        beerHTML += ' <i class="fas fa-beer"></i>';
        beerHTML += '</div>';
        beerHTML += '<a href="https://www.beeradvocate.com' + this.beer.beer_url + '" target="_blank">View on BeerAdvocate</a>';
        beerHTML += '</div>';
        beerHTML += '</div>';

        return beerHTML;
    
    }
}