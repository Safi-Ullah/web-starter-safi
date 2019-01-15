import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import CircularProgress from '@material-ui/core/CircularProgress';
import TitleBar from './TitleBar';
import { RESTAURANT_SEARCH_QUERY } from '../../graphql/queries';
import RetaurantsList from './RetaurantsList';
import { withRouter } from 'react-router-dom';

class SearchPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      restaurants: [],
      selectedRestaurant: null,
      searchQuery: {
        address: 'Chicago'
      }
    }

    this.renderRestaurants = this.renderRestaurants.bind(this);
    this.handleRestaurantSelect = this.handleRestaurantSelect.bind(this);
    this.handleRestaurantQueryChange = this.handleRestaurantQueryChange.bind(this);
    this.getCurrentLocation = this.getCurrentLocation.bind(this);
    this.handleCurrentLocation = this.handleCurrentLocation.bind(this);
  }

  handleRestaurantSelect(restaurant) {
    this.setState({
      selectedRestaurant: restaurant
    });
    this.props.history.push(`/rest/${restaurant.id}`);
  }

  handleRestaurantQueryChange(event) {
    if(event.keyCode === 13) {
      this.setState({
        searchQuery: {
          address: event.target.value
        }
      });
    }
  }

  handleCurrentLocation(position) {
    this.setState({
      searchQuery: {
        lat: position.coords.latitude,
        lon: position.coords.longitude
      }
    })
  }

  renderRestaurants({ loading, error, data = {} }) {
    if (loading) {
      return <div className='loading-component'><CircularProgress /></div>;
    }

    // Make sure we have data
    if (
      data.search_restaurants
      && data.search_restaurants.results
      && data.search_restaurants.results.length > 0
    ) {
      let userLocation = null;
      if ('lat' in this.state.searchQuery && 'lon' in this.state.searchQuery)
        userLocation = {
          lon: this.state.searchQuery.lon, lat: this.state.searchQuery.lat
        };
      return <RetaurantsList restaurants={data.search_restaurants.results}
        handleRestaurantSelect={this.handleRestaurantSelect}
        userLocation={userLocation}
        selectedRestaurant={this.state.selectedRestaurant} />;
    }

    // No Data Return
    return <div>No Results</div>;
  }

  getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.handleCurrentLocation);
    }
  }

  render() {
    return (
      <div>
        <TitleBar
          handleRestaurantQueryChange={this.handleRestaurantQueryChange}
          getCurrentLocation={this.getCurrentLocation}
          searchRestaurantQuery={this.state.searchQuery.address} />
        <Query
          query={RESTAURANT_SEARCH_QUERY}
          variables={this.state.searchQuery}>
          {this.renderRestaurants}
        </Query>
      </div>
    );
  }
}

SearchPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
};

export default withRouter(SearchPage);
