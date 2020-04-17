import React from 'react'
import { useSelector, useDispatch} from "react-redux"
 import BagLogo from "../../assets/bagshop.svg"
 import './cart-icon.styles.scss'

export default function CartIcon() {
    const hidden = useSelector((state) => state.cart.hidden);
    const dispatch = useDispatch()
    console.log(hidden);
    
    return (
        <div  onClick={() => dispatch({type:"TOOGLE_TO_HIDDEN", payload: hidden })} className="cart-icon">
            <img className= "shopping-icon" src={BagLogo} alt="bagshop logo" />
            <span className="item-count">0</span>
        </div>
    )
}
