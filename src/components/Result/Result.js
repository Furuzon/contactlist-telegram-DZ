import React from 'react'
import Price from '../Price/Price'
import Limit from '../Limit/Limit'
import Minute from '../Minute/Minute'
import Sms from '../Sms/Sms'
import Buy from '../Buy/Buy'

export default function Result(props) {

    return (
        <div className='product'>
            <Price price={props.price}/>
            <Limit limit={props.limit}/>
            <Minute minute={props.minute}/>
            <Sms sms={props.sms}/>
            <Buy/>
        </div>
    )
}
