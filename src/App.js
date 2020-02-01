import React, {useState} from 'react'
import Result from './components/Result/Result'

function App() {

    const [filter, setFilter] = useState('no-filter');

    const productInfo = [
        { price: 500, limit: 40, minute: 500, sms: 50 },
        { price: 400, limit: 15, minute: 500, sms: 15 },
        { price: 700, limit: 30, minute: 800, sms: 30 },
        { price: 200, limit: 2, minute: 200, sms: 60 },
        { price: 300, limit: 15, minute: 500, sms: 50 },
        { price: 100, limit: 40, minute: 500, sms: 50 },
        { price: 7, limit: 30, minute: 502, sms: 50 }
    ]

    const handleToggleFilterByPrice = () => {
        setFilter(prevState => prevState === 'no-filter' ? 'filter50' : 'no-filter');
    }

    return (
        <div>
            {productInfo
                .filter(o => {
                    if (filter === 'no-filter') {
                        return o;
                    }
                    if (filter === 'filter50') {
                        return o.price > 59;
                    }
                    return o;
                })
                .map((product, index) => {
                    return (
                        <Result
                            key={index}
                            price={product.price}
                            limit={product.limit}
                            minute={product.minute}
                            sms={product.sms} />
                    )
                })}
                <button onClick={handleToggleFilterByPrice}>Toggle By Price</button>
        </div>
    )
}

export default App;