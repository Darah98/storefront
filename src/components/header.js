import React from 'react';
import {AppBar, Toolbar} from'@material-ui/core';

function Header() {
  const style={
        
    fontSize: 'xxx-large',
    fontFamily: 'monospace',
    color: 'aliceblue',
        
  };
  return (
    <>
      <AppBar style={style} position="static">
        <Toolbar>
          <h3>Virtual Store</h3>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;