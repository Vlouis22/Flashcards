import React, { useEffect, useState } from 'react'
import Data from '../data.js'

export const Flashcard = ({index, handlechange, count}) => {

    const [data, setData] = useState();

    useEffect(() => {
        setData(Data);
    }, [])

    const info = () => {
        if (data) {
            if (count == 0) {
                return <img className="card--image" src={data[index].image}></img>
            }
            else {
                return <h2 className='card--name'>{data[index].name}</h2>
            }
        }
    }

    return (
        <div onClick={handlechange} className='flashcard--container'>
            {info()}
        </div>
    )
}
