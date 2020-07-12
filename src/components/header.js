import React from 'react';
import {AppBar, Toolbar, Button} from'@material-ui/core';

function Header() {
    return (
        <>
        <AppBar position="static">
            <Toolbar>
                <Button color="inherit">Cart</Button>
            </Toolbar>
        </AppBar>
        </>
    )
}

export default Header;