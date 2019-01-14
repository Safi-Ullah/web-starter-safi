import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import RestaurantListItem from './RestaurantListItem';
import MyMapComponent from '../GoogleMapV3';
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
        const {restaurants, classes, selectedRestaurant} = this.props;

        return (
            <Grid container alignItems="center">
                <Grid item xs={12} sm={4} className={classes.scrollableList}>
                    { restaurants.map(this.renderRestaurant) }
                </Grid>
                <Grid item xs={false} sm={8}>
                    <MyMapComponent selectedRestaurant={selectedRestaurant} isMarkerShown={true} />
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(RestaurantsList);