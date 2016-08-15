import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';

import Product from  './product';

const ProductList = React.createClass({
    propTypes: {},

    render() {
        const styles = {
            root: {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-around'
            },
            gridList: {
                width: 500,

                overflowY: 'auto',
                marginBottom: 24
            }
        };

        const products = this.props.products;

        return (
            <div style={styles.root}>
                <GridList
                    cellHeight={250}
                    padding={8}
                    style={styles.gridList}
                >
                    <Subheader>Funiture</Subheader>
                    {products.map((item, index) => (
                        <Product key={index} product={item} onClick={this.props.onClick} />
                    ))}
                </GridList>
            </div>
        );
    }
});

export default ProductList;
