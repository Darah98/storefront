import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';
import { connect } from 'react-redux';


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 450,
        width: 100 + '%',

    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    section: {
        marginTop: '5%',
        display: 'flex',
        justifyContent: 'space-around',
    },
    div: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '10vh',
        fontSize: 'xx-large',
        marginBottom: '0',
        marginTop: '5%',
        fontFamily: 'sans-serif',
        color: '#3f51b5',
        backgroundColor: '#00000008',
        padding: '2% 0px',
        textShadow: '1px 1px 4px #595757',
    }
}));



function Products(props) {
    const classes = useStyles();

    return (
        <>
            <div className={classes.div}>
                <h1>
                    {props.items.activeCategory.toUpperCase()}
                </h1>
            </div>
            <section className={classes.section}>
                {
                    props.items.products.map((product) => (
                        product.category === props.items.activeCategory ?

                            <Card className={classes.root}>
                                <CardHeader
                                    avatar={
                                        <Avatar aria-label="recipe" className={classes.avatar}>
                                            {product.category[0].toUpperCase()}
                                        </Avatar>
                                    }
                                    title={product.name}
                                    subheader={product.category}
                                />
                                <CardMedia
                                    className={classes.media}
                                    image={product.image}
                                    title={product.name}
                                />
                                <CardHeader
                                    title={'Price  ' + product.price + '$'}
                                    subheader={'In Stock  ' + product.inStock + '  Pcs'}
                                />

                            </Card>
                            :
                            null
                    ))
                }
            </section>
        </>
    )
}


const mapStateToProps = (state) => {
    return { items: state.items };
}


export default connect(mapStateToProps)(Products);