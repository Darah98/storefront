import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { changeActiveCategory } from '../store/categories.js';
import {getCategories} from '../store/api.js';
import {AppBar, Tabs, Tab} from '@material-ui/core';

function Categories(props) {
  useEffect(()=>{
    props.getCat();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
        
    <section>
      <AppBar position="static">
        <Tabs>
          {
            props.categories.categories.map((category) => {
              return (
                <Tab label={category.display_name} key={category._id} onClick={() => props.change(category.name)}>
                  {category.display_name}
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

const mapDispatchToProps = (dispatch)=> ({
  change: (catName)=> dispatch(changeActiveCategory(catName)),
  getCat: ()=> dispatch(getCategories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);