import React, {useEffect, useState} from 'react'
import {BASE_URL} from '../constraints/index.js'
import CakeCard from './CakeCard.js'
import Cart from './Cart.js'

export default function CakeContainer() {

    const [cakes, setCakes] = useState(null)
    const [cartItems, setCartItems] = useState([])

    useEffect(() => {
        fetch(BASE_URL + 'cakes')
            .then(res => res.json())
            .then(json => setCakes(json))
    }, [])

    function populateCakes() {
        return cakes.map(cake => <CakeCard cake={cake} key={cake.id} onAddToCart={onAddToCart}/>)
    }

    const onAddToCart = (cake) => {
        const exist = cartItems.find((x) => x.id === cake.id);
        if (exist) {
            setCartItems(
              cartItems.map((x) =>
                x.id === cake.id ? { ...exist, qty: exist.qty + 1 } : x
              )
            );
          } else {
            setCartItems([...cartItems, { ...cake, qty: 1 }]);
          }
        };

    const onRemove = (cake) => {
        const exist = cartItems.find((x) => x.id === cake.id);
        if (exist.qty === 1) {
            setCartItems(cartItems.filter((x) => x.id !== cake.id));
        } else {
            setCartItems(
                cartItems.map((x) =>
                    x.id === cake.id ? { ...exist, qty: exist.qty - 1 } : x
                )
            );
        }
    }

    return(
        <div className="row">
            <div className="col-2">

                <h2>Cakes</h2>
                <br />
                <div className='cakes'>
                {cakes && populateCakes()}
                </div>
            </div>
            <div className="col-1">
                <Cart cartItems={cartItems} onAddToCart={onAddToCart} onRemove={onRemove}/>
            </div>
        </div>
        
    )

}
