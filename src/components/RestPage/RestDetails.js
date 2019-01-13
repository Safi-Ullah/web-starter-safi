import React, { Component } from 'react';

import { Query } from 'react-apollo';

import CircularProgress from '@material-ui/core/CircularProgress';
import { RESTAURANT_QUERY } from '../../graphql/queries';

class RestDetails extends Component {

  constructor(props) {
    super(props);

    this.renderRestaurants = this.renderRestaurants.bind(this);
  }

  renderRestaurants({ loading, error, data = {} }) {
    if (loading) {
      return <div className="loading-component"><CircularProgress /></div>;
    }

    console.log('DO SOMETHING SMART WITH THIS DATA');
    console.log('data', data);
    console.log('error', error);
    // Make sure we have data
    if (data.restaurant) {
      return (
        <div className="rest-page">
          {JSON.stringify(data.restaurant)}
        </div>
      );
    }

    // No Data Returns
    return <div>No Rest Data</div>;
  }

  render() {
    const { restId } = this.props;

    return (
      <Query
        query={RESTAURANT_QUERY}
        variables={{
          id: restId
        }}
      >
        {this.renderRestaurants}
      </Query>
    );
  }
}

export default RestDetails;
