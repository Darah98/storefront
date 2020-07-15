import React from 'react';
import {AppBar, Toolbar, Button} from'@material-ui/core';

function Footer() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit">&copy; 2020 Shalabi & Tommalieh </Button>
          <Button color="inherit">Contact Us: virtualstore@virtue.com   009620794561200</Button>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Footer;