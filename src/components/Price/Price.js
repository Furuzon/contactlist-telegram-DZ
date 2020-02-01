import React from 'react'

export default function Price(props) {
    return (
        <div className="all">
            <div className='price'>
            <p>Везде онлайн</p>
            <div className="list">
                <h1>{props.price}</h1>
                <div>
                    <h5>p</h5>
                    <h5>/месяц</h5>
                </div>
            </div>
            </div>
        </div>
    )
}
