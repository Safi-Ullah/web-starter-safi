import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import styles from '../../styles';

class RestaurantListItem extends Component {

    render() {
        const {restaurant, classes} = this.props;

        return (
            <div className={classes.listItemRoot}>
                <Card className={classes.card}>
                    <CardActionArea className={classes.details}
                        onClick={() => this.props.handleRestaurantSelect(restaurant)}>
                        <CardContent className={classes.content}>
                            <Typography component="h5" variant="h5">
                                {restaurant.title}
                            </Typography>
                            <Typography variant="subtitle1">
                                {restaurant.description ? restaurant.description : 'N/A'}
                            </Typography>
                            <Typography component="p" color="textSecondary">
                                {restaurant.address ? restaurant.address : 'N/A'}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardMedia className={classes.cover}
                        src="img"
                        image={restaurant.images ? restaurant.images[0] : null} />
                </Card>
                <div className={classes.leftMargin}>
                    <Typography component="p">
                        { restaurant.open_closed ? `${restaurant.open_closed} . ` : null}
                        { restaurant.distance ? `${parseFloat(restaurant.distance.toFixed(2))} miles away` : null}
                    </Typography>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(RestaurantListItem);