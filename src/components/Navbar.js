import { AppBar, Toolbar, Typography } from '@material-ui/core';
import React from 'react';

const Navbar = () => {
    return (
        <AppBar>
            <Toolbar>
                <Typography variant='h6' component='h1'>AKHI Dev</Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
