import React from "react";
import {useState} from "react"
import Cart from "./Cart.js";
import Page from "./Page";

function Home () {
    let carts;
    const papayaPrice = 10, applePrice = 8, bananaPrice = 10

    let cartNumber
    let page
    let papaya, banana, apple
    const [cart, setCart] = useState(false);
    const [item, setItem] = useState(0)
    const [value, setValue] = useState({
            papaya: 0,
            apple: 0,
            banana: 0
        })

    if(value.papaya > 0 && item > 0 && value.papaya < 3){
        papaya = <div>
            <p>Papaya: <i>{value.papaya}</i></p>
            <p>Price: <i>{papayaPrice * value.papaya}$</i></p>
        </div>
    } else {
        papaya = <div>
            <p>Papaya: <i>{value.papaya}</i></p>
            <p>Price: <i>{papayaPrice * value.papaya - (Math.floor(value.papaya / 3)* 5)}$</i></p>
        </div>
    }

    if(value.banana > 0 && item > 0){
        banana = <div>
            <p>Banana: <i>{value.banana}</i></p>
            <p>Price: <i>{bananaPrice * value.banana}$</i></p>
        </div>
    }

    if(value.apple > 0 && item > 0){
        apple = <div>
            <p>Apple: <i>{value.apple}</i></p>
            <p>Price: <i>{applePrice * value.apple}$</i></p>
        </div>
    }

    const closeOpenCart = () => {
        setCart(!cart);
    }

    if(item === 0){
        cartNumber = <p>Go shopping</p>
    } else{
        cartNumber = <p>In cart: {item}</p>
    }

    if (cart){
        carts = <div>
                    <button onClick={closeOpenCart}>X</button>
                    <Cart papaya={papaya} apple={apple} banana={banana}/>
                </div>
    } else{
        carts = <div>
            <button onClick={closeOpenCart}>cart</button>
        </div>
    }

    const handSubmit = (value, fruit) =>{
        setValue((currentValue) => ({
            ...currentValue,
            [fruit]: value
        }))
    }

    const onClick = () => {
        setItem(Number(value.papaya )+ Number(value.banana) + Number(value.apple))
    }


    if(cart === false){
        page = <div>
                {cartNumber}
                <Page onClick={onClick} handSubmit={handSubmit} value={value}/>
               </div>
    }

    return(
        <div>
            {carts}
            {page}
        </div>
    )
}

export default Home;