import React from 'react';
import { ProductDisplayProps } from '../../types';

export const ProductDisplay: React.FC<ProductDisplayProps> = (props) => {
    return (
        <div>
            <p>Product: {props.product.name}</p>
            <p>Description: {props.showDescription}</p>
            <p>InStock: {props.showStockStatus ? 'Yes' : 'No'}</p>
        </div>
    )
}

