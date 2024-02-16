import React, { useState } from 'react'

const SortingVisual = () => {

    const getRandomArray = () => {
        const array = [] ;
        for (let i = 0; i < 200; i++) {
            array.push(Math.floor(Math.random() * 100) + 5); 
        }
        return array; 
    } ;

    const [array, setArray] = useState(getRandomArray()) ;

  return (
    <>
        <div className="sorting-visualizer">
            {
                array.map((value , index) => (
                    <div 
                    className="bars" 
                    key={index}
                    style={{height: `${value}px`}}>
                        {value}
                    </div>
                ))
            }
        </div>
    </>
  )
}

export default SortingVisual
