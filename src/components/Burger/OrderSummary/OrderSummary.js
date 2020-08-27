import React from 'react';

import Auxillary from '../../../hoc/Auxillary';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys( props.ingredients )
        .map(igkey => {
            return (
                <li key={props.igkey}>
                    <span style={{textTransform: 'capitalize'}}>{igkey}</span>: {props.ingredients[igkey]}
                </li>
            )
        })
    return(
        <Auxillary>
            <h3>Your Order</h3>
            <p>Delicious Burger with following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout</p>
            <Button>CANCEL</Button>
            <Button>CONTINUE</Button>
        </Auxillary>
    )
}
    

export default orderSummary;