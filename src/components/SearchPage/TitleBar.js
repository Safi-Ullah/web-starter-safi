import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/core/styles';
import styles from '../../styles';

class TitleBar extends React.Component {

    render() {
        const { classes } = this.props;

        return (
            <AppBar position="static">
                <Toolbar>
                    <Typography className={classes.mobileHide} variant="h6" color="inherit" noWrap>
                        Foodsy
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            onKeyDown={this.props.handleRestaurantQueryChange}
                            defaultValue={this.props.searchRestaurantQuery}
                            placeholder="Search food in your area"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                        />
                    </div>
                    <Button color="inherit" onClick={this.props.getCurrentLocation}>Use my location</Button>
                    <div className={classes.grow} />
                    <Button color="inherit" className={classes.mobileHide}>Login</Button>
                    <Button color="inherit" className={classes.mobileHide}>Logout</Button>
                </Toolbar>
            </AppBar>
        );
    }
}

export default withStyles(styles)(TitleBar);