import { alpha, AppBar, Avatar, Badge, InputBase, makeStyles, Toolbar, Typography } from '@material-ui/core';
import { Cancel, Mail, Notifications, Search } from '@mui/icons-material';
import React, { useState } from 'react';

const useStyles = makeStyles((theme) => ({
    logoLg: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block'
        },
    },
    logoSm: {
        display: 'block',
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        },
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    search: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        borderRadius: theme.shape.borderRadius,
        width: '50%',
        margin: theme.spacing(1),
        [theme.breakpoints.down('sm')]: {
            display: (props) => (props.open ? "flex" : 'none'),
            width: '70%'
        },
    },
    searchButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        },

    },
    input: {
        color: 'white',
        marginLeft: theme.spacing(1),
    },
    cancel: {
        [theme.breakpoints.up("sm")]: {
            display: 'none',
        },
    },
    icons: {
        display: (props) => (props.open ? "none" : 'flex'),
        alignItems: 'center',


    },

    badge: {
        marginRight: theme.spacing(2)
    }
}))

const Navbar = () => {

    const [open, setOpen] = useState(false)
    const classes = useStyles({ open });



    return (
        <AppBar>
            <Toolbar className={classes.toolbar}>
                <Typography variant='h6' className={classes.logoLg}>Tech Dev</Typography>
                <Typography variant='h6' className={classes.logoSm}>Tech</Typography>
                <Typography className={classes.search}>
                    <Search />
                    <InputBase placeholder='Search...' className={classes.input} />
                    <Cancel className={classes.cancel} onClick={() => setOpen(false)}></Cancel>
                </Typography>

                <div className={classes.icons}>

                    <Search
                        className={classes.searchButton}
                        onClick={() => setOpen(true)}
                    />

                    <Badge badgeContent={4} color="error" className={classes.badge}>
                        <Mail />
                    </Badge>
                    <Badge badgeContent={4} color="error" className={classes.badge}>
                        <Notifications />
                    </Badge>
                    <Badge badgeContent={5} color="error" className={classes.badge}>
                        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                    </Badge>

                </div>
            </Toolbar>

        </AppBar>
    );
};

export default Navbar;
