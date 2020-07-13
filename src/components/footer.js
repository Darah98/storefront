import React from 'react';
import {AppBar, Toolbar, Button} from'@material-ui/core';

function Footer() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit">&copy;</Button>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Footer;