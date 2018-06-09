class SideBar {
    constructor() {
        this.searchResults = $('.search-results');
    }

    renderSideBar(beerList) {
        let sideBarHTML = "";

        beerList.forEach(function(beer){
            let beerObject = new Beers(beer);
                
            sideBarHTML += beerObject.renderBeers();
        });
        
        this.searchResults.html(sideBarHTML);
    }

}