import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import AddToCartIcon from 'material-ui/svg-icons/action/add-shopping-cart';

const Product = React.createClass({
    propTypes: {
        onClick: React.PropTypes.func.isRequired,
        product: React.PropTypes.object
    },

    onClick(product) {
        const { sku, amount } = product;

        this.props.onClick({
            sku,
            amount
        });
    },

    render() {
        const { product } = this.props;

        return (
            <GridTile
                key={product.img}
                titleBackground="rgba(0, 0, 0, 0.6)"
                title={product.title}
                subtitle={<span>{product.amount.value} <b>{product.amount.currency}</b></span>}
                actionIcon={<IconButton onClick={() => {this.onClick(product)}}><AddToCartIcon color="orange" /><b>Buy</b></IconButton>}
            >
                <img src={`http://www.material-ui.com/${product.img}`} />
            </GridTile>
        );
    }
});

export default Product;
