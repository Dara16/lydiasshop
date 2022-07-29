import React from 'react'

export default function Cart({cartItems, onAddToCart, onRemove }) {
    const itemsPrice = cartItems.reduce((a,c) => a + c.qty *c.price,0)
    const taxAmount = itemsPrice * 0.07
    const totalAmount = itemsPrice + taxAmount

  return (
    <aside className="block col-1">
        <h2>Shopping Cart</h2>
        <div>
            {cartItems.length === 0 && <div>Cart is empty</div>}
            {cartItems.map((item) => (
            <div key={item.id} className="row">
                    <div className="col-2">{item.name}</div>
        <div className="col-2">
        <button onClick={() => onRemove(item)} className="remove">
            -
        </button>{' '}
        <button onClick={() => onAddToCart(item)} className="add">
            +
        </button>
        </div>

        <div className="col-2 text-right">
        {item.qty} x ${(item.price/100).toFixed(2)}
        </div>
    </div>
    ))}

    {cartItems.length !== 0 && (
    <>
        <hr></hr>
        <div className="row">
        <div className="col-2">Item(s) Price</div>
        <div className="col-1 text-right">${(itemsPrice/100).toFixed(2)}</div>
        </div>
        <div className="row">
        <div className="col-2">Tax Amount</div>
        <div className="col-1 text-right">${(taxAmount/100).toFixed(2)}</div>
        </div>

        <div className="row">
        <div className="col-2">
            <strong>Total Amount</strong>
        </div>
        <div className="col-1 text-right">
            <strong>${(totalAmount/100).toFixed(2)}</strong>
        </div>
        </div>
        <hr />
        <div className="row">
        <button onClick={() => alert('Checkout Successful!')}>
            Checkout
        </button>
        </div>
    </>
    )}

            
        </div>

</aside>
  )
}