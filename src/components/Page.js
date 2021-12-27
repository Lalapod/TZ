import React from "react";

function Page ({onClick, handSubmit, value}) {
    return(
        <div>
            <div className="list">
                <img src="" alt=""/>
                <p>Papaya</p>
                <p>Price: <i>10$</i></p>
                <input type="number" min="0" value={value.papaya} onChange={e => handSubmit(e.target.value, 'papaya')}></input>
                <button onClick={onClick}>Add to cart</button>
            </div>
            <div>
                <img src="" alt=""/>
                <p>Banana</p>
                <p>Price: <i>10$</i></p>
                <input type="number" min="0" value={value.banana} onChange={e => handSubmit(e.target.value, 'banana')}></input>
                <button onClick={onClick}>Add to cart</button>
            </div>
            <div>
                <img src="" alt=""/>
                <p>Apple</p>
                <p>Price: <i>8$</i></p>
                <input type="number" min="0" value={value.apple} onChange={e => handSubmit(e.target.value, 'apple')}></input>
                <button onClick={onClick}>Add to cart</button>
            </div>
        </div>
    )
}

export default Page