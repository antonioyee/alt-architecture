var React = require('react');
var AltContainer = require('alt/AltContainer');
var LocationStore = require('../stores/LocationStore');
var FavoritesStore = require('../stores/FavoritesStore');
var LocationActions = require('../actions/LocationActions');

var Favorites = React.createClass({
    render() {
        return (
            <ul className="list-group">
                {this.props.locations.map((location, i) => {
                    return (<li key={i} className="list-group-item">{location.name}</li>);
                })}
            </ul>
        );
    }
});

var AllLocations = React.createClass({

    addFave(ev) {
        var location = LocationStore.getLocation(
            Number(ev.target.getAttribute('data-id'))
        );
        LocationActions.favoriteLocation(location);
    },

    render() {
        if (this.props.errorMessage) {
            return (<div>{this.props.errorMessage}</div>);
        }

        if (LocationStore.isLoading()) {
            return (
                <div>
                    <img src="loading_spinner.gif" />
                </div>
            );
        }

        return (
            <ul className="list-group">
                {this.props.locations.map((location, i) => {
                    var faveButton = (
                        <a onClick={this.addFave} data-id={location.id} className="btn btn-xs btn-success pull-right">Fav</a>
                    );

                    var selected = <span className="pull-right">
                                        <span className="glyphicon glyphicon-ok" aria-hidden="true"></span>
                                    </span>;

                    return (
                        <li key={i} className="list-group-item">
                            {location.name} {location.has_favorite ? selected : faveButton}
                        </li>
                    );
                })}
            </ul>
        );
    }
});

var Locations = React.createClass({

    componentDidMount() {
        LocationStore.fetchLocations();
    },

    render() {
        return (
            <div className="row">
                <div className="col-sm-6">
                    <h1 className="lead">Cities</h1>
                    <AltContainer store={LocationStore}>
                        <AllLocations />
                    </AltContainer>
                </div>
                <div className="col-sm-6">
                    <h1 className="lead">Favs</h1>
                    <AltContainer store={FavoritesStore}>
                        <Favorites />
                    </AltContainer>
                </div>
            </div>
        );
    }

});

module.exports = Locations;
