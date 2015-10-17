var alt = require('../alt');

class LocationActions{

    updateLocations(locations){
        this.dispatch(locations);
    }

    fetchLocations(){
        this.dispatch();
    }

    locationsFailed(errorMessage){
        this.dispatch(errorMessage);
    }

    favoriteLocation(locationId){
        this.dispatch(locationId);
    }

}

module.exports = alt.createActions(LocationActions);
