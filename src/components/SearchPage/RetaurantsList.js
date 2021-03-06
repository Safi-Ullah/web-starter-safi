import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import RestaurantListItem from './RestaurantListItem';
import GoogleMap from '../GoogleMapV3';
import styles from '../../styles';

class RestaurantsList extends Component {

    constructor(props) {
        super(props);

        this.renderRestaurant = this.renderRestaurant.bind(this);
    }

    renderRestaurant(restaurant) {
        return <RestaurantListItem restaurant={restaurant} key={restaurant.id}
            handleRestaurantSelect={this.props.handleRestaurantSelect}/>
    }

    render() {
        const {restaurants, classes, selectedRestaurant, userLocation} = this.props;

        return (
            <Grid container alignItems="center">
                <Grid item xs={12} sm={4} className={classes.scrollableList}>
                    { restaurants.map(this.renderRestaurant) }
                </Grid>
                <Grid item xs={false} sm={8}>
                    <GoogleMap selectedRestaurant={selectedRestaurant}
                        userLocation={userLocation}
                        restaurants={restaurants} isMarkerShown={true} />
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(RestaurantsList);