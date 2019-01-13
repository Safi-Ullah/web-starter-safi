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
            <Card className={[classes.card, classes.listItemRoot].join(' ')}>
                <CardActionArea className={classes.details}
                    onClick={() => this.props.handleRestaurantSelect(restaurant)}>
                    <CardContent className={classes.content}>
                        <Typography component="h5" variant="h5">
                            {restaurant.title}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            {restaurant.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardMedia className={classes.cover}
                    src="img"
                    image={restaurant.images[0]} />
            </Card>
        );
    }
}

export default withStyles(styles)(RestaurantListItem);