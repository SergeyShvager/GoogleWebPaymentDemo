import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import AddToCartIcon from 'material-ui/svg-icons/action/add-shopping-cart';

const Product = React.createClass({
    propTypes: {
        onBuyClick: React.PropTypes.func.isRequired,
        product: React.PropTypes.object
    },

    render() {
        const { product } = this.props;
        return (
            <GridTile
                key={product.img}
                title={product.title}
                subtitle={<span>by <b>{product.author}</b></span>}
                actionIcon={<IconButton onClick={this.onClick}><AddToCartIcon color="orange" /></IconButton>}
            >
                <img src={`http://www.material-ui.com/${product.img}`} />
            </GridTile>
        );
    }
});

export default Product;
