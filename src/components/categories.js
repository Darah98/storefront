import React from 'react';
import { connect } from 'react-redux';
import { changeActiveCategory } from '../store/categories.js';
import {AppBar, Tabs, Tab} from '@material-ui/core';

function Categories(props) {
  return (
        
    <section>
      <AppBar position="static">
        <Tabs>
          {
            props.categories.categories.map((category) => {
              return (
                <Tab label={category.displayName} key={category.name} onClick={() => props.changeActiveCategory(category.name)}>
                  {category.displayName}
                </Tab>
              );
            })
          }
        </Tabs>
      </AppBar>
    </section>
  );
}

const mapStateToProps = (state) => {
  return { categories: state.categories };
};

const mapDispatchToProps = { changeActiveCategory };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);