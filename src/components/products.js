import React, { useEffect } from 'react';
import { getProductsData } from '../store/api.js';
import { deleteProduct } from '../store/api.js';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import { AppBar, Toolbar } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { red } from '@material-ui/core/colors';
import { addToCart } from '../store/cart.js';
import { connect } from 'react-redux';
// import Cart from './cart.js';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
    width: 100 + '%',
    marginBottom: '5%',
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
    flexWrap: 'wrap',
  },
  div: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '190px',
    fontSize: 'xx-large',
    marginBottom: '0',
    fontFamily: 'sans-serif',
    color: '#3f51b5',
    backgroundColor: '#00000008',
    textShadow: '1px 1px 4px #595757',
    flexDirection: 'column',
    // height: '190px',
  },
  cart: {
    backgroundColor: '#f7f7f7',
    width: '25%',
    border: '1px 1px 1px 1px solid black',
    borderLeft: '4px solid #3f51b5',
    boxShadow: '1px 0px 10px black',
    zIndex: '-1',
  },
  cartDiv: {
    padding: '18px',
    textAlign: 'center',
    display: 'flex',
    fontSize: '15px',
    justifyContent: 'center',
    color: '#d7d7db',

  },
  cartButton: {
    fontSize: 'x-large',

  },
  section1: {
    width: '90%',
  },
  p: {
    fontSize: 'x-large',
    textAlign: 'center',
    borderBottom: '2px solid #3f51b5',
    borderRight: '2px solid #3f51b5',
    backgroundColor: '#dcdcdce0',
    padding: '15px 0px',
    marginTop: '0',
    marginBottom: '0',
    fontFamily: 'sans-serif',
    color: '#161e49',
    boxShadow: '0px -2px 8px 2px #4f5ca1',
  },
  ph: {
    margin: '0',
  },
}));



function Products(props) {
  // const fetchData = () =>{
  //   props.get();
  // };
  const clickHandler=(product)=>{
    props.addToCart(product);
    if(product.inStock===1){
      props.delete(product);
    }
  };
  
  
  useEffect(()=>{
    props.get();
    // fetchData();
    // console.log(props.api);
    // props.products.results.map((item)=>{
    //   console.log(item);
    //   return item;
    // });
  }, []);

  const classes = useStyles();
  return (
    <>
      {/* <ul>
        {props.products.results.map((product)=>(
          <li key={product._id}>{product.display_name}</li>
        ))}
      </ul> */}
      <section className={classes.section1}>

        <div className={classes.div}>
          <h1 className={classes.ph}>
            {props.categories.activeCategory.toUpperCase()}
          </h1>
          <p className={classes.ph}>{props.categories.categories.map((category)=>{
            return category.name === props.categories.activeCategory ?
              category.description
              : 
              null;
          })
          }</p>
        </div>

        <section className={classes.section}>
          {
            props.products.results.map((product) => (
              product.category === props.categories.activeCategory ?

                <Card key={product._id} className={classes.root}>
                  <CardHeader
                    avatar={
                      <Avatar aria-label="recipe" className={classes.avatar}>
                        {product.category[0].toUpperCase()}
                      </Avatar>
                    }
                    title={product.display_name}
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
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ width: 100 + '%' }}
                    onClick={() => {clickHandler(product);}}
                  >
                                        ADD TO CART
                  </Button>

                </Card>
                :
                null
            ))
          }
        </section>

      </section>
      <aside className={classes.cart}>
        {/* <Cart /> */}
        <AppBar position="static">
          <Toolbar className={classes.cartDiv}>
            <Button className={classes.cartButton} color="inherit">Cart ({props.cart.totalCartItems})</Button>
          </Toolbar>

        </AppBar>
        {
          props.cart.cartItems.map(cartItem => {
            return (
              <p className={classes.p}>
                {cartItem.name}: {cartItem.inCart} pc(s)
              </p>
            );
          })

        }
      </aside>

    </>
  );
}


const mapStateToProps = (state) => {
  return { products: state.products, categories: state.categories, cart: state.cart};
};

const mapDispatchToProps = (dispatch)=>({
  addToCart: (product)=> dispatch(addToCart(product)),
  get: ()=> dispatch(getProductsData()),
  delete: (product)=> dispatch(deleteProduct(product)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Products);