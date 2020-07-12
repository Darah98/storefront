import React from 'react';
import { connect } from 'react-redux';
import { changeActiveCategory } from '../store/items.js';
import {AppBar, Tabs, Tab} from '@material-ui/core';

function Categories(props) {
    return (
        
        <section>
            <AppBar position="static">
                <Tabs  aria-label="simple tabs example">
                {
                    props.items.categories.map((category) => {
                        return (
                            <Tab label={category.displayName} key={category.name} onClick={() => props.changeActiveCategory(category.name)}>
                                {category.displayName}
                            </Tab>
                        )
                    })
                }
                </Tabs>
            </AppBar>
        </section>
    )
}

const mapStateToProps = (state) => {
    return { items: state.items };
}

const mapDispatchToProps = { changeActiveCategory }

export default connect(mapStateToProps, mapDispatchToProps)(Categories);