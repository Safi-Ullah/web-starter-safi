import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import styles from '../../styles';

class RestaurantDetails extends React.Component {

    render() {
        const { classes, restaurant } = this.props;

        return (
            <Grid container alignItems="center" justify="center" className={classes.fullScreen}>
                <Grid item xs={12} md={4}>
                    <Card className={classes.restaurantDetailsCard}>
                        <CardHeader
                            title={restaurant.title}
                            subheader={restaurant.description}
                        />
                        {
                            restaurant.images && restaurant.images.length >= 1
                                ? <CardMedia
                                    className={classes.cardMedia}
                                    image={restaurant.images[0]} />
                                : null
                        }
                        <CardContent>
                            <Typography component="p">
                                { restaurant.address }
                            </Typography>
                            {
                                restaurant.cuisine && <Typography component="p">
                                    Cuisine: { restaurant.cuisine }
                                </Typography>
                            }
                            {
                                restaurant.rating && <Typography component="p">
                                    Rating: {restaurant.rating}
                                </Typography>
                            }
                        </CardContent>
                        <CardActions className={classes.cardActions} disableActionSpacing>
                            {
                                restaurant.url && <Button color='secondary' className={classes.visitBtn} href={restaurant.url}>
                                    Visit
                                </Button>
                            }
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(RestaurantDetails);